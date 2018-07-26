const { WebusbInterface } = require('../../../src/js/transport/webusb_interface');
const { H5Transport } = require('../../../src/js/transport/h5_transport');
const { SerializationTransport } = require('../../../src/js/transport/serialization_transport');
const { AdapterInternal } = require('../../../src/js/adapter_internal');
const { sd_rpc_log_severity_t, NRF_SUCCESS, BLE_GAP_EVT_ADV_REPORT } = require('../../../src/js/sd_rpc_types');
const { ble_cfg_t, ble_gap_cfg_t, ble_gap_cfg_role_count_t, ble_conn_cfg_t, ble_gatt_conn_cfg_t, ble_enable_params_t, ble_common_enable_params_t,
ble_gap_enable_params_t, ble_gatts_enable_params_t, ble_gatt_enable_params_t, ble_gap_scan_params_t } = require('../../../src/js/bindings/bleSDAttributeStructs');
const { sd_ble_enable, sd_ble_cfg_set } = require('../../../src/js/ble_impl/ble_impl');
const { sd_ble_gap_scan_start, sd_ble_gap_scan_stop } = require('../../../src/js/ble_impl/ble_gap_impl');
const { ble_event_struct } = require('../../../src/js/bindings/bleEvtStruct');

const { Dfu } = require('./dfu');
const { DeviceScanner } = require('./deviceScanner');
let deviceScanner = undefined;

