class Transport{

    open(status_callback, data_callback, log_callback){
        this.statusCallback = status_callback;
        this.dataCallback = data_callback;
        this.logCallback = log_callback;

        return NRF_SUCCESS;
    }
    close(){
        return 0;
    }
    send(data){
        // Implement this
    }

}
//module.exports = Transport;
