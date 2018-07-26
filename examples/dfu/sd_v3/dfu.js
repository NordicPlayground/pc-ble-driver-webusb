const _ = require('underscore');
const JSZip = require('jszip');
const EventEmitter = require('events');

const { BleTransport } = require('./dfu/transport');

const logLevel = require('./util/logLevel');
const { createError, ErrorCode } = require('./dfu/dfuConstants');
const { descriptorHandleToCharacteristic, GattcDescriptor, GattcService, GattcCharacteristic, characteristicHandleToService, uuidToCharacteristic } = require('../../../src/js/gattc');

const { sd_rpc_log_severity_t, sd_rpc_app_status_t, NRF_SUCCESS, BLE_GAP_EVT_CONNECTED, BLE_GATTC_EVT_READ_RSP, BLE_GAP_EVT_ADV_REPORT, BLE_GATTC_EVT_PRIM_SRVC_DISC_RSP, BLE_GATTC_EVT_CHAR_DISC_RSP, BLE_GATTC_EVT_DESC_DISC_RSP, BLE_GATTC_EVT_WRITE_RSP, BLE_GAP_EVT_CONN_PARAM_UPDATE_REQUEST,
BLE_GAP_EVT_SEC_PARAMS_REQUEST, BLE_GATTC_EVT_HVX, BLE_GATTC_EVT_EXCHANGE_MTU_RSP, BLE_EVT_TX_COMPLETE, BLE_GAP_EVT_DISCONNECTED } = require('../../../src/js/sd_rpc_types');

const { sd_ble_gattc_hv_confirm } = require('../../../src/js/ble_impl/ble_gattc_impl');


const DfuSpeedometer = require('./dfu/dfuSpeedometer');

const { ble_event_struct } = require('../../../src/js/bindings/bleEvtStruct');

const DfuState = Object.freeze({
    READY: 0,
    IN_PROGRESS: 1,
    ABORTING: 2,
});

function onServiceDiscoveryResponse(data) {
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
        dispatchEvent(new CustomEvent('serviceDiscovered', { detail: { service: gattcService } }));
    }
}



class Dfu extends EventEmitter {
    constructor(parameters, bleCfgTag) {
        super();
        this.adapter = parameters.adapter;
        console.log(this.adapter.transport)
        this.transportParameters = parameters;
        this._transport = null;
        this.bleCfgTag = bleCfgTag;
        this._setState(DfuState.READY);
        this.boundEventCallback = this.eventCallback.bind(this);

    }

    performDFU(zipFilename, callback) {
        if (this._state !== DfuState.READY) {
            throw new Error('Not in READY state. DFU in progress or aborting.');
        }
        if (!zipFilename) {
            throw new Error('No zipFilePath provided.');
        }
        if (!callback) {
            throw new Error('No callback function provided.');
        }

        this._log(logLevel.INFO, `Performing DFU with file: ${zipFilename}`);
        this._setState(DfuState.IN_PROGRESS);

        //const transport = new BleTransport(this.transportParameters, this.bleCfgTag)
        this._fetchUpdates(zipFilename)
        .then(updates => this._performUpdates(updates))
        .then(() => {
            this._log(logLevel.INFO, 'DFU completed successfully.');
            this._setState(DfuState.READY);
            callback();
        })
        .catch(err => {
            if (err.code === ErrorCode.ABORTED) {
                this._log(logLevel.INFO, 'DFU aborted.');
                callback(null, true);
            } else {
                this._log(logLevel.ERROR, `DFU failed with error: ${err.message}.`);
                callback(err);
            }
            this._setState(DfuState.READY);
        });
    }
    _performSingleUpdate(datFile, binFile) {
        return this._createBleTransport()
            .then(() => this._checkAbortState())
            .then(() => this._transferInitPacket(datFile))
            .then(() => this._transferFirmware(binFile))
            .then(() => this._transport.waitForDisconnection())
            .then(() => this._destroyBleTransport())
            .catch(err => {
                this._destroyBleTransport();
                throw err;
            });
    }
    _checkAbortState() {
        if (this._state === DfuState.ABORTING) {
            return Promise.reject(createError(ErrorCode.ABORTED, 'Abort was triggered.'));
        }
        return Promise.resolve();
    }

    _performUpdates(updates) {
        return updates.reduce((prevPromise, update) => {
            return prevPromise.then(() => this._performSingleUpdate(update.datFile, update.binFile));
        }, Promise.resolve());
    }

