class Characteristic {
    constructor() {
        this.maxDatalen = 32;
        let initData = new Uint8Array(this.maxDatalen);
        initData[0]=1;
        initData[1]=2;
        this.initDataPtr = Module._malloc(this.maxDatalen);
        Module.HEAPU8.set(initData, this.initDataPtr);


        this.charHandle = new ble_gatts_char_handles_t();
        this.cccd_md = new ble_gatts_attr_md_t();
        let rdperm = new ble_gap_conn_sec_mode_t(this.cccd_md.read_perm.GETADDR());
        let wrperm = new ble_gap_conn_sec_mode_t(this.cccd_md.write_perm.GETADDR());
        rdperm.lv.SET(1);
        rdperm.sm.SET(1);
        wrperm.lv.SET(1);
        wrperm.sm.SET(1);

        this.cccd_md.vlen.SET(0);
        this.cccd_md.vloc.SET(1);
        this.cccd_md.rd_auth.SET(0);
        this.cccd_md.wr_auth.SET(0);

        this.attr_md = new ble_gatts_attr_md_t();
        rdperm = new ble_gap_conn_sec_mode_t(this.attr_md.read_perm.GETADDR());
        wrperm = new ble_gap_conn_sec_mode_t(this.attr_md.write_perm.GETADDR());
        rdperm.lv.SET(1);
        rdperm.sm.SET(1);
        wrperm.lv.SET(1);
        wrperm.sm.SET(1);

        this.attr_md.vlen.SET(1);
        this.attr_md.vloc.SET(1);
        this.attr_md.rd_auth.SET(0);
        this.attr_md.wr_auth.SET(0);

        this.char_md = new ble_gatts_char_md_t();
        new ble_gatt_char_props_t(this.char_md.char_props.GETADDR()).notify.SET(1);
        this.char_md.p_cccd_md.SET(this.cccd_md._getInternal());

        this.uuid = new ble_uuid_t();
        this.uuid.uuid.SET(0x372A);
        this.uuid.type.SET(1);

        this.attr_char_value = new ble_gatts_attr_t();
        this.attr_char_value.p_uuid.SET(this.uuid._getInternal());
        this.attr_char_value.p_attr_md.SET(this.attr_md._getInternal());
        this.attr_char_value.init_len.SET(2);
        this.attr_char_value.init_offs.SET(0);
        this.attr_char_value.max_len.SET(this.maxDatalen);
        this.attr_char_value.p_value.SET(this.initDataPtr);
    }
    clean () {
        Module._free(this.initDataPtr);
        this.cccd_md.delete();
        this.attr_md.delete();
        this.char_md.delete();
        this.attr_char_value.delete();
        this.uuid.delete();
    }
}

class bleUUID128t {
    constructor(bytes) {
        let bytesLE = new Uint8Array(bytes).reverse();
        this.uuid128 = new ble_uuid128_t();
        if (bytesLE.length <= this.uuid128.uuid128.LENGTH()) {
            Module.HEAPU8.set(bytesLE, this.uuid128.uuid128.GETADDR());
        }

        this.uuid = new ble_uuid_t();
        this.uuid.uuid.SET(new DataView(bytesLE.buffer, 12, 2).getUint16(0, true));
    }
    async register() {

        let errorCode = await sd_ble_uuid_vs_add(currentAdapter, this.uuid128, this.uuid.type.GETADDR());
        if (errorCode !== NRF_SUCCESS) {
            console.log("Could not add 128 bit characteristic")
        } else {
            console.log("UUID register successful!")
        }
    }
    clean() {
        this.uuid128.delete();
        this.uuid.delete();
    }
}
