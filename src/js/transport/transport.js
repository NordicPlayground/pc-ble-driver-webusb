class Transport {
    open(statusCallback, dataCallback, logCallback) {
        this.statusCallback = statusCallback;
        this.dataCallback = dataCallback;
        this.logCallback = logCallback;

        return NRF_SUCCESS;
    }
}
