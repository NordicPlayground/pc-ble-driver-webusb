const { encode_decode } = require('../ble_common')
const { emscriptenBindings } = require('../bindings/emscripten');
const { NRF_SD_BLE_API_VERSION } = require('../bindings/version');

module.exports.sd_ble_gattc_primary_services_discover = async (adapter, conn_handle, start_handle, p_srvc_uuid) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gattc_primary_services_discover_req_enc(conn_handle, start_handle, p_srvc_uuid._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gattc_primary_services_discover_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};

module.exports.sd_ble_gattc_relationships_discover  = async (adapter, conn_handle, p_handle_range) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gattc_relationships_discover_req_enc(conn_handle, p_handle_range._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gattc_relationships_discover_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};

module.exports.sd_ble_gattc_characteristics_discover = async (adapter, conn_handle, p_handle_range) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gattc_characteristics_discover_req_enc(conn_handle, p_handle_range._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gattc_characteristics_discover_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};

module.exports.sd_ble_gattc_descriptors_discover = async (adapter, conn_handle, p_handle_range) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gattc_descriptors_discover_req_enc(conn_handle, p_handle_range._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gattc_descriptors_discover_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};

module.exports.sd_ble_gattc_char_value_by_uuid_read = async (adapter, conn_handle, p_uuid, p_handle_range) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gattc_char_value_by_uuid_read_req_enc(conn_handle, p_uuid._getInternal(), p_handle_range._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gattc_char_value_by_uuid_read_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
}
module.exports.sd_ble_gattc_read = async (adapter, conn_handle, handle, offset) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gattc_read_req_enc(conn_handle, handle, offset, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gattc_read_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};

module.exports.sd_ble_gattc_char_values_read = async (adapter, conn_handle, p_handles, handle_count) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gattc_char_values_read_req_enc(conn_handle, p_handles, handle_count, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gattc_char_values_read_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};

module.exports.sd_ble_gattc_write = async (adapter, conn_handle, p_write_params) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gattc_write_req_enc(conn_handle, p_write_params._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gattc_write_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gattc_hv_confirm = async (adapter, conn_handle, handle) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gattc_hv_confirm_req_enc(conn_handle, handle, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gattc_hv_confirm_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};

module.exports.sd_ble_gattc_attr_info_discover = async (adapter, conn_handle, p_handle_range) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gattc_attr_info_discover_req_enc(conn_handle, p_handle_range._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gattc_attr_info_discover_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};

//let sd_ble_gattc_exchange_mtu_request;
if (NRF_SD_BLE_API_VERSION >= 3) {
    module.exports.sd_ble_gattc_exchange_mtu_request = async (adapter, conn_handle, client_rx_mtu) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gattc_exchange_mtu_request_req_enc(conn_handle, client_rx_mtu, buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gattc_exchange_mtu_request_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
}
