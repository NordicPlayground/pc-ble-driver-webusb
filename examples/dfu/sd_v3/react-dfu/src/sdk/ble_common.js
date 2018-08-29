/*global Module */
import { NRF_SUCCESS, NRF_ERROR_INTERNAL, sd_rpc_app_status_t } from './sd_rpc_types';

const SER_HAL_TRANSPORT_MAX_PKT_SIZE = 384;

async function encode_decode(adapter, encodeFunction, decodeFunction) {
    const txBufferLengthUint32 = SER_HAL_TRANSPORT_MAX_PKT_SIZE;
    const rxBufferLengthUint32 = 0;

    const txBufferLength = Module._malloc(4);
    const rxBufferLength = Module._malloc(4);
    Module.setValue(txBufferLength, txBufferLengthUint32, 'i32');
    Module.setValue(rxBufferLength, rxBufferLengthUint32, 'i32');


    const txBuffer = Module._malloc(SER_HAL_TRANSPORT_MAX_PKT_SIZE);
    const rxBuffer = Module._malloc(SER_HAL_TRANSPORT_MAX_PKT_SIZE);


    let errorMessage = '';


    let errCode = encodeFunction(txBuffer, txBufferLength);

    if (adapter.isInternalError(errCode)) {
        errorMessage += `Not able to encode packet. Code #${errCode}`;
        adapter.statusHandler(sd_rpc_app_status_t.PKT_ENCODE_ERROR, errorMessage);
        Module._free(txBuffer);
        Module._free(txBufferLength);
        Module._free(rxBuffer);
        Module._free(rxBufferLength);

        return NRF_ERROR_INTERNAL;
    }

    if (decodeFunction !== undefined) {
        errCode = await adapter.transport.send(
            txBuffer,
            txBufferLength,
            rxBuffer,
            rxBufferLength);
    } else {
        errCode = await adapter.transport.send(
            txBuffer,
            txBufferLength,
            0,
            rxBufferLength);
    }
    Module._free(txBuffer);
    Module._free(txBufferLength);

    if (adapter.isInternalError(errCode)) {
        const errorMessage = `Error sending packet to target. Code #${errCode}`;
        console.log(errorMessage);
        adapter.statusHandler(sd_rpc_app_status_t.PKT_SEND_ERROR, errorMessage);
        Module._free(rxBuffer);
        Module._free(rxBufferLength);

        return NRF_ERROR_INTERNAL;
    }

    const resultCode = Module._malloc(4);
    Module.setValue(resultCode, NRF_SUCCESS, 'i32');

    if (decodeFunction !== undefined) {
        const rxBufferLengthValue = Module.getValue(rxBufferLength, 'i32');
        errCode = decodeFunction(rxBuffer, rxBufferLengthValue, resultCode);
    }

    const resultCodeValue = Module.getValue(resultCode, 'i32');
    Module._free(resultCode);
    Module._free(rxBuffer);
    Module._free(rxBufferLength);

    if (adapter.isInternalError(errCode)) {
        throw errCode;
        const errorMessage = `Not able to decode packet. Code #${errCode}`;
        adapter.statusHandler(sd_rpc_app_status_t.PKT_DECODE_ERROR, errorMessage);
        return NRF_ERROR_INTERNAL;
    }
    return resultCodeValue;
}

/*module.exports =*/ export {
    encode_decode,
};
