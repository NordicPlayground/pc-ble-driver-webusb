const NRF_SUCCESS = 0;
const NRF_ERROR_INTERNAL = 3;
const NRF_ERROR_TIMEOUT = 13;
const NRF_ERROR_INVALID_DATA = 11;



class AdapterInternal {
    constructor(self, serializationTransport) {
        this.self = self;
        this.eventCallback = null;
        this.statusCallback = null;
        this.logCallback = null;
        this.logseverityfilter = 0
        this.transport = serializationTransport;
    }

    statusHandler(code, message){
    }
    eventHandler(event){
        this.eventCallback(this, event, event.length);
    }
    logHandler(severity, log_message){
        if(this.logseverityfilter <= severity) {
            this.logCallback(this, severity, log_message);
        }
    }

    async open(status_callback, event_callback, log_callback) {

        this.eventCallback = event_callback;
        this.statusCallback = status_callback;
        this.logCallback = log_callback;

        var boundStatusHandler = this.statusHandler.bind(this);
        var boundEventHandler = this.eventHandler.bind(this);
        var boundLogHandler = this.logHandler.bind(this);
        var res = await this.transport.open(boundStatusHandler, boundEventHandler, boundLogHandler);
        return res;
    }
    isInternalError(error_code){
        if(error_code !== NRF_SUCCESS){
            return true;
        }
        else {
            return false;
        }
    }
    logSeverityFilterSet(severity_filter){
        this.logseverityfilter = severity_filter;
        return NRF_SUCCESS;
    }

    async close() {
        return await this.transport.close();
    }



}
