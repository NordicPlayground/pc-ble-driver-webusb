import EventEmitter from 'events';
import { NRF_SUCCESS } from '../sd_rpc_types';

class Transport extends EventEmitter {
    open(statusCallback, dataCallback, logCallback) {
        this.statusCallback = statusCallback;
        this.dataCallback = dataCallback;
        this.logCallback = logCallback;

        return NRF_SUCCESS;
    }
}
/*module.exports =*/ export {
    Transport,
};