    _createBleTransport() {
        return Promise.resolve()
            .then(() => {
                this._log(logLevel.DEBUG, 'Creating DFU transport.');
                this._transport = new BleTransport(this.transportParameters, this.bleCfgTag);
                this._setupTransportListeners();
                return this._transport.init();
            });
    }

    _destroyBleTransport() {
        if (this._transport) {
            this._log(logLevel.DEBUG, 'Destroying DFU transport.');
            this._removeTransportListeners();
            this._transport.destroy();
            this._transport = null;
        } else {
            this._log(logLevel.DEBUG, 'No DFU transport exists, so nothing to clean up.');
        }
    }

    _checkAbortState() {
        if (this._state === DfuState.ABORTING) {
            return Promise.reject(createError(ErrorCode.ABORTED, 'Abort was triggered.'));
        }
        return Promise.resolve();
    }

    _setupTransportListeners() {
        const progressInterval = 1000;
        const onProgressUpdate = _.throttle(progressUpdate => {
            this._handleProgressUpdate(progressUpdate);
        }, progressInterval);

        const onLogMessage = (level, message) => {
            this._log(level, message);
        };

        this._transport.on('progressUpdate', onProgressUpdate);
        this._transport.on('logMessage', onLogMessage);
    }

    _removeTransportListeners() {
        this._transport.removeAllListeners('progressUpdate');
        this._transport.removeAllListeners('logMessage');
    }

    _transferInitPacket(file) {
        /**
         * DFU transfer start event.
         *
         * @event Dfu#transferStart
         * @type {Object}
         * @property {string} file.name - The name of the file being transferred.
         */
        //this.emit('transferStart', file.name);
        return file.loadData().then(data => {
            return this._transport.sendInitPacket(data)
                .then(() => this.emit('transferComplete', file.name));
        });
    }

    _transferFirmware(file) {
        this.emit('transferStart', file.name);
        return file.loadData().then(data => {
            return this._transport.getFirmwareState(data)
                .then(state => {
                    this._speedometer = new DfuSpeedometer(data.length, state.offset);
                    return this._transport.sendFirmware(data);
                })

                /**
                 * DFU transfer complete event.
                 *
                 * @event Dfu#transferComplete
                 * @type {Object}
                 * @property {string} file.name - The name of the file that was transferred.
                 */
                .then(() => this.emit('transferComplete', file.name));
        });
    }

    _handleProgressUpdate(progressUpdate) {
        if (progressUpdate.offset) {
            this._speedometer.updateState(progressUpdate.offset);

            /**
             * DFU progress update event.
             *
             * @event Dfu#progressUpdate
             * @type {Object}
             * @property {Object} _ - Progress meta-data.
             */
            this.emit('progressUpdate', {
                stage: progressUpdate.stage,
                completedBytes: progressUpdate.offset,
                totalBytes: this._speedometer.totalBytes,
                bytesPerSecond: this._speedometer.calculateBytesPerSecond(),
                averageBytesPerSecond: this._speedometer.calculateAverageBytesPerSecond(),
                percentCompleted: this._speedometer.calculatePercentCompleted(),
            });
        } else {
            this.emit('progressUpdate', {
                stage: progressUpdate.stage,
            });
        }
    }

    _setState(state) {
        if (this._state !== state) {
            this._state = state;
            //this.emit('stateChanged', state);
        }
    }

    _fetchUpdates(zipFilename) {
        this._log(logLevel.DEBUG, `Loading zip file: ${zipFilename}`);
        const zipld = this._loadZipAsync(zipFilename);
        return Promise.all([
            zipld,
            zipld.then(zip => this._getManifest(zip))
        ])
        .then(result => {
            const zip = result[0];
            const manifest = result[1];
            return this._getFirmwareTypes(manifest).map(type => {
                const firmwareUpdate = manifest[type];
                const datFileName = firmwareUpdate.dat_file;
                const binFileName = firmwareUpdate.bin_file;
                this._log(logLevel.DEBUG, `Found ${type} files: ${datFileName}, ${binFileName}`);
                return {
                    datFile: {
                        name: datFileName,
                        loadData: () => zip.file(datFileName).async('array'),
                    },
                    binFile: {
                        name: binFileName,
                        loadData: () => zip.file(binFileName).async('array'),
                    },
                };
            });
        });
    }

