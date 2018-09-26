/*global Module */
import { NRF_SUCCESS } from './sd_rpc_types';

import { sd_rpc_log_severity_t, sd_rpc_app_status_t, BLE_GAP_EVT_CONNECTED, BLE_GATTC_EVT_READ_RSP, BLE_GAP_EVT_ADV_REPORT, BLE_GATTC_EVT_PRIM_SRVC_DISC_RSP, BLE_GATTC_EVT_CHAR_DISC_RSP, BLE_GATTC_EVT_DESC_DISC_RSP, BLE_GATTC_EVT_WRITE_RSP, BLE_GAP_EVT_CONN_PARAM_UPDATE_REQUEST,
BLE_GAP_EVT_SEC_PARAMS_REQUEST, BLE_GATTC_EVT_HVX, BLE_GATTC_EVT_EXCHANGE_MTU_RSP, BLE_EVT_TX_COMPLETE, BLE_GAP_EVT_DISCONNECTED } from './sd_rpc_types';

import { ble_event_struct } from './bindings/bleEvtStruct';
import EventEmitter from 'events';

import { descriptorHandleToCharacteristic, GattcDescriptor, GattcService, GattcCharacteristic, characteristicHandleToService, uuidToCharacteristic } from './gattc';


function advReportParse(type, advdata, typedata) {
    let index = 0;
    const data = new DataView(Module.HEAPU8.buffer, advdata.p_data, advdata.data_len);
    while (index  < advdata.data_len - 1) {
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

function getAdvName(data, len) {
    /**
        This doesn't look very secure to me, so should be changed later. What if the advertisement packet is spoofed to
        appear to have a longer fieldLength for the advertisement data than it actually does.
        This can result in an attacker reading unrelated memory from the heap into nameData.
    */
    const advdata = {};
    const typedata = {};
    advdata.p_data = data;
    advdata.data_len = len;

    let errorCode = advReportParse(0x09, advdata, typedata);
    if (errorCode === 0) {
        const nameData = new Uint8Array(Module.HEAPU8.buffer.slice(typedata.p_data, typedata.p_data + typedata.data_length));
        return String.fromCharCode.apply(null, nameData);
    }
    errorCode = advReportParse(0x08, advdata, typedata);
    if (errorCode === 0) {
        const nameData = new Uint8Array(Module.HEAPU8.buffer.slice(typedata.p_data, typedata.p_data + typedata.data_length));
        return String.fromCharCode.apply(null, nameData);
    }
    return 0;
}

class AdapterInternal extends EventEmitter {
    constructor(serializationTransport) {
        super();
        this.eventCallback = null;
        this.statusCallback = null;
        this.logCallback = null;
        this.logseverityfilter = 0;
        this.transport = serializationTransport;
    }

    statusHandler(code, message) {
        this.statusCallback(this, code, message);
    }

    logHandler(severity, logMessage) {
        if (this.logseverityfilter <= severity) {
            this.logCallback(this, severity, logMessage);
        }
    }

    async open(statusCallback, eventCallback, logCallback) {
        this.eventCallback = eventCallback;
        this.statusCallback = statusCallback;
        this.logCallback = logCallback;

        const boundStatusHandler = this.statusHandler.bind(this);
        const boundEventHandler = this.eventHandler.bind(this);
        const boundLogHandler = this.logHandler.bind(this);
        const res = await this.transport.open(boundStatusHandler, boundEventHandler, boundLogHandler);
        return res;
    }

    isInternalError(errorCode) {
        if (errorCode !== NRF_SUCCESS) {
            return true;
        }
        return false;
    }
    logSeverityFilterSet(severityFilter) {
        this.logseverityfilter = severityFilter;
        return NRF_SUCCESS;
    }

    async close() {
        return this.transport.close();
    }


    eventHandler(data) {
        //this.eventCallback(this, event, event.length);

        const ble_evt_id = ble_event_struct['ble_evt_t.header.evt_id'](data);
        const ble_evt_len = ble_event_struct['ble_evt_t.header.evt_len'](data);

        switch (ble_evt_id) {
            case BLE_GAP_EVT_CONNECTED: {
                const handle = ble_event_struct['ble_evt_t.evt.gap_evt.conn_handle'](data);
                this.emit('onConnected', { detail: { handle } });
                break;
            }
            case BLE_GAP_EVT_DISCONNECTED: {
                const handle = ble_event_struct['ble_evt_t.evt.gap_evt.conn_handle'](data);
                this.emit('onDisconnected', { detail: { handle } });
                break;
            }
            case BLE_GATTC_EVT_PRIM_SRVC_DISC_RSP: {
                this.onServiceDiscoveryResponse(data);
                break;
            }
            case BLE_GATTC_EVT_CHAR_DISC_RSP: {
                this.onCharacteristicDiscoveryResponse(data);
                break;
            }
            case BLE_GATTC_EVT_DESC_DISC_RSP: {
                this.onDescriptorDiscoveryResponse(data);
                break;
            }
            case BLE_GATTC_EVT_WRITE_RSP: {
                const writeRspHandle = ble_event_struct['ble_evt_t.evt.gattc_evt.params.write_rsp.handle'](data);
                this.emit('gattcWriteResponse', { detail: { handle: writeRspHandle } });
                break;
            }
            case BLE_GAP_EVT_CONN_PARAM_UPDATE_REQUEST: {
                const min_conn_interval = ble_event_struct['ble_evt_t.evt.gap_evt.params.conn_param_update.conn_params.min_conn_interval'](data);
                const max_conn_interval = ble_event_struct['ble_evt_t.evt.gap_evt.params.conn_param_update.conn_params.max_conn_interval'](data);
                const slave_latency = ble_event_struct['ble_evt_t.evt.gap_evt.params.conn_param_update.conn_params.slave_latency'](data);
                const conn_sup_timeout = ble_event_struct['ble_evt_t.evt.gap_evt.params.conn_param_update.conn_params.conn_sup_timeout'](data);
                this.emit('connParamUpdateRequest', { detail: { min_conn_interval, max_conn_interval, slave_latency, conn_sup_timeout } });
                break;
            }
            case BLE_GAP_EVT_SEC_PARAMS_REQUEST: {

                break;
            }
            case BLE_GATTC_EVT_HVX: {
                const hvxEvtHandle = ble_event_struct['ble_evt_t.evt.gattc_evt.params.hvx.handle'](data);
                const hvxEvtLength = ble_event_struct['ble_evt_t.evt.gattc_evt.params.hvx.len'](data);
                const hvxEvtDataPtr = ble_event_struct['ble_evt_t.evt.gattc_evt.params.hvx.data'](data);
                const hvxEvtData = Array.from(new Uint8Array(Module.HEAPU8.buffer.slice(hvxEvtDataPtr, hvxEvtDataPtr + hvxEvtLength)));
                const notification = {
                    _instanceId: hvxEvtHandle,
                    value: hvxEvtData,
                };
                this.emit('characteristicValueChanged', { detail: { notification } });
                break;
            }
            case BLE_GATTC_EVT_EXCHANGE_MTU_RSP: {
                const acceptedMtu = ble_event_struct['ble_evt_t.evt.gattc_evt.params.exchange_mtu_rsp.server_rx_mtu'](data);
                this.emit('mtuExchangeResponse', { detail: { acceptedMtu } });
                break;
            }

            case BLE_EVT_TX_COMPLETE: {
                const completeTxConnHandle = ble_event_struct['ble_evt_t.evt.common_evt.conn_handle'](data);
                const completeTxCount = ble_event_struct['ble_evt_t.evt.common_evt.params.tx_complete.count'](data);
                this.emit('bleTxCompleteEvt', { detail: { handle: completeTxConnHandle, count: completeTxCount } });
                break;
            }
            case BLE_GAP_EVT_ADV_REPORT: {
                const peer_addr_id_peer  = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.peer_addr.addr_id_peer'](data);
                const peer_addr_type = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.peer_addr.addr_type'](data);
                const peer_addr_ptr = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.peer_addr.addr'](data, 0);

                const peer_addr_data = new Uint8Array(Module.HEAPU8.buffer.slice(peer_addr_ptr, peer_addr_ptr + 6)).reverse();
                const peer_addr_data_str = Buffer.from(peer_addr_data).toString('hex');
                const p_data = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.data'](data);
                const data_len = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.dlen'](data);
                const advName = getAdvName(p_data, data_len);
                const rssi = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.rssi'](data);

                const report = {
                    rssi,
                    name: advName,
                    address: peer_addr_data,
                    addressString: peer_addr_data_str,
                };
                this.emit('advReport', report);
                break;
            }


        }
    }

    onServiceDiscoveryResponse(data) {
        console.log("Received service discovery response");
        const errorCode = ble_event_struct['ble_evt_t.evt.gattc_evt.gatt_status'](data);
        if (errorCode !== NRF_SUCCESS) {
            console.log("Service discovery failed. Code: "+errorCode);
            return;
        }
        const count = ble_event_struct['ble_evt_t.evt.gattc_evt.params.prim_srvc_disc_rsp.count'](data);

        for (let i = 0; i < count; i += 1) {
            const service = ble_event_struct['ble_evt_t.evt.gattc_evt.params.prim_srvc_disc_rsp.services'](data, i);
            const serviceUUID = ble_event_struct['ble_gattc_service_t.uuid.uuid'](service);
            const serviceStartHandle = ble_event_struct['ble_gattc_service_t.handle_range.start_handle'](service);
            const serviceEndHandle = ble_event_struct['ble_gattc_service_t.handle_range.end_handle'](service);
            console.log(`Start: ${serviceStartHandle}, end: ${serviceEndHandle}`);

            const gattcService = new GattcService(serviceUUID, serviceStartHandle, serviceEndHandle);
            this.emit('serviceDiscovered', { detail: { service: gattcService } });
        }
    }

    onCharacteristicDiscoveryResponse(data) {
        console.log("Char discovery resposne")
        const count = ble_event_struct['ble_evt_t.evt.gattc_evt.params.char_disc_rsp.count'](data);
        const errorCode = ble_event_struct['ble_evt_t.evt.gattc_evt.gatt_status'](data);
        if (errorCode !== NRF_SUCCESS) {
            this.emit('characteristicDiscovered', { detail: { } });
            return;
        }

        const servicesChanged = new Set();
        for (let i = 0; i < count; i += 1) {

            let characteristic0 = ble_event_struct['ble_evt_t.evt.gattc_evt.params.char_disc_rsp.chars'](data, i);
            let uuid = ble_event_struct['ble_gattc_char_t.uuid.uuid'](characteristic0);
            const connHandle = ble_event_struct['ble_evt_t.evt.gattc_evt.conn_handle'](data);

            console.log("Characteristic uuid "+uuid);


            const characteristicHandleRange = ble_event_struct['ble_gattc_char_t.handle_decl'](characteristic0);

            const characteristicHandle = ble_event_struct['ble_gattc_char_t.handle_value'](characteristic0);
            console.log("Char handle "+characteristicHandle)
            const serviceObj = characteristicHandleToService[characteristicHandle]
            console.log(serviceObj)
            console.log(`Handle: ${characteristicHandle}, range: ${characteristicHandleRange}`);
            const characteristicObj = new GattcCharacteristic(uuid, characteristicHandle, this, connHandle, characteristicHandleRange, serviceObj.serviceEndHandle)
            console.log("Char handle "+characteristicHandle)
            serviceObj.addCharacteristic(uuid, characteristicObj);
            servicesChanged.add(serviceObj);
            serviceObj.serviceCurrentHandle = Math.max(serviceObj.serviceCurrentHandle + 1, characteristicHandleRange + 1);
            this.emit('characteristicDiscovered', { detail: { service: serviceObj, characteristic: characteristicObj } });
            this.emit('uuidValueDiscovered', { detail: { uuid } });
            if (serviceObj.serviceCurrentHandle == serviceObj.serviceEndHandle) {
                this.emit('characteristicDiscovered', { detail: { } });
            }
        }

        servicesChanged.forEach(service => this.emit('characteristicDiscoveryNext', service));
    }

    onDescriptorDiscoveryResponse(data) {
        const count = ble_event_struct['ble_evt_t.evt.gattc_evt.params.desc_disc_rsp.count'](data);
        const errorCode = ble_event_struct['ble_evt_t.evt.gattc_evt.gatt_status'](data);

        if (errorCode !== NRF_SUCCESS) {
            this.emit('descriptorDiscovered', { detail: { } });
            return;
        }

        const servicesChanged = new Set();
        for (let i = 0; i < count; i += 1) {
            const desc0 = ble_event_struct['ble_evt_t.evt.gattc_evt.params.desc_disc_rsp.descs'](data, i);
            const uuid = ble_event_struct['ble_gattc_desc_t.uuid.uuid'](desc0);
            const descriptorHandle = ble_event_struct['ble_gattc_desc_t.handle'](desc0);
            const serviceObj = characteristicHandleToService[/*characteristicObj.charHandle*/descriptorHandle];
            servicesChanged.add(serviceObj);
            serviceObj.serviceCurrentHandle = Math.max(serviceObj.serviceCurrentHandle + 1, descriptorHandle + 1);
            if (serviceObj.serviceCurrentHandle === serviceObj.serviceEndHandle) {
                this.emit('descriptorDiscovered', { detail: { } });
            }
        }
        servicesChanged.forEach(service => this.emit('descriptorDiscoveryNext', service));
    }
}

/*module.exports =*/ export {
    AdapterInternal,
};
