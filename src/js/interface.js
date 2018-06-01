//const WebusbInterface = require('./transport/webusb_interface');
//const H5Transport = require('./transport/h5_transport');

function statusCallback(adapter, code, message){
    console.log(code,message);
}
function logCallback(adapter, severity, message){
    console.log(message);
}
function dataCallback(adapter, data, length){
    let arr = new Uint8Array(Module.HEAPU8.buffer.slice(data, data+length));

    //let advrep = new ble_evt_t(arr).gap_evt().adv_report();

    //console.log(somedata)
    let evt_id_data = new Uint16Array(arr.slice(0,2));
    let evt_len_data = new Uint16Array(arr.slice(2,4));
    //console.log("event id "+evt_id_data[0])
    //console.log("event len "+evt_len_data[0])
    //console.log(data)
    let advPtr = Module.ccall('getAdvName', 'number', ['number'], [data]);
    //console.log("ADVPTR IS: "+ advPtr)
    if(advPtr == 0){
        //console.log("Error decoding adv name");
    }
    else {
        let streng = Module.Pointer_stringify(advPtr);
        console.log(streng)
    }

}

async function advertisementDataSet(adapter){

    let p_index = Module._malloc(1);
    Module.setValue(p_index, 0, "i8");
    let dataBuffer = Module.ccall('createAdvData', 'number', ['number'], [p_index]);
    let index = Module.getValue(p_index, "i8");
    Module._free(p_index);
    console.log("INDEX LENGTH "+index)

    let apiRes = await sd_ble_gap_adv_data_set(adapter, dataBuffer, index, 0, 0);
    Module._free(dataBuffer);
    if(apiRes === NRF_SUCCESS){
        console.log("Successfully enabled adv!");
        console.log(NOTEXIST);
    }
    else{
        console.log("Could not enable adv.");
        console.log(NOTEXIST);
    }
    return apiRes;

}

async function scanStart(adapter){
    let scanParam = Module.ccall('createScanParam', 'number', [], []);
    let apiRes = await sd_ble_gap_scan_start(adapter, scanParam);
    Module._free(scanParam);
    if(apiRes === NRF_SUCCESS){
        console.log("Scanning!");
    }
    else{
        console.log("Could not scan.");
        console.log(NOTEXIST);
    }
}

async function bleStackInit(adapter){
    let p_params = Module.ccall('createBleParams', 'number', [], []);
    let apiRes = await sd_ble_enable(adapter, p_params, null);
    Module._free(p_params);
    if(apiRes === NRF_SUCCESS){
        console.log("Successfully enabled BLE!");
    }
    else{
        console.log("Could not enable BLE.");
    }
    return apiRes;
}

async function openAdapter(){
    const webusb = new WebusbInterface(null);
    const h5 = new H5Transport(null, webusb, 5000);
    const serialization = new SerializationTransport(null, h5, 5000);
    const adapter = new AdapterInternal(null, serialization);
    adapter.logSeverityFilterSet(sd_rpc_log_severity_t.SD_RPC_LOG_INFO)
    await adapter.open(statusCallback, dataCallback, logCallback);
    console.log("Opened");
    return adapter;

}

async function exampleProgram(){
    let adapter = await openAdapter();
    await bleStackInit(adapter);
    await scanStart(adapter);

    //await adapter.close();
}

window.onload = function(){
    document.querySelector("#exampleProgram").onclick = exampleProgram
}
