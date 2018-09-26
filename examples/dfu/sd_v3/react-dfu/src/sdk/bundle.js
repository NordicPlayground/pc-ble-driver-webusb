(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports.emscriptenBindings = {'ble_uuid_encode_req_enc': Module.cwrap('emscripten_ble_uuid_encode_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_uuid_encode_rsp_dec': Module.cwrap('emscripten_ble_uuid_encode_rsp_dec', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_uuid_decode_req_enc': Module.cwrap('emscripten_ble_uuid_decode_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_uuid_decode_rsp_dec': Module.cwrap('emscripten_ble_uuid_decode_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_uuid_vs_add_req_enc': Module.cwrap('emscripten_ble_uuid_vs_add_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_uuid_vs_add_rsp_dec': Module.cwrap('emscripten_ble_uuid_vs_add_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_version_get_req_enc': Module.cwrap('emscripten_ble_version_get_req_enc', 'number', ['number', 'number', 'number']),
'ble_version_get_rsp_dec': Module.cwrap('emscripten_ble_version_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_opt_set_req_enc': Module.cwrap('emscripten_ble_opt_set_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_opt_set_rsp_dec': Module.cwrap('emscripten_ble_opt_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_enable_req_enc': Module.cwrap('emscripten_ble_enable_req_enc', 'number', ['number', 'number']),
'ble_enable_rsp_dec': Module.cwrap('emscripten_ble_enable_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_opt_get_req_enc': Module.cwrap('emscripten_ble_opt_get_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_opt_get_rsp_dec': Module.cwrap('emscripten_ble_opt_get_rsp_dec', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_user_mem_reply_req_enc': Module.cwrap('emscripten_ble_user_mem_reply_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_user_mem_reply_rsp_dec': Module.cwrap('emscripten_ble_user_mem_reply_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_cfg_set_req_enc': Module.cwrap('emscripten_ble_cfg_set_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_cfg_set_rsp_dec': Module.cwrap('emscripten_ble_cfg_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_event_dec': Module.cwrap('emscripten_ble_event_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_evt_user_mem_request_dec': Module.cwrap('emscripten_ble_evt_user_mem_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_evt_user_mem_release_dec': Module.cwrap('emscripten_ble_evt_user_mem_release_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_adv_data_set_req_enc': Module.cwrap('emscripten_ble_gap_adv_data_set_req_enc', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
'ble_gap_adv_data_set_rsp_dec': Module.cwrap('emscripten_ble_gap_adv_data_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_adv_start_req_enc': Module.cwrap('emscripten_ble_gap_adv_start_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_adv_start_rsp_dec': Module.cwrap('emscripten_ble_gap_adv_start_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_tx_power_set_req_enc': Module.cwrap('emscripten_ble_gap_tx_power_set_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_tx_power_set_rsp_dec': Module.cwrap('emscripten_ble_gap_tx_power_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_appearance_get_req_enc': Module.cwrap('emscripten_ble_gap_appearance_get_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_appearance_get_rsp_dec': Module.cwrap('emscripten_ble_gap_appearance_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_appearance_set_req_enc': Module.cwrap('emscripten_ble_gap_appearance_set_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_appearance_set_rsp_dec': Module.cwrap('emscripten_ble_gap_appearance_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_device_name_get_req_enc': Module.cwrap('emscripten_ble_gap_device_name_get_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_device_name_get_rsp_dec': Module.cwrap('emscripten_ble_gap_device_name_get_rsp_dec', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_device_name_set_req_enc': Module.cwrap('emscripten_ble_gap_device_name_set_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_device_name_set_rsp_dec': Module.cwrap('emscripten_ble_gap_device_name_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_ppcp_set_req_enc': Module.cwrap('emscripten_ble_gap_ppcp_set_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_ppcp_set_rsp_dec': Module.cwrap('emscripten_ble_gap_ppcp_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_conn_param_update_req_enc': Module.cwrap('emscripten_ble_gap_conn_param_update_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_conn_param_update_rsp_dec': Module.cwrap('emscripten_ble_gap_conn_param_update_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_disconnect_req_enc': Module.cwrap('emscripten_ble_gap_disconnect_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_disconnect_rsp_dec': Module.cwrap('emscripten_ble_gap_disconnect_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_rssi_stop_req_enc': Module.cwrap('emscripten_ble_gap_rssi_stop_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_rssi_stop_rsp_dec': Module.cwrap('emscripten_ble_gap_rssi_stop_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_ppcp_get_req_enc': Module.cwrap('emscripten_ble_gap_ppcp_get_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_ppcp_get_rsp_dec': Module.cwrap('emscripten_ble_gap_ppcp_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_auth_key_reply_req_enc': Module.cwrap('emscripten_ble_gap_auth_key_reply_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_auth_key_reply_rsp_dec': Module.cwrap('emscripten_ble_gap_auth_key_reply_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_sec_info_reply_req_enc': Module.cwrap('emscripten_ble_gap_sec_info_reply_req_enc', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
'ble_gap_sec_info_reply_rsp_dec': Module.cwrap('emscripten_ble_gap_sec_info_reply_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_sec_params_reply_req_enc': Module.cwrap('emscripten_ble_gap_sec_params_reply_req_enc', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
'ble_gap_sec_params_reply_rsp_dec': Module.cwrap('emscripten_ble_gap_sec_params_reply_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_authenticate_req_enc': Module.cwrap('emscripten_ble_gap_authenticate_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_authenticate_rsp_dec': Module.cwrap('emscripten_ble_gap_authenticate_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_adv_stop_req_enc': Module.cwrap('emscripten_ble_gap_adv_stop_req_enc', 'number', ['number', 'number']),
'ble_gap_adv_stop_rsp_dec': Module.cwrap('emscripten_ble_gap_adv_stop_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_conn_sec_get_req_enc': Module.cwrap('emscripten_ble_gap_conn_sec_get_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_conn_sec_get_rsp_dec': Module.cwrap('emscripten_ble_gap_conn_sec_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_rssi_start_req_enc': Module.cwrap('emscripten_ble_gap_rssi_start_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_rssi_start_rsp_dec': Module.cwrap('emscripten_ble_gap_rssi_start_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_scan_stop_req_enc': Module.cwrap('emscripten_ble_gap_scan_stop_req_enc', 'number', ['number', 'number']),
'ble_gap_scan_stop_rsp_dec': Module.cwrap('emscripten_ble_gap_scan_stop_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_scan_start_req_enc': Module.cwrap('emscripten_ble_gap_scan_start_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_scan_start_rsp_dec': Module.cwrap('emscripten_ble_gap_scan_start_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_connect_req_enc': Module.cwrap('emscripten_ble_gap_connect_req_enc', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
'ble_gap_connect_rsp_dec': Module.cwrap('emscripten_ble_gap_connect_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_connect_cancel_req_enc': Module.cwrap('emscripten_ble_gap_connect_cancel_req_enc', 'number', ['number', 'number']),
'ble_gap_connect_cancel_rsp_dec': Module.cwrap('emscripten_ble_gap_connect_cancel_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_encrypt_req_enc': Module.cwrap('emscripten_ble_gap_encrypt_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_encrypt_rsp_dec': Module.cwrap('emscripten_ble_gap_encrypt_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_rssi_get_req_enc': Module.cwrap('emscripten_ble_gap_rssi_get_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_rssi_get_rsp_dec': Module.cwrap('emscripten_ble_gap_rssi_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_keypress_notify_req_enc': Module.cwrap('emscripten_ble_gap_keypress_notify_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_keypress_notify_rsp_dec': Module.cwrap('emscripten_ble_gap_keypress_notify_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_lesc_dhkey_reply_req_enc': Module.cwrap('emscripten_ble_gap_lesc_dhkey_reply_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_lesc_dhkey_reply_rsp_dec': Module.cwrap('emscripten_ble_gap_lesc_dhkey_reply_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_lesc_oob_data_set_req_enc': Module.cwrap('emscripten_ble_gap_lesc_oob_data_set_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_lesc_oob_data_set_rsp_dec': Module.cwrap('emscripten_ble_gap_lesc_oob_data_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_lesc_oob_data_get_req_enc': Module.cwrap('emscripten_ble_gap_lesc_oob_data_get_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_lesc_oob_data_get_rsp_dec': Module.cwrap('emscripten_ble_gap_lesc_oob_data_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_addr_get_req_enc': Module.cwrap('emscripten_ble_gap_addr_get_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_addr_get_rsp_dec': Module.cwrap('emscripten_ble_gap_addr_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_addr_set_req_enc': Module.cwrap('emscripten_ble_gap_addr_set_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_addr_set_rsp_dec': Module.cwrap('emscripten_ble_gap_addr_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_privacy_set_req_enc': Module.cwrap('emscripten_ble_gap_privacy_set_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_privacy_set_rsp_dec': Module.cwrap('emscripten_ble_gap_privacy_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_privacy_get_req_enc': Module.cwrap('emscripten_ble_gap_privacy_get_req_enc', 'number', ['number', 'number', 'number']),
'ble_gap_privacy_get_rsp_dec': Module.cwrap('emscripten_ble_gap_privacy_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_whitelist_set_req_enc': Module.cwrap('emscripten_ble_gap_whitelist_set_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_whitelist_set_rsp_dec': Module.cwrap('emscripten_ble_gap_whitelist_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_device_identities_set_req_enc': Module.cwrap('emscripten_ble_gap_device_identities_set_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_device_identities_set_rsp_dec': Module.cwrap('emscripten_ble_gap_device_identities_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_data_length_update_req_enc': Module.cwrap('emscripten_ble_gap_data_length_update_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gap_data_length_update_rsp_dec': Module.cwrap('emscripten_ble_gap_data_length_update_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_phy_update_req_enc': Module.cwrap('emscripten_ble_gap_phy_update_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_phy_update_rsp_dec': Module.cwrap('emscripten_ble_gap_phy_update_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gap_evt_auth_key_request_dec': Module.cwrap('emscripten_ble_gap_evt_auth_key_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_auth_status_dec': Module.cwrap('emscripten_ble_gap_evt_auth_status_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_conn_param_update_dec': Module.cwrap('emscripten_ble_gap_evt_conn_param_update_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_conn_sec_update_dec': Module.cwrap('emscripten_ble_gap_evt_conn_sec_update_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_connected_dec': Module.cwrap('emscripten_ble_gap_evt_connected_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_disconnected_dec': Module.cwrap('emscripten_ble_gap_evt_disconnected_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_passkey_display_dec': Module.cwrap('emscripten_ble_gap_evt_passkey_display_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_rssi_changed_dec': Module.cwrap('emscripten_ble_gap_evt_rssi_changed_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_sec_info_request_dec': Module.cwrap('emscripten_ble_gap_evt_sec_info_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_sec_params_request_dec': Module.cwrap('emscripten_ble_gap_evt_sec_params_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_timeout_dec': Module.cwrap('emscripten_ble_gap_evt_timeout_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_sec_request_dec': Module.cwrap('emscripten_ble_gap_evt_sec_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_conn_param_update_request_dec': Module.cwrap('emscripten_ble_gap_evt_conn_param_update_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_adv_report_dec': Module.cwrap('emscripten_ble_gap_evt_adv_report_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_scan_req_report_dec': Module.cwrap('emscripten_ble_gap_evt_scan_req_report_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_key_pressed_dec': Module.cwrap('emscripten_ble_gap_evt_key_pressed_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_lesc_dhkey_request_dec': Module.cwrap('emscripten_ble_gap_evt_lesc_dhkey_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_phy_update_dec': Module.cwrap('emscripten_ble_gap_evt_phy_update_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_phy_update_request_dec': Module.cwrap('emscripten_ble_gap_evt_phy_update_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_data_length_update_request_dec': Module.cwrap('emscripten_ble_gap_evt_data_length_update_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gap_evt_data_length_update_dec': Module.cwrap('emscripten_ble_gap_evt_data_length_update_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_primary_services_discover_req_enc': Module.cwrap('emscripten_ble_gattc_primary_services_discover_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gattc_primary_services_discover_rsp_dec': Module.cwrap('emscripten_ble_gattc_primary_services_discover_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_descriptors_discover_req_enc': Module.cwrap('emscripten_ble_gattc_descriptors_discover_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_descriptors_discover_rsp_dec': Module.cwrap('emscripten_ble_gattc_descriptors_discover_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_relationships_discover_req_enc': Module.cwrap('emscripten_ble_gattc_relationships_discover_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_relationships_discover_rsp_dec': Module.cwrap('emscripten_ble_gattc_relationships_discover_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_characteristics_discover_req_enc': Module.cwrap('emscripten_ble_gattc_characteristics_discover_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_characteristics_discover_rsp_dec': Module.cwrap('emscripten_ble_gattc_characteristics_discover_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_read_req_enc': Module.cwrap('emscripten_ble_gattc_read_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gattc_read_rsp_dec': Module.cwrap('emscripten_ble_gattc_read_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_char_values_read_req_enc': Module.cwrap('emscripten_ble_gattc_char_values_read_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gattc_char_values_read_rsp_dec': Module.cwrap('emscripten_ble_gattc_char_values_read_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_write_req_enc': Module.cwrap('emscripten_ble_gattc_write_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_write_rsp_dec': Module.cwrap('emscripten_ble_gattc_write_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_hv_confirm_req_enc': Module.cwrap('emscripten_ble_gattc_hv_confirm_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_hv_confirm_rsp_dec': Module.cwrap('emscripten_ble_gattc_hv_confirm_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_char_value_by_uuid_read_req_enc': Module.cwrap('emscripten_ble_gattc_char_value_by_uuid_read_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gattc_char_value_by_uuid_read_rsp_dec': Module.cwrap('emscripten_ble_gattc_char_value_by_uuid_read_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_attr_info_discover_req_enc': Module.cwrap('emscripten_ble_gattc_attr_info_discover_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_attr_info_discover_rsp_dec': Module.cwrap('emscripten_ble_gattc_attr_info_discover_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_exchange_mtu_request_req_enc': Module.cwrap('emscripten_ble_gattc_exchange_mtu_request_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_exchange_mtu_request_rsp_dec': Module.cwrap('emscripten_ble_gattc_exchange_mtu_request_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gattc_evt_char_disc_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_char_disc_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_char_val_by_uuid_read_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_char_val_by_uuid_read_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_char_vals_read_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_char_vals_read_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_desc_disc_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_desc_disc_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_hvx_dec': Module.cwrap('emscripten_ble_gattc_evt_hvx_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_prim_srvc_disc_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_prim_srvc_disc_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_read_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_read_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_rel_disc_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_rel_disc_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_timeout_dec': Module.cwrap('emscripten_ble_gattc_evt_timeout_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_write_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_write_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_attr_info_disc_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_attr_info_disc_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_exchange_mtu_rsp_dec': Module.cwrap('emscripten_ble_gattc_evt_exchange_mtu_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gattc_evt_write_cmd_tx_complete_dec': Module.cwrap('emscripten_ble_gattc_evt_write_cmd_tx_complete_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_value_get_req_enc': Module.cwrap('emscripten_ble_gatts_value_get_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_value_get_rsp_dec': Module.cwrap('emscripten_ble_gatts_value_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_hvx_req_enc': Module.cwrap('emscripten_ble_gatts_hvx_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_hvx_rsp_dec': Module.cwrap('emscripten_ble_gatts_hvx_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_characteristic_add_req_enc': Module.cwrap('emscripten_ble_gatts_characteristic_add_req_enc', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
'ble_gatts_characteristic_add_rsp_dec': Module.cwrap('emscripten_ble_gatts_characteristic_add_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_service_add_req_enc': Module.cwrap('emscripten_ble_gatts_service_add_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_service_add_rsp_dec': Module.cwrap('emscripten_ble_gatts_service_add_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_sys_attr_set_req_enc': Module.cwrap('emscripten_ble_gatts_sys_attr_set_req_enc', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
'ble_gatts_sys_attr_set_rsp_dec': Module.cwrap('emscripten_ble_gatts_sys_attr_set_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gatts_value_set_req_enc': Module.cwrap('emscripten_ble_gatts_value_set_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_value_set_rsp_dec': Module.cwrap('emscripten_ble_gatts_value_set_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_sys_attr_get_req_enc': Module.cwrap('emscripten_ble_gatts_sys_attr_get_req_enc', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
'ble_gatts_sys_attr_get_rsp_dec': Module.cwrap('emscripten_ble_gatts_sys_attr_get_rsp_dec', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_descriptor_add_req_enc': Module.cwrap('emscripten_ble_gatts_descriptor_add_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_descriptor_add_rsp_dec': Module.cwrap('emscripten_ble_gatts_descriptor_add_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_include_add_req_enc': Module.cwrap('emscripten_ble_gatts_include_add_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_include_add_rsp_dec': Module.cwrap('emscripten_ble_gatts_include_add_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_rw_authorize_reply_req_enc': Module.cwrap('emscripten_ble_gatts_rw_authorize_reply_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_rw_authorize_reply_rsp_dec': Module.cwrap('emscripten_ble_gatts_rw_authorize_reply_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gatts_service_changed_req_enc': Module.cwrap('emscripten_ble_gatts_service_changed_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_service_changed_rsp_dec': Module.cwrap('emscripten_ble_gatts_service_changed_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gatts_attr_get_req_enc': Module.cwrap('emscripten_ble_gatts_attr_get_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_attr_get_rsp_dec': Module.cwrap('emscripten_ble_gatts_attr_get_rsp_dec', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_gatts_initial_user_handle_get_req_enc': Module.cwrap('emscripten_ble_gatts_initial_user_handle_get_req_enc', 'number', ['number', 'number', 'number']),
'ble_gatts_initial_user_handle_get_rsp_dec': Module.cwrap('emscripten_ble_gatts_initial_user_handle_get_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_exchange_mtu_reply_req_enc': Module.cwrap('emscripten_ble_gatts_exchange_mtu_reply_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_exchange_mtu_reply_rsp_dec': Module.cwrap('emscripten_ble_gatts_exchange_mtu_reply_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_gatts_evt_hvc_dec': Module.cwrap('emscripten_ble_gatts_evt_hvc_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_evt_rw_authorize_request_dec': Module.cwrap('emscripten_ble_gatts_evt_rw_authorize_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_evt_sc_confirm_dec': Module.cwrap('emscripten_ble_gatts_evt_sc_confirm_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_evt_sys_attr_missing_dec': Module.cwrap('emscripten_ble_gatts_evt_sys_attr_missing_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_evt_timeout_dec': Module.cwrap('emscripten_ble_gatts_evt_timeout_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_evt_write_dec': Module.cwrap('emscripten_ble_gatts_evt_write_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_evt_exchange_mtu_request_dec': Module.cwrap('emscripten_ble_gatts_evt_exchange_mtu_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_gatts_evt_hvn_tx_complete_dec': Module.cwrap('emscripten_ble_gatts_evt_hvn_tx_complete_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_l2cap_ch_setup_req_enc': Module.cwrap('emscripten_ble_l2cap_ch_setup_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_l2cap_ch_setup_rsp_dec': Module.cwrap('emscripten_ble_l2cap_ch_setup_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_l2cap_ch_release_req_enc': Module.cwrap('emscripten_ble_l2cap_ch_release_req_enc', 'number', ['number', 'number', 'number', 'number']),
'ble_l2cap_ch_release_rsp_dec': Module.cwrap('emscripten_ble_l2cap_ch_release_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_l2cap_ch_rx_req_enc': Module.cwrap('emscripten_ble_l2cap_ch_rx_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_l2cap_ch_rx_rsp_dec': Module.cwrap('emscripten_ble_l2cap_ch_rx_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_l2cap_ch_tx_req_enc': Module.cwrap('emscripten_ble_l2cap_ch_tx_req_enc', 'number', ['number', 'number', 'number', 'number', 'number']),
'ble_l2cap_ch_tx_rsp_dec': Module.cwrap('emscripten_ble_l2cap_ch_tx_rsp_dec', 'number', ['number', 'number', 'number']),
'ble_l2cap_ch_flow_control_req_enc': Module.cwrap('emscripten_ble_l2cap_ch_flow_control_req_enc', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
'ble_l2cap_ch_flow_control_rsp_dec': Module.cwrap('emscripten_ble_l2cap_ch_flow_control_rsp_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_l2cap_evt_ch_setup_request_dec': Module.cwrap('emscripten_ble_l2cap_evt_ch_setup_request_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_l2cap_evt_ch_setup_refused_dec': Module.cwrap('emscripten_ble_l2cap_evt_ch_setup_refused_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_l2cap_evt_ch_setup_dec': Module.cwrap('emscripten_ble_l2cap_evt_ch_setup_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_l2cap_evt_ch_released_dec': Module.cwrap('emscripten_ble_l2cap_evt_ch_released_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_l2cap_evt_ch_sdu_buf_released_dec': Module.cwrap('emscripten_ble_l2cap_evt_ch_sdu_buf_released_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_l2cap_evt_ch_credit_dec': Module.cwrap('emscripten_ble_l2cap_evt_ch_credit_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_l2cap_evt_ch_rx_dec': Module.cwrap('emscripten_ble_l2cap_evt_ch_rx_dec', 'number', ['number', 'number', 'number', 'number']),
'ble_l2cap_evt_ch_tx_dec': Module.cwrap('emscripten_ble_l2cap_evt_ch_tx_dec', 'number', ['number', 'number', 'number', 'number'])}

},{}],2:[function(require,module,exports){
const { NRF_SUCCESS, NRF_ERROR_INTERNAL, sd_rpc_app_status_t } = require('./sd_rpc_types');

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
        const errorMessage = `Not able to decode packet. Code #${errCode}`;
        adapter.statusHandler(sd_rpc_app_status_t.PKT_DECODE_ERROR, errorMessage);
        return NRF_ERROR_INTERNAL;
    }
    return resultCodeValue;
}

module.exports = {
    encode_decode,
};

},{"./sd_rpc_types":4}],3:[function(require,module,exports){
const { encode_decode } = require('../ble_common')
const { emscriptenBindings } = require('../bindings/emscripten');


if (NRF_SD_BLE_API_VERSION >= 4) {
    module.exports.sd_ble_gap_adv_start = async (adapter, p_adv_params, conn_cfg_tag) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gap_adv_start_req_enc(p_adv_params._getInternal(), conn_cfg_tag, buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_adv_start_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
} else {
    module.exports.sd_ble_gap_adv_start = async (adapter, p_adv_params) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gap_adv_start_req_enc(p_adv_params._getInternal(), buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_adv_start_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
}

module.exports.sd_ble_gap_device_name_get = async (adapter, p_dev_name, p_len) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_device_name_get_req_enc(p_dev_name, p_len, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_device_name_get_rsp_dec(buffer, length, p_dev_name, p_len, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_appearance_get = async (adapter, p_appearance) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_appearance_get_req_enc(p_appearance, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_appearance_get_rsp_dec(buffer, length, p_appearance, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_device_name_set = async (adapter, p_write_perm, p_dev_name, len) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_device_name_set_req_enc(p_write_perm._getInternal(), p_dev_name, len, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_device_name_set_rsp_dec(buffer, length, p_write_perm._getInternal(), p_dev_name, len, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_appearance_set = async (adapter, appearance) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_appearance_set_req_enc(appearance, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_appearance_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_ppcp_set = async (adapter, p_conn_params) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_ppcp_set_req_enc(p_conn_params._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_ppcp_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_adv_data_set = async (adapter, data_buffer, index, sr_data, sr_data_length) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_adv_data_set_req_enc(data_buffer, index, sr_data, sr_data_length, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_adv_data_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_conn_param_update = async (adapter, conn_handle, p_conn_params) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_conn_param_update_req_enc(conn_handle, p_conn_params._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_conn_param_update_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_disconnect = async (adapter, conn_handle, hci_status_code) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_disconnect_req_enc(conn_handle, hci_status_code, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_disconnect_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_sec_info_reply = async (adapter, conn_handle, p_enc_info, p_id_info, p_sign_info) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_sec_info_reply_req_enc(conn_handle, p_enc_info._getInternal(), p_id_info._getInternal(), p_sign_info._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_sec_info_reply_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_ppcp_get = async (adapter, p_conn_params) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_ppcp_get_req_enc(p_conn_params._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_ppcp_get_rsp_dec(buffer, length, p_conn_params._getInternal(), result);
    return encode_decode(adapter, encode_function, decode_function);
};

//let sd_ble_gap_address_get, sd_ble_gap_address_set, sd_ble_gap_addr_get, sd_ble_gap_addr_set, sd_ble_gap_whitelist_set, sd_ble_gap_device_identities_set, sd_ble_gap_privacy_set, sd_ble_gap_privacy_get;

if (NRF_SD_BLE_API_VERSION <= 2) {
    module.exports.sd_ble_gap_address_get = async (adapter, p_addr) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gap_address_get_req_enc(p_addr._getInternal(), buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_address_get_rsp_dec(buffer, length, p_addr._getInternal(), result);
        return encode_decode(adapter, encode_function, decode_function);
    };
    module.exports.sd_ble_gap_address_set = async (adapter, addr_cycle_mode, p_addr) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gap_address_set_req_enc(addr_cycle_mode, p_addr._getInternal(), buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_address_set_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
}

if (NRF_SD_BLE_API_VERSION >= 3) {
    module.exports.sd_ble_gap_addr_get = async (adapter, p_addr) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gap_addr_get_req_enc(p_addr._getInternal(), buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_addr_get_rsp_dec(buffer, length, p_addr._getInternal(), result);
        return encode_decode(adapter, encode_function, decode_function);
    };
    module.exports.sd_ble_gap_addr_set = async (adapter, p_addr) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gap_addr_set_req_enc(p_addr._getInternal(), buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_addr_set_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
    module.exports.sd_ble_gap_whitelist_set = async (adapter, pp_wl_addrs, len) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gap_whitelist_set_req_enc(pp_wl_addrs._getInternal(), len, buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_whitelist_set_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
    module.exports.sd_ble_gap_device_identities_set = async (adapter, pp_id_keys, pp_local_irks, len) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gap_device_identities_set_req_enc(pp_id_keys._getInternal(), pp_local_irks._getInternal(), len, buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_device_identities_set_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
    module.exports.sd_ble_gap_privacy_set = async (adapter, p_privacy_params) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gap_privacy_set_req_enc(p_privacy_params._getInternal(), buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_privacy_set_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
    module.exports.sd_ble_gap_privacy_get = async (adapter, p_privacy_params) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gap_privacy_set_get_enc(p_privacy_params._getInternal(), buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_privacy_get_rsp_dec(buffer, length, p_privacy_params, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
}

module.exports.sd_ble_gap_adv_stop = async (adapter) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_adv_stop_req_enc(buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_adv_stop_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_auth_key_reply = async (adapter, conn_handle, key_type, key) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_auth_key_reply_req_enc(conn_handle, key_type, key, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_auth_key_reply_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_authenticate = async (adapter, conn_handle, p_sec_params) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_authenticate_req_enc(conn_handle, p_sec_params._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_authenticate_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_conn_sec_get = async (adapter, conn_handle, p_conn_sec) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_conn_sec_get_req_enc(conn_handle, p_conn_sec._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => {
        const p_p_conn_sec = emscriptenAllocPTP(p_conn_sec._getInternal());
        const apiRes = emscriptenBindings.ble_gap_conn_sec_get_rsp_dec(buffer, length, p_p_conn_sec, result);
        emscriptenFreePTP(p_p_conn_sec);
        return apiRes;
    }
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_rssi_start = async (adapter, conn_handle, treshold_dbm, skip_count) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_rssi_start_req_enc(conn_handle, treshold_dbm, skip_count, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_rssi_start_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_rssi_stop = async (adapter, conn_handle) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_rssi_stop_req_enc(conn_handle, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_rssi_stop_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_tx_power_set = async (adapter, tx_power) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_tx_power_set_req_enc(tx_power, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_tx_power_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_scan_stop = async (adapter) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_scan_stop_req_enc(buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_scan_stop_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};

//let sd_ble_gap_connect;
if (NRF_SD_BLE_API_VERSION >= 4) {
    module.exports.sd_ble_gap_connect = async (adapter, pAddr, pScanParams, pConnParams, conn_cfg_tag) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gap_connect_req_enc(pAddr._getInternal(), pScanParams._getInternal(), pConnParams._getInternal(), conn_cfg_tag, buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_connect_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
} else {
    module.exports.sd_ble_gap_connect = async (adapter, pAddr, pScanParams, pConnParams) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gap_connect_req_enc(pAddr._getInternal(), pScanParams._getInternal(), pConnParams._getInternal(), buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_connect_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
}

module.exports.sd_ble_gap_connect_cancel = async (adapter) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_connect_cancel_req_enc(buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_connect_cancel_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_scan_start = async (adapter, scanParam) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_scan_start_req_enc(scanParam._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_scan_start_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_encrypt = async (adapter, conn_handle, p_master_id, p_enc_info) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_encrypt_req_enc(conn_handle, p_master_id._getInternal(), p_enc_info._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_encrypt_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_rssi_get = async (adapter, conn_handle, p_rssi) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_rssi_get_req_enc(conn_handle, p_rssi, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_rssi_get_rsp_dec(buffer, length, p_rssi, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_sec_params_reply = async (adapter, conn_handle, sec_status, p_sec_params, p_sec_keyset) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_sec_params_reply_req_enc(conn_handle, sec_status, p_sec_params._getInternal(), p_sec_keyset._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_sec_params_reply_rsp_dec(buffer, length, p_sec_keyset._getInternal(), result);

    // TODO: Create security context
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_lesc_oob_data_get = async (adapter, conn_handle, p_pk_own, p_oobd_own) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_lesc_oob_data_get_req_enc(conn_handle, p_pk_own._getInternal(), p_oobd_own._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => {
        const pp_oobd_own = emscriptenAllocPTP(p_oobd_own._getInternal());
        const apiRes = emscriptenBindings.ble_gap_lesc_oob_data_get_rsp_dec(buffer, length, pp_oobd_own, result);
        emscriptenFreePTP(pp_oobd_own);
        return apiRes;
    }
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_lesc_oob_data_set = async (adapter, conn_handle, p_oobd_own, p_ppbd_peer) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_lesc_oob_data_set_req_enc(conn_handle, p_oobd_own._getInternal(), p_ppbd_peer._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_lesc_oob_data_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_lesc_dhkey_reply = async (adapter, conn_handle, p_dhkey) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_lesc_dhkey_reply_req_enc(conn_handle, p_dhkey._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_lesc_dhkey_reply_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
module.exports.sd_ble_gap_keypress_notify = async (adapter, conn_handle, kp_not) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_gap_keypress_notify_req_enc(conn_handle, kp_not, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_keypress_notify_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};

//let sd_ble_gap_phy_update, sd_ble_gap_data_length_update;

if (NRF_SD_BLE_API_VERSION >= 5) {
    module.exports.sd_ble_gap_phy_update = async (adapter, conn_handle, p_gap_phys) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gap_phy_update_req_enc(conn_handle, p_gap_phys._getInternal(), buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_phy_update_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
}
if (NRF_SD_BLE_API_VERSION >= 4) {
    module.exports.sd_ble_gap_data_length_update = async (adapter, conn_handle, p_dl_params, p_dl_limitation) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_gap_data_length_update_req_enc(conn_handle, p_dl_params._getInternal(), p_dl_limitation._getInternal(), buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_gap_data_length_update_rsp_dec(buffer, length, p_dl_limitation._getInternal(), result);
        return encode_decode(adapter, encode_function, decode_function);
    };
}

},{"../bindings/emscripten":1,"../ble_common":2}],4:[function(require,module,exports){
const NRF_ERROR_BASE_NUM = 0x0;
module.exports.NRF_ERROR_SDM_BASE_NUM = 0x1000;
module.exports.NRF_ERROR_SOC_BASE_NUM = 0x2000;
module.exports.NRF_ERROR_STK_BASE_NUM = 0x3000;

module.exports.NRF_SUCCESS = NRF_ERROR_BASE_NUM + 0;
module.exports.NRF_ERROR_SVC_HANDLER_MISSING = NRF_ERROR_BASE_NUM + 1;
module.exports.NRF_ERROR_SOFTDEVICE_NOT_ENABLED = NRF_ERROR_BASE_NUM + 2;
module.exports.NRF_ERROR_INTERNAL = NRF_ERROR_BASE_NUM + 3;
module.exports.NRF_ERROR_NO_MEM = NRF_ERROR_BASE_NUM + 4;
module.exports.NRF_ERROR_NOT_FOUND = NRF_ERROR_BASE_NUM + 5;
module.exports.NRF_ERROR_NOT_SUPPORTED = NRF_ERROR_BASE_NUM + 6;
module.exports.NRF_ERROR_INVALID_PARAM = NRF_ERROR_BASE_NUM + 7;
module.exports.NRF_ERROR_INVALID_STATE = NRF_ERROR_BASE_NUM + 8;
module.exports.NRF_ERROR_INVALID_LENGTH = NRF_ERROR_BASE_NUM + 9;
module.exports.NRF_ERROR_INVALID_FLAGS = NRF_ERROR_BASE_NUM + 10;
module.exports.NRF_ERROR_INVALID_DATA = NRF_ERROR_BASE_NUM + 11;
module.exports.NRF_ERROR_DATA_SIZE = NRF_ERROR_BASE_NUM + 12;
module.exports.NRF_ERROR_TIMEOUT = NRF_ERROR_BASE_NUM + 13;
module.exports.NRF_ERROR_NULL = NRF_ERROR_BASE_NUM + 14;
module.exports.NRF_ERROR_FORBIDDEN = NRF_ERROR_BASE_NUM + 15;
module.exports.NRF_ERROR_INVALID_ADDR = NRF_ERROR_BASE_NUM + 16;
module.exports.NRF_ERROR_BUSY = NRF_ERROR_BASE_NUM + 17;
module.exports.NRF_ERROR_CONN_COUNT = NRF_ERROR_BASE_NUM + 18;
module.exports.NRF_ERROR_RESOURCES = NRF_ERROR_BASE_NUM + 19;

const BLE_GAP_EVT_BASE = 0x10;
const BLE_GATTC_EVT_BASE = 0x30;

module.exports.BLE_GAP_EVT_CONNECTED = BLE_GAP_EVT_BASE;
module.exports.BLE_GAP_EVT_DISCONNECTED = BLE_GAP_EVT_BASE + 1;
module.exports.BLE_GAP_EVT_CONN_PARAM_UPDATE = BLE_GAP_EVT_BASE + 2;
module.exports.BLE_GAP_EVT_SEC_PARAMS_REQUEST = BLE_GAP_EVT_BASE + 3;
module.exports.BLE_GAP_EVT_SEC_INFO_REQUEST = BLE_GAP_EVT_BASE + 4;
module.exports.BLE_GAP_EVT_PASSKEY_DISPLAY = BLE_GAP_EVT_BASE + 5;
module.exports.BLE_GAP_EVT_KEY_PRESSED = BLE_GAP_EVT_BASE + 6;
module.exports.BLE_GAP_EVT_AUTH_KEY_REQUEST = BLE_GAP_EVT_BASE + 7;
module.exports.BLE_GAP_EVT_LESC_DHKEY_REQUEST = BLE_GAP_EVT_BASE + 8;
module.exports.BLE_GAP_EVT_AUTH_STATUS = BLE_GAP_EVT_BASE + 9;
module.exports.BLE_GAP_EVT_CONN_SEC_UPDATE = BLE_GAP_EVT_BASE + 10;
module.exports.BLE_GAP_EVT_TIMEOUT = BLE_GAP_EVT_BASE + 11;
module.exports.BLE_GAP_EVT_RSSI_CHANGED = BLE_GAP_EVT_BASE + 12;
module.exports.BLE_GAP_EVT_ADV_REPORT = BLE_GAP_EVT_BASE + 13;
module.exports.BLE_GAP_EVT_SEC_REQUEST = BLE_GAP_EVT_BASE + 14;
module.exports.BLE_GAP_EVT_CONN_PARAM_UPDATE_REQUEST = BLE_GAP_EVT_BASE + 15;
module.exports.BLE_GAP_EVT_SCAN_REQ_REPORT = BLE_GAP_EVT_BASE + 16;

module.exports.BLE_GATTC_EVT_PRIM_SRVC_DISC_RSP = BLE_GATTC_EVT_BASE;
module.exports.BLE_GATTC_EVT_REL_DISC_RSP = BLE_GATTC_EVT_BASE + 1;
module.exports.BLE_GATTC_EVT_CHAR_DISC_RSP = BLE_GATTC_EVT_BASE + 2;
module.exports.BLE_GATTC_EVT_DESC_DISC_RSP = BLE_GATTC_EVT_BASE + 3;
module.exports.BLE_GATTC_EVT_ATTR_INFO_DISC_RSP = BLE_GATTC_EVT_BASE + 4;
module.exports.BLE_GATTC_EVT_CHAR_VAL_BY_UUID_READ_RSP = BLE_GATTC_EVT_BASE + 5;
module.exports.BLE_GATTC_EVT_READ_RSP = BLE_GATTC_EVT_BASE + 6;
module.exports.BLE_GATTC_EVT_CHAR_VALS_READ_RSP = BLE_GATTC_EVT_BASE + 7;
module.exports.BLE_GATTC_EVT_WRITE_RSP = BLE_GATTC_EVT_BASE + 8;
module.exports.BLE_GATTC_EVT_HVX = BLE_GATTC_EVT_BASE + 9;
module.exports.BLE_GATTC_EVT_TIMEOUT = BLE_GATTC_EVT_BASE + 10;

module.exports.sd_rpc_app_status_t = Object.freeze({
    PKT_SEND_MAX_RETRIES_REACHED: 0,
    PKT_UNEXPECTED: 1,
    PKT_ENCODE_ERROR: 2,
    PKT_DECODE_ERROR: 3,
    PKT_SEND_ERROR: 4,
    IO_RESOURCES_UNAVAILABLE: 5,
    RESET_PERFORMED: 6,
    CONNECTION_ACTIVE: 7,
});

module.exports.sd_rpc_log_severity_t = Object.freeze({
    SD_RPC_LOG_TRACE: 0,
    SD_RPC_LOG_DEBUG: 1,
    SD_RPC_LOG_INFO: 2,
    SD_RPC_LOG_WARNING: 3,
    SD_RPC_LOG_ERROR: 4,
    SD_RPC_LOG_FATAL: 5,
});

},{}]},{},[3]);