    _getFirmwareTypes(manifest) {
        return [
            'softdevice',
            'bootloader',
            'softdevice_bootloader',
            'application',
        ].filter(type => !!manifest[type]);
    }

    _loadZipAsync(filename) {
        return new Promise((resolve, reject) => {
            this._loadZip(filename, (err, zip) => {
                err ? reject(err) : resolve(zip);
            });
        });
    }

    _getManifest(zip) {
        return new Promise((resolve, reject) => {
        zip.file('manifest.json')
            .async('string')
            .then(data => {
                let manifest;
                try {
                    // Parse manifest as JSON
                    manifest = JSON.parse(data).manifest;
                } catch (error) {
                    return reject(error);
                }
                // Return manifest
                return resolve(manifest);
            });
        });
    }
    _loadZip(filename, callback) {
        if (this.zipData) {
            callback(undefined, this.zipdata);
            return;
        }
        fetch(`./zips/${filename}`)
        .then(response => response.body)
        .then(body => body.getReader().read())
        .then(data => JSZip.loadAsync(data.value))
        .then(zipData => {
            this.zipData = zipData;
            callback(undefined, zipData);
        })
        .catch(error => callback(error));
    }

    _log(level, message) {
        console.log(message);
        //this.emit('logMessage', level, message);
    }

    onCharacteristicDiscoveryResponse(data) {
        console.log("Char discovery resposne")
        const count = ble_event_struct['ble_evt_t.evt.gattc_evt.params.char_disc_rsp.count'](data);
        const errorCode = ble_event_struct['ble_evt_t.evt.gattc_evt.gatt_status'](data);
        if (errorCode !== NRF_SUCCESS) {
            dispatchEvent(new CustomEvent('characteristicDiscovered', { detail: { } }));
            return;
        }

        const servicesChanged = new Set();
        for (let i = 0; i < count; i += 1) {

            let characteristic0 = ble_event_struct['ble_evt_t.evt.gattc_evt.params.char_disc_rsp.chars'](data, i);
            let uuid = ble_event_struct['ble_gattc_char_t.uuid.uuid'](characteristic0);

            console.log("Characteristic uuid "+uuid);


            const characteristicHandleRange = ble_event_struct['ble_gattc_char_t.handle_decl'](characteristic0);

            const characteristicHandle = ble_event_struct['ble_gattc_char_t.handle_value'](characteristic0);
            console.log("Char handle "+characteristicHandle)
            const serviceObj = characteristicHandleToService[characteristicHandle]
            console.log(serviceObj)
            console.log(`Handle: ${characteristicHandle}, range: ${characteristicHandleRange}`);
            const characteristicObj = new GattcCharacteristic(uuid, characteristicHandle, this.adapter, this._transport.handle, characteristicHandleRange, serviceObj.serviceEndHandle)
            console.log("Char handle "+characteristicHandle)
            serviceObj.addCharacteristic(uuid, characteristicObj);
            servicesChanged.add(serviceObj);
            //serviceObj.incrementCurrentHandle(1);
            serviceObj.serviceCurrentHandle = Math.max(serviceObj.serviceCurrentHandle + 1, characteristicHandleRange + 1);
            dispatchEvent(new CustomEvent('characteristicDiscovered', { detail: { service: serviceObj, characteristic: characteristicObj } }));
            dispatchEvent(new CustomEvent('uuidValueDiscovered', { detail: { uuid } }));
            if (serviceObj.serviceCurrentHandle == serviceObj.serviceEndHandle) {
                dispatchEvent(new CustomEvent('characteristicDiscovered', { detail: { } }));
            }
        }

        servicesChanged.forEach(service => this._transport.characteristicDiscoveryNext(service));
    }


