class AdapterInternal {
    constructor(serializationTransport) {
        this.eventCallback = null;
        this.statusCallback = null;
        this.logCallback = null;
        this.logseverityfilter = 0;
        this.transport = serializationTransport;
    }

    statusHandler(code, message) {
        this.statusCallback(this, code, message);
    }
    eventHandler(event) {
        this.eventCallback(this, event, event.length);
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
}
