
/* Copyright (c) 2018 Nordic Semiconductor. All Rights Reserved.
 *
 * The information contained herein is property of Nordic Semiconductor ASA.
 * Terms and conditions of usage are described in detail in NORDIC
 * SEMICONDUCTOR STANDARD SOFTWARE LICENSE AGREEMENT.
 *
 * Licensees are granted free, non-transferable use of the information. NO
 * WARRANTY of ANY KIND is provided. This heading must NOT be removed from
 * the file.
 *
 */

#include "Emscripten.h"
#include "app_ble_user_mem.h"
#include "ble_app.h"
#include "ble_evt_app.h"
#include "ble_gap_app.h"
#include "ble_gap_evt_app.h"
#include "ble_gattc_app.h"
#include "ble_gattc_evt_app.h"
#include "ble_gatts_app.h"
#include "ble_gatts_evt_app.h"
#include "ble_l2cap_app.h"
#include "ble_l2cap_evt_app.h"

#ifdef __cplusplus
extern "C" {
#endif
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_tx_packet_count_get_req_enc(uint16_t _0, const uint8_t *const _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_tx_packet_count_get_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_tx_packet_count_get_rsp_dec(const uint8_t *const _0, uint32_t _1, uint8_t **const _2, uint32_t *const _3){return (void*)(ble_tx_packet_count_get_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_uuid_encode_req_enc(const ble_uuid_t *const _0, const uint8_t *const _1, const uint8_t *const _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_uuid_encode_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_uuid_encode_rsp_dec(const uint8_t *const _0, uint32_t _1, uint8_t *const _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_uuid_encode_rsp_dec(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_uuid_decode_req_enc(uint8_t _0, const uint8_t *const _1, ble_uuid_t *const _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_uuid_decode_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_uuid_decode_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_uuid_t **const _2, uint32_t *const _3){return (void*)(ble_uuid_decode_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_uuid_vs_add_req_enc(const ble_uuid128_t *const _0, uint8_t *const _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_uuid_vs_add_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_uuid_vs_add_rsp_dec(const uint8_t *const _0, uint32_t _1, uint8_t **const _2, uint32_t *const _3){return (void*)(ble_uuid_vs_add_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_version_get_req_enc(const ble_version_t *const _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_version_get_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_version_get_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_version_t * _2, uint32_t *const _3){return (void*)(ble_version_get_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_opt_set_req_enc(const uint32_t _0, const ble_opt_t *const _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_opt_set_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_opt_set_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_opt_set_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_enable_req_enc(ble_enable_params_t * _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_enable_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_enable_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_enable_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_opt_get_req_enc(uint32_t _0, const ble_opt_t *const _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_opt_get_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_opt_get_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2, ble_opt_t *const _3, uint32_t *const _4){return (void*)(ble_opt_get_rsp_dec(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_user_mem_reply_req_enc(uint16_t _0, const ble_user_mem_block_t * _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_user_mem_reply_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_user_mem_reply_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_user_mem_reply_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_event_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_event_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_evt_tx_complete_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_evt_tx_complete_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_evt_user_mem_request_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_evt_user_mem_request_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_evt_user_mem_release_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_evt_user_mem_release_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_evt_data_length_changed_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_evt_data_length_changed_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_adv_data_set_req_enc(const uint8_t *const _0, uint8_t _1, const uint8_t *const _2, uint8_t _3, uint8_t *const _4, uint32_t *const _5){return (void*)(ble_gap_adv_data_set_req_enc(_0,_1,_2,_3,_4,_5));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_adv_data_set_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_adv_data_set_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_adv_start_req_enc(const ble_gap_adv_params_t *const _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_gap_adv_start_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_adv_start_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_adv_start_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_tx_power_set_req_enc(int8_t _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_gap_tx_power_set_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_tx_power_set_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_tx_power_set_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_appearance_get_req_enc(const uint16_t *const _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_gap_appearance_get_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_appearance_get_rsp_dec(const uint8_t *const _0, uint32_t _1, uint16_t *const _2, uint32_t *const _3){return (void*)(ble_gap_appearance_get_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_appearance_set_req_enc(uint16_t _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_gap_appearance_set_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_appearance_set_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_appearance_set_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_device_name_get_req_enc(const uint8_t *const _0, const uint16_t *const _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_gap_device_name_get_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_device_name_get_rsp_dec(const uint8_t *const _0, uint32_t _1, uint8_t *const _2, uint16_t *const _3, uint32_t *const _4){return (void*)(ble_gap_device_name_get_rsp_dec(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_device_name_set_req_enc(const ble_gap_conn_sec_mode_t *const _0, const uint8_t *const _1, uint16_t _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gap_device_name_set_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_device_name_set_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_device_name_set_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_ppcp_set_req_enc(const ble_gap_conn_params_t *const _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_gap_ppcp_set_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_ppcp_set_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_ppcp_set_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_conn_param_update_req_enc(uint16_t _0, const ble_gap_conn_params_t *const _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_gap_conn_param_update_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_conn_param_update_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_conn_param_update_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_disconnect_req_enc(uint16_t _0, uint8_t _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_gap_disconnect_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_disconnect_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_disconnect_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_rssi_stop_req_enc(uint16_t _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_gap_rssi_stop_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_rssi_stop_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_rssi_stop_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_ppcp_get_req_enc(const ble_gap_conn_params_t *const _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_gap_ppcp_get_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_ppcp_get_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_gap_conn_params_t *const _2, uint32_t *const _3){return (void*)(ble_gap_ppcp_get_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_auth_key_reply_req_enc(uint16_t _0, uint8_t _1, const uint8_t *const _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gap_auth_key_reply_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_auth_key_reply_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_auth_key_reply_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_sec_info_reply_req_enc(uint16_t _0, const ble_gap_enc_info_t * _1, const ble_gap_irk_t * _2, const ble_gap_sign_info_t * _3, uint8_t *const _4, uint32_t *const _5){return (void*)(ble_gap_sec_info_reply_req_enc(_0,_1,_2,_3,_4,_5));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_sec_info_reply_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_sec_info_reply_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_sec_params_reply_req_enc(uint16_t _0, uint8_t _1, const ble_gap_sec_params_t *const _2, const ble_gap_sec_keyset_t *const _3, uint8_t *const _4, uint32_t *const _5){return (void*)(ble_gap_sec_params_reply_req_enc(_0,_1,_2,_3,_4,_5));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_sec_params_reply_rsp_dec(const uint8_t *const _0, uint32_t _1, const ble_gap_sec_keyset_t *const _2, uint32_t *const _3){return (void*)(ble_gap_sec_params_reply_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_authenticate_req_enc(uint16_t _0, const ble_gap_sec_params_t *const _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_gap_authenticate_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_authenticate_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_authenticate_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_adv_stop_req_enc(uint8_t *const _0, uint32_t *const _1){return (void*)(ble_gap_adv_stop_req_enc(_0,_1));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_adv_stop_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_adv_stop_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_conn_sec_get_req_enc(uint16_t _0, const ble_gap_conn_sec_t *const _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_gap_conn_sec_get_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_conn_sec_get_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_gap_conn_sec_t **const _2, uint32_t *const _3){return (void*)(ble_gap_conn_sec_get_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_rssi_start_req_enc(uint16_t _0, uint8_t _1, uint8_t _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gap_rssi_start_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_rssi_start_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_rssi_start_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_scan_stop_req_enc(uint8_t *const _0, uint32_t *const _1){return (void*)(ble_gap_scan_stop_req_enc(_0,_1));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_scan_stop_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_scan_stop_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_scan_start_req_enc(const ble_gap_scan_params_t * _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_gap_scan_start_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_scan_start_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_scan_start_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_connect_req_enc(const ble_gap_addr_t *const _0, const ble_gap_scan_params_t *const _1, const ble_gap_conn_params_t *const _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gap_connect_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_connect_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_connect_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_connect_cancel_req_enc(uint8_t *const _0, uint32_t *const _1){return (void*)(ble_gap_connect_cancel_req_enc(_0,_1));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_connect_cancel_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_connect_cancel_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_encrypt_req_enc(uint16_t _0, const ble_gap_master_id_t *const _1, const ble_gap_enc_info_t *const _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gap_encrypt_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_encrypt_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_encrypt_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_rssi_get_req_enc(uint16_t _0, const int8_t *const _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_gap_rssi_get_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_rssi_get_rsp_dec(const uint8_t *const _0, uint32_t _1, int8_t *const _2, uint32_t *const _3){return (void*)(ble_gap_rssi_get_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_keypress_notify_req_enc(uint16_t _0, uint8_t _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_gap_keypress_notify_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_keypress_notify_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_keypress_notify_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_lesc_dhkey_reply_req_enc(uint16_t _0, const ble_gap_lesc_dhkey_t * _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_gap_lesc_dhkey_reply_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_lesc_dhkey_reply_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_lesc_dhkey_reply_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_lesc_oob_data_set_req_enc(uint16_t _0, const ble_gap_lesc_oob_data_t * _1, const ble_gap_lesc_oob_data_t * _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gap_lesc_oob_data_set_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_lesc_oob_data_set_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_lesc_oob_data_set_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_lesc_oob_data_get_req_enc(uint16_t _0, const ble_gap_lesc_p256_pk_t * _1, ble_gap_lesc_oob_data_t * _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gap_lesc_oob_data_get_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_lesc_oob_data_get_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_gap_lesc_oob_data_t ** _2, uint32_t *const _3){return (void*)(ble_gap_lesc_oob_data_get_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_addr_get_req_enc(const ble_gap_addr_t *const _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_gap_addr_get_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_addr_get_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_gap_addr_t *const _2, uint32_t *const _3){return (void*)(ble_gap_addr_get_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_addr_set_req_enc(const ble_gap_addr_t *const _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_gap_addr_set_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_addr_set_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_addr_set_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_privacy_set_req_enc(const ble_gap_privacy_params_t * _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_gap_privacy_set_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_privacy_set_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_privacy_set_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_privacy_get_req_enc(const ble_gap_privacy_params_t *const _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_gap_privacy_get_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_privacy_get_rsp_dec(const uint8_t *const _0, uint32_t _1, const ble_gap_privacy_params_t *const _2, uint32_t *const _3){return (void*)(ble_gap_privacy_get_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_whitelist_set_req_enc(const ble_gap_addr_t *const *const _0, const uint8_t _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_gap_whitelist_set_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_whitelist_set_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_whitelist_set_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_device_identities_set_req_enc(const ble_gap_id_key_t *const *const _0, const ble_gap_irk_t *const *const _1, const uint8_t _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gap_device_identities_set_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_device_identities_set_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gap_device_identities_set_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_auth_key_request_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_auth_key_request_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_auth_status_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_auth_status_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_conn_param_update_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_conn_param_update_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_conn_sec_update_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_conn_sec_update_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_connected_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_connected_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_disconnected_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_disconnected_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_passkey_display_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_passkey_display_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_rssi_changed_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_rssi_changed_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_sec_info_request_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_sec_info_request_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_sec_params_request_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_sec_params_request_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_timeout_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_timeout_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_sec_request_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_sec_request_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_conn_param_update_request_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_conn_param_update_request_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_adv_report_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_adv_report_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_scan_req_report_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_scan_req_report_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_key_pressed_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_key_pressed_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gap_evt_lesc_dhkey_request_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gap_evt_lesc_dhkey_request_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_primary_services_discover_req_enc(uint16_t _0, uint16_t _1, const ble_uuid_t *const _2, uint8_t *const _3, uint32_t * _4){return (void*)(ble_gattc_primary_services_discover_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_primary_services_discover_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gattc_primary_services_discover_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_descriptors_discover_req_enc(uint16_t _0, const ble_gattc_handle_range_t *const _1, uint8_t *const _2, uint32_t * _3){return (void*)(ble_gattc_descriptors_discover_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_descriptors_discover_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gattc_descriptors_discover_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_relationships_discover_req_enc(uint16_t _0, const ble_gattc_handle_range_t *const _1, uint8_t *const _2, uint32_t * _3){return (void*)(ble_gattc_relationships_discover_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_relationships_discover_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gattc_relationships_discover_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_characteristics_discover_req_enc(uint16_t _0, const ble_gattc_handle_range_t *const _1, uint8_t *const _2, uint32_t * _3){return (void*)(ble_gattc_characteristics_discover_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_characteristics_discover_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gattc_characteristics_discover_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_read_req_enc(uint16_t _0, uint16_t _1, uint16_t _2, uint8_t *const _3, uint32_t * _4){return (void*)(ble_gattc_read_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_read_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gattc_read_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_char_values_read_req_enc(uint16_t _0, const uint16_t *const _1, uint16_t _2, uint8_t *const _3, uint32_t * _4){return (void*)(ble_gattc_char_values_read_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_char_values_read_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gattc_char_values_read_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_write_req_enc(uint16_t _0, const ble_gattc_write_params_t *const _1, uint8_t *const _2, uint32_t * _3){return (void*)(ble_gattc_write_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_write_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gattc_write_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_hv_confirm_req_enc(uint16_t _0, uint16_t _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_gattc_hv_confirm_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_hv_confirm_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gattc_hv_confirm_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_char_value_by_uuid_read_req_enc(uint16_t _0, const ble_uuid_t *const _1, const ble_gattc_handle_range_t *const _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gattc_char_value_by_uuid_read_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_char_value_by_uuid_read_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gattc_char_value_by_uuid_read_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_attr_info_discover_req_enc(uint16_t _0, const ble_gattc_handle_range_t *const _1, uint8_t *const _2, uint32_t * _3){return (void*)(ble_gattc_attr_info_discover_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_attr_info_discover_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gattc_attr_info_discover_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_exchange_mtu_request_req_enc(uint16_t _0, uint16_t _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_gattc_exchange_mtu_request_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_exchange_mtu_request_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gattc_exchange_mtu_request_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_evt_char_disc_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gattc_evt_char_disc_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_evt_char_val_by_uuid_read_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gattc_evt_char_val_by_uuid_read_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_evt_char_vals_read_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gattc_evt_char_vals_read_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_evt_desc_disc_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gattc_evt_desc_disc_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_evt_hvx_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gattc_evt_hvx_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_evt_prim_srvc_disc_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gattc_evt_prim_srvc_disc_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_evt_read_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gattc_evt_read_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_evt_rel_disc_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gattc_evt_rel_disc_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_evt_timeout_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gattc_evt_timeout_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_evt_write_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gattc_evt_write_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_evt_attr_info_disc_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gattc_evt_attr_info_disc_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gattc_evt_exchange_mtu_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gattc_evt_exchange_mtu_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_value_get_req_enc(uint16_t _0, uint16_t _1, const ble_gatts_value_t *const _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gatts_value_get_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_value_get_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_gatts_value_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_value_get_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_hvx_req_enc(uint16_t _0, const ble_gatts_hvx_params_t *const _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_hvx_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_hvx_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2, uint16_t **const _3){return (void*)(ble_gatts_hvx_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_characteristic_add_req_enc(uint16_t _0, const ble_gatts_char_md_t *const _1, const ble_gatts_attr_t *const _2, const ble_gatts_char_handles_t *const _3, uint8_t *const _4, uint32_t *const _5){return (void*)(ble_gatts_characteristic_add_req_enc(_0,_1,_2,_3,_4,_5));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_characteristic_add_rsp_dec(const uint8_t *const _0, uint32_t _1, uint16_t **const _2, uint32_t *const _3){return (void*)(ble_gatts_characteristic_add_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_service_add_req_enc(uint8_t _0, const ble_uuid_t *const _1, const uint16_t *const _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gatts_service_add_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_service_add_rsp_dec(const uint8_t *const _0, uint32_t _1, uint16_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_service_add_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_sys_attr_set_req_enc(uint16_t _0, const uint8_t *const _1, uint16_t _2, uint32_t _3, uint8_t *const _4, uint32_t *const _5){return (void*)(ble_gatts_sys_attr_set_req_enc(_0,_1,_2,_3,_4,_5));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_sys_attr_set_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gatts_sys_attr_set_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_value_set_req_enc(uint16_t _0, uint16_t _1, ble_gatts_value_t * _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gatts_value_set_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_value_set_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_gatts_value_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_value_set_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_sys_attr_get_req_enc(uint16_t _0, const uint8_t *const _1, const uint16_t *const _2, uint32_t _3, uint8_t *const _4, uint32_t * _5){return (void*)(ble_gatts_sys_attr_get_req_enc(_0,_1,_2,_3,_4,_5));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_sys_attr_get_rsp_dec(const uint8_t *const _0, uint32_t _1, uint8_t **const _2, uint16_t **const _3, uint32_t *const _4){return (void*)(ble_gatts_sys_attr_get_rsp_dec(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_descriptor_add_req_enc(uint16_t _0, const ble_gatts_attr_t *const _1, uint16_t *const _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gatts_descriptor_add_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_descriptor_add_rsp_dec(const uint8_t *const _0, uint32_t _1, uint16_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_descriptor_add_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_include_add_req_enc(uint16_t _0, uint16_t _1, uint16_t *const _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gatts_include_add_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_include_add_rsp_dec(const uint8_t *const _0, uint32_t _1, uint16_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_include_add_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_rw_authorize_reply_req_enc(uint16_t _0, const ble_gatts_rw_authorize_reply_params_t *const _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_rw_authorize_reply_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_rw_authorize_reply_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gatts_rw_authorize_reply_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_service_changed_req_enc(uint16_t _0, uint16_t _1, uint16_t _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_gatts_service_changed_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_service_changed_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gatts_service_changed_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_attr_get_req_enc(uint16_t _0, ble_uuid_t * _1, ble_gatts_attr_md_t * _2, uint8_t *const _3, uint32_t * _4){return (void*)(ble_gatts_attr_get_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_attr_get_rsp_dec(const uint8_t *const _0, uint32_t _1, ble_uuid_t ** _2, ble_gatts_attr_md_t ** _3, uint32_t *const _4){return (void*)(ble_gatts_attr_get_rsp_dec(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_initial_user_handle_get_req_enc(uint16_t * _0, uint8_t *const _1, uint32_t * _2){return (void*)(ble_gatts_initial_user_handle_get_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_initial_user_handle_get_rsp_dec(const uint8_t *const _0, uint32_t _1, uint16_t ** _2, uint32_t *const _3){return (void*)(ble_gatts_initial_user_handle_get_rsp_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_exchange_mtu_reply_req_enc(uint16_t _0, uint16_t _1, uint8_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_exchange_mtu_reply_req_enc(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_exchange_mtu_reply_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_gatts_exchange_mtu_reply_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_evt_hvc_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_evt_hvc_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_evt_rw_authorize_request_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_evt_rw_authorize_request_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_evt_sc_confirm_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_evt_sc_confirm_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_evt_sys_attr_missing_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_evt_sys_attr_missing_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_evt_timeout_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_evt_timeout_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_evt_write_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_evt_write_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_gatts_evt_exchange_mtu_request_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_gatts_evt_exchange_mtu_request_dec(_0,_1,_2,_3));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_l2cap_cid_register_req_enc(uint16_t _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_l2cap_cid_register_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_l2cap_cid_register_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_l2cap_cid_register_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_l2cap_cid_unregister_req_enc(uint16_t _0, uint8_t *const _1, uint32_t *const _2){return (void*)(ble_l2cap_cid_unregister_req_enc(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_l2cap_cid_unregister_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_l2cap_cid_unregister_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_l2cap_tx_req_enc(uint16_t _0, const ble_l2cap_header_t *const _1, const uint8_t *const _2, uint8_t *const _3, uint32_t *const _4){return (void*)(ble_l2cap_tx_req_enc(_0,_1,_2,_3,_4));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_l2cap_tx_rsp_dec(const uint8_t *const _0, uint32_t _1, uint32_t *const _2){return (void*)(ble_l2cap_tx_rsp_dec(_0,_1,_2));}
EMSCRIPTEN_KEEPALIVE
void* emscripten_ble_l2cap_evt_rx_dec(const uint8_t *const _0, uint32_t _1, ble_evt_t *const _2, uint32_t *const _3){return (void*)(ble_l2cap_evt_rx_dec(_0,_1,_2,_3));}
#ifdef __cplusplus
}
#endif