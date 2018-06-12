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
#include "ble.h"
#include "ble_ranges.h"
#include "ble_types.h"
#include "ble_gap.h"
#include "ble_l2cap.h"
#include "ble_gatt.h"
#include "ble_gattc.h"
#include "ble_gatts.h"

#ifdef __cplusplus
extern "C" {
#endif
EMSCRIPTEN_KEEPALIVE
ble_gattc_attr_info16_t* evt_data__evt__gattc_evt__params__attr_info_disc_rsp__info__attr_info16(ble_evt_t* evt_data, uint8_t index){return &evt_data->evt.gattc_evt.params.attr_info_disc_rsp.info.attr_info16[index];}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__adv_report__peer_addr__addr_type(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.adv_report.peer_addr.addr_type;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__error_handle(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.error_handle;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__desc_disc_rsp__count(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.desc_disc_rsp.count;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__auth_status__kdist_own(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.kdist_own;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gattc_evt__params__attr_info_disc_rsp__format(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.attr_info_disc_rsp.format;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gattc_evt__params__hvx__type(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.hvx.type;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_info_request__sign_info(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_info_request.sign_info;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__prim_srvc_disc_rsp__count(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.prim_srvc_disc_rsp.count;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__handle(ble_gattc_attr_info128_t* evt_data){return evt_data->handle;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__char_props__read(ble_gattc_char_t* evt_data){return evt_data->char_props.read;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__gatt_status(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.gatt_status;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__char_props__broadcast(ble_gattc_char_t* evt_data){return evt_data->char_props.broadcast;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__header__evt_id(ble_evt_t* evt_data){return evt_data->header.evt_id;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__read_rsp__handle(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.read_rsp.handle;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gattc_evt__params__timeout__src(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.timeout.src;}
EMSCRIPTEN_KEEPALIVE
ble_gattc_desc_t* evt_data__evt__gattc_evt__params__desc_disc_rsp__descs(ble_evt_t* evt_data, uint8_t index){return &evt_data->evt.gattc_evt.params.desc_disc_rsp.descs[index];}
EMSCRIPTEN_KEEPALIVE
True evt_data__char_props(ble_gattc_char_t* evt_data){return evt_data->char_props;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__uuid__uuid(ble_gattc_attr_info16_t* evt_data){return evt_data->uuid.uuid;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__sm2_levels__lv4(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.sm2_levels.lv4;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_info_request__enc_info(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_info_request.enc_info;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__rel_disc_rsp__count(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.rel_disc_rsp.count;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__sm2_levels__lv1(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.sm2_levels.lv1;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__sm2_levels__lv2(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.sm2_levels.lv2;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__sm2_levels__lv3(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.sm2_levels.lv3;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__scan_req_report__peer_addr__addr_type(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.scan_req_report.peer_addr.addr_type;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__adv_report__dlen(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.adv_report.dlen;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__char_props__auth_signed_wr(ble_gattc_char_t* evt_data){return evt_data->char_props.auth_signed_wr;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gap_evt__params__conn_param_update__conn_params__conn_sup_timeout(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_param_update.conn_params.conn_sup_timeout;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gatts_evt__params__authorize_request__request__read__handle(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.request.read.handle;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__conn_sec_update__conn_sec(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_sec_update.conn_sec;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__kdist_peer__link(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.kdist_peer.link;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__char_props__write_wo_resp(ble_gattc_char_t* evt_data){return evt_data->char_props.write_wo_resp;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gatts_evt__params__authorize_request__request__write__data(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.request.write.data;}
EMSCRIPTEN_KEEPALIVE
int8_t evt_data__evt__gap_evt__params__scan_req_report__rssi(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.scan_req_report.rssi;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__connected__role(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.connected.role;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gap_evt__params__sec_info_request__peer_addr__addr(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_info_request.peer_addr.addr;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gatts_evt__params__authorize_request__request__write__uuid(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.request.write.uuid;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__char_props__indicate(ble_gattc_char_t* evt_data){return evt_data->char_props.indicate;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gap_evt__params__adv_report__peer_addr__addr(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.adv_report.peer_addr.addr;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__keypress(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.keypress;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gap_evt__params__connected__conn_params__conn_sup_timeout(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.connected.conn_params.conn_sup_timeout;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__lesc_dhkey_request__p_pk_peer(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.lesc_dhkey_request.p_pk_peer;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__included_srvc__handle_range__end_handle(ble_gattc_include_t* evt_data){return evt_data->included_srvc.handle_range.end_handle;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__lesc(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.lesc;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__sec_params_request__peer_params(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params;}
EMSCRIPTEN_KEEPALIVE
True evt_data__handle_range(ble_gattc_service_t* evt_data){return evt_data->handle_range;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__conn_param_update_request__conn_params(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_param_update_request.conn_params;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gap_evt__conn_handle(ble_evt_t* evt_data){return evt_data->evt.gap_evt.conn_handle;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gap_evt__params__conn_param_update_request__conn_params__conn_sup_timeout(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_param_update_request.conn_params.conn_sup_timeout;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__l2cap_evt__conn_handle(ble_evt_t* evt_data){return evt_data->evt.l2cap_evt.conn_handle;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__kdist_peer__sign(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.kdist_peer.sign;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__kdist_peer__enc(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.kdist_peer.enc;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__uuid__uuid128(ble_gattc_attr_info128_t* evt_data){return evt_data->uuid.uuid128;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_request__bond(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_request.bond;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__included_srvc__handle_range__start_handle(ble_gattc_include_t* evt_data){return evt_data->included_srvc.handle_range.start_handle;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_info_request__peer_addr__addr_type(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_info_request.peer_addr.addr_type;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__lesc_dhkey_request__oobd_req(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.lesc_dhkey_request.oobd_req;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__adv_report__direct_addr(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.adv_report.direct_addr;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__common_evt__params__user_mem_release__mem_block(ble_evt_t* evt_data){return evt_data->evt.common_evt.params.user_mem_release.mem_block;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__timeout__src(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.timeout.src;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gattc_evt__params__hvx__data(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.hvx.data;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__conn_sec_update__conn_sec__sec_mode__sm(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_sec_update.conn_sec.sec_mode.sm;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__adv_report__direct_addr__addr_id_peer(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.adv_report.direct_addr.addr_id_peer;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__bond(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.bond;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gattc_evt__params__char_vals_read_rsp__values(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.char_vals_read_rsp.values;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__kdist_own__enc(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.kdist_own.enc;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gattc_evt__params__char_val_by_uuid_read_rsp__handle_value(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.char_val_by_uuid_read_rsp.handle_value;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__common_evt__params__data_length_changed__max_tx_octets(ble_evt_t* evt_data){return evt_data->evt.common_evt.params.data_length_changed.max_tx_octets;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__min_key_size(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.min_key_size;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__conn_param_update__conn_params(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_param_update.conn_params;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gap_evt__params__connected__peer_addr__addr(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.connected.peer_addr.addr;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__adv_report__peer_addr(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.adv_report.peer_addr;}
EMSCRIPTEN_KEEPALIVE
True evt_data__uuid(ble_gattc_attr_info128_t* evt_data){return evt_data->uuid;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gatts_evt__params__authorize_request__request__write__uuid__uuid(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.request.write.uuid.uuid;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__disconnected__reason(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.disconnected.reason;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gatts_evt__params__authorize_request__type(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.type;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gatts_evt__params__write__data(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.write.data;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__kdist_own__id(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.kdist_own.id;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gap_evt__params__scan_req_report__peer_addr__addr(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.scan_req_report.peer_addr.addr;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gap_evt__params__lesc_dhkey_request__p_pk_peer__pk(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.lesc_dhkey_request.p_pk_peer->pk;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gatts_evt__params__hvc__handle(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.hvc.handle;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__connected__peer_addr(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.connected.peer_addr;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__oob(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.oob;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__l2cap_evt__params__rx__header(ble_evt_t* evt_data){return evt_data->evt.l2cap_evt.params.rx.header;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__header__evt_len(ble_evt_t* evt_data){return evt_data->header.evt_len;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__sec_info_request__master_id(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_info_request.master_id;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__common_evt__params__user_mem_request__type(ble_evt_t* evt_data){return evt_data->evt.common_evt.params.user_mem_request.type;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__handle_range__end_handle(ble_gattc_service_t* evt_data){return evt_data->handle_range.end_handle;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gatts_evt__params__sys_attr_missing__hint(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.sys_attr_missing.hint;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__l2cap_evt__params__rx__data(ble_evt_t* evt_data){return evt_data->evt.l2cap_evt.params.rx.data;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__conn_sec_update__conn_sec__encr_key_size(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_sec_update.conn_sec.encr_key_size;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__kdist_peer__link(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.kdist_peer.link;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gap_evt__params__sec_info_request__master_id__rand(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_info_request.master_id.rand;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gatts_evt__params__authorize_request__request__write__offset(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.request.write.offset;}
EMSCRIPTEN_KEEPALIVE
ble_gattc_include_t* evt_data__evt__gattc_evt__params__rel_disc_rsp__includes(ble_evt_t* evt_data, uint8_t index){return &evt_data->evt.gattc_evt.params.rel_disc_rsp.includes[index];}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gap_evt__params__adv_report__data(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.adv_report.data;}
EMSCRIPTEN_KEEPALIVE
ble_gattc_attr_info128_t* evt_data__evt__gattc_evt__params__attr_info_disc_rsp__info__attr_info128(ble_evt_t* evt_data, uint8_t index){return &evt_data->evt.gattc_evt.params.attr_info_disc_rsp.info.attr_info128[index];}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_info_request__peer_addr__addr_id_peer(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_info_request.peer_addr.addr_id_peer;}
EMSCRIPTEN_KEEPALIVE
True evt_data__included_srvc__uuid(ble_gattc_include_t* evt_data){return evt_data->included_srvc.uuid;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__included_srvc__uuid__type(ble_gattc_include_t* evt_data){return evt_data->included_srvc.uuid.type;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gatts_evt__params__authorize_request__request__read__uuid__type(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.request.read.uuid.type;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gatts_evt__params__authorize_request__request__write__op(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.request.write.op;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__read_rsp__offset(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.read_rsp.offset;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__auth_status__sm1_levels(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.sm1_levels;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__exchange_mtu_rsp__server_rx_mtu(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.exchange_mtu_rsp.server_rx_mtu;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__auth_status(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.auth_status;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__kdist_peer__enc(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.kdist_peer.enc;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__sm1_levels__lv1(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.sm1_levels.lv1;}
EMSCRIPTEN_KEEPALIVE
int8_t evt_data__evt__gap_evt__params__rssi_changed__rssi(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.rssi_changed.rssi;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__sm1_levels__lv3(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.sm1_levels.lv3;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__sm1_levels__lv2(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.sm1_levels.lv2;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__sm1_levels__lv4(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.sm1_levels.lv4;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__char_disc_rsp__count(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.char_disc_rsp.count;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__kdist_peer__id(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.kdist_peer.id;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__auth_status__sm2_levels(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.sm2_levels;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_request__mitm(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_request.mitm;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__bonded(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.bonded;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__hvx__handle(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.hvx.handle;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__max_key_size(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.max_key_size;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__adv_report__peer_addr__addr_id_peer(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.adv_report.peer_addr.addr_id_peer;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gap_evt__params__conn_param_update_request__conn_params__slave_latency(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_param_update_request.conn_params.slave_latency;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__common_evt__params__user_mem_release__mem_block__len(ble_evt_t* evt_data){return evt_data->evt.common_evt.params.user_mem_release.mem_block.len;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__handle_range__start_handle(ble_gattc_service_t* evt_data){return evt_data->handle_range.start_handle;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__common_evt__params__data_length_changed__max_rx_time(ble_evt_t* evt_data){return evt_data->evt.common_evt.params.data_length_changed.max_rx_time;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__read_rsp__len(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.read_rsp.len;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__passkey_display__match_request(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.passkey_display.match_request;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__common_evt__params__user_mem_release__type(ble_evt_t* evt_data){return evt_data->evt.common_evt.params.user_mem_release.type;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gattc_evt__params__write_rsp__write_op(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.write_rsp.write_op;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__sec_params_request__peer_params__kdist_peer(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.kdist_peer;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__auth_status__kdist_peer(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.kdist_peer;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gap_evt__params__connected__conn_params__max_conn_interval(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.connected.conn_params.max_conn_interval;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__kdist_own__sign(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.kdist_own.sign;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__kdist_own__link(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.kdist_own.link;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gatts_evt__params__authorize_request__request__write__len(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.request.write.len;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__char_props__write(ble_gattc_char_t* evt_data){return evt_data->char_props.write;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gap_evt__params__connected__conn_params__min_conn_interval(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.connected.conn_params.min_conn_interval;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__connected__peer_addr__addr_id_peer(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.connected.peer_addr.addr_id_peer;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_info_request__id_info(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_info_request.id_info;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gatts_evt__params__authorize_request__request__read__uuid(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.request.read.uuid;}
EMSCRIPTEN_KEEPALIVE
int8_t evt_data__evt__gap_evt__params__adv_report__rssi(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.adv_report.rssi;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gatts_evt__params__write__handle(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.write.handle;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__attr_info_disc_rsp__count(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.attr_info_disc_rsp.count;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gap_evt__params__adv_report__direct_addr__addr(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.adv_report.direct_addr.addr;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__handle_value(ble_gattc_char_t* evt_data){return evt_data->handle_value;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gatts_evt__params__write__auth_required(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.write.auth_required;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__adv_report__type(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.adv_report.type;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__common_evt__params__data_length_changed__max_rx_octets(ble_evt_t* evt_data){return evt_data->evt.common_evt.params.data_length_changed.max_rx_octets;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gatts_evt__params__exchange_mtu_request__client_rx_mtu(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.exchange_mtu_request.client_rx_mtu;}
EMSCRIPTEN_KEEPALIVE
ble_gattc_service_t* evt_data__evt__gattc_evt__params__prim_srvc_disc_rsp__services(ble_evt_t* evt_data, uint8_t index){return &evt_data->evt.gattc_evt.params.prim_srvc_disc_rsp.services[index];}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__handle_decl(ble_gattc_char_t* evt_data){return evt_data->handle_decl;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gap_evt__params__conn_param_update__conn_params__slave_latency(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_param_update.conn_params.slave_latency;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__scan_req_report__peer_addr__addr_id_peer(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.scan_req_report.peer_addr.addr_id_peer;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__conn_handle(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.conn_handle;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__char_vals_read_rsp__len(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.char_vals_read_rsp.len;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_request__keypress(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_request.keypress;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gatts_evt__params__write__offset(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.write.offset;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__char_val_by_uuid_read_rsp__value_len(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.char_val_by_uuid_read_rsp.value_len;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gattc_evt__params__write_rsp__data(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.write_rsp.data;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__io_caps(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.io_caps;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__common_evt__params__data_length_changed__max_tx_time(ble_evt_t* evt_data){return evt_data->evt.common_evt.params.data_length_changed.max_tx_time;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gatts_evt__params__authorize_request__request__write__handle(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.request.write.handle;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__uuid__type(ble_gattc_attr_info16_t* evt_data){return evt_data->uuid.type;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gap_evt__params__passkey_display__passkey(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.passkey_display.passkey;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gap_evt__params__conn_param_update__conn_params__min_conn_interval(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_param_update.conn_params.min_conn_interval;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__write_rsp__handle(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.write_rsp.handle;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__char_ext_props(ble_gattc_char_t* evt_data){return evt_data->char_ext_props;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__adv_report__direct_addr__addr_type(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.adv_report.direct_addr.addr_type;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__common_evt__conn_handle(ble_evt_t* evt_data){return evt_data->evt.common_evt.conn_handle;}
EMSCRIPTEN_KEEPALIVE
True evt_data__header(ble_evt_t* evt_data){return evt_data->header;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__char_props__notify(ble_gattc_char_t* evt_data){return evt_data->char_props.notify;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__write_rsp__len(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.write_rsp.len;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__sec_info_request__peer_addr(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_info_request.peer_addr;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__hvx__len(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.hvx.len;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__write_rsp__offset(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.write_rsp.offset;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__l2cap_evt__params__rx__header__len(ble_evt_t* evt_data){return evt_data->evt.l2cap_evt.params.rx.header.len;}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__gattc_evt__params__read_rsp__data(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.read_rsp.data;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__conn_sec_update__conn_sec__sec_mode__lv(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_sec_update.conn_sec.sec_mode.lv;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__common_evt__params__tx_complete__count(ble_evt_t* evt_data){return evt_data->evt.common_evt.params.tx_complete.count;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gattc_evt__params__char_val_by_uuid_read_rsp__count(ble_evt_t* evt_data){return evt_data->evt.gattc_evt.params.char_val_by_uuid_read_rsp.count;}
EMSCRIPTEN_KEEPALIVE
ble_gattc_char_t* evt_data__evt__gattc_evt__params__char_disc_rsp__chars(ble_evt_t* evt_data, uint8_t index){return &evt_data->evt.gattc_evt.params.char_disc_rsp.chars[index];}
EMSCRIPTEN_KEEPALIVE
uint8_t* evt_data__evt__common_evt__params__user_mem_release__mem_block__p_mem(ble_evt_t* evt_data){return evt_data->evt.common_evt.params.user_mem_release.mem_block.p_mem;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gap_evt__params__conn_param_update_request__conn_params__min_conn_interval(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_param_update_request.conn_params.min_conn_interval;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gatts_evt__params__write__uuid(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.write.uuid;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gatts_evt__conn_handle(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.conn_handle;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_key_request__key_type(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_key_request.key_type;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gap_evt__params__conn_param_update_request__conn_params__max_conn_interval(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_param_update_request.conn_params.max_conn_interval;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gatts_evt__params__authorize_request__request__read__offset(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.request.read.offset;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__kdist_peer__id(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.kdist_peer.id;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gatts_evt__params__write__len(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.write.len;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__key_pressed__kp_not(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.key_pressed.kp_not;}
EMSCRIPTEN_KEEPALIVE
True evt_data__included_srvc__handle_range(ble_gattc_include_t* evt_data){return evt_data->included_srvc.handle_range;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__mitm(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.mitm;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gap_evt__params__connected__conn_params__slave_latency(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.connected.conn_params.slave_latency;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gap_evt__params__sec_info_request__master_id__ediv(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_info_request.master_id.ediv;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__included_srvc__uuid__uuid(ble_gattc_include_t* evt_data){return evt_data->included_srvc.uuid.uuid;}
EMSCRIPTEN_KEEPALIVE
True evt_data__included_srvc(ble_gattc_include_t* evt_data){return evt_data->included_srvc;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__connected__conn_params(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.connected.conn_params;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__l2cap_evt__params__rx__header__cid(ble_evt_t* evt_data){return evt_data->evt.l2cap_evt.params.rx.header.cid;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gatts_evt__params__write__op(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.write.op;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__kdist_own__link(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.kdist_own.link;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__scan_req_report__peer_addr(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.scan_req_report.peer_addr;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gap_evt__params__conn_param_update__conn_params__max_conn_interval(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_param_update.conn_params.max_conn_interval;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gatts_evt__params__timeout__src(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.timeout.src;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gatts_evt__params__authorize_request__request__write__auth_required(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.request.write.auth_required;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gatts_evt__params__authorize_request__request__read__uuid__uuid(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.request.read.uuid.uuid;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__kdist_own__sign(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.kdist_own.sign;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__connected__peer_addr__addr_type(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.connected.peer_addr.addr_type;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gatts_evt__params__write__uuid__type(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.write.uuid.type;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__error_src(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.error_src;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__adv_report__scan_rsp(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.adv_report.scan_rsp;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__sec_params_request__peer_params__kdist_own(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.kdist_own;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__kdist_own__id(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.kdist_own.id;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_params_request__peer_params__kdist_own__enc(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_params_request.peer_params.kdist_own.enc;}
EMSCRIPTEN_KEEPALIVE
uint16_t evt_data__evt__gatts_evt__params__write__uuid__uuid(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.write.uuid.uuid;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gatts_evt__params__authorize_request__request__write__uuid__type(ble_evt_t* evt_data){return evt_data->evt.gatts_evt.params.authorize_request.request.write.uuid.type;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__sec_request__lesc(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.sec_request.lesc;}
EMSCRIPTEN_KEEPALIVE
True evt_data__evt__gap_evt__params__conn_sec_update__conn_sec__sec_mode(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.conn_sec_update.conn_sec.sec_mode;}
EMSCRIPTEN_KEEPALIVE
uint8_t evt_data__evt__gap_evt__params__auth_status__kdist_peer__sign(ble_evt_t* evt_data){return evt_data->evt.gap_evt.params.auth_status.kdist_peer.sign;}
#ifdef __cplusplus
}
#endif
