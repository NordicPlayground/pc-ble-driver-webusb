const { ble_event_struct } = require('../../../src/js/bindings/bleEvtStruct');

function getAdvName(data, len) {
    const advdata = {};
    const typedata = {};
    advdata.p_data = data;
    advdata.data_len = len;

    let errorCode = advReportParse(0x09, advdata, typedata);
    if (errorCode === 0) {
        const nameData = new Uint8Array(Module.HEAPU8.buffer.slice(typedata.p_data, typedata.p_data + typedata.data_length));
        return String.fromCharCode.apply(null, nameData);
    } else {
        errorCode = advReportParse(0x08, advdata, typedata);
        if (errorCode !== 0) {
            return 0;
        }
        const nameData = new Uint8Array(Module.HEAPU8.buffer.slice(typedata.p_data, typedata.p_data + typedata.data_length));
        return String.fromCharCode.apply(null, nameData);
    }
}

class DeviceScanner {
    constructor() {
        this.devices = new Map();
    }
    parseResponse(resp) {


        const peer_addr_id_peer  = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.peer_addr.addr_id_peer'](resp);
        const peer_addr_type = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.peer_addr.addr_type'](resp);
        const peer_addr_ptr = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.peer_addr.addr'](resp, 0);

        const peer_addr_data = new Uint8Array(Module.HEAPU8.buffer.slice(peer_addr_ptr, peer_addr_ptr + 6));
        const peer_addr_data_str = Buffer.from(peer_addr_data).toString('hex');

        let device;
        if (peer_addr_data_str in this.devices) {
            device = this.devices.get(peer_addr_data_str);
        } else {
            const p_data = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.data'](resp);
            const data_len = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.dlen'](resp);
            const advName = getAdvName(p_data, data_len);
            device = new BleDevice(advName, peer_addr_data, peer_addr_data_str);
            this.devices.set(peer_addr_data_str, device);
        }

        const rssi = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.rssi'](resp);
        device.rssi = rssi;
        device.ticksSinceAdv = 0;
    }
    getList() {

    }

    sweep() {
        this.devices.forEach(v => v.tick());
    }
}

class BleDevice {
    constructor(name, address, addrString) {
        this.name = name;
        this.address = address;
        this.addrString = addrString;
        this.ticksSinceAdv = 0;
        this.rssi = 0;
    }
    tick() {
        this.secondsSinceAdv += 1;
    }

}

module.exports = {
    DeviceScanner,
};
