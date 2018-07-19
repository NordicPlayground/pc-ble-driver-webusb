const sd_ble_gatts_service_add = async (adapter, type, p_uuid, p_handle) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gatts_service_add_req_enc(type, p_uuid._getInternal(), p_handle, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gatts_service_add_rsp_dec(buffer, length, p_handle, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gatts_include_add = async (adapter, service_handle, inc_srvc_handle, p_include_handle) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gatts_include_add_req_enc(service_handle, inc_srvc_handle, p_include_handle, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gatts_include_add_rsp_dec(buffer, length, p_include_handle, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gatts_characteristic_add = async (adapter, service_handle, p_char_md, p_attr_char_value, p_handles) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gatts_characteristic_add_req_enc(service_handle, p_char_md._getInternal(), p_attr_char_value._getInternal(), p_handles._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => {
        const value_handle = emscriptenAllocPTP(p_handles.value_handle.GETADDR());
        const apiRes = emscriptenBindings.ble_gatts_characteristic_add_rsp_dec(buffer, length, value_handle, result);
        emscriptenFreePTP(value_handle);
        return apiRes;
    };
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gatts_descriptor_add = async (adapter, char_handle, p_attr, p_handle) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gatts_descriptor_add_req_enc(char_handle, p_attr._getInternal(), p_handle, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gatts_descriptor_add_rsp_dec(buffer, length, p_handle, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gatts_value_set = async (adapter, conn_handle, handle, p_value) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gatts_value_set_req_enc(conn_handle, handle, p_value._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gatts_value_set_rsp_dec(buffer, length, p_value._getInternal(), result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gatts_value_get = async (adapter, conn_handle, handle, p_value) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gatts_value_get_req_enc(conn_handle, handle, p_value._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gatts_value_get_rsp_dec(buffer, length, p_value._getInternal(), result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gatts_hvx = async (adapter, conn_handle, p_hvx_params) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gatts_hvx_req_enc(conn_handle, p_hvx_params._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => {
        const p_p_hvx_params = emscriptenAllocPTP(p_hvx_params.p_len.GETADDR());
        const apiRes = emscriptenBindings.ble_gatts_hvx_rsp_dec(buffer, length, p_p_hvx_params, result);
        emscriptenFreePTP(p_p_hvx_params);
        return apiRes;
    };
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gatts_service_changed = async (adapter, conn_handle, start_handle, end_handle) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gatts_service_changed_req_enc(conn_handle, start_handle, end_handle, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gatts_service_changed_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gatts_rw_authorize_reply = async (adapter, conn_handle, p_rw_authorize_reply_params) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gatts_rw_authorize_reply_req_enc(conn_handle, p_rw_authorize_reply_params._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gatts_rw_authorize_reply_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gatts_sys_attr_set = async (adapter, conn_handle, p_sys_attr_data, flags) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gatts_sys_attr_set_req_enc(conn_handle, p_sys_attr_data, flags, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gatts_sys_attr_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gatts_sys_attr_get = async (adapter, conn_handle, p_sys_attr_data, p_len, flags) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gatts_sys_attr_get_req_enc(conn_handle, p_sys_attr_data, p_len, flags, buffer, length);

    let decode_function;
    if (NRF_SD_BLE_API_VERSION == 2) {
        decode_function = (buffer, length, result) => emscriptenBindings.ble_gatts_sys_attr_get_rsp_dec(buffer, length, p_sys_attr_data, p_len, result);
    } else {
        decode_function = (buffer, length, result) => {
            const p_p_sys_attr_data = emscriptenAllocPTP(p_sys_attr_data);
            const p_p_len = emscriptenAllocPTP(p_len);
            const apiRes = emscriptenBindings.ble_gatts_sys_attr_get_rsp_dec(buffer, length, p_p_sys_attr_data, p_p_len, result);
            emscriptenFreePTP(p_p_len);
            emscriptenFreePTP(p_p_sys_attr_data);
            return apiRes;
        };
    }
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gatts_initial_user_handle_get = async (adapter, p_handle) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gatts_initial_user_handle_get_req_enc(p_handle, buffer, length);
    const decode_function = (buffer, length, result) => {
        const p_p_handle = emscriptenAllocPTP(p_handle);
        const apiRes = emscriptenBindings.ble_gatts_initial_user_handle_get_rsp_dec(buffer, length, p_p_handle, result);
        emscriptenFreePTP(p_p_handle);
        return apiRes;
    };
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gatts_attr_get = async (adapter, handle, p_uuid, p_md) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gatts_attr_get_req_enc(handle, p_uuid._getInternal(), p_md._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => {
        const p_p_uuid = emscriptenAllocPTP(p_uuid._getInternal());
        const p_p_md = emscriptenAllocPTP(p_md._getInternal());
        const apiRes = emscriptenBindings.ble_gatts_attr_get_rsp_dec(buffer, length, p_p_uuid, p_p_md, result);
        emscriptenFreePTP(p_p_uuid);
        emscriptenFreePTP(p_p_md);
        return apiRes;
    };
    return encode_decode(adapter, encode_function, decode_function);
};
let sd_ble_gatts_exchange_mtu_reply;
if (NRF_SD_BLE_API_VERSION >= 3) {
    sd_ble_gatts_exchange_mtu_reply = async (adapter, conn_handle, server_rx_mtu) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gatts_exchange_mtu_reply_req_enc(conn_handle, server_rx_mtu, buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gatts_exchange_mtu_reply_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
}
