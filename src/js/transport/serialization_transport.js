const { NRF_SUCCESS, NRF_ERROR_INTERNAL, sd_rpc_log_severity_t } = require('../sd_rpc_types');
const { emscriptenBindings } = require('../bindings/emscripten');

const serialization_pkt_type_t = Object.freeze({
    SERIALIZATION_COMMAND: 0,
    SERIALIZATION_RESPONSE: 1,
    SERIALIZATION_EVENT: 2,
});

let nextId = 0;

class SerializationTransport {

    constructor(dataLinkLayer, responseTimeout) {
        this.statusCallback = null;
        this.eventCallback = null;
        this.logCallback = null;

        this.rspReceived = false;
        this.responseBuffer = null;
        this.responseLength = null;
        this.runEventThread = false;
        this.didTimeout = false;


        this.nextTransportLayer = dataLinkLayer;
        this.responseTimeout = responseTimeout;
        this.boundEventHandler = this.eventHandler.bind(this);

        addEventListener('eventDataReadyEvent', this.boundEventHandler);

        this.eventQueue = [];
        this.ID = nextId++;

    }
    async open(statusCallback, eventCallback, logCallback) {
        this.statusCallback = statusCallback;
        this.eventCallback = eventCallback;
        this.logCallback = logCallback;

        const errorCode = await this.nextTransportLayer.open(this.statusCallback, this.readHandler.bind(this), this.logCallback);
        if (errorCode !== NRF_SUCCESS) {
            return errorCode;
        }

        // runEventThread

        return NRF_SUCCESS;
    }
    async close() {
        removeEventListener('eventDataReadyEvent', this.boundEventHandler);
        return this.nextTransportLayer.close();
    }

    eventHandler() {
        let eventQueuePtr = 0;
        while (eventQueuePtr < this.eventQueue.length) {
            const eventData = this.eventQueue[eventQueuePtr];
            eventQueuePtr += 1;

            const possibleEventLength = Module._malloc(4);
            Module.setValue(possibleEventLength, 700, 'i32');
            const event = Module._malloc(700);
            const pEventData = Module._malloc(eventData.length);
            Module.writeArrayToMemory(eventData, pEventData);
            const errCode = emscriptenBindings.ble_event_dec(pEventData, eventData.length, event, possibleEventLength);
            Module._free(pEventData);

            if (this.eventCallback !== null && errCode === NRF_SUCCESS) {
                const eventLength = Module.getValue(possibleEventLength, 'i32');
                this.eventCallback(event, eventLength);
            }

            if (errCode !== NRF_SUCCESS) {
                this.logCallback(sd_rpc_log_severity_t.SD_RPC_LOG_DEBUG, 'Could not decode event');
            }
            Module._free(possibleEventLength);
            Module._free(event);
        }
        this.eventQueue.length = 0;
    }

    async send(cmdBuffer, cmdLength, rspBuffer, rspLength) {
        this.rspReceived = false;
        this.responseBuffer = rspBuffer;
        this.responseLength = rspLength;

        let commandBuffer = [serialization_pkt_type_t.SERIALIZATION_COMMAND];
        const commandLength = Module.getValue(cmdLength, 'i32')
        const arr = new Uint8Array(Module.HEAPU8.buffer.slice(cmdBuffer, cmdBuffer + commandLength));

        Module._free(cmdBuffer);

        commandBuffer.push(...arr);
        commandBuffer = new Uint8Array(commandBuffer);

        this.didTimeout = false;
        const sendTimeoutFunc = () => {
            this.didTimeout = true;
            if (!this.rspReceived) {
                const dataReadyEvent = new CustomEvent('dataReadyEvent', { detail: { status: NRF_ERROR_INTERNAL } });
                dispatchEvent(dataReadyEvent);
            }
        };
        const rspPromise = new Promise(resolve => {
            const dataRcvdResolve = evt => {
                removeEventListener('dataReadyEvent', dataRcvdResolve);
                resolve(evt.detail.status);
            };
            addEventListener('dataReadyEvent', dataRcvdResolve);
        });

        this.timeoutEvent = setTimeout(sendTimeoutFunc, this.responseTimeout);
        const errCode = await this.nextTransportLayer.send(commandBuffer);
        if (errCode !== NRF_SUCCESS) {
            const dataReadyEvent = new CustomEvent('dataReadyEvent', { detail: { status: errCode } });
            dispatchEvent(dataReadyEvent);
        }

        return rspPromise;
    }

    readHandler(data, length) {
        if (this.didTimeout) {
            return;
        }
        const eventType = data[0];

        if (eventType === serialization_pkt_type_t.SERIALIZATION_RESPONSE) {
            Module.writeArrayToMemory(data.slice(1), this.responseBuffer);
            Module.setValue(this.responseLength, length - 1, 'i32');
            this.rspReceived = true;
            clearTimeout(this.timeoutEvent);

            const dataReadyEvent = new CustomEvent('dataReadyEvent', { detail: { status:NRF_SUCCESS } });
            dispatchEvent(dataReadyEvent);
        } else if (eventType === serialization_pkt_type_t.SERIALIZATION_EVENT) {
            const eventData = new Uint8Array(data.slice(1));
            this.eventQueue.push(eventData);
            clearTimeout(this.timeoutEvent);

            const dataReadyEvent = new CustomEvent('eventDataReadyEvent', { detail: { status:NRF_SUCCESS } });
            dispatchEvent(dataReadyEvent);
        } else {
            this.logCallback(sd_rpc_log_severity_t.SD_RPC_LOG_WARNING, 'Unknown Nordic Semiconductor vendor specific packet received');
        }
    }
}

module.exports = {
    SerializationTransport,
};
