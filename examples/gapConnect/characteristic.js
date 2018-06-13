class bleGattsCharHandles {
    constructor () {
      this.data = Module._malloc(2*4);
      this.dw = new DataView(Module.HEAPU8.buffer, this.data, this.data + 8);
    }

    getValueHandle() {
        return this.dw.getUint16(0);
    }
    userDescHandle() {
        return this.dw.getUint16(1);
    }
    cccdHandle() {
        return this.dw.getUint16(2);
    }
    sccdHandle() {
        return this.dw.getUint16(3);
    }
    clean () {
        Module._free(this.data);
    }
}


class Characteristic {
    constructor() {
        this.maxDatalen = 32;
        let initData = new Uint8Array(this.maxDatalen);
        initData[0]=1;
        initData[1]=2;
        this.initDataPtr = Module._malloc(this.maxDatalen);
        Module.HEAPU8.set(initData, this.initDataPtr);

        this.charHandle = new bleGattsCharHandles();
        this.cccd_md = Module.ccall('createGattsAttrMd', 'number', ['number', 'number', 'number', 'number'], [0,1,0,0]);
        this.attr_md = Module.ccall('createGattsAttrMd', 'number', ['number', 'number', 'number', 'number'], [1,1,0,0]);

        this.char_md = Module.ccall('createCharMd', 'number', ['number'], [this.cccd_md]);
        this.uuid = new bleUUIDt();

        this.uuid.setUUID(0x372A);
        this.uuid.setType(1);
        this.attr_char_value = Module.ccall('createAttCharValue', 'number', ['number', 'number', 'number', 'number', 'number', 'number'], [this.uuid.data, this.attr_md, 2/*initData.length*/, 0, this.maxDatalen, this.initDataPtr]);

    }
    clean () {
        Module._free(this.initDataPtr);
        Module._free(this.cccd_md);
        Module._free(this.attr_md);
        Module._free(this.char_md);
        Module._free(this.attr_char_value);
        this.charHandle.clean();
        this.uuid.clean();
    }
}

class bleUUIDt {
    constructor() {
        this.data = Module._malloc(4);
        this.dw = new DataView(Module.HEAPU8.buffer, this.data, this.data + 4);
    }

    getUUID() {
        return this.dw.getUint16(0);
    }
    setUUID(value) {
        this.dw.setUint16(0, value);
    }
    getType() {
        return this.dw.getUint8(2); // third byte
    }
    setType(value) {
        this.dw.setUint8(2, value)
    }
    clean () {
        Module._free(this.data);
    }
}

class bleUUID128t {
    constructor(bytes) {
        let bytesLE = new Uint8Array(bytes).reverse();
        this.buffer = Module._malloc(16);
        Module.HEAPU8.set(bytesLE, this.buffer);
        this.uuid = new bleUUIDt();
        this.uuid.setUUID(new DataView(bytesLE.buffer, 12, 2).getUint16(0))

    }
    async register() {

        let errorCode = await sd_ble_uuid_vs_add(currentAdapter, this.buffer, this.uuid.data + 2);
        if (errorCode !== NRF_SUCCESS) {
            console.log("Could not add 128 bit characteristic")
        } else {
            console.log("UUID register successful!")
            console.log(this.uuid.getUUID());
            console.log(this.uuid.getType());
        }
    }
    clean() {
        Module._free(this.buffer);
    }
}
