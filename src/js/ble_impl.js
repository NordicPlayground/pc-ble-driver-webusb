async function sd_ble_enable(adapter, p_params, p_app_ram_base)
{
    function encode_function(buffer, length) {
        return emscriptenBindings.ble_enable_req_enc(p_params, buffer, length);
    };

    function decode_function(buffer, length, result) {
      return emscriptenBindings.ble_enable_rsp_dec(buffer, length, result);
    };

    return await encode_decode(adapter, encode_function, decode_function);
}

async function sd_ble_gap_adv_data_set(adapter, data_buffer, index, sr_data, sr_data_length)
{
    function encode_function(buffer, length) {
      return emscriptenBindings.ble_gap_adv_data_set_req_enc(data_buffer, index, sr_data, sr_data_length, buffer, length);
    };

    function decode_function(buffer, length, result) {
      return emscriptenBindings.ble_gap_adv_data_set_rsp_dec(buffer, length, result);
    };

    return await encode_decode(adapter, encode_function, decode_function);
}


async function sd_ble_gap_scan_start(adapter, scanParam) {

    function encode_function(buffer, length) {
      return emscriptenBindings.ble_gap_scan_start_req_enc(scanParam, buffer, length);
    };

    function decode_function(buffer, length, result) {
      return emscriptenBindings.ble_gap_scan_start_rsp_dec(buffer, length, result);
    };

    return await encode_decode(adapter, encode_function, decode_function);
}

async function sd_ble_gap_connect(adapter, pAddr, pScanParams, pConnParams) {

    function encode_function(buffer, length) {
      return emscriptenBindings.ble_gap_connect_req_enc(pAddr, pScanParams, pConnParams, buffer, length);
    };

    function decode_function(buffer, length, result) {
      return emscriptenBindings.ble_gap_connect_rsp_dec(buffer, length, result);
    };

    return await encode_decode(adapter, encode_function, decode_function);
}

async function sd_ble_gatts_characteristic_add(adapter, service_handle, p_char_md, p_attr_char_value, p_handles) {

    function encode_function(buffer, length) {
      return emscriptenBindings.ble_gatts_characteristic_add_req_enc(service_handle, p_char_md, p_attr_char_value, p_handles, buffer, length);
    };

    function decode_function(buffer, length, result) {
      let p_p_handle = Module._malloc(2); // Decoder requires a pointer to a value handle pointer.
      Module.HEAPU8.set(new Uint16Array([p_handles]), p_p_handle);
      let res = emscriptenBindings.ble_gatts_characteristic_add_rsp_dec(buffer, length, p_p_handle, result);
      Module._free(p_p_handle);
      return res;
    };

    return await encode_decode(adapter, encode_function, decode_function);
}

async function sd_ble_gatts_service_add(adapter, type, p_uuid, p_handle) {

    function encode_function(buffer, length) {
      return emscriptenBindings.ble_gatts_service_add_req_enc(type, p_uuid, p_handle, buffer, length);
    };

    function decode_function(buffer, length, result) {
      return emscriptenBindings.ble_gatts_service_add_rsp_dec(buffer, length, p_handle, result);
    };

    return await encode_decode(adapter, encode_function, decode_function);
}
