const SER_HAL_TRANSPORT_MAX_PKT_SIZE = 384;
/*
const sd_rpc_app_status_t = Object.freeze({
    PKT_SEND_MAX_RETRIES_REACHED:0,
    PKT_UNEXPECTED:1,
    PKT_ENCODE_ERROR:2,
    PKT_DECODE_ERROR:3,
    PKT_SEND_ERROR:4,
    IO_RESOURCES_UNAVAILABLE:5,
    RESET_PERFORMED:6,
    CONNECTION_ACTIVE:7
});*/


async function encode_decode(adapter, encode_function, decode_function)
{

    let tx_buffer_length_uint32 = SER_HAL_TRANSPORT_MAX_PKT_SIZE;
    let rx_buffer_length_uint32 = 0;

    let tx_buffer_length = Module._malloc(4);
    let rx_buffer_length = Module._malloc(4);
    Module.setValue(tx_buffer_length, tx_buffer_length_uint32, "i32");
    Module.setValue(rx_buffer_length, rx_buffer_length_uint32, "i32");


    let tx_buffer = Module._malloc(SER_HAL_TRANSPORT_MAX_PKT_SIZE);
    let rx_buffer = Module._malloc(SER_HAL_TRANSPORT_MAX_PKT_SIZE);


    let error_message = "";

    //auto _adapter = static_cast<AdapterInternal*>(adapter->internal);

    let err_code = encode_function(tx_buffer, tx_buffer_length);

    if (adapter.isInternalError(err_code))
    {
        error_message += "Not able to encode packet. Code #" + err_code;
        adapter.statusHandler(sd_rpc_app_status_t.PKT_ENCODE_ERROR, error_message);
        Module._free(tx_buffer);
        Module._free(tx_buffer_length);
        Module._free(rx_buffer);
        Module._free(rx_buffer_length);

        return NRF_ERROR_INTERNAL;
    }

    if (decode_function !== undefined)
    {
        err_code = await adapter.transport.send(
            tx_buffer,
            tx_buffer_length,
            rx_buffer,
            rx_buffer_length);
    }
    else
    {
        err_code = await adapter.transport.send(
            tx_buffer,
            tx_buffer_length,
            nullptr,
            rx_buffer_length);
    }
    Module._free(tx_buffer);
    Module._free(tx_buffer_length);

    if (adapter.isInternalError(err_code))
    {
        //error_message << "Error sending packet to target. Code #" << err_code;
        let error_message = "Error sending packet to target. Code #" + err_code;
        console.log(error_message);
        adapter.statusHandler(sd_rpc_app_status_t.PKT_SEND_ERROR, error_message);
        Module._free(rx_buffer);
        Module._free(rx_buffer_length);

        return NRF_ERROR_INTERNAL;
    }

    let result_code = Module._malloc(4);
    Module.setValue(result_code, NRF_SUCCESS, "i32");

    if (decode_function !== undefined)
    {
        let rx_buffer_length_value = Module.getValue(rx_buffer_length, "i32");
        err_code = decode_function(rx_buffer, rx_buffer_length_value, result_code);
    }
    let result_code_value = Module.getValue(result_code, "i32");
    Module._free(result_code);
    Module._free(rx_buffer);
    Module._free(rx_buffer_length);

    if (adapter.isInternalError(err_code))
    {
        //error_message << "Not able to decode packet. Code #" << err_code;
        let error_message = "Not able to decode packet. Code #" + err_code;
        adapter.statusHandler(sd_rpc_app_status_t.PKT_DECODE_ERROR, error_message);
        return NRF_ERROR_INTERNAL;
    }

    return result_code_value;
}
