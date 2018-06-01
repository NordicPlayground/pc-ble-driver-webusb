let serial = {};

(function() {
  'use strict';

  serial.getPorts = function() {
    return navigator.usb.getDevices().then(devices => {
      return devices.map(device => new serial.Port(device));
    });
  };

  serial.requestPort = function() {
    const filters = [
      { 'vendorId': 0x1366, 'productId': 0x1015 },

    ];
    return navigator.usb.requestDevice({ 'filters': filters }).then(
      device => new serial.Port(device)
    );
  }

  serial.Port = function(device) {
    this.device_ = device;
  };

  serial.Port.prototype.connect = function() {
    let readLoop = () => {
      this.device_.transferIn(3, 512).then(result => {
        this.onReceive(result.data);
        readLoop();
      }, error => {
        this.onReceiveError(error);
      });
    };

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
            'requestType': 'vendor',
            'recipient': 'interface',
            'request': 0x01,
            'value': 0x40,
            'index': 0x00}))
        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x20,
            'value': 0x00,
            'index': 0x00}, new Uint8Array([0x80, 0x25, 0x00, 0x00, 0x00,0x00,0x08])))
        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x00,
            'index': 0x00}))
        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x00,
            'index': 0x00}))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x20,
            'value': 0x00,
            'index': 0x00}, new Uint8Array([0x80, 0x25, 0x00, 0x00, 0x00,0x00,0x08])))


        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x20,
            'value': 0x00,
            'index': 0x00}, new Uint8Array([0x00, 0xC2, 0x01, 0x00, 0x00,0x00,0x08])))
        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x00,
            'index': 0x00}))
        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x00,
            'index': 0x00}))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x20,
            'value': 0x00,
            'index': 0x00}, new Uint8Array([0x00, 0xC2, 0x01, 0x00, 0x00,0x00,0x08])))
        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x20,
            'value': 0x00,
            'index': 0x00}, new Uint8Array([0x00, 0xC2, 0x01, 0x00, 0x00,0x00,0x08])))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x00,
            'index': 0x00}))
        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x03,
            'index': 0x00}))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x20,
            'value': 0x00,
            'index': 0x00}, new Uint8Array([0x00, 0xC2, 0x01, 0x00, 0x00,0x00,0x08])))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x20,
            'value': 0x00,
            'index': 0x00}, new Uint8Array([0x00, 0xC2, 0x01, 0x00, 0x00,0x00,0x08])))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x03,
            'index': 0x00}))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x03,
            'index': 0x00}))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x20,
            'value': 0x00,
            'index': 0x00}, new Uint8Array([0x00, 0xC2, 0x01, 0x00, 0x00,0x00,0x08])))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x20,
            'value': 0x00,
            'index': 0x00}, new Uint8Array([0x00, 0xC2, 0x01, 0x00, 0x00,0x00,0x08])))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x03,
            'index': 0x00}))
        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x03,
            'index': 0x00}))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x20,
            'value': 0x00,
            'index': 0x00}, new Uint8Array([0x00, 0xC2, 0x01, 0x00, 0x00,0x00,0x08])))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x20,
            'value': 0x00,
            'index': 0x00}, new Uint8Array([0x00, 0xC2, 0x01, 0x00, 0x00,0x00,0x08])))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x03,
            'index': 0x00}))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x03,
            'index': 0x00}))

        .then(() => this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x20,
            'value': 0x00,
            'index': 0x00}, new Uint8Array([0x00, 0xC2, 0x01, 0x00, 0x00,0x00,0x08])))



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
