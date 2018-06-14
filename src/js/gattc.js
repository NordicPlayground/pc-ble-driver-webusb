let servicesForConnection = {};
let characteristicHandleToService = {};
let descriptorHandleToCharacteristic = {};
let uuidToCharacteristic = {}

class GattcService {
    constructor(uuidValue, serviceStartHandle, serviceEndHandle) {
        this.uuidValue = uuidValue;
        this.serviceStartHandle = serviceStartHandle;
        this.serviceEndHandle = serviceEndHandle;
        this.characteristics = {};
        for (let i = 0; i <= serviceEndHandle - serviceStartHandle; i += 1) {
            characteristicHandleToService[serviceStartHandle + i] = this;
        }
    }

    incrementStartHandle(count) {
        this.serviceStartHandle += count;
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
        this.endHandleRange = endHandleRange;

        for (let i = 0; i <= endHandleRange - startHandleRange; i += 1) {
            descriptorHandleToCharacteristic[startHandleRange + i] = this;
        }
    }

    async write(data) {
        if (this.charHandle === null || this.adapter === null) {
            return;
        }

        let dataPtr = Module._malloc(data.length);
        Module.HEAPU8.set(data, dataPtr);
        let write_params = Module.ccall('createGattcWriteParams', 'number', ['number', 'number', 'number', 'number', 'number'], [this.charHandle, data.length, dataPtr, 1, 0]);
        let apiRes = await sd_ble_gattc_write(this.adapter, this.connection, write_params);
        Module._free(write_params);
        Module._free(dataPtr);
        return apiRes;
    }

    incrementStartHandle(count) {
        this.startHandleRange += count;
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
