const { NRF_SUCCESS } = require('../sd_rpc_types');

class Transport {
    open(statusCallback, dataCallback, logCallback) {
        this.statusCallback = statusCallback;
        this.dataCallback = dataCallback;
        this.logCallback = logCallback;

        return NRF_SUCCESS;
    }
}
module.exports = {
    Transport,
};
