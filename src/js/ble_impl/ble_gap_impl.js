const sd_ble_gap_adv_start = async (adapter, p_adv_params) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_adv_start_req_enc(p_adv_params, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_adv_start_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_device_name_get = async (adapter, p_dev_name, p_len) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_device_name_get_req_enc(p_dev_name, p_len, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_device_name_get_rsp_dec(buffer, length, p_dev_name, p_len, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_appearance_get = async (adapter, p_appearance) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_appearance_get_req_enc(p_appearance, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_appearance_get_rsp_dec(buffer, length, p_appearance, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_device_name_set = async (adapter, p_write_perm, p_dev_name, len) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_device_name_set_req_enc(p_write_perm, p_dev_name, len, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_device_name_set_rsp_dec(buffer, length, p_write_perm, p_dev_name, len, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_appearance_set = async (adapter, appearance) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_appearance_set_req_enc(appearance, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_appearance_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_ppcp_set = async (adapter, p_conn_params) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_ppcp_set_req_enc(p_conn_params, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_ppcp_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_adv_data_set = async (adapter, data_buffer, index, sr_data, sr_data_length) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_adv_data_set_req_enc(data_buffer, index, sr_data, sr_data_length, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_adv_data_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_conn_param_update = async (adapter, conn_handle, p_conn_params) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_conn_param_update_req_enc(conn_handle, p_conn_params, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_conn_param_update_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_disconnect = async (adapter, conn_handle, hci_status_code) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_disconnect_req_enc(conn_handle, hci_status_code, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_disconnect_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_sec_info_reply = async (adapter, conn_handle, p_enc_info, p_id_info, p_sign_info) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_sec_info_reply_req_enc(conn_handle, p_enc_info, p_id_info, p_sign_info, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_sec_info_reply_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_ppcp_get = async (adapter, p_conn_params) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_ppcp_get_req_enc(p_conn_params, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_ppcp_get_rsp_dec(buffer, length, p_conn_params, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_address_get = async (adapter, p_addr) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_addr_get_req_enc(p_addr, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_addr_get_rsp_dec(buffer, length, p_addr, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_address_set = async (adapter, p_addr) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_addr_set_req_enc(p_addr, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_addr_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_whitelist_set = async (adapter, pp_wl_addrs, len) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_whitelist_set_req_enc(pp_wl_addrs, len, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_whitelist_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_device_identities_set = async (adapter, pp_id_keys, pp_local_irks, len) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_device_identities_set_req_enc(pp_id_keys, pp_local_irks, len, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_device_identities_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_privacy_set = async (adapter, p_privacy_params) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_privacy_set_req_enc(p_privacy_params, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_privacy_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_privacy_get = async (adapter, p_privacy_params) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_privacy_set_get_enc(p_privacy_params, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_privacy_get_rsp_dec(buffer, length, p_privacy_params, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_adv_stop = async (adapter) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_adv_stop_req_enc(buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_adv_stop_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_auth_key_reply = async (adapter, conn_handle, key_type, key) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_auth_key_reply_req_enc(conn_handle, key_type, key, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_auth_key_reply_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_authenticate = async (adapter, conn_handle, p_sec_params) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_authenticate_req_enc(conn_handle, p_sec_params, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_authenticate_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_conn_sec_get = async (adapter, conn_handle, p_conn_sec) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_conn_sec_get_req_enc(conn_handle, p_conn_sec, buffer, length);
    const decode_function = (buffer, length, result) => {
        const p_p_conn_sec = emscriptenAllocPTP(p_conn_sec);
        const apiRes = emscriptenBindings.ble_gap_conn_sec_get_rsp_dec(buffer, length, p_p_conn_sec, result);
        emscriptenFreePTP(p_p_conn_sec);
        return apiRes;
    }
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_rssi_start = async (adapter, conn_handle, treshold_dbm, skip_count) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_rssi_start_req_enc(conn_handle, treshold_dbm, skip_count, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_rssi_start_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_rssi_stop = async (adapter, conn_handle) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_rssi_stop_req_enc(conn_handle, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_rssi_stop_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_tx_power_set = async (adapter, tx_power) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_tx_power_set_req_enc(tx_power, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_tx_power_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_scan_stop = async (adapter) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_scan_stop_req_enc(buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_scan_stop_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_connect = async (adapter, pAddr, pScanParams, pConnParams) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_connect_req_enc(pAddr, pScanParams, pConnParams, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_connect_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_connect_cancel = async (adapter) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_connect_cancel_req_enc(buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_connect_cancel_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_scan_start = async (adapter, scanParam) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_scan_start_req_enc(scanParam, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_scan_start_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_encrypt = async (adapter, conn_handle, p_master_id, p_enc_info) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_encrypt_req_enc(conn_handle, p_master_id, p_enc_info, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_encrypt_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_rssi_get = async (adapter, conn_handle, p_rssi) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_rssi_get_req_enc(conn_handle, p_rssi, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_rssi_get_rsp_dec(buffer, length, p_rssi, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_sec_params_reply = async (adapter, conn_handle, sec_status, p_sec_params, p_sec_keyset) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_sec_params_reply_req_enc(conn_handle, sec_status, p_sec_params, p_sec_keyset, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_sec_params_reply_rsp_dec(buffer, length, p_sec_keyset, result);

    // TODO: Create security context
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_lesc_oob_data_get = async (adapter, conn_handle, p_pk_own, p_oobd_own) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_lesc_oob_data_get_req_enc(conn_handle, p_pk_own, p_oobd_own, buffer, length);
    const decode_function = (buffer, length, result) => {
        const pp_oobd_own = emscriptenAllocPTP(p_oobd_own);
        const apiRes = emscriptenBindings.ble_gap_lesc_oob_data_get_rsp_dec(buffer, length, pp_oobd_own, result);
        emscriptenFreePTP(pp_oobd_own);
        return apiRes;
    }
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_lesc_oob_data_set = async (adapter, conn_handle, p_oobd_own, p_ppbd_peer) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_lesc_oob_data_set_req_enc(conn_handle, p_oobd_own, p_ppbd_peer, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_lesc_oob_data_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_lesc_dhkey_reply = async (adapter, conn_handle, p_dhkey) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_lesc_dhkey_reply_req_enc(conn_handle, p_dhkey, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_lesc_dhkey_reply_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
const sd_ble_gap_keypress_notify = async (adapter, conn_handle, kp_not) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_keypress_notify_req_enc(conn_handle, kp_not, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_keypress_notify_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};

/* sd_ble_gap_phy_update: Api version >= 5 */
/* sd_ble_gap_data_length_update: Api version >= 4 */
