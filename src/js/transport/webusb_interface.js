//const Transport = require('./transport');

//const NRF_SUCCESS = 0;

class WebusbInterface extends Transport{

    constructor(self){
        super();
        this.self = self;
        this.device = null;
    }
    open(status_callback, data_callback, log_callback){
        super.open(status_callback, data_callback, log_callback);



        //let device;
        return new Promise(resolve => {

            serial.requestPort().then(selectedPort => {
            this.port = selectedPort;
            this.webusbConnect(resolve);
        }).catch(error => {
          console.log("Could not connect to webusb")
        });

    });

    }


    webusbConnect(resolve) {
        console.log("Web usb is connecting..")
        this.port.onReceiveError = error => {
            console.error(error);
        };
        this.port.connect().then(() => {

        this.port.onReceive = this.dataReceived.bind(this);
        this.port.onReceiveError = error => {
            console.error(error);
            this.statusCallback(sd_rpc_app_status_t.IO_RESOURCES_UNAVAILABLE, "Lost connection to webusb device.");
        };
        //this.send(new Uint8Array([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0]));

        resolve(NRF_SUCCESS); // Connected!
        }, error => {
            console.log(error)
        });
    }

    async close(){
        return await this.port.disconnect();
    }

    dataReceived(data){


        data = new Uint8Array(data.buffer);
        this.dataCallback(data,data.length);
    }
    send(data){
        //console.log("Webusb sending data.. ")
        //console.log(data)
        if(!this.port) {
            return;
        }
        this.port.send(data);
    }

}

//module.exports = WebusbInterface;
