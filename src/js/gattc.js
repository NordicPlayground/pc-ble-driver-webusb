const { ble_gattc_write_params_t } = require('./bindings/bleSDAttributeStructs');
const { sd_ble_gattc_write, sd_ble_gattc_read } = require('./ble_impl/ble_gattc_impl');

const { NRF_SUCCESS } = require('./sd_rpc_types');

const servicesForConnection = {};
const characteristicHandleToService = {};
const descriptorHandleToCharacteristic = {};
const uuidToCharacteristic = {};

class GattcService {
    constructor(uuidValue, serviceStartHandle, serviceEndHandle) {
        this.uuidValue = (uuidValue>>>0)&0xFFFF;
        this.serviceStartHandle = serviceStartHandle;
        this.serviceCurrentHandle = serviceStartHandle;
        this.serviceEndHandle = serviceEndHandle;
        this.characteristics = {};
        for (let i = 0; i <= serviceEndHandle - serviceStartHandle; i += 1) {
            characteristicHandleToService[serviceStartHandle + i] = this;
        }
    }

    incrementCurrentHandle(count) {
        this.serviceCurrentHandle += count;
    }

    addCharacteristic(uuid, char) {
        this.characteristics[uuid] = char;
    }
}
class GattcCharacteristic {
    constructor(uuid, charHandle, adapter, connection, startHandleRange, endHandleRange) {
        this.descriptors = {};
        uuidToCharacteristic[uuid] = this;
        this.charHandle = charHandle
        this.adapter = adapter;
        this.connection = connection;
        this.startHandleRange = startHandleRange;
        this.currentHandleRange = startHandleRange;
        this.endHandleRange = endHandleRange;
        this.shortUuid = uuid;
        this.descHandle = charHandle + 1;

        for (let i = 0; i <= endHandleRange - startHandleRange; i += 1) {
            descriptorHandleToCharacteristic[startHandleRange + i] = this;
        }
    }

    async write(data, ack) {
        if (this.charHandle === null || this.adapter === null) {
            return;
        }
        //console.log(data);
        let dataPtr = Module._malloc(data.length);
        Module.HEAPU8.set(data, dataPtr);
        const writeParams = new ble_gattc_write_params_t();
        writeParams.handle.SET(this.charHandle);
        writeParams.len.SET(data.length);
        writeParams.p_value.SET(dataPtr);
        writeParams.write_op.SET(ack ? 1 : 2);
        writeParams.offset.SET(0);
        writeParams.flags.SET(0);
        //console.log(`Writing to characteristic with uuid: ${this.shortUuid}`);
        let apiRes = await sd_ble_gattc_write(this.adapter, this.connection, writeParams);
        writeParams.delete();
        Module._free(dataPtr);
        return apiRes;
    }

    async writeDescriptor(data, ack) {
        const dataPtr = Module._malloc(data.length);
        Module.HEAPU8.set(data, dataPtr);

        const writeParams = new ble_gattc_write_params_t();
        writeParams.handle.SET(this.descHandle);
        writeParams.len.SET(data.length);
        writeParams.p_value.SET(dataPtr);
        writeParams.write_op.SET(ack ? 1 : 2);
        writeParams.offset.SET(0);
        writeParams.flags.SET(0);

        if (ack) {
            return new Promise((resolve, reject) => {
                const gotRspCb = evt => {
                    if (evt.detail.handle === this.descHandle) {
                        resolve();
                    }
                };
                addEventListener('gattcWriteResponse', gotRspCb);
                sd_ble_gattc_write(this.adapter, this.connection, writeParams)
                .then(res => {
                    writeParams.delete();
                    Module._free(dataPtr);
                    if (res !== NRF_SUCCESS){
                        reject('Could not send data');
                    }
                });
            });
        } else {
            let timeoutId;
            return Promise.race([
                new Promise((resolve, reject) => {
                    const txCompleteHandler = txCompleteDevice => {
                        if (device.connectionHandle === txCompleteDevice.connectionHandle) {
                            removeEventListener('txComplete', txCompleteHandler);
                            clearTimeout(timeoutId);
                            resolve();
                        }
                    };
                    addEventListener('txComplete', txCompleteHandler);
                    sd_ble_gattc_write(this.adapter, this.connection, writeParams)
                    .then(res => {
                        writeParams.delete();
                        Module._free(dataPtr);
                        if (res !== NRF_SUCCESS){
                            reject('Could not send data');
                        }
                    });
                }),
                new Promise((resolve, reject) => {
                    timeoutId = setTimeout(() => {
                        reject('Timed out while waiting for BLE_EVT_TX_COMPLETE');
                    }, 2000);
                }),
            ]);
        }
    }

    async read() {
        console.log("GATTC read")
        return sd_ble_gattc_read(this.adapter, this.connection, this.charHandle, 0);
    }

    incrementCurrentHandle(count) {
        this.currentHandleRange += count;
    }

    addDescriptor(uuid, desc) {
        this.descriptors[uuid] = desc;
    }
}

class GattcDescriptor {
    constructor(uuid, handle) {
        this.handle = handle;
    }
}

module.exports = {
    GattcService,
    GattcCharacteristic,
    GattcDescriptor,

    servicesForConnection,
    characteristicHandleToService,
    descriptorHandleToCharacteristic,
    uuidToCharacteristic,
};
