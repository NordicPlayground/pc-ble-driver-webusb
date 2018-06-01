const serialization_pkt_type_t = Object.freeze({
    SERIALIZATION_COMMAND:0,
    SERIALIZATION_RESPONSE:1,
    SERIALIZATION_EVENT:2
});


class SerializationTransport {

    constructor(self, dataLinkLayer, response_timeout){
        this.self = self;
        this.statusCallback = null;
        this.eventCallback = null;
        this.logCallback = null;

        this.rspReceived = false;
        this.responseBuffer = null;
        this.responseLength = null;
        this.runEventThread = false;
        this.didTimeout = false;


        this.nextTransportLayer = dataLinkLayer;
        this.responseTimeout = response_timeout;
        this.boundEventHandler = this.eventHandler.bind(this);

        addEventListener('eventDataReadyEvent', this.boundEventHandler);

        this.eventQueue = [];

    }
    async open(status_callback, event_callback, log_callback){
        this.statusCallback = status_callback;
        this.eventCallback = event_callback;
        this.logCallback = log_callback;

        let errorCode = await this.nextTransportLayer.open(this.statusCallback, this.readHandler.bind(this), this.logCallback);
        if(errorCode !== NRF_SUCCESS){
            return errorCode;
        }

        // runEventThread

        return NRF_SUCCESS;

    }
    async close() {
        removeEventListener('eventDataReadyEvent', this.boundEventHandler);
        return await this.nextTransportLayer.close();
    }

    eventHandler(){

        let eventQueuePtr = 0;
        while(eventQueuePtr < this.eventQueue.length)
        {
            const eventData = this.eventQueue[eventQueuePtr++];
            let possibleEventLength = Module._malloc(4);
            Module.setValue(possibleEventLength, 700, "i32");
            let event = Module._malloc(700);
            let pEventData = Module._malloc(eventData.length);
            Module.writeArrayToMemory(eventData, pEventData);
            let errCode = emscriptenBindings.ble_event_dec(pEventData, eventData.length, event, possibleEventLength);
            Module._free(pEventData);

            if(this.eventCallback !== null  && errCode === NRF_SUCCESS){

                let eventLength = Module.getValue(possibleEventLength, "i32");
                this.eventCallback(event, eventLength);
            }
            if(errCode !== NRF_SUCCESS){
                //log logCallback

                console.log("Could not decode event")
            }


            Module._free(event);
        }
        this.eventQueue.length = 0;


    }
    async send(cmdBuffer, cmdLength, rspBuffer, rspLength){
        this.rspReceived = false;
        this.responseBuffer = rspBuffer;
        this.responseLength = rspLength;

        let commandBuffer = [serialization_pkt_type_t.SERIALIZATION_COMMAND];
        let commandLength = Module.getValue(cmdLength, "i32")
        //console.log("Command length "+commandLength)
        let arr = new Uint8Array(Module.HEAPU8.buffer.slice(cmdBuffer, cmdBuffer+commandLength));

        //console.log(arr);
        Module._free(cmdBuffer);

        commandBuffer.push.apply(commandBuffer, arr);
        commandBuffer = new Uint8Array(commandBuffer);

        this.didTimeout = false;
        let sendTimeoutFunc = function(){
            this.didTimeout = true;
            let dataReadyEvent = new CustomEvent('dataReadyEvent', {"detail": {"status":NRF_ERROR_INTERNAL}});
            dispatchEvent(dataReadyEvent);
        };

        let errCode = await this.nextTransportLayer.send(commandBuffer);
        this.timeoutEvent = setTimeout(sendTimeoutFunc.bind(this),3000);

        return new Promise( resolve =>{
            function dataRcvdResolve(evt){
                //console.log(evt.detail)
                removeEventListener('dataReadyEvent', boundDataRcvdResolve);
                resolve(evt.detail.status);
            };
            let boundDataRcvdResolve = dataRcvdResolve.bind(this);
            addEventListener('dataReadyEvent', boundDataRcvdResolve);
        });
    }

    readHandler(data, length){
        if(this.didTimeout){
            return;
        }
        let eventType = data[0];

        if(eventType === serialization_pkt_type_t.SERIALIZATION_RESPONSE){
            Module.writeArrayToMemory(data.slice(1), this.responseBuffer);
            Module.setValue(this.responseLength, length-1, "i32");
            this.rspReceived = true;
            clearTimeout(this.timeoutEvent);

            let dataReadyEvent = new CustomEvent('dataReadyEvent', {"detail": {"status":NRF_SUCCESS}});
            dispatchEvent(dataReadyEvent);

        }
        else if(eventType === serialization_pkt_type_t.SERIALIZATION_EVENT){
            let eventData = new Uint8Array(data.slice(1));
            this.eventQueue.push(eventData);
            clearTimeout(this.timeoutEvent);

            let dataReadyEvent = new CustomEvent('eventDataReadyEvent', {"detail": {"status":NRF_SUCCESS}});
            dispatchEvent(dataReadyEvent);
        }
        else {
            this.logCallback(SD_RPC_LOG_WARNING, "Unknown Nordic Semiconductor vendor specific packet received");
        }


    }

}
