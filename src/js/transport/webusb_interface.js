class WebusbInterface extends Transport {

    constructor() {
        super();
        this.device = null;
    }
    open(statusCallback, dataCallback, logCallback) {
        super.open(statusCallback, dataCallback, logCallback);

        return new Promise(resolve => {
            serial.requestPort().then(selectedPort => {
                this.port = selectedPort;
                this.webusbConnect(resolve);
            }).catch(error => {
                this.log(`Could not connect to webusb: ${error}`);
            });
        });
    }

    webusbConnect(resolve) {
        this.log('Web usb is connecting..')
        this.port.onReceiveError = error => {
            console.error(error);
        };
        this.port.connect().then(() => {
            this.port.onReceive = this.dataReceived.bind(this);
            this.port.onReceiveError = error => {
                console.error(error);
                this.statusCallback(sd_rpc_app_status_t.IO_RESOURCES_UNAVAILABLE, 'Lost connection to webusb device.');
            };

            resolve(NRF_SUCCESS); // Connected!
        }, error => {
            this.log(error)
        });
    }

    async close() {
        return this.port.disconnect();
    }

    dataReceived(data) {
        const rcvData = new Uint8Array(data.buffer);
        this.dataCallback(rcvData, rcvData.length);
    }

    send(data) {
        if (!this.port) {
            return;
        }
        this.port.send(data);
    }

    log(message) {
        if (this.logCallback) {
            this.logCallback(sd_rpc_log_severity_t.SD_RPC_LOG_DEBUG, message);
        } else {
            console.log(`Log: ${message}`);
        }
    }
}
