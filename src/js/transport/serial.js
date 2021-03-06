const serial = {};

const configureJLink = (device, controlData) => new Promise(resolve => {
    if (device.configuration === null) {
        resolve(device.selectConfiguration(1));
    }
    resolve();
})
    .then(() => device.claimInterface(0))
    .then(() => device.claimInterface(1))
    .then(() => device.selectAlternateInterface(1, 0))
    .then(() => device.controlTransferOut({
        requestType: 'class',
        recipient: 'interface',
        request: 0x20,
        value: 0x00,
        index: 0x00 }, controlData))

    .then(() => device.controlTransferOut({
        requestType: 'class',
        recipient: 'interface',
        request: 0x22,
        value: 0x00,
        index: 0x00 }));


const configureSerial = (device, controlData) => new Promise(resolve => {
    if (device.configuration === null) {
        resolve(device.selectConfiguration(1));
    }
    resolve();
})
    //.then(() => device.claimInterface(0))
    .then(() => device.claimInterface(3))
    .then(() => device.claimInterface(4))
    .then(() => device.selectAlternateInterface(3, 0))
    .then(() => device.selectAlternateInterface(4, 0))
    .then(() => device.controlTransferOut({
        requestType: 'class',
        recipient: 'interface',
        request: 0x20,
        value: 0x00,
        index: 0x03 }, controlData))

    .then(() => device.controlTransferOut({
        requestType: 'class',
        recipient: 'interface',
        request: 0x22,
        value: 0x01,
        index: 0x03 }))
    .then(() => device.controlTransferIn({
        requestType: 'class',
        recipient: 'interface',
        request: 0x21,
        value: 0x00,
        index: 0x03 }, 7));

const configureDevice = (device, controlData, that) => new Promise((resolve, reject) => {
    const VID = device.vendorId;
    const PID = device.productId;
    if (VID === 0x1366 && PID === 0x1015) {
        that.transferIn = 3;
        that.transferOut = 4;
        resolve(configureJLink(device, controlData));
    } else if (VID === 0x1915 || true) {
        that.transferIn = 3;
        that.transferOut = 3;
        resolve(configureSerial(device, controlData));
    }
    console.log(device);
    reject('Unsupported device.');
});

(() => {
    // eslint-disable-next-line
    serial.getPorts = () => navigator.usb.getDevices().then(devices => map(device => new serial.Port(device)));
    serial.requestPort = () => {
        const filters = [
          { vendorId: 0x1366, productId: 0x1015 },
          { vendorId: 0x1915 }
        ];
        return navigator.usb.requestDevice({ filters }).then(
          device => new serial.Port(device),
        );
    };

    serial.Port = function (device) {
        this.device_ = device;
    };

    serial.Port.prototype.connect = function (baudRate) {
        const readLoop = () => {
            this.device_.transferIn(this.transferIn, 64).then(result => {
                this.onReceive(result.data);
                readLoop();
            }, error => {
                this.onReceiveError(error);
            });
        };
        // Bytes 0-3 are baudrate LE. Byte 4 is stop bits. Byte 5 is parity (0 = no parity),Byte 6 is number of data bits.
        const controlData = new Uint8Array([baudRate & 0xFF, (baudRate >> 8) & 0xFF, (baudRate >> 16) & 0xFF, (baudRate >> 24) & 0xFF, 0, 0, 8]); // eslint-disable-line no-bitwise
        return this.device_.open()
            .then(() => configureDevice(this.device_, controlData, this))
            .then(() => readLoop())
            .catch(error => console.log(error));
    };

    serial.Port.prototype.disconnect = function () {
        this.device_.close();
    };

    serial.Port.prototype.send = function (data) {
        this.device_.transferOut(this.transferOut, data);
    };

    serial.Port.prototype.enterBootloader = function() {
        if(this.triggerIface === undefined) {
            throw("No trigger interface available");
        }

        console.log("Entering bootloader..");
        const DFU_DETACH_REQUEST = 0x00;
        const detachBuf = Buffer.from('0');
        return new Promise(resolve => {
            if(this.device_.opened) {
                resolve();
                return;
            }
            this.device_.open()
            .then(resolve);
        })
        .then(() => this.device_.claimInterface(this.triggerIface))
        .then(() => this.device_.controlTransferOut({
            requestType: 'class',
            recipient: 'interface',
            request: DFU_DETACH_REQUEST,
            value: 0x00,
            index: this.triggerIface }, detachBuf))
        .catch((error) => {
            throw(error);
        });
    }
})();

export {
    serial,
};
