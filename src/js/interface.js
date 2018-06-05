function statusCallback(adapter, code, message) {
    console.log(code, message);
}
function logCallback(adapter, severity, message) {
    console.log(message);
}
function dataCallback(adapter, data, length) {
    const arr = new Uint8Array(Module.HEAPU8.buffer.slice(data, data + length));

    let evt_id_data = new Uint16Array(arr.slice(0, 2));
    let evt_len_data = new Uint16Array(arr.slice(2, 4));
    let advPtr = Module.ccall('getAdvName', 'number', ['number'], [data]);
    if (advPtr === 0) {
        // console.log('Error decoding adv name');
    } else {
        const retstr = Module.Pointer_stringify(advPtr);
        console.log(retstr);
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
    await bleStackInit(adapter);
    await scanStart(adapter);
}

window.onload = function(){
    document.querySelector("#exampleProgram").onclick = exampleProgram
}
