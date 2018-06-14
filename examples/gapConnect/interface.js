let currentAdapter = null;
let serviceHandle = Module._malloc(2); // uint16 handle to services

let connectionHandle = 0;

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
    let srvcUUID = new bleUUIDt();
    let uuid128 = new bleUUID128t(new Uint8Array([0xef, 0x68, 0x03, 0x00,   0x9b, 0x35,  0x49, 0x33,   0x9b, 0x10,   0x52, 0xff, 0xa9, 0x74, 0x00, 0x42]));
    await uuid128.register();
    uuid128.uuid.setType(2); // Temporary workaround!
    srvcUUID.setType(1);
    //srvcUUID.setUUID(0x0f18)
    srvcUUID.setUUID(0x0f18)
    console.log("Discovering services..")
    let errorCode = await sd_ble_gattc_primary_services_discover(currentAdapter, connectionHandle, startHandle, uuid128.uuid.data/*srvcUUID.data*/);

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
    let handleRange = Module._malloc(4);
    let dw = new DataView(Module.HEAPU8.buffer, handleRange, 4);
    dw.setUint16(0, characteristic.startHandleRange, true);
    dw.setUint16(2, characteristic.endHandleRange, true);

    let apiRes = await sd_ble_gattc_descriptors_discover(characteristic.adapter, characteristic.connection, handleRange);
    Module._free(handleRange);
    return apiRes;
}

async function onConnected(data) {
    console.log("Connected to device");
    connectionHandle = ble_event_struct['ble_evt_t.evt.gap_evt.conn_handle'](data);
    await serviceDiscoveryStart();
}

async function charDiscoveryStart(gattcService) {
    console.log("Discovering characteristics");
    let handleRange = Module._malloc(4);
    let dw = new DataView(Module.HEAPU8.buffer, handleRange, 4);
    dw.setUint16(0, gattcService.serviceStartHandle, true);
    dw.setUint16(2, gattcService.serviceEndHandle, true);
    let apiRes = await sd_ble_gattc_characteristics_discover(currentAdapter, connectionHandle, handleRange);
    Module._free(handleRange);
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

async function writeLED(data) {
    if (ledCharWriteHandle === null || currentAdapter === null) {
        return;
    }

    let dataPtr = Module._malloc(4);
    Module.HEAPU8.set(data, dataPtr);
    let write_params = Module.ccall('createGattcWriteParams', 'number', ['number', 'number', 'number', 'number', 'number'], [ledCharWriteHandle,data.length,dataPtr,1,0]);
    let apiRes = await sd_ble_gattc_write(currentAdapter, connectionHandle, write_params);
    Module._free(write_params);
    Module._free(dataPtr);
    return apiRes;
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

async function onAdvReport(data) {
    const advName = getAdvName(data);
    if (advName === 0) {
      return;
    }

    if(advName === "Mathias "){
      console.log("Connecting to "+advName);
      const scanParam = Module.ccall('createScanParam', 'number', [], []);
      const connParam = Module.ccall('createConnectionParams', 'number', [], []);
      let peerAddr = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.peer_addr'](data);
      const apiRes = await sd_ble_gap_connect(currentAdapter, peerAddr, scanParam, connParam);
      Module._free(scanParam);
      Module._free(connParam);
    }
}
async function characteristicInit(adapter) {
    let char = new Characteristic();
    let serviceId = Module.getValue(serviceHandle, 'i16');
    let errorCode = await sd_ble_gatts_characteristic_add(adapter, serviceId,  char.char_md, char.attr_char_value, char.charHandle.data);
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
    uuid = new bleUUIDt();
    uuid.setUUID(0x0D18);
    uuid.setType(1);

    const BLE_GATTS_SRVC_TYPE_PRIMARY = 1;
    let errorCode = await sd_ble_gatts_service_add(adapter, BLE_GATTS_SRVC_TYPE_PRIMARY, uuid.data, serviceHandle);
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
        case 16: // BLE_GAP_EVT_CONNECTED
          onConnected();
          break;

        case 29: // BLE_GAP_EVT_ADV_REPORT
            onAdvReport(data);
            break;
        case 48: //BLE_GATTC_EVT_PRIM_SRVC_DISC_RSP
            onServiceDiscoveryResponse(data);
            break;
        case 50: // BLE_GATTC_EVT_CHAR_DISC_RSP
            onCharacteristicDiscoveryResponse(data);
            break;
        case 51: // BLE_GATTC_EVT_DESC_DISC_RSP:
            onDescriptorDiscoveryResponse(data);
            break;
        case 56: //BLE_GATTC_EVT_WRITE_RSP
            onWriteResponse(data);
            break;
        default:
            break;
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
    let res = await adapter.open(statusCallback, dataCallback, logCallback);
    if (res === NRF_SUCCESS) {
        console.log('Opened adapter');
    } else {
        console.log("Could not open adapter")
    }

    return adapter;
}

async function closeAdapter() {
    return await currentAdapter.close();
}
async function exampleProgram() {

    const adapter = await openAdapter();
    currentAdapter = adapter;
    await bleStackInit(adapter);
    await servicesInit(adapter);
    await scanStart(adapter);
}

window.onload = function(){
    document.querySelector("#exampleProgram").onclick = exampleProgram
    document.querySelector("#breatheLED").onclick = breatheLED
    document.querySelector("#closeAdapter").onclick = closeAdapter
}
