const serial = {};

(() => {
    serial.getPorts = () => {
        return navigator.usb.getDevices().then(devices => map(device => new serial.Port(device)));
    };

    serial.requestPort = () => {
        const filters = [
          { vendorId: 0x1366, productId: 0x1015 },
        ];
        return navigator.usb.requestDevice({ filters }).then(
          device => new serial.Port(device),
        );
    }

    serial.Port = function(device) {
      this.device_ = device;
    };

    serial.Port.prototype.connect = function(baudRate) {
        const readLoop = () => {
            this.device_.transferIn(3, 512).then(result => {
                this.onReceive(result.data);
                readLoop();
            }, error => {
                this.onReceiveError(error);
            });
        };

        // Bytes 0-3 are baudrate LE. Byte 4 is stop bits. Byte 5 is parity (0 = no parity),Byte 6 is number of data bits.
        let controlData = new Uint8Array([baudRate & 0xFF, (baudRate>>8) & 0xFF, (baudRate>>16) & 0xFF, (baudRate>>24) & 0xFF, 0, 0, 8]);
        return this.device_.open()
            .then(() => {
                console.log(this.device_);
                if (this.device_.configuration === null) {
                    return this.device_.selectConfiguration(1);
                }
            })
            .then(() => this.device_.claimInterface(0))
            .then(() => this.device_.claimInterface(1))
            .then(() => this.device_.selectAlternateInterface(1, 0))
            .then(() => this.device_.controlTransferOut({
                requestType: 'class',
                recipient: 'interface',
                request: 0x20,
                value: 0x00,
                index: 0x00 }, controlData))

            .then(() => this.device_.controlTransferOut({
                requestType: 'class',
                recipient: 'interface',
                request: 0x22,
                value: 0x00,
                index: 0x00 }))
            .then(() => {
                readLoop();
            });
    };

    serial.Port.prototype.disconnect = function() {
        return this.device_.close();
    };

    serial.Port.prototype.send = function(data) {
        return this.device_.transferOut(4, data);
    };
})();
