let currentAdapter = null;
let serviceHandle = null;

let connectionHandle = 0;

function preSetup() {
    serviceHandle = Module._malloc(2); // uint16 handle to services
}
function statusCallback(adapter, code, message) {
    console.log(code, message);
}
function logCallback(adapter, severity, message) {
    console.log(message);
}

function advReportParse(type, advdata, typedata) {
    let index = 0;

    const data = new DataView(Module.HEAPU8.buffer, advdata.p_data, advdata.data_len);
    while (index + 1  < advdata.data_len) {
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

async function serviceDiscoveryStart() {

    let startHandle = 0x01;
    let uuid128 = new bleUUID128t(new Uint8Array([0xef, 0x68, 0x03, 0x00,   0x9b, 0x35,  0x49, 0x33,   0x9b, 0x10,   0x52, 0xff, 0xa9, 0x74, 0x00, 0x42]));
    await uuid128.register();
    console.log("Discovering services..")
    let errorCode = await sd_ble_gattc_primary_services_discover(currentAdapter, connectionHandle, startHandle, uuid128.uuid);

    if (errorCode !== NRF_SUCCESS) {
        const errorMessage = `Could discover services. Code #${errorCode}`;
        currentAdapter.statusHandler(sd_rpc_app_status_t.PKT_UNEXPECTED, errorMessage);
    }
    return errorCode;
}

async function descrDiscoveryStart(characteristic) {
    if (characteristic.startHandleRange >= characteristic.endHandleRange) {
        return 0;
    }
    console.log("Discovering descriptors");
    const handleRange = new ble_gattc_handle_range_t();
    handleRange.start_handle.SET(characteristic.startHandleRange);
    handleRange.end_handle.SET(characteristic.endHandleRange);

    let apiRes = await sd_ble_gattc_descriptors_discover(characteristic.adapter, characteristic.connection, handleRange);
    handleRange.delete();
    return apiRes;
}

async function onConnected(data) {
    console.log("Connected to device");
    connectionHandle = ble_event_struct['ble_evt_t.evt.gap_evt.conn_handle'](data);
    await serviceDiscoveryStart();
}

async function charDiscoveryStart(gattcService) {
    console.log("Discovering characteristics");
    const handleRange = new ble_gattc_handle_range_t();
    handleRange.start_handle.SET(gattcService.serviceStartHandle);
    handleRange.end_handle.SET(gattcService.serviceEndHandle);
    let apiRes = await sd_ble_gattc_characteristics_discover(currentAdapter, connectionHandle, handleRange);
    handleRange.delete();
    return apiRes;
}

async function onDescriptorDiscoveryResponse(data) {
    let count = ble_event_struct['ble_evt_t.evt.gattc_evt.params.desc_disc_rsp.count'](data);
    let errorCode = ble_event_struct['ble_evt_t.evt.gattc_evt.gatt_status'](data);
    if (errorCode !== NRF_SUCCESS) {
        console.log("Descriptor discovery failed: "+ errorCode);
        return;
    }
    console.log("Number of descriptors found: "+count);
    let handleInRange = null;
    for (let i = 0; i < count; i += 1) {
        let currentDesc = ble_event_struct['ble_evt_t.evt.gattc_evt.params.desc_disc_rsp.descs'](data, i);
        let uuid = ble_event_struct['ble_gattc_desc_t.uuid.uuid'](currentDesc);
        let descHandle = ble_event_struct['ble_gattc_desc_t.handle'](currentDesc);
        handleInRange = descHandle;
        let char = descriptorHandleToCharacteristic[descHandle];
        let desc = new GattcDescriptor(uuid, descHandle); // Add something more?
        char.addDescriptor(uuid, desc);
    }
    if (count > 0 && handleInRange !== null) {
        let char = descriptorHandleToCharacteristic[handleInRange];
        char.incrementStartHandle(count);
        await descrDiscoveryStart(char);
    }

}

function onWriteResponse(data) {
    let errorCode = ble_event_struct['ble_evt_t.evt.gattc_evt.gatt_status'](data);
    if (errorCode !== NRF_SUCCESS) {
        console.log("Faield write operation. Code: "+ errorCode);
        return;
    }
}

function onServiceDiscoveryResponse(data) {
    console.log("Received service discovery response");
    let errorCode = ble_event_struct['ble_evt_t.evt.gattc_evt.gatt_status'](data);
    if (errorCode !== NRF_SUCCESS) {
        console.log("Service discovery failed. Code: "+errorCode);
        return;
    }
    let count = ble_event_struct['ble_evt_t.evt.gattc_evt.params.prim_srvc_disc_rsp.count'](data);
    console.log("Count "+count)

    for(let i = 0; i < count; i += 1) {
        let service = ble_event_struct['ble_evt_t.evt.gattc_evt.params.prim_srvc_disc_rsp.services'](data, i);
        let serviceUUID = ble_event_struct['ble_gattc_service_t.uuid.uuid'](service);
        serviceStartHandle = ble_event_struct['ble_gattc_service_t.handle_range.start_handle'](service);
        serviceEndHandle = ble_event_struct['ble_gattc_service_t.handle_range.end_handle'](service);

        let gattcService = new GattcService(serviceUUID, serviceStartHandle, serviceEndHandle);
        charDiscoveryStart(gattcService);
    }

}

async function onCharacteristicDiscoveryResponse(data) {
    let count = ble_event_struct['ble_evt_t.evt.gattc_evt.params.char_disc_rsp.count'](data);
    console.log(count + " characteristics found..")
    let errorCode = ble_event_struct['ble_evt_t.evt.gattc_evt.gatt_status'](data);

    if (errorCode != NRF_SUCCESS) {
        console.log("No more characteristics found. Error code "+errorCode);
        return;
    }
    let handleInRange = null; // Any uuid in service range.
    for (let i = 0; i < count; i += 1) {

        let characteristic0 = ble_event_struct['ble_evt_t.evt.gattc_evt.params.char_disc_rsp.chars'](data, i);
        let uuid = ble_event_struct['ble_gattc_char_t.uuid.uuid'](characteristic0);

        console.log("Characteristic uuid "+uuid);

        characteristicHandleRange= ble_event_struct['ble_gattc_char_t.handle_decl'](characteristic0);
        characteristicHandle = ble_event_struct['ble_gattc_char_t.handle_value'](characteristic0);
        handleInRange = characteristicHandle;

        let charService = characteristicHandleToService[characteristicHandle]
        let characteristicObj = new GattcCharacteristic(uuid, characteristicHandle, currentAdapter, connectionHandle, characteristicHandleRange, charService.serviceEndHandle)
        console.log("Char handle "+characteristicHandle)
        charService.addCharacteristic(uuid, characteristicObj);

        //await descrDiscoveryStart(characteristicObj); -> Needs fixing

    }

    if (count > 0 && handleInRange !== null) {
        let charService = characteristicHandleToService[handleInRange];
        charService.incrementStartHandle(count);
        await charDiscoveryStart(charService);
    }

}

function MSEC_TO_UNITS(TIME, RES) {
    return (TIME*1000)/RES
}

async function onAdvReport(data) {
    const advName = getAdvName(data);
    if (advName === 0) {
      return;
    }

    if(advName === "Mathias "){
      console.log("Connecting to "+advName);
      const scanParam = new ble_gap_scan_params_t();
      const connParam = new ble_gap_conn_params_t();

      scanParam.active.SET(1);
      scanParam.interval.SET(0x00A0);
      scanParam.window.SET(0x0050);
      scanParam.timeout.SET(0x3C);
      connParam.min_conn_interval.SET(MSEC_TO_UNITS(7.5, 1250));
      connParam.max_conn_interval.SET(MSEC_TO_UNITS(7.5, 1250));
      connParam.conn_sup_timeout.SET(MSEC_TO_UNITS(4000, 10000));
      connParam.slave_latency.SET(0);

      const peerAddr = new ble_gap_addr_t(ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.peer_addr'](data));
      const apiRes = await sd_ble_gap_connect(currentAdapter, peerAddr, scanParam, connParam);
      scanParam.delete();
      connParam.delete();
    }
}
async function characteristicInit(adapter) {
    let char = new Characteristic();
    let serviceId = Module.getValue(serviceHandle, 'i16');
    let errorCode = await sd_ble_gatts_characteristic_add(adapter, serviceId,  char.char_md, char.attr_char_value, char.charHandle);
    char.clean();
    if (errorCode !== NRF_SUCCESS) {
        const errorMessage = `Could not add characteristic. Code #${errorCode}`;
        adapter.statusHandler(sd_rpc_app_status_t.PKT_UNEXPECTED, errorMessage);
        return errorCode;
    }
    console.log("Added characteristic");
    return errorCode;
}

async function servicesInit(adapter) {
    const uuid = new ble_uuid_t();
    uuid.uuid.SET(0x0D18);
    uuid.type.SET(1);

    const BLE_GATTS_SRVC_TYPE_PRIMARY = 1;
    let errorCode = await sd_ble_gatts_service_add(adapter, BLE_GATTS_SRVC_TYPE_PRIMARY, uuid, serviceHandle);
    uuid.delete();
    if (errorCode !== NRF_SUCCESS) {
        const errorMessage = `Could not add service. Code #${errorCode}`;
        adapter.statusHandler(sd_rpc_app_status_t.PKT_UNEXPECTED, errorMessage);
        return errorCode;
    }
    console.log("Initiated service");
    errorCode = await characteristicInit(adapter);
    return errorCode;
}


function dataCallback(adapter, data, length) {
    let ble_evt_id = ble_event_struct['ble_evt_t.header.evt_id'](data);
    let ble_evt_len = ble_event_struct['ble_evt_t.header.evt_len'](data);

    switch(ble_evt_id) {
        case BLE_GAP_EVT_CONNECTED:
          onConnected();
          break;

        case BLE_GAP_EVT_ADV_REPORT:
            onAdvReport(data);
            break;
        case BLE_GATTC_EVT_PRIM_SRVC_DISC_RSP:
            onServiceDiscoveryResponse(data);
            break;
        case BLE_GATTC_EVT_CHAR_DISC_RSP:
            onCharacteristicDiscoveryResponse(data);
            break;
        case BLE_GATTC_EVT_DESC_DISC_RSP:
            onDescriptorDiscoveryResponse(data);
            break;
        case BLE_GATTC_EVT_WRITE_RSP:
            onWriteResponse(data);
            break;
        default:
            break;
    }

}
async function scanStart(adapter) {
    const scanParam = new ble_gap_scan_params_t();
    scanParam.active.SET(1);
    scanParam.interval.SET(0x00A0);
    scanParam.window.SET(0x0050);
    scanParam.timeout.SET(0x3C);

    const apiRes = await sd_ble_gap_scan_start(adapter, scanParam);
    scanParam.delete();

    if (apiRes === NRF_SUCCESS) {
        console.log('Scanning!');
    } else {
        console.log('Could not scan.');
    }
}

async function bleStackInit(adapter) {
    const enableParams = new ble_enable_params_t();
    const commonEnableParams = new ble_common_enable_params_t(enableParams.common_enable_params.GETADDR());
    const gapEnableParams = new ble_gap_enable_params_t(enableParams.gap_enable_params.GETADDR());
    const gattsEnableParams = new ble_gatts_enable_params_t(enableParams.gatts_enable_params.GETADDR());
    gattsEnableParams.attr_tab_size.SET(0x0000);
    gattsEnableParams.service_changed.SET(false);
    gapEnableParams.periph_conn_count.SET(1);
    gapEnableParams.central_conn_count.SET(1);
    gapEnableParams.central_sec_count.SET(1);
    commonEnableParams.p_conn_bw_counts.SET(0);
    commonEnableParams.vs_uuid_count.SET(8);

    const apiRes = await sd_ble_enable(adapter, enableParams, null);

    enableParams.delete();

    if (apiRes === NRF_SUCCESS) {
        console.log('Successfully enabled BLE!');
    } else {
        console.log('Could not enable BLE.');
    }
    return apiRes;
}

async function openAdapter() {
    const webusb = new WebusbInterface(1000000);
    const h5 = new H5Transport(webusb, 5000);
    const serialization = new SerializationTransport(h5, 5000);
    const adapter = new AdapterInternal(serialization);
    adapter.logSeverityFilterSet(sd_rpc_log_severity_t.SD_RPC_LOG_ERROR)
    let res = await adapter.open(statusCallback, dataCallback, logCallback);
    if (res === NRF_SUCCESS) {
        console.log('Opened adapter');
    } else {
        console.log("Could not open adapter")
    }

    return adapter;
}
function main() {
    console.log("main")
}
async function closeAdapter() {
    return await currentAdapter.close();
}
async function exampleProgram() {
    preSetup();
    const adapter = await openAdapter();
    currentAdapter = adapter;
    await bleStackInit(adapter);
    await servicesInit(adapter);
    await scanStart(adapter);
}

window.onload = function(){

    Module['onRuntimeInitialized'] = () => {
        document.querySelector("#exampleProgram").onclick = exampleProgram
        document.querySelector("#breatheLED").onclick = breatheLED
        document.querySelector("#closeAdapter").onclick = closeAdapter
    }

}