const BAUD_RATE = 1000000;
function statusCallback(adapter, code, message) {
    console.log(code, message);
}
function logCallback(adapter, severity, message) {
    console.log(message);
}
const adapterEventListeners = {};
function dataCallback(adapter, data, length) {
    if (adapter in adapterEventListeners) {
        adapterEventListeners[adapter](data, length);
        return;
    }
    const ble_evt_id = ble_event_struct['ble_evt_t.header.evt_id'](data);
    const ble_evt_len = ble_event_struct['ble_evt_t.header.evt_len'](data);
    switch(ble_evt_id) {
        case BLE_GAP_EVT_ADV_REPORT: {
            if(deviceScanner !== undefined) {
                deviceScanner.parseResponse(data);
            }
            break;
        }
}

function selectTarget(adapter) {
    return new Promise((resolve, reject) => {
        deviceScanner = new DeviceScanner();
        const scanParam = new ble_gap_scan_params_t();
        scanParam.active.SET(1);
        scanParam.interval.SET(0x00A0);
        scanParam.window.SET(0x0050);
        scanParam.timeout.SET(0);
        let apiRes = await sd_ble_gap_scan_start(adapter, scanParam);
        scanParam.delete();
    });
}

function addLogListeners(dfuObj) {
    console.log("Setup log listeners");
    dfuObj.on('logMessage', (severity, message) => console.log(message));
    dfuObj.on('transferStart', fileName => console.log('transferStart:', fileName));
    dfuObj.on('transferComplete', fileName => console.log('transferComplete:', fileName));
    dfuObj.on('progressUpdate', progressUpdate => {
        let output = `progressUpdate: ${progressUpdate.stage}`;
        if (progressUpdate.percentCompleted) {
            output += `: ${progressUpdate.percentCompleted}%`;
            output += `, completed bytes: ${progressUpdate.completedBytes}, total: ${progressUpdate.totalBytes}`;
            output += `, B/s: ${progressUpdate.bytesPerSecond}, average B/s: ${progressUpdate.averageBytesPerSecond}`;
        }
        console.log(output);
    });
}

let nextConnCfgTag = 1;
async function bleCfgSet(adapter) {
    let bleCfg = new ble_cfg_t();
    const gapCfg = new ble_gap_cfg_t(bleCfg.gap_cfg.GETADDR());
    const roleCountConfig = new ble_gap_cfg_role_count_t(gapCfg.role_count_cfg.GETADDR());
    roleCountConfig.periph_role_count.SET(1);
    roleCountConfig.central_role_count.SET(1);
    roleCountConfig.central_sec_count.SET(1);
    let errorCode = await sd_ble_cfg_set(adapter, 0x40, bleCfg, 0);
    bleCfg.delete();

    if (errorCode !== NRF_SUCCESS) {
        return Promise.reject(errorCode);
    }
    bleCfg = new ble_cfg_t();
    const connCfg = new ble_conn_cfg_t(bleCfg.conn_cfg.GETADDR());
    const gattConnCfg = new ble_gatt_conn_cfg_t(connCfg.gatt_conn_cfg.GETADDR());
    connCfg.conn_cfg_tag.SET(nextConnCfgTag);
    gattConnCfg.att_mtu.SET(247);
    errorCode = await sd_ble_cfg_set(adapter, 0x23, bleCfg, 0);
    bleCfg.delete();
    if (errorCode !== NRF_SUCCESS) {
        return Promise.reject(errorCode);
    }

    console.log("Ble configuration was set")
    return Promise.resolve(adapter, nextConnCfgTag++);
}

async function openAdapter() {
    const webusb = new WebusbInterface(BAUD_RATE);
    const h5 = new H5Transport(webusb, 5000);
    const serialization = new SerializationTransport(h5, 5000);
    const adapter = new AdapterInternal(serialization);
    adapter.logSeverityFilterSet(sd_rpc_log_severity_t.DEBUG)
    const res = await adapter.open(statusCallback, dataCallback, logCallback);
    if (res === NRF_SUCCESS) {
        console.log('Opened adapter');
    } else {
        console.log('Could not open adapter');
    }

    return adapter;
}

async function performDFU(adapter, targetAddress, pathToZip, bleCfgTag) {
    return new Promise((resolve, reject) => {
        const transportParameters = {
            adapter,
            targetAddress,
            targetAddressType: 'BLE_GAP_ADDR_TYPE_RANDOM_STATIC',
        };
        const dfu = new Dfu(transportParameters, bleCfgTag);
        addLogListeners(dfu);

        if (!(adapter in adapterEventListeners)) {
            adapterEventListeners[adapter] = dfu.boundEventCallback;
        }

        dfu.performDFU(pathToZip, err => {
            delete adapterEventListeners[adapter];
            if (err) {
                reject(err);
                return;
            }
            resolve(adapter);
        });
    });
}

async function bleStackInit(adapter) {
    const enableParams = new ble_enable_params_t();
    const commonEnableParams = new ble_common_enable_params_t(enableParams.common_enable_params.GETADDR());
    const gapEnableParams = new ble_gap_enable_params_t(enableParams.gap_enable_params.GETADDR());
    const gattsEnableParams = new ble_gatts_enable_params_t(enableParams.gatts_enable_params.GETADDR());
    const gattEnableParams = new ble_gatt_enable_params_t(enableParams.gatt_enable_params.GETADDR());
    gattsEnableParams.attr_tab_size.SET(0x580);
    gattsEnableParams.service_changed.SET(false);
    gapEnableParams.periph_conn_count.SET(1);
    gapEnableParams.central_conn_count.SET(7);
    gapEnableParams.central_sec_count.SET(1);
    commonEnableParams.p_conn_bw_counts.SET(0);
    commonEnableParams.vs_uuid_count.SET(10);
    gattEnableParams.att_mtu.SET(247);

    const apiRes = await sd_ble_enable(adapter, enableParams, null);

    enableParams.delete();
    if (apiRes === NRF_SUCCESS) {
        console.log('Successfully enabled BLE!');
    } else {
        console.log('Could not enable BLE.');
    }
    if (apiRes !== NRF_SUCCESS) {
        return Promise.reject(apiRes);
    }
    return Promise.resolve(adapter);
}

async function main() {
    const targetAddress = new Uint8Array([0xE0, 0xF4, 0x3D, 0x34, 0x6D, 0x56]);
    openAdapter()
    //.then(adapter => bleCfgSet(adapter))
    .then(adapter => bleStackInit(adapter))
    .then(selectTarget)
    .then(adapter => performDFU(adapter, targetAddress, 'dfu_test_app_hrm_s132.zip', 0))
    //.then(adapter => adapter.close())
    .catch(err => console.log(err));
}

window.onload = function() {
    Module['onRuntimeInitialized'] = () => {
        document.querySelector("#startProgramBtn").onclick = main
    }
}