    onDescriptorDiscoveryResponse(data) {
        const count = ble_event_struct['ble_evt_t.evt.gattc_evt.params.desc_disc_rsp.count'](data);
        const errorCode = ble_event_struct['ble_evt_t.evt.gattc_evt.gatt_status'](data);

        if (errorCode !== NRF_SUCCESS) {
            dispatchEvent(new CustomEvent('descriptorDiscovered', { detail: { } }));
            return;
        }

        const servicesChanged = new Set();
        for (let i = 0; i < count; i += 1) {
            const desc0 = ble_event_struct['ble_evt_t.evt.gattc_evt.params.desc_disc_rsp.descs'](data, i);
            const uuid = ble_event_struct['ble_gattc_desc_t.uuid.uuid'](desc0);
            const descriptorHandle = ble_event_struct['ble_gattc_desc_t.handle'](desc0);

            //console.log(descriptorHandle);
            //console.log(uuid);
            //console.log(characteristicHandleToService)
            //console.log(descriptorHandleToCharacteristic);
            //const characteristicObj = descriptorHandleToCharacteristic[descriptorHandle];
            const serviceObj = characteristicHandleToService[/*characteristicObj.charHandle*/descriptorHandle];
            //const descriptorObj = new GattcDescriptor(uuid, descriptorHandle);
            //characteristicObj.addDescriptor(descriptorObj);
            servicesChanged.add(serviceObj);
            serviceObj.serviceCurrentHandle = Math.max(serviceObj.serviceCurrentHandle + 1, descriptorHandle + 1);
            //dispatchEvent(new CustomEvent('descriptorDiscovered', { detail: { service: serviceObj, characteristic: characteristicObj, descriptor: descriptorObj } }));

            if (serviceObj.serviceCurrentHandle === serviceObj.serviceEndHandle) {
                dispatchEvent(new CustomEvent('descriptorDiscovered', { detail: { } }));
            }
        }

        servicesChanged.forEach(service => this._transport.descriptorDiscoveryNext(service));
    }


    eventCallback(data, length) {
        const ble_evt_id = ble_event_struct['ble_evt_t.header.evt_id'](data);
        const ble_evt_len = ble_event_struct['ble_evt_t.header.evt_len'](data);
        switch(ble_evt_id) {
            case BLE_GAP_EVT_CONNECTED: {
                const handle = ble_event_struct['ble_evt_t.evt.gap_evt.conn_handle'](data);
                dispatchEvent(new CustomEvent('onConnected', { detail: { handle } }));
                break;
            }
            case BLE_GAP_EVT_DISCONNECTED: {
                const handle = ble_event_struct['ble_evt_t.evt.gap_evt.conn_handle'](data);
                dispatchEvent(new CustomEvent('onDisconnected', { detail: { handle } }));
                break;
            }
            case BLE_GATTC_EVT_PRIM_SRVC_DISC_RSP: {
                onServiceDiscoveryResponse(data);
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
                dispatchEvent(new CustomEvent('gattcWriteResponse', { detail: { handle: writeRspHandle } }));
                break;
            }
            case BLE_GAP_EVT_CONN_PARAM_UPDATE_REQUEST: {
                const min_conn_interval = ble_event_struct['ble_evt_t.evt.gap_evt.params.conn_param_update.conn_params.min_conn_interval'](data);
                const max_conn_interval = ble_event_struct['ble_evt_t.evt.gap_evt.params.conn_param_update.conn_params.max_conn_interval'](data);
                const slave_latency = ble_event_struct['ble_evt_t.evt.gap_evt.params.conn_param_update.conn_params.slave_latency'](data);
                const conn_sup_timeout = ble_event_struct['ble_evt_t.evt.gap_evt.params.conn_param_update.conn_params.conn_sup_timeout'](data);
                dispatchEvent(new CustomEvent('connParamUpdateRequest', { detail: { min_conn_interval, max_conn_interval, slave_latency, conn_sup_timeout } }));
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
                dispatchEvent(new CustomEvent('characteristicValueChanged', { detail: { notification } }));
                break;
            }
            case BLE_GATTC_EVT_EXCHANGE_MTU_RSP: {
                const acceptedMtu = ble_event_struct['ble_evt_t.evt.gattc_evt.params.exchange_mtu_rsp.server_rx_mtu'](data);
                dispatchEvent(new CustomEvent('mtuExchangeResponse', { detail: { acceptedMtu } }));
                break;
            }

            case BLE_EVT_TX_COMPLETE: {
                const completeTxConnHandle = ble_event_struct['ble_evt_t.evt.common_evt.conn_handle'](data);
                const completeTxCount = ble_event_struct['ble_evt_t.evt.common_evt.params.tx_complete.count'](data);
                dispatchEvent(new CustomEvent('bleTxCompleteEvt', { detail: { handle: completeTxConnHandle, count: completeTxCount } }));
                break;
            }
        }
    }

}

module.exports = {
    Dfu,
};
