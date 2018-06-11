let currentAdapter = null;

function statusCallback(adapter, code, message) {
    console.log(code, message);
}
function logCallback(adapter, severity, message) {
    console.log(message);
}

function advReportParse(type, advdata, typedata) {
    let index = 0;

    const data = new DataView(Module.HEAPU8.buffer, advdata.p_data, advdata.data_len);
    while (index < advdata.data_len) {
        const fieldLength = data.getUint8(index);
        const fieldType = data.getUint8(index + 1);

        if (fieldType === type) {
            typedata.p_data = advdata.p_data + index + 2;
            typedata.data_length = fieldLength - 1;
            return 0;
        }
        index += fieldLength + 1;
    }
    return -1;
}

function getAdvName(data) {
    const advdata = {};
    const typedata = {};
    advdata.p_data = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.data'](data);
    advdata.data_len = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.dlen'](data);

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

async function onAdvReport(data) {
    const advName = getAdvName(data);
    if (advName === 0){
      return;
    }
    //Galaxy S8
    if(advName == "Galaxy S8"){
      console.log("Connecting to "+advName);
      const scanParam = Module.ccall('createScanParam', 'number', [], []);
      const connParam = Module.ccall('createConnectionParams', 'number', [], []);
      //console.log(connParam)
      let peerAddr = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.peer_addr'](data);
      console.log(peerAddr)
      const apiRes = await sd_ble_gap_connect(currentAdapter, peerAddr, scanParam, connParam);
      Module._free(scanParam);
      Module._free(connParam);
      if (apiRes === 0) {
          console.log("Connected to "+advName);
      } else {
        console.log("Connection failed..")
        console.log(apiRes);
      }

    }
    else {
      console.log("Did not connect to "+advName);
    }
}

function dataCallback(adapter, data, length) {
    //const arr = new Uint8Array(Module.HEAPU8.buffer.slice(data, data + length));

    let ble_evt_id = ble_event_struct['ble_evt_t.header.evt_id'](data);
    let ble_evt_len = ble_event_struct['ble_evt_t.header.evt_len'](data);

    switch(ble_evt_id) {
        case 29: // BLE_GAP_EVT_ADV_REPORT
            onAdvReport(data);
    }

    let advnam = getAdvName(data);
    if(advnam !== 0) {
      //console.log(advnam);
    }
}

async function advertisementDataSet(adapter) {
    let p_index = Module._malloc(1);
    Module.setValue(p_index, 0, 'i8');
    let dataBuffer = Module.ccall('createAdvData', 'number', ['number'], [p_index]);
    let index = Module.getValue(p_index, 'i8');
    Module._free(p_index);
    console.log(`INDEX LENGTH ${index}`);

    let apiRes = await sd_ble_gap_adv_data_set(adapter, dataBuffer, index, 0, 0);
    Module._free(dataBuffer);
    if (apiRes === NRF_SUCCESS) {
        console.log('Successfully enabled adv!');
    } else {
        console.log('Could not enable adv.');
    }
    return apiRes;
}

async function scanStart(adapter) {
    const scanParam = Module.ccall('createScanParam', 'number', [], []);
    const apiRes = await sd_ble_gap_scan_start(adapter, scanParam);
    Module._free(scanParam);

    if (apiRes === NRF_SUCCESS) {
        console.log('Scanning!');
    } else {
        console.log('Could not scan.');
    }
}

async function bleStackInit(adapter) {
    const p_params = Module.ccall('createBleParams', 'number', [], []);
    const apiRes = await sd_ble_enable(adapter, p_params, null);
    Module._free(p_params);

    if (apiRes === NRF_SUCCESS) {
        console.log('Successfully enabled BLE!');
    } else {
        console.log('Could not enable BLE.');
    }
    return apiRes;
}

async function openAdapter() {
    const webusb = new WebusbInterface(null);
    const h5 = new H5Transport(webusb, 5000);
    const serialization = new SerializationTransport(h5, 5000);
    const adapter = new AdapterInternal(serialization);
    adapter.logSeverityFilterSet(sd_rpc_log_severity_t.SD_RPC_LOG_INFO)
    await adapter.open(statusCallback, dataCallback, logCallback);

    console.log('Opened');
    return adapter;
}

async function exampleProgram() {

    const adapter = await openAdapter();
    currentAdapter = adapter;
    await bleStackInit(adapter);
    await scanStart(adapter);
}

window.onload = function(){
    document.querySelector("#exampleProgram").onclick = exampleProgram
}
