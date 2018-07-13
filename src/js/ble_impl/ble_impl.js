const sd_ble_uuid_encode = async (adapter, p_uuid, p_uuid_le_len, p_uuid_le) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_uuid_encode_req_enc(p_uuid, p_uuid_le_len, p_uuid_le, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_uuid_encode_rsp_dec(buffer, length, p_uuid_le_len, p_uuid_le, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_tx_packet_count_get = async (adapter, conn_handle, p_count) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_tx_packet_count_get_req_enc(conn_handle, p_count, buffer, length);
    const decode_function = (buffer, length, result) => {
        const p_p_count = emscriptenAllocPTP(p_count);
        const apiRes = emscriptenBindings.ble_tx_packet_count_get_rsp_dec(buffer, length, p_p_count, result);
        emscriptenFreePTP(p_p_count);
        return apiRes;
    };
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_uuid_vs_add = async (adapter, p_vs_uuid, p_uuid_type) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_uuid_vs_add_req_enc(p_vs_uuid, p_uuid_type, buffer, length);
    const decode_function = (buffer, length, result) => {
        const p_p_uuid_type = emscriptenAllocPTP(p_uuid_type);
        let apiRes =  emscriptenBindings.ble_uuid_vs_add_rsp_dec(buffer, length, p_p_uuid_type, result);
        emscriptenFreePTP(p_p_uuid_type);
        return apiRes;
    };
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_uuid_decode = async (adapter, uuid_le_len, p_uuid_le, p_uuid) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_uuid_decode_req_enc(uuid_le_len, p_uuid_le, p_uuid, buffer, length);
    const decode_function = (buffer, length, result) => {
        const p_p_uuid = emscriptenAllocPTP(p_uuid);
        const apiRes = emscriptenBindings.ble_uuid_decode_rsp_dec(buffer, length, p_p_uuid, result);
        emscriptenFreePTP(p_p_uuid);
        return apiRes;
    };
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_version_get = async (adapter, p_version) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_version_get_req_enc(p_version, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_version_get_rsp_dec(buffer, length, p_version, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_opt_get = async (adapter, opt_id, p_opt) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_opt_get_req_enc(opt_id, p_opt, buffer, length);
    const decode_function = (buffer, length, result) => {
        const p_opt_id = emscriptenAllocPTP(opt_id);
        const apiRes = emscriptenBindings.ble_opt_get_rsp_dec(buffer, length, p_opt_id, result);
        emscriptenFreePTP(p_opt_id);
        return apiRes;
    };
    return encode_decode(adapter, encode_function, decode_function);
};

const sd_ble_opt_set = async (adapter, opt_id, p_opt) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_opt_set_req_enc(opt_id, p_opt, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_opt_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};

/* const sd_ble_cfg_set -- NRF_SD_BLE_API_VERSION >= 5 */
const sd_ble_enable = async (adapter, p_params, p_app_ram_base) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_enable_req_enc(p_params, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_enable_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_user_mem_reply = async (adapter, conn_handle, p_block) => {
    if (p_block !== null) {
        return NRF_ERROR_INVALID_PARAM;
    }
    const encode_function = (buffer, length) => emscriptenBindings.ble_user_mem_reply_req_enc(conn_handle, p_block, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_user_mem_reply_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
