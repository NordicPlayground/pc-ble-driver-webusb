#include "Emscripten.h"
#include <stdlib.h>
#include "ble.h"
#include "ble_err.h"
#include "ble_gap.h"
#include "ble_gatt.h"
#include "ble_gattc.h"
#include "ble_gatts.h"
#include "ble_hci.h"
#include "ble_l2cap.h"
#include "ble_ranges.h"
#include "ble_types.h"
#include "nrf_error.h"
#ifdef __cplusplus
extern "C" {
#endif
EMSCRIPTEN_KEEPALIVE
ble_user_mem_block_t *ble_user_mem_block_t_NEW()
{
    return (ble_user_mem_block_t*)(malloc(sizeof(ble_user_mem_block_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_user_mem_block_t_DELETE(ble_user_mem_block_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_user_mem_block_t_SIZEOF(ble_user_mem_block_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_user_mem_block_t_SET_p_mem(ble_user_mem_block_t *structData, uint8_t *data)
{
    structData->p_mem = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_user_mem_block_t_GET_p_mem(ble_user_mem_block_t *structData)
{
    return structData->p_mem;
}
EMSCRIPTEN_KEEPALIVE
uint8_t **ble_user_mem_block_t_GET_ADDRESSOF_p_mem(ble_user_mem_block_t *structData)
{
    return &structData->p_mem;
}
EMSCRIPTEN_KEEPALIVE
void ble_user_mem_block_t_SET_len(ble_user_mem_block_t *structData, uint16_t data)
{
    structData->len = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_user_mem_block_t_GET_len(ble_user_mem_block_t *structData)
{
    return structData->len;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_user_mem_block_t_GET_ADDRESSOF_len(ble_user_mem_block_t *structData)
{
    return &structData->len;
}
EMSCRIPTEN_KEEPALIVE
ble_enable_params_t *ble_enable_params_t_NEW()
{
    return (ble_enable_params_t*)(malloc(sizeof(ble_enable_params_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_enable_params_t_DELETE(ble_enable_params_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_enable_params_t_SIZEOF(ble_enable_params_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_enable_params_t_SET_common_enable_params(ble_enable_params_t *structData, ble_common_enable_params_t data)
{
    structData->common_enable_params = data;
}
EMSCRIPTEN_KEEPALIVE
ble_common_enable_params_t ble_enable_params_t_GET_common_enable_params(ble_enable_params_t *structData)
{
    return structData->common_enable_params;
}
EMSCRIPTEN_KEEPALIVE
ble_common_enable_params_t *ble_enable_params_t_GET_ADDRESSOF_common_enable_params(ble_enable_params_t *structData)
{
    return &structData->common_enable_params;
}
EMSCRIPTEN_KEEPALIVE
void ble_enable_params_t_SET_gap_enable_params(ble_enable_params_t *structData, ble_gap_enable_params_t data)
{
    structData->gap_enable_params = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_enable_params_t ble_enable_params_t_GET_gap_enable_params(ble_enable_params_t *structData)
{
    return structData->gap_enable_params;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_enable_params_t *ble_enable_params_t_GET_ADDRESSOF_gap_enable_params(ble_enable_params_t *structData)
{
    return &structData->gap_enable_params;
}
EMSCRIPTEN_KEEPALIVE
void ble_enable_params_t_SET_gatt_enable_params(ble_enable_params_t *structData, ble_gatt_enable_params_t data)
{
    structData->gatt_enable_params = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gatt_enable_params_t ble_enable_params_t_GET_gatt_enable_params(ble_enable_params_t *structData)
{
    return structData->gatt_enable_params;
}
EMSCRIPTEN_KEEPALIVE
ble_gatt_enable_params_t *ble_enable_params_t_GET_ADDRESSOF_gatt_enable_params(ble_enable_params_t *structData)
{
    return &structData->gatt_enable_params;
}
EMSCRIPTEN_KEEPALIVE
void ble_enable_params_t_SET_gatts_enable_params(ble_enable_params_t *structData, ble_gatts_enable_params_t data)
{
    structData->gatts_enable_params = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_enable_params_t ble_enable_params_t_GET_gatts_enable_params(ble_enable_params_t *structData)
{
    return structData->gatts_enable_params;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_enable_params_t *ble_enable_params_t_GET_ADDRESSOF_gatts_enable_params(ble_enable_params_t *structData)
{
    return &structData->gatts_enable_params;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_enable_params_t *ble_gatts_enable_params_t_NEW()
{
    return (ble_gatts_enable_params_t*)(malloc(sizeof(ble_gatts_enable_params_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_enable_params_t_DELETE(ble_gatts_enable_params_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gatts_enable_params_t_SIZEOF(ble_gatts_enable_params_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_enable_params_t_SET_service_changed(ble_gatts_enable_params_t *structData, uint8_t data)
{
    structData->service_changed = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatts_enable_params_t_GET_service_changed(ble_gatts_enable_params_t *structData)
{
    return structData->service_changed;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_enable_params_t_SET_attr_tab_size(ble_gatts_enable_params_t *structData, uint32_t data)
{
    structData->attr_tab_size = data;
}
EMSCRIPTEN_KEEPALIVE
uint32_t ble_gatts_enable_params_t_GET_attr_tab_size(ble_gatts_enable_params_t *structData)
{
    return structData->attr_tab_size;
}
EMSCRIPTEN_KEEPALIVE
uint32_t *ble_gatts_enable_params_t_GET_ADDRESSOF_attr_tab_size(ble_gatts_enable_params_t *structData)
{
    return &structData->attr_tab_size;
}
EMSCRIPTEN_KEEPALIVE
ble_gatt_enable_params_t *ble_gatt_enable_params_t_NEW()
{
    return (ble_gatt_enable_params_t*)(malloc(sizeof(ble_gatt_enable_params_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gatt_enable_params_t_DELETE(ble_gatt_enable_params_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gatt_enable_params_t_SIZEOF(ble_gatt_enable_params_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gatt_enable_params_t_SET_att_mtu(ble_gatt_enable_params_t *structData, uint16_t data)
{
    structData->att_mtu = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatt_enable_params_t_GET_att_mtu(ble_gatt_enable_params_t *structData)
{
    return structData->att_mtu;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatt_enable_params_t_GET_ADDRESSOF_att_mtu(ble_gatt_enable_params_t *structData)
{
    return &structData->att_mtu;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_enable_params_t *ble_gap_enable_params_t_NEW()
{
    return (ble_gap_enable_params_t*)(malloc(sizeof(ble_gap_enable_params_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_enable_params_t_DELETE(ble_gap_enable_params_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_enable_params_t_SIZEOF(ble_gap_enable_params_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_enable_params_t_SET_periph_conn_count(ble_gap_enable_params_t *structData, uint8_t data)
{
    structData->periph_conn_count = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_enable_params_t_GET_periph_conn_count(ble_gap_enable_params_t *structData)
{
    return structData->periph_conn_count;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_enable_params_t_GET_ADDRESSOF_periph_conn_count(ble_gap_enable_params_t *structData)
{
    return &structData->periph_conn_count;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_enable_params_t_SET_central_conn_count(ble_gap_enable_params_t *structData, uint8_t data)
{
    structData->central_conn_count = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_enable_params_t_GET_central_conn_count(ble_gap_enable_params_t *structData)
{
    return structData->central_conn_count;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_enable_params_t_GET_ADDRESSOF_central_conn_count(ble_gap_enable_params_t *structData)
{
    return &structData->central_conn_count;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_enable_params_t_SET_central_sec_count(ble_gap_enable_params_t *structData, uint8_t data)
{
    structData->central_sec_count = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_enable_params_t_GET_central_sec_count(ble_gap_enable_params_t *structData)
{
    return structData->central_sec_count;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_enable_params_t_GET_ADDRESSOF_central_sec_count(ble_gap_enable_params_t *structData)
{
    return &structData->central_sec_count;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_enable_params_t_SET_p_device_name(ble_gap_enable_params_t *structData, ble_gap_device_name_t *data)
{
    structData->p_device_name = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_device_name_t *ble_gap_device_name_t_NEW()
{
    return (ble_gap_device_name_t*)(malloc(sizeof(ble_gap_device_name_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_device_name_t_DELETE(ble_gap_device_name_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_device_name_t_SIZEOF(ble_gap_device_name_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_device_name_t_SET_write_perm(ble_gap_device_name_t *structData, ble_gap_conn_sec_mode_t data)
{
    structData->write_perm = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_conn_sec_mode_t ble_gap_device_name_t_GET_write_perm(ble_gap_device_name_t *structData)
{
    return structData->write_perm;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_conn_sec_mode_t *ble_gap_device_name_t_GET_ADDRESSOF_write_perm(ble_gap_device_name_t *structData)
{
    return &structData->write_perm;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_device_name_t_SET_vloc(ble_gap_device_name_t *structData, uint8_t data)
{
    structData->vloc = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_device_name_t_GET_vloc(ble_gap_device_name_t *structData)
{
    return structData->vloc;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_device_name_t_SET_p_value(ble_gap_device_name_t *structData, uint8_t *data)
{
    structData->p_value = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_device_name_t_GET_p_value(ble_gap_device_name_t *structData)
{
    return structData->p_value;
}
EMSCRIPTEN_KEEPALIVE
uint8_t **ble_gap_device_name_t_GET_ADDRESSOF_p_value(ble_gap_device_name_t *structData)
{
    return &structData->p_value;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_device_name_t_SET_current_len(ble_gap_device_name_t *structData, uint16_t data)
{
    structData->current_len = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_device_name_t_GET_current_len(ble_gap_device_name_t *structData)
{
    return structData->current_len;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_device_name_t_GET_ADDRESSOF_current_len(ble_gap_device_name_t *structData)
{
    return &structData->current_len;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_device_name_t_SET_max_len(ble_gap_device_name_t *structData, uint16_t data)
{
    structData->max_len = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_device_name_t_GET_max_len(ble_gap_device_name_t *structData)
{
    return structData->max_len;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_device_name_t_GET_ADDRESSOF_max_len(ble_gap_device_name_t *structData)
{
    return &structData->max_len;
}
EMSCRIPTEN_KEEPALIVE
ble_common_enable_params_t *ble_common_enable_params_t_NEW()
{
    return (ble_common_enable_params_t*)(malloc(sizeof(ble_common_enable_params_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_common_enable_params_t_DELETE(ble_common_enable_params_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_common_enable_params_t_SIZEOF(ble_common_enable_params_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_common_enable_params_t_SET_vs_uuid_count(ble_common_enable_params_t *structData, uint16_t data)
{
    structData->vs_uuid_count = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_common_enable_params_t_GET_vs_uuid_count(ble_common_enable_params_t *structData)
{
    return structData->vs_uuid_count;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_common_enable_params_t_GET_ADDRESSOF_vs_uuid_count(ble_common_enable_params_t *structData)
{
    return &structData->vs_uuid_count;
}
EMSCRIPTEN_KEEPALIVE
void ble_common_enable_params_t_SET_p_conn_bw_counts(ble_common_enable_params_t *structData, ble_conn_bw_counts_t *data)
{
    structData->p_conn_bw_counts = data;
}
EMSCRIPTEN_KEEPALIVE
ble_conn_bw_counts_t *ble_common_enable_params_t_GET_p_conn_bw_counts(ble_common_enable_params_t *structData)
{
    return structData->p_conn_bw_counts;
}
EMSCRIPTEN_KEEPALIVE
ble_conn_bw_counts_t **ble_common_enable_params_t_GET_ADDRESSOF_p_conn_bw_counts(ble_common_enable_params_t *structData)
{
    return &structData->p_conn_bw_counts;
}
EMSCRIPTEN_KEEPALIVE
ble_conn_bw_counts_t *ble_conn_bw_counts_t_NEW()
{
    return (ble_conn_bw_counts_t*)(malloc(sizeof(ble_conn_bw_counts_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_conn_bw_counts_t_DELETE(ble_conn_bw_counts_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_conn_bw_counts_t_SIZEOF(ble_conn_bw_counts_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_conn_bw_counts_t_SET_tx_counts(ble_conn_bw_counts_t *structData, ble_conn_bw_count_t data)
{
    structData->tx_counts = data;
}
EMSCRIPTEN_KEEPALIVE
ble_conn_bw_count_t ble_conn_bw_counts_t_GET_tx_counts(ble_conn_bw_counts_t *structData)
{
    return structData->tx_counts;
}
EMSCRIPTEN_KEEPALIVE
ble_conn_bw_count_t *ble_conn_bw_counts_t_GET_ADDRESSOF_tx_counts(ble_conn_bw_counts_t *structData)
{
    return &structData->tx_counts;
}
EMSCRIPTEN_KEEPALIVE
void ble_conn_bw_counts_t_SET_rx_counts(ble_conn_bw_counts_t *structData, ble_conn_bw_count_t data)
{
    structData->rx_counts = data;
}
EMSCRIPTEN_KEEPALIVE
ble_conn_bw_count_t ble_conn_bw_counts_t_GET_rx_counts(ble_conn_bw_counts_t *structData)
{
    return structData->rx_counts;
}
EMSCRIPTEN_KEEPALIVE
ble_conn_bw_count_t *ble_conn_bw_counts_t_GET_ADDRESSOF_rx_counts(ble_conn_bw_counts_t *structData)
{
    return &structData->rx_counts;
}
EMSCRIPTEN_KEEPALIVE
ble_conn_bw_count_t *ble_conn_bw_count_t_NEW()
{
    return (ble_conn_bw_count_t*)(malloc(sizeof(ble_conn_bw_count_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_conn_bw_count_t_DELETE(ble_conn_bw_count_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_conn_bw_count_t_SIZEOF(ble_conn_bw_count_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_conn_bw_count_t_SET_high_count(ble_conn_bw_count_t *structData, uint8_t data)
{
    structData->high_count = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_conn_bw_count_t_GET_high_count(ble_conn_bw_count_t *structData)
{
    return structData->high_count;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_conn_bw_count_t_GET_ADDRESSOF_high_count(ble_conn_bw_count_t *structData)
{
    return &structData->high_count;
}
EMSCRIPTEN_KEEPALIVE
void ble_conn_bw_count_t_SET_mid_count(ble_conn_bw_count_t *structData, uint8_t data)
{
    structData->mid_count = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_conn_bw_count_t_GET_mid_count(ble_conn_bw_count_t *structData)
{
    return structData->mid_count;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_conn_bw_count_t_GET_ADDRESSOF_mid_count(ble_conn_bw_count_t *structData)
{
    return &structData->mid_count;
}
EMSCRIPTEN_KEEPALIVE
void ble_conn_bw_count_t_SET_low_count(ble_conn_bw_count_t *structData, uint8_t data)
{
    structData->low_count = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_conn_bw_count_t_GET_low_count(ble_conn_bw_count_t *structData)
{
    return structData->low_count;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_conn_bw_count_t_GET_ADDRESSOF_low_count(ble_conn_bw_count_t *structData)
{
    return &structData->low_count;
}
EMSCRIPTEN_KEEPALIVE
ble_opt_t *ble_opt_t_NEW()
{
    return (ble_opt_t*)(malloc(sizeof(ble_opt_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_opt_t_DELETE(ble_opt_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_opt_t_SIZEOF(ble_opt_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_opt_t_SET_common_opt(ble_opt_t *structData, ble_common_opt_t data)
{
    structData->common_opt = data;
}
EMSCRIPTEN_KEEPALIVE
ble_common_opt_t ble_opt_t_GET_common_opt(ble_opt_t *structData)
{
    return structData->common_opt;
}
EMSCRIPTEN_KEEPALIVE
ble_common_opt_t *ble_opt_t_GET_ADDRESSOF_common_opt(ble_opt_t *structData)
{
    return &structData->common_opt;
}
EMSCRIPTEN_KEEPALIVE
void ble_opt_t_SET_gap_opt(ble_opt_t *structData, ble_gap_opt_t data)
{
    structData->gap_opt = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_t ble_opt_t_GET_gap_opt(ble_opt_t *structData)
{
    return structData->gap_opt;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_t *ble_opt_t_GET_ADDRESSOF_gap_opt(ble_opt_t *structData)
{
    return &structData->gap_opt;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_t *ble_gap_opt_t_NEW()
{
    return (ble_gap_opt_t*)(malloc(sizeof(ble_gap_opt_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_t_DELETE(ble_gap_opt_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_opt_t_SIZEOF(ble_gap_opt_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_t_SET_ch_map(ble_gap_opt_t *structData, ble_gap_opt_ch_map_t data)
{
    structData->ch_map = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_ch_map_t ble_gap_opt_t_GET_ch_map(ble_gap_opt_t *structData)
{
    return structData->ch_map;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_ch_map_t *ble_gap_opt_t_GET_ADDRESSOF_ch_map(ble_gap_opt_t *structData)
{
    return &structData->ch_map;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_t_SET_local_conn_latency(ble_gap_opt_t *structData, ble_gap_opt_local_conn_latency_t data)
{
    structData->local_conn_latency = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_local_conn_latency_t ble_gap_opt_t_GET_local_conn_latency(ble_gap_opt_t *structData)
{
    return structData->local_conn_latency;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_local_conn_latency_t *ble_gap_opt_t_GET_ADDRESSOF_local_conn_latency(ble_gap_opt_t *structData)
{
    return &structData->local_conn_latency;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_t_SET_passkey(ble_gap_opt_t *structData, ble_gap_opt_passkey_t data)
{
    structData->passkey = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_passkey_t ble_gap_opt_t_GET_passkey(ble_gap_opt_t *structData)
{
    return structData->passkey;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_passkey_t *ble_gap_opt_t_GET_ADDRESSOF_passkey(ble_gap_opt_t *structData)
{
    return &structData->passkey;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_t_SET_scan_req_report(ble_gap_opt_t *structData, ble_gap_opt_scan_req_report_t data)
{
    structData->scan_req_report = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_scan_req_report_t ble_gap_opt_t_GET_scan_req_report(ble_gap_opt_t *structData)
{
    return structData->scan_req_report;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_scan_req_report_t *ble_gap_opt_t_GET_ADDRESSOF_scan_req_report(ble_gap_opt_t *structData)
{
    return &structData->scan_req_report;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_t_SET_compat_mode(ble_gap_opt_t *structData, ble_gap_opt_compat_mode_t data)
{
    structData->compat_mode = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_compat_mode_t ble_gap_opt_t_GET_compat_mode(ble_gap_opt_t *structData)
{
    return structData->compat_mode;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_compat_mode_t *ble_gap_opt_t_GET_ADDRESSOF_compat_mode(ble_gap_opt_t *structData)
{
    return &structData->compat_mode;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_t_SET_ext_len(ble_gap_opt_t *structData, ble_gap_opt_ext_len_t data)
{
    structData->ext_len = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_ext_len_t ble_gap_opt_t_GET_ext_len(ble_gap_opt_t *structData)
{
    return structData->ext_len;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_ext_len_t *ble_gap_opt_t_GET_ADDRESSOF_ext_len(ble_gap_opt_t *structData)
{
    return &structData->ext_len;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_t_SET_auth_payload_timeout(ble_gap_opt_t *structData, ble_gap_opt_auth_payload_timeout_t data)
{
    structData->auth_payload_timeout = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_auth_payload_timeout_t ble_gap_opt_t_GET_auth_payload_timeout(ble_gap_opt_t *structData)
{
    return structData->auth_payload_timeout;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_auth_payload_timeout_t *ble_gap_opt_t_GET_ADDRESSOF_auth_payload_timeout(ble_gap_opt_t *structData)
{
    return &structData->auth_payload_timeout;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_auth_payload_timeout_t *ble_gap_opt_auth_payload_timeout_t_NEW()
{
    return (ble_gap_opt_auth_payload_timeout_t*)(malloc(sizeof(ble_gap_opt_auth_payload_timeout_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_auth_payload_timeout_t_DELETE(ble_gap_opt_auth_payload_timeout_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_opt_auth_payload_timeout_t_SIZEOF(ble_gap_opt_auth_payload_timeout_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_auth_payload_timeout_t_SET_conn_handle(ble_gap_opt_auth_payload_timeout_t *structData, uint16_t data)
{
    structData->conn_handle = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_opt_auth_payload_timeout_t_GET_conn_handle(ble_gap_opt_auth_payload_timeout_t *structData)
{
    return structData->conn_handle;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_opt_auth_payload_timeout_t_GET_ADDRESSOF_conn_handle(ble_gap_opt_auth_payload_timeout_t *structData)
{
    return &structData->conn_handle;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_auth_payload_timeout_t_SET_auth_payload_timeout(ble_gap_opt_auth_payload_timeout_t *structData, uint16_t data)
{
    structData->auth_payload_timeout = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_opt_auth_payload_timeout_t_GET_auth_payload_timeout(ble_gap_opt_auth_payload_timeout_t *structData)
{
    return structData->auth_payload_timeout;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_opt_auth_payload_timeout_t_GET_ADDRESSOF_auth_payload_timeout(ble_gap_opt_auth_payload_timeout_t *structData)
{
    return &structData->auth_payload_timeout;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_ext_len_t *ble_gap_opt_ext_len_t_NEW()
{
    return (ble_gap_opt_ext_len_t*)(malloc(sizeof(ble_gap_opt_ext_len_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_ext_len_t_DELETE(ble_gap_opt_ext_len_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_opt_ext_len_t_SIZEOF(ble_gap_opt_ext_len_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_ext_len_t_SET_rxtx_max_pdu_payload_size(ble_gap_opt_ext_len_t *structData, uint8_t data)
{
    structData->rxtx_max_pdu_payload_size = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_opt_ext_len_t_GET_rxtx_max_pdu_payload_size(ble_gap_opt_ext_len_t *structData)
{
    return structData->rxtx_max_pdu_payload_size;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_opt_ext_len_t_GET_ADDRESSOF_rxtx_max_pdu_payload_size(ble_gap_opt_ext_len_t *structData)
{
    return &structData->rxtx_max_pdu_payload_size;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_compat_mode_t *ble_gap_opt_compat_mode_t_NEW()
{
    return (ble_gap_opt_compat_mode_t*)(malloc(sizeof(ble_gap_opt_compat_mode_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_compat_mode_t_DELETE(ble_gap_opt_compat_mode_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_opt_compat_mode_t_SIZEOF(ble_gap_opt_compat_mode_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_compat_mode_t_SET_mode_1_enable(ble_gap_opt_compat_mode_t *structData, uint8_t data)
{
    structData->mode_1_enable = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_opt_compat_mode_t_GET_mode_1_enable(ble_gap_opt_compat_mode_t *structData)
{
    return structData->mode_1_enable;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_scan_req_report_t *ble_gap_opt_scan_req_report_t_NEW()
{
    return (ble_gap_opt_scan_req_report_t*)(malloc(sizeof(ble_gap_opt_scan_req_report_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_scan_req_report_t_DELETE(ble_gap_opt_scan_req_report_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_opt_scan_req_report_t_SIZEOF(ble_gap_opt_scan_req_report_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_scan_req_report_t_SET_enable(ble_gap_opt_scan_req_report_t *structData, uint8_t data)
{
    structData->enable = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_opt_scan_req_report_t_GET_enable(ble_gap_opt_scan_req_report_t *structData)
{
    return structData->enable;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_passkey_t *ble_gap_opt_passkey_t_NEW()
{
    return (ble_gap_opt_passkey_t*)(malloc(sizeof(ble_gap_opt_passkey_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_passkey_t_DELETE(ble_gap_opt_passkey_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_opt_passkey_t_SIZEOF(ble_gap_opt_passkey_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_passkey_t_SET_p_passkey(ble_gap_opt_passkey_t *structData, uint8_t *data)
{
    structData->p_passkey = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_opt_passkey_t_GET_p_passkey(ble_gap_opt_passkey_t *structData)
{
    return structData->p_passkey;
}
EMSCRIPTEN_KEEPALIVE
uint8_t **ble_gap_opt_passkey_t_GET_ADDRESSOF_p_passkey(ble_gap_opt_passkey_t *structData)
{
    return &structData->p_passkey;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_local_conn_latency_t *ble_gap_opt_local_conn_latency_t_NEW()
{
    return (ble_gap_opt_local_conn_latency_t*)(malloc(sizeof(ble_gap_opt_local_conn_latency_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_local_conn_latency_t_DELETE(ble_gap_opt_local_conn_latency_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_opt_local_conn_latency_t_SIZEOF(ble_gap_opt_local_conn_latency_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_local_conn_latency_t_SET_conn_handle(ble_gap_opt_local_conn_latency_t *structData, uint16_t data)
{
    structData->conn_handle = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_opt_local_conn_latency_t_GET_conn_handle(ble_gap_opt_local_conn_latency_t *structData)
{
    return structData->conn_handle;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_opt_local_conn_latency_t_GET_ADDRESSOF_conn_handle(ble_gap_opt_local_conn_latency_t *structData)
{
    return &structData->conn_handle;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_local_conn_latency_t_SET_requested_latency(ble_gap_opt_local_conn_latency_t *structData, uint16_t data)
{
    structData->requested_latency = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_opt_local_conn_latency_t_GET_requested_latency(ble_gap_opt_local_conn_latency_t *structData)
{
    return structData->requested_latency;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_opt_local_conn_latency_t_GET_ADDRESSOF_requested_latency(ble_gap_opt_local_conn_latency_t *structData)
{
    return &structData->requested_latency;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_local_conn_latency_t_SET_p_actual_latency(ble_gap_opt_local_conn_latency_t *structData, uint16_t *data)
{
    structData->p_actual_latency = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_opt_local_conn_latency_t_GET_p_actual_latency(ble_gap_opt_local_conn_latency_t *structData)
{
    return structData->p_actual_latency;
}
EMSCRIPTEN_KEEPALIVE
uint16_t **ble_gap_opt_local_conn_latency_t_GET_ADDRESSOF_p_actual_latency(ble_gap_opt_local_conn_latency_t *structData)
{
    return &structData->p_actual_latency;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_opt_ch_map_t *ble_gap_opt_ch_map_t_NEW()
{
    return (ble_gap_opt_ch_map_t*)(malloc(sizeof(ble_gap_opt_ch_map_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_ch_map_t_DELETE(ble_gap_opt_ch_map_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_opt_ch_map_t_SIZEOF(ble_gap_opt_ch_map_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_opt_ch_map_t_SET_conn_handle(ble_gap_opt_ch_map_t *structData, uint16_t data)
{
    structData->conn_handle = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_opt_ch_map_t_GET_conn_handle(ble_gap_opt_ch_map_t *structData)
{
    return structData->conn_handle;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_opt_ch_map_t_GET_ADDRESSOF_conn_handle(ble_gap_opt_ch_map_t *structData)
{
    return &structData->conn_handle;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_opt_ch_map_t_GET_ADDRESSOF_ch_map(ble_gap_opt_ch_map_t *structData)
{
    return &structData->ch_map[0];
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_opt_ch_map_t_LENGTH_ch_map(ble_gap_opt_ch_map_t *structData)
{
    return sizeof(structData->ch_map)/sizeof(structData->ch_map[0]);
}
EMSCRIPTEN_KEEPALIVE
ble_common_opt_t *ble_common_opt_t_NEW()
{
    return (ble_common_opt_t*)(malloc(sizeof(ble_common_opt_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_t_DELETE(ble_common_opt_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_common_opt_t_SIZEOF(ble_common_opt_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_t_SET_conn_bw(ble_common_opt_t *structData, ble_common_opt_conn_bw_t data)
{
    structData->conn_bw = data;
}
EMSCRIPTEN_KEEPALIVE
ble_common_opt_conn_bw_t ble_common_opt_t_GET_conn_bw(ble_common_opt_t *structData)
{
    return structData->conn_bw;
}
EMSCRIPTEN_KEEPALIVE
ble_common_opt_conn_bw_t *ble_common_opt_t_GET_ADDRESSOF_conn_bw(ble_common_opt_t *structData)
{
    return &structData->conn_bw;
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_t_SET_pa_lna(ble_common_opt_t *structData, ble_common_opt_pa_lna_t data)
{
    structData->pa_lna = data;
}
EMSCRIPTEN_KEEPALIVE
ble_common_opt_pa_lna_t ble_common_opt_t_GET_pa_lna(ble_common_opt_t *structData)
{
    return structData->pa_lna;
}
EMSCRIPTEN_KEEPALIVE
ble_common_opt_pa_lna_t *ble_common_opt_t_GET_ADDRESSOF_pa_lna(ble_common_opt_t *structData)
{
    return &structData->pa_lna;
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_t_SET_conn_evt_ext(ble_common_opt_t *structData, ble_common_opt_conn_evt_ext_t data)
{
    structData->conn_evt_ext = data;
}
EMSCRIPTEN_KEEPALIVE
ble_common_opt_conn_evt_ext_t ble_common_opt_t_GET_conn_evt_ext(ble_common_opt_t *structData)
{
    return structData->conn_evt_ext;
}
EMSCRIPTEN_KEEPALIVE
ble_common_opt_conn_evt_ext_t *ble_common_opt_t_GET_ADDRESSOF_conn_evt_ext(ble_common_opt_t *structData)
{
    return &structData->conn_evt_ext;
}
EMSCRIPTEN_KEEPALIVE
ble_common_opt_conn_evt_ext_t *ble_common_opt_conn_evt_ext_t_NEW()
{
    return (ble_common_opt_conn_evt_ext_t*)(malloc(sizeof(ble_common_opt_conn_evt_ext_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_conn_evt_ext_t_DELETE(ble_common_opt_conn_evt_ext_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_common_opt_conn_evt_ext_t_SIZEOF(ble_common_opt_conn_evt_ext_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_conn_evt_ext_t_SET_enable(ble_common_opt_conn_evt_ext_t *structData, uint8_t data)
{
    structData->enable = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_common_opt_conn_evt_ext_t_GET_enable(ble_common_opt_conn_evt_ext_t *structData)
{
    return structData->enable;
}
EMSCRIPTEN_KEEPALIVE
ble_common_opt_pa_lna_t *ble_common_opt_pa_lna_t_NEW()
{
    return (ble_common_opt_pa_lna_t*)(malloc(sizeof(ble_common_opt_pa_lna_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_pa_lna_t_DELETE(ble_common_opt_pa_lna_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_common_opt_pa_lna_t_SIZEOF(ble_common_opt_pa_lna_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_pa_lna_t_SET_pa_cfg(ble_common_opt_pa_lna_t *structData, ble_pa_lna_cfg_t data)
{
    structData->pa_cfg = data;
}
EMSCRIPTEN_KEEPALIVE
ble_pa_lna_cfg_t ble_common_opt_pa_lna_t_GET_pa_cfg(ble_common_opt_pa_lna_t *structData)
{
    return structData->pa_cfg;
}
EMSCRIPTEN_KEEPALIVE
ble_pa_lna_cfg_t *ble_common_opt_pa_lna_t_GET_ADDRESSOF_pa_cfg(ble_common_opt_pa_lna_t *structData)
{
    return &structData->pa_cfg;
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_pa_lna_t_SET_lna_cfg(ble_common_opt_pa_lna_t *structData, ble_pa_lna_cfg_t data)
{
    structData->lna_cfg = data;
}
EMSCRIPTEN_KEEPALIVE
ble_pa_lna_cfg_t ble_common_opt_pa_lna_t_GET_lna_cfg(ble_common_opt_pa_lna_t *structData)
{
    return structData->lna_cfg;
}
EMSCRIPTEN_KEEPALIVE
ble_pa_lna_cfg_t *ble_common_opt_pa_lna_t_GET_ADDRESSOF_lna_cfg(ble_common_opt_pa_lna_t *structData)
{
    return &structData->lna_cfg;
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_pa_lna_t_SET_ppi_ch_id_set(ble_common_opt_pa_lna_t *structData, uint8_t data)
{
    structData->ppi_ch_id_set = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_common_opt_pa_lna_t_GET_ppi_ch_id_set(ble_common_opt_pa_lna_t *structData)
{
    return structData->ppi_ch_id_set;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_common_opt_pa_lna_t_GET_ADDRESSOF_ppi_ch_id_set(ble_common_opt_pa_lna_t *structData)
{
    return &structData->ppi_ch_id_set;
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_pa_lna_t_SET_ppi_ch_id_clr(ble_common_opt_pa_lna_t *structData, uint8_t data)
{
    structData->ppi_ch_id_clr = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_common_opt_pa_lna_t_GET_ppi_ch_id_clr(ble_common_opt_pa_lna_t *structData)
{
    return structData->ppi_ch_id_clr;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_common_opt_pa_lna_t_GET_ADDRESSOF_ppi_ch_id_clr(ble_common_opt_pa_lna_t *structData)
{
    return &structData->ppi_ch_id_clr;
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_pa_lna_t_SET_gpiote_ch_id(ble_common_opt_pa_lna_t *structData, uint8_t data)
{
    structData->gpiote_ch_id = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_common_opt_pa_lna_t_GET_gpiote_ch_id(ble_common_opt_pa_lna_t *structData)
{
    return structData->gpiote_ch_id;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_common_opt_pa_lna_t_GET_ADDRESSOF_gpiote_ch_id(ble_common_opt_pa_lna_t *structData)
{
    return &structData->gpiote_ch_id;
}
EMSCRIPTEN_KEEPALIVE
ble_pa_lna_cfg_t *ble_pa_lna_cfg_t_NEW()
{
    return (ble_pa_lna_cfg_t*)(malloc(sizeof(ble_pa_lna_cfg_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_pa_lna_cfg_t_DELETE(ble_pa_lna_cfg_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_pa_lna_cfg_t_SIZEOF(ble_pa_lna_cfg_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_pa_lna_cfg_t_SET_enable(ble_pa_lna_cfg_t *structData, uint8_t data)
{
    structData->enable = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_pa_lna_cfg_t_GET_enable(ble_pa_lna_cfg_t *structData)
{
    return structData->enable;
}
EMSCRIPTEN_KEEPALIVE
void ble_pa_lna_cfg_t_SET_active_high(ble_pa_lna_cfg_t *structData, uint8_t data)
{
    structData->active_high = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_pa_lna_cfg_t_GET_active_high(ble_pa_lna_cfg_t *structData)
{
    return structData->active_high;
}
EMSCRIPTEN_KEEPALIVE
void ble_pa_lna_cfg_t_SET_gpio_pin(ble_pa_lna_cfg_t *structData, uint8_t data)
{
    structData->gpio_pin = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_pa_lna_cfg_t_GET_gpio_pin(ble_pa_lna_cfg_t *structData)
{
    return structData->gpio_pin;
}
EMSCRIPTEN_KEEPALIVE
ble_common_opt_conn_bw_t *ble_common_opt_conn_bw_t_NEW()
{
    return (ble_common_opt_conn_bw_t*)(malloc(sizeof(ble_common_opt_conn_bw_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_conn_bw_t_DELETE(ble_common_opt_conn_bw_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_common_opt_conn_bw_t_SIZEOF(ble_common_opt_conn_bw_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_conn_bw_t_SET_role(ble_common_opt_conn_bw_t *structData, uint8_t data)
{
    structData->role = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_common_opt_conn_bw_t_GET_role(ble_common_opt_conn_bw_t *structData)
{
    return structData->role;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_common_opt_conn_bw_t_GET_ADDRESSOF_role(ble_common_opt_conn_bw_t *structData)
{
    return &structData->role;
}
EMSCRIPTEN_KEEPALIVE
void ble_common_opt_conn_bw_t_SET_conn_bw(ble_common_opt_conn_bw_t *structData, ble_conn_bw_t data)
{
    structData->conn_bw = data;
}
EMSCRIPTEN_KEEPALIVE
ble_conn_bw_t ble_common_opt_conn_bw_t_GET_conn_bw(ble_common_opt_conn_bw_t *structData)
{
    return structData->conn_bw;
}
EMSCRIPTEN_KEEPALIVE
ble_conn_bw_t *ble_common_opt_conn_bw_t_GET_ADDRESSOF_conn_bw(ble_common_opt_conn_bw_t *structData)
{
    return &structData->conn_bw;
}
EMSCRIPTEN_KEEPALIVE
ble_conn_bw_t *ble_conn_bw_t_NEW()
{
    return (ble_conn_bw_t*)(malloc(sizeof(ble_conn_bw_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_conn_bw_t_DELETE(ble_conn_bw_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_conn_bw_t_SIZEOF(ble_conn_bw_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_conn_bw_t_SET_conn_bw_tx(ble_conn_bw_t *structData, uint8_t data)
{
    structData->conn_bw_tx = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_conn_bw_t_GET_conn_bw_tx(ble_conn_bw_t *structData)
{
    return structData->conn_bw_tx;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_conn_bw_t_GET_ADDRESSOF_conn_bw_tx(ble_conn_bw_t *structData)
{
    return &structData->conn_bw_tx;
}
EMSCRIPTEN_KEEPALIVE
void ble_conn_bw_t_SET_conn_bw_rx(ble_conn_bw_t *structData, uint8_t data)
{
    structData->conn_bw_rx = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_conn_bw_t_GET_conn_bw_rx(ble_conn_bw_t *structData)
{
    return structData->conn_bw_rx;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_conn_bw_t_GET_ADDRESSOF_conn_bw_rx(ble_conn_bw_t *structData)
{
    return &structData->conn_bw_rx;
}
EMSCRIPTEN_KEEPALIVE
ble_version_t *ble_version_t_NEW()
{
    return (ble_version_t*)(malloc(sizeof(ble_version_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_version_t_DELETE(ble_version_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_version_t_SIZEOF(ble_version_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_version_t_SET_version_number(ble_version_t *structData, uint8_t data)
{
    structData->version_number = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_version_t_GET_version_number(ble_version_t *structData)
{
    return structData->version_number;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_version_t_GET_ADDRESSOF_version_number(ble_version_t *structData)
{
    return &structData->version_number;
}
EMSCRIPTEN_KEEPALIVE
void ble_version_t_SET_company_id(ble_version_t *structData, uint16_t data)
{
    structData->company_id = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_version_t_GET_company_id(ble_version_t *structData)
{
    return structData->company_id;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_version_t_GET_ADDRESSOF_company_id(ble_version_t *structData)
{
    return &structData->company_id;
}
EMSCRIPTEN_KEEPALIVE
void ble_version_t_SET_subversion_number(ble_version_t *structData, uint16_t data)
{
    structData->subversion_number = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_version_t_GET_subversion_number(ble_version_t *structData)
{
    return structData->subversion_number;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_version_t_GET_ADDRESSOF_subversion_number(ble_version_t *structData)
{
    return &structData->subversion_number;
}
EMSCRIPTEN_KEEPALIVE
ble_uuid128_t *ble_uuid128_t_NEW()
{
    return (ble_uuid128_t*)(malloc(sizeof(ble_uuid128_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_uuid128_t_DELETE(ble_uuid128_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_uuid128_t_SIZEOF(ble_uuid128_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_uuid128_t_GET_ADDRESSOF_uuid128(ble_uuid128_t *structData)
{
    return &structData->uuid128[0];
}
EMSCRIPTEN_KEEPALIVE
size_t ble_uuid128_t_LENGTH_uuid128(ble_uuid128_t *structData)
{
    return sizeof(structData->uuid128)/sizeof(structData->uuid128[0]);
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_attr_md_t *ble_gatts_attr_md_t_NEW()
{
    return (ble_gatts_attr_md_t*)(malloc(sizeof(ble_gatts_attr_md_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_attr_md_t_DELETE(ble_gatts_attr_md_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gatts_attr_md_t_SIZEOF(ble_gatts_attr_md_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_attr_md_t_SET_read_perm(ble_gatts_attr_md_t *structData, ble_gap_conn_sec_mode_t data)
{
    structData->read_perm = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_conn_sec_mode_t ble_gatts_attr_md_t_GET_read_perm(ble_gatts_attr_md_t *structData)
{
    return structData->read_perm;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_conn_sec_mode_t *ble_gatts_attr_md_t_GET_ADDRESSOF_read_perm(ble_gatts_attr_md_t *structData)
{
    return &structData->read_perm;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_attr_md_t_SET_write_perm(ble_gatts_attr_md_t *structData, ble_gap_conn_sec_mode_t data)
{
    structData->write_perm = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_conn_sec_mode_t ble_gatts_attr_md_t_GET_write_perm(ble_gatts_attr_md_t *structData)
{
    return structData->write_perm;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_conn_sec_mode_t *ble_gatts_attr_md_t_GET_ADDRESSOF_write_perm(ble_gatts_attr_md_t *structData)
{
    return &structData->write_perm;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_attr_md_t_SET_vlen(ble_gatts_attr_md_t *structData, uint8_t data)
{
    structData->vlen = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatts_attr_md_t_GET_vlen(ble_gatts_attr_md_t *structData)
{
    return structData->vlen;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_attr_md_t_SET_vloc(ble_gatts_attr_md_t *structData, uint8_t data)
{
    structData->vloc = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatts_attr_md_t_GET_vloc(ble_gatts_attr_md_t *structData)
{
    return structData->vloc;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_attr_md_t_SET_rd_auth(ble_gatts_attr_md_t *structData, uint8_t data)
{
    structData->rd_auth = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatts_attr_md_t_GET_rd_auth(ble_gatts_attr_md_t *structData)
{
    return structData->rd_auth;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_attr_md_t_SET_wr_auth(ble_gatts_attr_md_t *structData, uint8_t data)
{
    structData->wr_auth = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatts_attr_md_t_GET_wr_auth(ble_gatts_attr_md_t *structData)
{
    return structData->wr_auth;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_rw_authorize_reply_params_t *ble_gatts_rw_authorize_reply_params_t_NEW()
{
    return (ble_gatts_rw_authorize_reply_params_t*)(malloc(sizeof(ble_gatts_rw_authorize_reply_params_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_rw_authorize_reply_params_t_DELETE(ble_gatts_rw_authorize_reply_params_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gatts_rw_authorize_reply_params_t_SIZEOF(ble_gatts_rw_authorize_reply_params_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_rw_authorize_reply_params_t_SET_type(ble_gatts_rw_authorize_reply_params_t *structData, uint8_t data)
{
    structData->type = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatts_rw_authorize_reply_params_t_GET_type(ble_gatts_rw_authorize_reply_params_t *structData)
{
    return structData->type;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gatts_rw_authorize_reply_params_t_GET_ADDRESSOF_type(ble_gatts_rw_authorize_reply_params_t *structData)
{
    return &structData->type;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_rw_authorize_reply_params_t_SET_read(ble_gatts_rw_authorize_reply_params_t *structData, ble_gatts_authorize_params_t data)
{
    structData->params.read = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_authorize_params_t ble_gatts_rw_authorize_reply_params_t_GET_read(ble_gatts_rw_authorize_reply_params_t *structData)
{
    return structData->params.read;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_authorize_params_t *ble_gatts_rw_authorize_reply_params_t_GET_ADDRESSOF_read(ble_gatts_rw_authorize_reply_params_t *structData)
{
    return &structData->params.read;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_rw_authorize_reply_params_t_SET_write(ble_gatts_rw_authorize_reply_params_t *structData, ble_gatts_authorize_params_t data)
{
    structData->params.write = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_authorize_params_t ble_gatts_rw_authorize_reply_params_t_GET_write(ble_gatts_rw_authorize_reply_params_t *structData)
{
    return structData->params.write;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_authorize_params_t *ble_gatts_rw_authorize_reply_params_t_GET_ADDRESSOF_write(ble_gatts_rw_authorize_reply_params_t *structData)
{
    return &structData->params.write;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_authorize_params_t *ble_gatts_authorize_params_t_NEW()
{
    return (ble_gatts_authorize_params_t*)(malloc(sizeof(ble_gatts_authorize_params_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_authorize_params_t_DELETE(ble_gatts_authorize_params_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gatts_authorize_params_t_SIZEOF(ble_gatts_authorize_params_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_authorize_params_t_SET_gatt_status(ble_gatts_authorize_params_t *structData, uint16_t data)
{
    structData->gatt_status = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_authorize_params_t_GET_gatt_status(ble_gatts_authorize_params_t *structData)
{
    return structData->gatt_status;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_authorize_params_t_GET_ADDRESSOF_gatt_status(ble_gatts_authorize_params_t *structData)
{
    return &structData->gatt_status;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_authorize_params_t_SET_update(ble_gatts_authorize_params_t *structData, uint8_t data)
{
    structData->update = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatts_authorize_params_t_GET_update(ble_gatts_authorize_params_t *structData)
{
    return structData->update;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_authorize_params_t_SET_offset(ble_gatts_authorize_params_t *structData, uint16_t data)
{
    structData->offset = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_authorize_params_t_GET_offset(ble_gatts_authorize_params_t *structData)
{
    return structData->offset;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_authorize_params_t_GET_ADDRESSOF_offset(ble_gatts_authorize_params_t *structData)
{
    return &structData->offset;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_authorize_params_t_SET_len(ble_gatts_authorize_params_t *structData, uint16_t data)
{
    structData->len = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_authorize_params_t_GET_len(ble_gatts_authorize_params_t *structData)
{
    return structData->len;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_authorize_params_t_GET_ADDRESSOF_len(ble_gatts_authorize_params_t *structData)
{
    return &structData->len;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_authorize_params_t_SET_p_data(ble_gatts_authorize_params_t *structData, uint8_t *data)
{
    structData->p_data = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_hvx_params_t *ble_gatts_hvx_params_t_NEW()
{
    return (ble_gatts_hvx_params_t*)(malloc(sizeof(ble_gatts_hvx_params_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_hvx_params_t_DELETE(ble_gatts_hvx_params_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gatts_hvx_params_t_SIZEOF(ble_gatts_hvx_params_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_hvx_params_t_SET_handle(ble_gatts_hvx_params_t *structData, uint16_t data)
{
    structData->handle = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_hvx_params_t_GET_handle(ble_gatts_hvx_params_t *structData)
{
    return structData->handle;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_hvx_params_t_GET_ADDRESSOF_handle(ble_gatts_hvx_params_t *structData)
{
    return &structData->handle;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_hvx_params_t_SET_type(ble_gatts_hvx_params_t *structData, uint8_t data)
{
    structData->type = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatts_hvx_params_t_GET_type(ble_gatts_hvx_params_t *structData)
{
    return structData->type;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gatts_hvx_params_t_GET_ADDRESSOF_type(ble_gatts_hvx_params_t *structData)
{
    return &structData->type;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_hvx_params_t_SET_offset(ble_gatts_hvx_params_t *structData, uint16_t data)
{
    structData->offset = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_hvx_params_t_GET_offset(ble_gatts_hvx_params_t *structData)
{
    return structData->offset;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_hvx_params_t_GET_ADDRESSOF_offset(ble_gatts_hvx_params_t *structData)
{
    return &structData->offset;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_hvx_params_t_SET_p_len(ble_gatts_hvx_params_t *structData, uint16_t *data)
{
    structData->p_len = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_hvx_params_t_GET_p_len(ble_gatts_hvx_params_t *structData)
{
    return structData->p_len;
}
EMSCRIPTEN_KEEPALIVE
uint16_t **ble_gatts_hvx_params_t_GET_ADDRESSOF_p_len(ble_gatts_hvx_params_t *structData)
{
    return &structData->p_len;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_hvx_params_t_SET_p_data(ble_gatts_hvx_params_t *structData, uint8_t *data)
{
    structData->p_data = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gatts_hvx_params_t_GET_p_data(ble_gatts_hvx_params_t *structData)
{
    return structData->p_data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t **ble_gatts_hvx_params_t_GET_ADDRESSOF_p_data(ble_gatts_hvx_params_t *structData)
{
    return &structData->p_data;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_value_t *ble_gatts_value_t_NEW()
{
    return (ble_gatts_value_t*)(malloc(sizeof(ble_gatts_value_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_value_t_DELETE(ble_gatts_value_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gatts_value_t_SIZEOF(ble_gatts_value_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_value_t_SET_len(ble_gatts_value_t *structData, uint16_t data)
{
    structData->len = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_value_t_GET_len(ble_gatts_value_t *structData)
{
    return structData->len;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_value_t_GET_ADDRESSOF_len(ble_gatts_value_t *structData)
{
    return &structData->len;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_value_t_SET_offset(ble_gatts_value_t *structData, uint16_t data)
{
    structData->offset = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_value_t_GET_offset(ble_gatts_value_t *structData)
{
    return structData->offset;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_value_t_GET_ADDRESSOF_offset(ble_gatts_value_t *structData)
{
    return &structData->offset;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_value_t_SET_p_value(ble_gatts_value_t *structData, uint8_t *data)
{
    structData->p_value = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gatts_value_t_GET_p_value(ble_gatts_value_t *structData)
{
    return structData->p_value;
}
EMSCRIPTEN_KEEPALIVE
uint8_t **ble_gatts_value_t_GET_ADDRESSOF_p_value(ble_gatts_value_t *structData)
{
    return &structData->p_value;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_char_handles_t *ble_gatts_char_handles_t_NEW()
{
    return (ble_gatts_char_handles_t*)(malloc(sizeof(ble_gatts_char_handles_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_handles_t_DELETE(ble_gatts_char_handles_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gatts_char_handles_t_SIZEOF(ble_gatts_char_handles_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_handles_t_SET_value_handle(ble_gatts_char_handles_t *structData, uint16_t data)
{
    structData->value_handle = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_char_handles_t_GET_value_handle(ble_gatts_char_handles_t *structData)
{
    return structData->value_handle;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_char_handles_t_GET_ADDRESSOF_value_handle(ble_gatts_char_handles_t *structData)
{
    return &structData->value_handle;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_handles_t_SET_user_desc_handle(ble_gatts_char_handles_t *structData, uint16_t data)
{
    structData->user_desc_handle = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_char_handles_t_GET_user_desc_handle(ble_gatts_char_handles_t *structData)
{
    return structData->user_desc_handle;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_char_handles_t_GET_ADDRESSOF_user_desc_handle(ble_gatts_char_handles_t *structData)
{
    return &structData->user_desc_handle;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_handles_t_SET_cccd_handle(ble_gatts_char_handles_t *structData, uint16_t data)
{
    structData->cccd_handle = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_char_handles_t_GET_cccd_handle(ble_gatts_char_handles_t *structData)
{
    return structData->cccd_handle;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_char_handles_t_GET_ADDRESSOF_cccd_handle(ble_gatts_char_handles_t *structData)
{
    return &structData->cccd_handle;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_handles_t_SET_sccd_handle(ble_gatts_char_handles_t *structData, uint16_t data)
{
    structData->sccd_handle = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_char_handles_t_GET_sccd_handle(ble_gatts_char_handles_t *structData)
{
    return structData->sccd_handle;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_char_handles_t_GET_ADDRESSOF_sccd_handle(ble_gatts_char_handles_t *structData)
{
    return &structData->sccd_handle;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_attr_t *ble_gatts_attr_t_NEW()
{
    return (ble_gatts_attr_t*)(malloc(sizeof(ble_gatts_attr_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_attr_t_DELETE(ble_gatts_attr_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gatts_attr_t_SIZEOF(ble_gatts_attr_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_attr_t_SET_p_uuid(ble_gatts_attr_t *structData, ble_uuid_t *data)
{
    structData->p_uuid = data;
}
EMSCRIPTEN_KEEPALIVE
ble_uuid_t *ble_gatts_attr_t_GET_p_uuid(ble_gatts_attr_t *structData)
{
    return structData->p_uuid;
}
EMSCRIPTEN_KEEPALIVE
ble_uuid_t **ble_gatts_attr_t_GET_ADDRESSOF_p_uuid(ble_gatts_attr_t *structData)
{
    return &structData->p_uuid;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_attr_t_SET_p_attr_md(ble_gatts_attr_t *structData, ble_gatts_attr_md_t *data)
{
    structData->p_attr_md = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_attr_md_t *ble_gatts_attr_t_GET_p_attr_md(ble_gatts_attr_t *structData)
{
    return structData->p_attr_md;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_attr_md_t **ble_gatts_attr_t_GET_ADDRESSOF_p_attr_md(ble_gatts_attr_t *structData)
{
    return &structData->p_attr_md;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_attr_t_SET_init_len(ble_gatts_attr_t *structData, uint16_t data)
{
    structData->init_len = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_attr_t_GET_init_len(ble_gatts_attr_t *structData)
{
    return structData->init_len;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_attr_t_GET_ADDRESSOF_init_len(ble_gatts_attr_t *structData)
{
    return &structData->init_len;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_attr_t_SET_init_offs(ble_gatts_attr_t *structData, uint16_t data)
{
    structData->init_offs = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_attr_t_GET_init_offs(ble_gatts_attr_t *structData)
{
    return structData->init_offs;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_attr_t_GET_ADDRESSOF_init_offs(ble_gatts_attr_t *structData)
{
    return &structData->init_offs;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_attr_t_SET_max_len(ble_gatts_attr_t *structData, uint16_t data)
{
    structData->max_len = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_attr_t_GET_max_len(ble_gatts_attr_t *structData)
{
    return structData->max_len;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_attr_t_GET_ADDRESSOF_max_len(ble_gatts_attr_t *structData)
{
    return &structData->max_len;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_attr_t_SET_p_value(ble_gatts_attr_t *structData, uint8_t *data)
{
    structData->p_value = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gatts_attr_t_GET_p_value(ble_gatts_attr_t *structData)
{
    return structData->p_value;
}
EMSCRIPTEN_KEEPALIVE
uint8_t **ble_gatts_attr_t_GET_ADDRESSOF_p_value(ble_gatts_attr_t *structData)
{
    return &structData->p_value;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_char_md_t *ble_gatts_char_md_t_NEW()
{
    return (ble_gatts_char_md_t*)(malloc(sizeof(ble_gatts_char_md_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_md_t_DELETE(ble_gatts_char_md_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gatts_char_md_t_SIZEOF(ble_gatts_char_md_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_md_t_SET_char_props(ble_gatts_char_md_t *structData, ble_gatt_char_props_t data)
{
    structData->char_props = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gatt_char_props_t ble_gatts_char_md_t_GET_char_props(ble_gatts_char_md_t *structData)
{
    return structData->char_props;
}
EMSCRIPTEN_KEEPALIVE
ble_gatt_char_props_t *ble_gatts_char_md_t_GET_ADDRESSOF_char_props(ble_gatts_char_md_t *structData)
{
    return &structData->char_props;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_md_t_SET_char_ext_props(ble_gatts_char_md_t *structData, ble_gatt_char_ext_props_t data)
{
    structData->char_ext_props = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gatt_char_ext_props_t ble_gatts_char_md_t_GET_char_ext_props(ble_gatts_char_md_t *structData)
{
    return structData->char_ext_props;
}
EMSCRIPTEN_KEEPALIVE
ble_gatt_char_ext_props_t *ble_gatts_char_md_t_GET_ADDRESSOF_char_ext_props(ble_gatts_char_md_t *structData)
{
    return &structData->char_ext_props;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_md_t_SET_p_char_user_desc(ble_gatts_char_md_t *structData, uint8_t *data)
{
    structData->p_char_user_desc = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gatts_char_md_t_GET_p_char_user_desc(ble_gatts_char_md_t *structData)
{
    return structData->p_char_user_desc;
}
EMSCRIPTEN_KEEPALIVE
uint8_t **ble_gatts_char_md_t_GET_ADDRESSOF_p_char_user_desc(ble_gatts_char_md_t *structData)
{
    return &structData->p_char_user_desc;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_md_t_SET_char_user_desc_max_size(ble_gatts_char_md_t *structData, uint16_t data)
{
    structData->char_user_desc_max_size = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_char_md_t_GET_char_user_desc_max_size(ble_gatts_char_md_t *structData)
{
    return structData->char_user_desc_max_size;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_char_md_t_GET_ADDRESSOF_char_user_desc_max_size(ble_gatts_char_md_t *structData)
{
    return &structData->char_user_desc_max_size;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_md_t_SET_char_user_desc_size(ble_gatts_char_md_t *structData, uint16_t data)
{
    structData->char_user_desc_size = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_char_md_t_GET_char_user_desc_size(ble_gatts_char_md_t *structData)
{
    return structData->char_user_desc_size;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_char_md_t_GET_ADDRESSOF_char_user_desc_size(ble_gatts_char_md_t *structData)
{
    return &structData->char_user_desc_size;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_md_t_SET_p_char_pf(ble_gatts_char_md_t *structData, ble_gatts_char_pf_t *data)
{
    structData->p_char_pf = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_char_pf_t *ble_gatts_char_md_t_GET_p_char_pf(ble_gatts_char_md_t *structData)
{
    return structData->p_char_pf;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_char_pf_t **ble_gatts_char_md_t_GET_ADDRESSOF_p_char_pf(ble_gatts_char_md_t *structData)
{
    return &structData->p_char_pf;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_md_t_SET_p_user_desc_md(ble_gatts_char_md_t *structData, ble_gatts_attr_md_t *data)
{
    structData->p_user_desc_md = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_attr_md_t *ble_gatts_char_md_t_GET_p_user_desc_md(ble_gatts_char_md_t *structData)
{
    return structData->p_user_desc_md;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_attr_md_t **ble_gatts_char_md_t_GET_ADDRESSOF_p_user_desc_md(ble_gatts_char_md_t *structData)
{
    return &structData->p_user_desc_md;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_md_t_SET_p_cccd_md(ble_gatts_char_md_t *structData, ble_gatts_attr_md_t *data)
{
    structData->p_cccd_md = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_attr_md_t *ble_gatts_char_md_t_GET_p_cccd_md(ble_gatts_char_md_t *structData)
{
    return structData->p_cccd_md;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_attr_md_t **ble_gatts_char_md_t_GET_ADDRESSOF_p_cccd_md(ble_gatts_char_md_t *structData)
{
    return &structData->p_cccd_md;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_md_t_SET_p_sccd_md(ble_gatts_char_md_t *structData, ble_gatts_attr_md_t *data)
{
    structData->p_sccd_md = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_attr_md_t *ble_gatts_char_md_t_GET_p_sccd_md(ble_gatts_char_md_t *structData)
{
    return structData->p_sccd_md;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_attr_md_t **ble_gatts_char_md_t_GET_ADDRESSOF_p_sccd_md(ble_gatts_char_md_t *structData)
{
    return &structData->p_sccd_md;
}
EMSCRIPTEN_KEEPALIVE
ble_gatts_char_pf_t *ble_gatts_char_pf_t_NEW()
{
    return (ble_gatts_char_pf_t*)(malloc(sizeof(ble_gatts_char_pf_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_pf_t_DELETE(ble_gatts_char_pf_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gatts_char_pf_t_SIZEOF(ble_gatts_char_pf_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_pf_t_SET_format(ble_gatts_char_pf_t *structData, uint8_t data)
{
    structData->format = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatts_char_pf_t_GET_format(ble_gatts_char_pf_t *structData)
{
    return structData->format;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gatts_char_pf_t_GET_ADDRESSOF_format(ble_gatts_char_pf_t *structData)
{
    return &structData->format;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_pf_t_SET_exponent(ble_gatts_char_pf_t *structData, int8_t data)
{
    structData->exponent = data;
}
EMSCRIPTEN_KEEPALIVE
int8_t ble_gatts_char_pf_t_GET_exponent(ble_gatts_char_pf_t *structData)
{
    return structData->exponent;
}
EMSCRIPTEN_KEEPALIVE
int8_t *ble_gatts_char_pf_t_GET_ADDRESSOF_exponent(ble_gatts_char_pf_t *structData)
{
    return &structData->exponent;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_pf_t_SET_unit(ble_gatts_char_pf_t *structData, uint16_t data)
{
    structData->unit = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_char_pf_t_GET_unit(ble_gatts_char_pf_t *structData)
{
    return structData->unit;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_char_pf_t_GET_ADDRESSOF_unit(ble_gatts_char_pf_t *structData)
{
    return &structData->unit;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_pf_t_SET_name_space(ble_gatts_char_pf_t *structData, uint8_t data)
{
    structData->name_space = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatts_char_pf_t_GET_name_space(ble_gatts_char_pf_t *structData)
{
    return structData->name_space;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gatts_char_pf_t_GET_ADDRESSOF_name_space(ble_gatts_char_pf_t *structData)
{
    return &structData->name_space;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatts_char_pf_t_SET_desc(ble_gatts_char_pf_t *structData, uint16_t data)
{
    structData->desc = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gatts_char_pf_t_GET_desc(ble_gatts_char_pf_t *structData)
{
    return structData->desc;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gatts_char_pf_t_GET_ADDRESSOF_desc(ble_gatts_char_pf_t *structData)
{
    return &structData->desc;
}
EMSCRIPTEN_KEEPALIVE
ble_gatt_char_ext_props_t *ble_gatt_char_ext_props_t_NEW()
{
    return (ble_gatt_char_ext_props_t*)(malloc(sizeof(ble_gatt_char_ext_props_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gatt_char_ext_props_t_DELETE(ble_gatt_char_ext_props_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gatt_char_ext_props_t_SIZEOF(ble_gatt_char_ext_props_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gatt_char_ext_props_t_SET_reliable_wr(ble_gatt_char_ext_props_t *structData, uint8_t data)
{
    structData->reliable_wr = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatt_char_ext_props_t_GET_reliable_wr(ble_gatt_char_ext_props_t *structData)
{
    return structData->reliable_wr;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatt_char_ext_props_t_SET_wr_aux(ble_gatt_char_ext_props_t *structData, uint8_t data)
{
    structData->wr_aux = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatt_char_ext_props_t_GET_wr_aux(ble_gatt_char_ext_props_t *structData)
{
    return structData->wr_aux;
}
EMSCRIPTEN_KEEPALIVE
ble_gatt_char_props_t *ble_gatt_char_props_t_NEW()
{
    return (ble_gatt_char_props_t*)(malloc(sizeof(ble_gatt_char_props_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gatt_char_props_t_DELETE(ble_gatt_char_props_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gatt_char_props_t_SIZEOF(ble_gatt_char_props_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gatt_char_props_t_SET_broadcast(ble_gatt_char_props_t *structData, uint8_t data)
{
    structData->broadcast = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatt_char_props_t_GET_broadcast(ble_gatt_char_props_t *structData)
{
    return structData->broadcast;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatt_char_props_t_SET_read(ble_gatt_char_props_t *structData, uint8_t data)
{
    structData->read = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatt_char_props_t_GET_read(ble_gatt_char_props_t *structData)
{
    return structData->read;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatt_char_props_t_SET_write_wo_resp(ble_gatt_char_props_t *structData, uint8_t data)
{
    structData->write_wo_resp = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatt_char_props_t_GET_write_wo_resp(ble_gatt_char_props_t *structData)
{
    return structData->write_wo_resp;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatt_char_props_t_SET_write(ble_gatt_char_props_t *structData, uint8_t data)
{
    structData->write = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatt_char_props_t_GET_write(ble_gatt_char_props_t *structData)
{
    return structData->write;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatt_char_props_t_SET_notify(ble_gatt_char_props_t *structData, uint8_t data)
{
    structData->notify = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatt_char_props_t_GET_notify(ble_gatt_char_props_t *structData)
{
    return structData->notify;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatt_char_props_t_SET_indicate(ble_gatt_char_props_t *structData, uint8_t data)
{
    structData->indicate = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatt_char_props_t_GET_indicate(ble_gatt_char_props_t *structData)
{
    return structData->indicate;
}
EMSCRIPTEN_KEEPALIVE
void ble_gatt_char_props_t_SET_auth_signed_wr(ble_gatt_char_props_t *structData, uint8_t data)
{
    structData->auth_signed_wr = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gatt_char_props_t_GET_auth_signed_wr(ble_gatt_char_props_t *structData)
{
    return structData->auth_signed_wr;
}
EMSCRIPTEN_KEEPALIVE
ble_gattc_write_params_t *ble_gattc_write_params_t_NEW()
{
    return (ble_gattc_write_params_t*)(malloc(sizeof(ble_gattc_write_params_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gattc_write_params_t_DELETE(ble_gattc_write_params_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gattc_write_params_t_SIZEOF(ble_gattc_write_params_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gattc_write_params_t_SET_write_op(ble_gattc_write_params_t *structData, uint8_t data)
{
    structData->write_op = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gattc_write_params_t_GET_write_op(ble_gattc_write_params_t *structData)
{
    return structData->write_op;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gattc_write_params_t_GET_ADDRESSOF_write_op(ble_gattc_write_params_t *structData)
{
    return &structData->write_op;
}
EMSCRIPTEN_KEEPALIVE
void ble_gattc_write_params_t_SET_flags(ble_gattc_write_params_t *structData, uint8_t data)
{
    structData->flags = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gattc_write_params_t_GET_flags(ble_gattc_write_params_t *structData)
{
    return structData->flags;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gattc_write_params_t_GET_ADDRESSOF_flags(ble_gattc_write_params_t *structData)
{
    return &structData->flags;
}
EMSCRIPTEN_KEEPALIVE
void ble_gattc_write_params_t_SET_handle(ble_gattc_write_params_t *structData, uint16_t data)
{
    structData->handle = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gattc_write_params_t_GET_handle(ble_gattc_write_params_t *structData)
{
    return structData->handle;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gattc_write_params_t_GET_ADDRESSOF_handle(ble_gattc_write_params_t *structData)
{
    return &structData->handle;
}
EMSCRIPTEN_KEEPALIVE
void ble_gattc_write_params_t_SET_offset(ble_gattc_write_params_t *structData, uint16_t data)
{
    structData->offset = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gattc_write_params_t_GET_offset(ble_gattc_write_params_t *structData)
{
    return structData->offset;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gattc_write_params_t_GET_ADDRESSOF_offset(ble_gattc_write_params_t *structData)
{
    return &structData->offset;
}
EMSCRIPTEN_KEEPALIVE
void ble_gattc_write_params_t_SET_len(ble_gattc_write_params_t *structData, uint16_t data)
{
    structData->len = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gattc_write_params_t_GET_len(ble_gattc_write_params_t *structData)
{
    return structData->len;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gattc_write_params_t_GET_ADDRESSOF_len(ble_gattc_write_params_t *structData)
{
    return &structData->len;
}
EMSCRIPTEN_KEEPALIVE
void ble_gattc_write_params_t_SET_p_value(ble_gattc_write_params_t *structData, uint8_t *data)
{
    structData->p_value = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gattc_handle_range_t *ble_gattc_handle_range_t_NEW()
{
    return (ble_gattc_handle_range_t*)(malloc(sizeof(ble_gattc_handle_range_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gattc_handle_range_t_DELETE(ble_gattc_handle_range_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gattc_handle_range_t_SIZEOF(ble_gattc_handle_range_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gattc_handle_range_t_SET_start_handle(ble_gattc_handle_range_t *structData, uint16_t data)
{
    structData->start_handle = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gattc_handle_range_t_GET_start_handle(ble_gattc_handle_range_t *structData)
{
    return structData->start_handle;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gattc_handle_range_t_GET_ADDRESSOF_start_handle(ble_gattc_handle_range_t *structData)
{
    return &structData->start_handle;
}
EMSCRIPTEN_KEEPALIVE
void ble_gattc_handle_range_t_SET_end_handle(ble_gattc_handle_range_t *structData, uint16_t data)
{
    structData->end_handle = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gattc_handle_range_t_GET_end_handle(ble_gattc_handle_range_t *structData)
{
    return structData->end_handle;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gattc_handle_range_t_GET_ADDRESSOF_end_handle(ble_gattc_handle_range_t *structData)
{
    return &structData->end_handle;
}
EMSCRIPTEN_KEEPALIVE
ble_uuid_t *ble_uuid_t_NEW()
{
    return (ble_uuid_t*)(malloc(sizeof(ble_uuid_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_uuid_t_DELETE(ble_uuid_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_uuid_t_SIZEOF(ble_uuid_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_uuid_t_SET_uuid(ble_uuid_t *structData, uint16_t data)
{
    structData->uuid = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_uuid_t_GET_uuid(ble_uuid_t *structData)
{
    return structData->uuid;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_uuid_t_GET_ADDRESSOF_uuid(ble_uuid_t *structData)
{
    return &structData->uuid;
}
EMSCRIPTEN_KEEPALIVE
void ble_uuid_t_SET_type(ble_uuid_t *structData, uint8_t data)
{
    structData->type = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_uuid_t_GET_type(ble_uuid_t *structData)
{
    return structData->type;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_uuid_t_GET_ADDRESSOF_type(ble_uuid_t *structData)
{
    return &structData->type;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_lesc_dhkey_t *ble_gap_lesc_dhkey_t_NEW()
{
    return (ble_gap_lesc_dhkey_t*)(malloc(sizeof(ble_gap_lesc_dhkey_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_lesc_dhkey_t_DELETE(ble_gap_lesc_dhkey_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_lesc_dhkey_t_SIZEOF(ble_gap_lesc_dhkey_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_lesc_dhkey_t_GET_ADDRESSOF_key(ble_gap_lesc_dhkey_t *structData)
{
    return &structData->key[0];
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_lesc_dhkey_t_LENGTH_key(ble_gap_lesc_dhkey_t *structData)
{
    return sizeof(structData->key)/sizeof(structData->key[0]);
}
EMSCRIPTEN_KEEPALIVE
ble_gap_lesc_oob_data_t *ble_gap_lesc_oob_data_t_NEW()
{
    return (ble_gap_lesc_oob_data_t*)(malloc(sizeof(ble_gap_lesc_oob_data_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_lesc_oob_data_t_DELETE(ble_gap_lesc_oob_data_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_lesc_oob_data_t_SIZEOF(ble_gap_lesc_oob_data_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_lesc_oob_data_t_SET_addr(ble_gap_lesc_oob_data_t *structData, ble_gap_addr_t data)
{
    structData->addr = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_addr_t ble_gap_lesc_oob_data_t_GET_addr(ble_gap_lesc_oob_data_t *structData)
{
    return structData->addr;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_addr_t *ble_gap_lesc_oob_data_t_GET_ADDRESSOF_addr(ble_gap_lesc_oob_data_t *structData)
{
    return &structData->addr;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_lesc_oob_data_t_GET_ADDRESSOF_r(ble_gap_lesc_oob_data_t *structData)
{
    return &structData->r[0];
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_lesc_oob_data_t_LENGTH_r(ble_gap_lesc_oob_data_t *structData)
{
    return sizeof(structData->r)/sizeof(structData->r[0]);
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_lesc_oob_data_t_GET_ADDRESSOF_c(ble_gap_lesc_oob_data_t *structData)
{
    return &structData->c[0];
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_lesc_oob_data_t_LENGTH_c(ble_gap_lesc_oob_data_t *structData)
{
    return sizeof(structData->c)/sizeof(structData->c[0]);
}
EMSCRIPTEN_KEEPALIVE
ble_gap_lesc_p256_pk_t *ble_gap_lesc_p256_pk_t_NEW()
{
    return (ble_gap_lesc_p256_pk_t*)(malloc(sizeof(ble_gap_lesc_p256_pk_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_lesc_p256_pk_t_DELETE(ble_gap_lesc_p256_pk_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_lesc_p256_pk_t_SIZEOF(ble_gap_lesc_p256_pk_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_lesc_p256_pk_t_GET_ADDRESSOF_pk(ble_gap_lesc_p256_pk_t *structData)
{
    return &structData->pk[0];
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_lesc_p256_pk_t_LENGTH_pk(ble_gap_lesc_p256_pk_t *structData)
{
    return sizeof(structData->pk)/sizeof(structData->pk[0]);
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sec_keyset_t *ble_gap_sec_keyset_t_NEW()
{
    return (ble_gap_sec_keyset_t*)(malloc(sizeof(ble_gap_sec_keyset_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_keyset_t_DELETE(ble_gap_sec_keyset_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_sec_keyset_t_SIZEOF(ble_gap_sec_keyset_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_keyset_t_SET_keys_own(ble_gap_sec_keyset_t *structData, ble_gap_sec_keys_t data)
{
    structData->keys_own = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sec_keys_t ble_gap_sec_keyset_t_GET_keys_own(ble_gap_sec_keyset_t *structData)
{
    return structData->keys_own;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sec_keys_t *ble_gap_sec_keyset_t_GET_ADDRESSOF_keys_own(ble_gap_sec_keyset_t *structData)
{
    return &structData->keys_own;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_keyset_t_SET_keys_peer(ble_gap_sec_keyset_t *structData, ble_gap_sec_keys_t data)
{
    structData->keys_peer = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sec_keys_t ble_gap_sec_keyset_t_GET_keys_peer(ble_gap_sec_keyset_t *structData)
{
    return structData->keys_peer;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sec_keys_t *ble_gap_sec_keyset_t_GET_ADDRESSOF_keys_peer(ble_gap_sec_keyset_t *structData)
{
    return &structData->keys_peer;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sec_keys_t *ble_gap_sec_keys_t_NEW()
{
    return (ble_gap_sec_keys_t*)(malloc(sizeof(ble_gap_sec_keys_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_keys_t_DELETE(ble_gap_sec_keys_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_sec_keys_t_SIZEOF(ble_gap_sec_keys_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_keys_t_SET_p_enc_key(ble_gap_sec_keys_t *structData, ble_gap_enc_key_t *data)
{
    structData->p_enc_key = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_enc_key_t *ble_gap_sec_keys_t_GET_p_enc_key(ble_gap_sec_keys_t *structData)
{
    return structData->p_enc_key;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_enc_key_t **ble_gap_sec_keys_t_GET_ADDRESSOF_p_enc_key(ble_gap_sec_keys_t *structData)
{
    return &structData->p_enc_key;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_keys_t_SET_p_id_key(ble_gap_sec_keys_t *structData, ble_gap_id_key_t *data)
{
    structData->p_id_key = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_id_key_t *ble_gap_sec_keys_t_GET_p_id_key(ble_gap_sec_keys_t *structData)
{
    return structData->p_id_key;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_id_key_t **ble_gap_sec_keys_t_GET_ADDRESSOF_p_id_key(ble_gap_sec_keys_t *structData)
{
    return &structData->p_id_key;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_keys_t_SET_p_sign_key(ble_gap_sec_keys_t *structData, ble_gap_sign_info_t *data)
{
    structData->p_sign_key = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sign_info_t *ble_gap_sec_keys_t_GET_p_sign_key(ble_gap_sec_keys_t *structData)
{
    return structData->p_sign_key;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sign_info_t **ble_gap_sec_keys_t_GET_ADDRESSOF_p_sign_key(ble_gap_sec_keys_t *structData)
{
    return &structData->p_sign_key;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_keys_t_SET_p_pk(ble_gap_sec_keys_t *structData, ble_gap_lesc_p256_pk_t *data)
{
    structData->p_pk = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_lesc_p256_pk_t *ble_gap_sec_keys_t_GET_p_pk(ble_gap_sec_keys_t *structData)
{
    return structData->p_pk;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_lesc_p256_pk_t **ble_gap_sec_keys_t_GET_ADDRESSOF_p_pk(ble_gap_sec_keys_t *structData)
{
    return &structData->p_pk;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_enc_key_t *ble_gap_enc_key_t_NEW()
{
    return (ble_gap_enc_key_t*)(malloc(sizeof(ble_gap_enc_key_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_enc_key_t_DELETE(ble_gap_enc_key_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_enc_key_t_SIZEOF(ble_gap_enc_key_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_enc_key_t_SET_enc_info(ble_gap_enc_key_t *structData, ble_gap_enc_info_t data)
{
    structData->enc_info = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_enc_info_t ble_gap_enc_key_t_GET_enc_info(ble_gap_enc_key_t *structData)
{
    return structData->enc_info;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_enc_info_t *ble_gap_enc_key_t_GET_ADDRESSOF_enc_info(ble_gap_enc_key_t *structData)
{
    return &structData->enc_info;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_enc_key_t_SET_master_id(ble_gap_enc_key_t *structData, ble_gap_master_id_t data)
{
    structData->master_id = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_master_id_t ble_gap_enc_key_t_GET_master_id(ble_gap_enc_key_t *structData)
{
    return structData->master_id;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_master_id_t *ble_gap_enc_key_t_GET_ADDRESSOF_master_id(ble_gap_enc_key_t *structData)
{
    return &structData->master_id;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_master_id_t *ble_gap_master_id_t_NEW()
{
    return (ble_gap_master_id_t*)(malloc(sizeof(ble_gap_master_id_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_master_id_t_DELETE(ble_gap_master_id_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_master_id_t_SIZEOF(ble_gap_master_id_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_master_id_t_SET_ediv(ble_gap_master_id_t *structData, uint16_t data)
{
    structData->ediv = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_master_id_t_GET_ediv(ble_gap_master_id_t *structData)
{
    return structData->ediv;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_master_id_t_GET_ADDRESSOF_ediv(ble_gap_master_id_t *structData)
{
    return &structData->ediv;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_master_id_t_GET_ADDRESSOF_rand(ble_gap_master_id_t *structData)
{
    return &structData->rand[0];
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_master_id_t_LENGTH_rand(ble_gap_master_id_t *structData)
{
    return sizeof(structData->rand)/sizeof(structData->rand[0]);
}
EMSCRIPTEN_KEEPALIVE
ble_gap_scan_params_t *ble_gap_scan_params_t_NEW()
{
    return (ble_gap_scan_params_t*)(malloc(sizeof(ble_gap_scan_params_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_scan_params_t_DELETE(ble_gap_scan_params_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_scan_params_t_SIZEOF(ble_gap_scan_params_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_scan_params_t_SET_active(ble_gap_scan_params_t *structData, uint8_t data)
{
    structData->active = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_scan_params_t_GET_active(ble_gap_scan_params_t *structData)
{
    return structData->active;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_scan_params_t_SET_use_whitelist(ble_gap_scan_params_t *structData, uint8_t data)
{
    structData->use_whitelist = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_scan_params_t_GET_use_whitelist(ble_gap_scan_params_t *structData)
{
    return structData->use_whitelist;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_scan_params_t_SET_adv_dir_report(ble_gap_scan_params_t *structData, uint8_t data)
{
    structData->adv_dir_report = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_scan_params_t_GET_adv_dir_report(ble_gap_scan_params_t *structData)
{
    return structData->adv_dir_report;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_scan_params_t_SET_interval(ble_gap_scan_params_t *structData, uint16_t data)
{
    structData->interval = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_scan_params_t_GET_interval(ble_gap_scan_params_t *structData)
{
    return structData->interval;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_scan_params_t_GET_ADDRESSOF_interval(ble_gap_scan_params_t *structData)
{
    return &structData->interval;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_scan_params_t_SET_window(ble_gap_scan_params_t *structData, uint16_t data)
{
    structData->window = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_scan_params_t_GET_window(ble_gap_scan_params_t *structData)
{
    return structData->window;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_scan_params_t_GET_ADDRESSOF_window(ble_gap_scan_params_t *structData)
{
    return &structData->window;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_scan_params_t_SET_timeout(ble_gap_scan_params_t *structData, uint16_t data)
{
    structData->timeout = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_scan_params_t_GET_timeout(ble_gap_scan_params_t *structData)
{
    return structData->timeout;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_scan_params_t_GET_ADDRESSOF_timeout(ble_gap_scan_params_t *structData)
{
    return &structData->timeout;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_conn_sec_t *ble_gap_conn_sec_t_NEW()
{
    return (ble_gap_conn_sec_t*)(malloc(sizeof(ble_gap_conn_sec_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_conn_sec_t_DELETE(ble_gap_conn_sec_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_conn_sec_t_SIZEOF(ble_gap_conn_sec_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_conn_sec_t_SET_sec_mode(ble_gap_conn_sec_t *structData, ble_gap_conn_sec_mode_t data)
{
    structData->sec_mode = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_conn_sec_mode_t ble_gap_conn_sec_t_GET_sec_mode(ble_gap_conn_sec_t *structData)
{
    return structData->sec_mode;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_conn_sec_mode_t *ble_gap_conn_sec_t_GET_ADDRESSOF_sec_mode(ble_gap_conn_sec_t *structData)
{
    return &structData->sec_mode;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_conn_sec_t_SET_encr_key_size(ble_gap_conn_sec_t *structData, uint8_t data)
{
    structData->encr_key_size = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_conn_sec_t_GET_encr_key_size(ble_gap_conn_sec_t *structData)
{
    return structData->encr_key_size;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_conn_sec_t_GET_ADDRESSOF_encr_key_size(ble_gap_conn_sec_t *structData)
{
    return &structData->encr_key_size;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sec_params_t *ble_gap_sec_params_t_NEW()
{
    return (ble_gap_sec_params_t*)(malloc(sizeof(ble_gap_sec_params_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_params_t_DELETE(ble_gap_sec_params_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_sec_params_t_SIZEOF(ble_gap_sec_params_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_params_t_SET_bond(ble_gap_sec_params_t *structData, uint8_t data)
{
    structData->bond = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_sec_params_t_GET_bond(ble_gap_sec_params_t *structData)
{
    return structData->bond;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_params_t_SET_mitm(ble_gap_sec_params_t *structData, uint8_t data)
{
    structData->mitm = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_sec_params_t_GET_mitm(ble_gap_sec_params_t *structData)
{
    return structData->mitm;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_params_t_SET_lesc(ble_gap_sec_params_t *structData, uint8_t data)
{
    structData->lesc = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_sec_params_t_GET_lesc(ble_gap_sec_params_t *structData)
{
    return structData->lesc;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_params_t_SET_keypress(ble_gap_sec_params_t *structData, uint8_t data)
{
    structData->keypress = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_sec_params_t_GET_keypress(ble_gap_sec_params_t *structData)
{
    return structData->keypress;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_params_t_SET_io_caps(ble_gap_sec_params_t *structData, uint8_t data)
{
    structData->io_caps = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_sec_params_t_GET_io_caps(ble_gap_sec_params_t *structData)
{
    return structData->io_caps;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_params_t_SET_oob(ble_gap_sec_params_t *structData, uint8_t data)
{
    structData->oob = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_sec_params_t_GET_oob(ble_gap_sec_params_t *structData)
{
    return structData->oob;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_params_t_SET_min_key_size(ble_gap_sec_params_t *structData, uint8_t data)
{
    structData->min_key_size = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_sec_params_t_GET_min_key_size(ble_gap_sec_params_t *structData)
{
    return structData->min_key_size;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_sec_params_t_GET_ADDRESSOF_min_key_size(ble_gap_sec_params_t *structData)
{
    return &structData->min_key_size;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_params_t_SET_max_key_size(ble_gap_sec_params_t *structData, uint8_t data)
{
    structData->max_key_size = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_sec_params_t_GET_max_key_size(ble_gap_sec_params_t *structData)
{
    return structData->max_key_size;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_sec_params_t_GET_ADDRESSOF_max_key_size(ble_gap_sec_params_t *structData)
{
    return &structData->max_key_size;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_params_t_SET_kdist_own(ble_gap_sec_params_t *structData, ble_gap_sec_kdist_t data)
{
    structData->kdist_own = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sec_kdist_t ble_gap_sec_params_t_GET_kdist_own(ble_gap_sec_params_t *structData)
{
    return structData->kdist_own;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sec_kdist_t *ble_gap_sec_params_t_GET_ADDRESSOF_kdist_own(ble_gap_sec_params_t *structData)
{
    return &structData->kdist_own;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_params_t_SET_kdist_peer(ble_gap_sec_params_t *structData, ble_gap_sec_kdist_t data)
{
    structData->kdist_peer = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sec_kdist_t ble_gap_sec_params_t_GET_kdist_peer(ble_gap_sec_params_t *structData)
{
    return structData->kdist_peer;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sec_kdist_t *ble_gap_sec_params_t_GET_ADDRESSOF_kdist_peer(ble_gap_sec_params_t *structData)
{
    return &structData->kdist_peer;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sec_kdist_t *ble_gap_sec_kdist_t_NEW()
{
    return (ble_gap_sec_kdist_t*)(malloc(sizeof(ble_gap_sec_kdist_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_kdist_t_DELETE(ble_gap_sec_kdist_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_sec_kdist_t_SIZEOF(ble_gap_sec_kdist_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_kdist_t_SET_enc(ble_gap_sec_kdist_t *structData, uint8_t data)
{
    structData->enc = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_sec_kdist_t_GET_enc(ble_gap_sec_kdist_t *structData)
{
    return structData->enc;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_kdist_t_SET_id(ble_gap_sec_kdist_t *structData, uint8_t data)
{
    structData->id = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_sec_kdist_t_GET_id(ble_gap_sec_kdist_t *structData)
{
    return structData->id;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_kdist_t_SET_sign(ble_gap_sec_kdist_t *structData, uint8_t data)
{
    structData->sign = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_sec_kdist_t_GET_sign(ble_gap_sec_kdist_t *structData)
{
    return structData->sign;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sec_kdist_t_SET_link(ble_gap_sec_kdist_t *structData, uint8_t data)
{
    structData->link = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_sec_kdist_t_GET_link(ble_gap_sec_kdist_t *structData)
{
    return structData->link;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_privacy_params_t *ble_gap_privacy_params_t_NEW()
{
    return (ble_gap_privacy_params_t*)(malloc(sizeof(ble_gap_privacy_params_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_privacy_params_t_DELETE(ble_gap_privacy_params_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_privacy_params_t_SIZEOF(ble_gap_privacy_params_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_privacy_params_t_SET_privacy_mode(ble_gap_privacy_params_t *structData, uint8_t data)
{
    structData->privacy_mode = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_privacy_params_t_GET_privacy_mode(ble_gap_privacy_params_t *structData)
{
    return structData->privacy_mode;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_privacy_params_t_GET_ADDRESSOF_privacy_mode(ble_gap_privacy_params_t *structData)
{
    return &structData->privacy_mode;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_privacy_params_t_SET_private_addr_type(ble_gap_privacy_params_t *structData, uint8_t data)
{
    structData->private_addr_type = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_privacy_params_t_GET_private_addr_type(ble_gap_privacy_params_t *structData)
{
    return structData->private_addr_type;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_privacy_params_t_GET_ADDRESSOF_private_addr_type(ble_gap_privacy_params_t *structData)
{
    return &structData->private_addr_type;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_privacy_params_t_SET_private_addr_cycle_s(ble_gap_privacy_params_t *structData, uint16_t data)
{
    structData->private_addr_cycle_s = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_privacy_params_t_GET_private_addr_cycle_s(ble_gap_privacy_params_t *structData)
{
    return structData->private_addr_cycle_s;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_privacy_params_t_GET_ADDRESSOF_private_addr_cycle_s(ble_gap_privacy_params_t *structData)
{
    return &structData->private_addr_cycle_s;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_privacy_params_t_SET_p_device_irk(ble_gap_privacy_params_t *structData, ble_gap_irk_t *data)
{
    structData->p_device_irk = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_irk_t *ble_gap_privacy_params_t_GET_p_device_irk(ble_gap_privacy_params_t *structData)
{
    return structData->p_device_irk;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_irk_t **ble_gap_privacy_params_t_GET_ADDRESSOF_p_device_irk(ble_gap_privacy_params_t *structData)
{
    return &structData->p_device_irk;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_id_key_t *ble_gap_id_key_t_NEW()
{
    return (ble_gap_id_key_t*)(malloc(sizeof(ble_gap_id_key_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_id_key_t_DELETE(ble_gap_id_key_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_id_key_t_SIZEOF(ble_gap_id_key_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_id_key_t_SET_id_info(ble_gap_id_key_t *structData, ble_gap_irk_t data)
{
    structData->id_info = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_irk_t ble_gap_id_key_t_GET_id_info(ble_gap_id_key_t *structData)
{
    return structData->id_info;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_irk_t *ble_gap_id_key_t_GET_ADDRESSOF_id_info(ble_gap_id_key_t *structData)
{
    return &structData->id_info;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_id_key_t_SET_id_addr_info(ble_gap_id_key_t *structData, ble_gap_addr_t data)
{
    structData->id_addr_info = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_addr_t ble_gap_id_key_t_GET_id_addr_info(ble_gap_id_key_t *structData)
{
    return structData->id_addr_info;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_addr_t *ble_gap_id_key_t_GET_ADDRESSOF_id_addr_info(ble_gap_id_key_t *structData)
{
    return &structData->id_addr_info;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_addr_t *ble_gap_addr_t_NEW()
{
    return (ble_gap_addr_t*)(malloc(sizeof(ble_gap_addr_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_addr_t_DELETE(ble_gap_addr_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_addr_t_SIZEOF(ble_gap_addr_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_addr_t_SET_addr_id_peer(ble_gap_addr_t *structData, uint8_t data)
{
    structData->addr_id_peer = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_addr_t_GET_addr_id_peer(ble_gap_addr_t *structData)
{
    return structData->addr_id_peer;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_addr_t_SET_addr_type(ble_gap_addr_t *structData, uint8_t data)
{
    structData->addr_type = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_addr_t_GET_addr_type(ble_gap_addr_t *structData)
{
    return structData->addr_type;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_addr_t_GET_ADDRESSOF_addr(ble_gap_addr_t *structData)
{
    return &structData->addr[0];
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_addr_t_LENGTH_addr(ble_gap_addr_t *structData)
{
    return sizeof(structData->addr)/sizeof(structData->addr[0]);
}
EMSCRIPTEN_KEEPALIVE
ble_gap_sign_info_t *ble_gap_sign_info_t_NEW()
{
    return (ble_gap_sign_info_t*)(malloc(sizeof(ble_gap_sign_info_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_sign_info_t_DELETE(ble_gap_sign_info_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_sign_info_t_SIZEOF(ble_gap_sign_info_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_sign_info_t_GET_ADDRESSOF_csrk(ble_gap_sign_info_t *structData)
{
    return &structData->csrk[0];
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_sign_info_t_LENGTH_csrk(ble_gap_sign_info_t *structData)
{
    return sizeof(structData->csrk)/sizeof(structData->csrk[0]);
}
EMSCRIPTEN_KEEPALIVE
ble_gap_irk_t *ble_gap_irk_t_NEW()
{
    return (ble_gap_irk_t*)(malloc(sizeof(ble_gap_irk_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_irk_t_DELETE(ble_gap_irk_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_irk_t_SIZEOF(ble_gap_irk_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_irk_t_GET_ADDRESSOF_irk(ble_gap_irk_t *structData)
{
    return &structData->irk[0];
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_irk_t_LENGTH_irk(ble_gap_irk_t *structData)
{
    return sizeof(structData->irk)/sizeof(structData->irk[0]);
}
EMSCRIPTEN_KEEPALIVE
ble_gap_enc_info_t *ble_gap_enc_info_t_NEW()
{
    return (ble_gap_enc_info_t*)(malloc(sizeof(ble_gap_enc_info_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_enc_info_t_DELETE(ble_gap_enc_info_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_enc_info_t_SIZEOF(ble_gap_enc_info_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_enc_info_t_GET_ADDRESSOF_ltk(ble_gap_enc_info_t *structData)
{
    return &structData->ltk[0];
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_enc_info_t_LENGTH_ltk(ble_gap_enc_info_t *structData)
{
    return sizeof(structData->ltk)/sizeof(structData->ltk[0]);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_enc_info_t_SET_lesc(ble_gap_enc_info_t *structData, uint8_t data)
{
    structData->lesc = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_enc_info_t_GET_lesc(ble_gap_enc_info_t *structData)
{
    return structData->lesc;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_enc_info_t_SET_auth(ble_gap_enc_info_t *structData, uint8_t data)
{
    structData->auth = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_enc_info_t_GET_auth(ble_gap_enc_info_t *structData)
{
    return structData->auth;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_enc_info_t_SET_ltk_len(ble_gap_enc_info_t *structData, uint8_t data)
{
    structData->ltk_len = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_enc_info_t_GET_ltk_len(ble_gap_enc_info_t *structData)
{
    return structData->ltk_len;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_conn_params_t *ble_gap_conn_params_t_NEW()
{
    return (ble_gap_conn_params_t*)(malloc(sizeof(ble_gap_conn_params_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_conn_params_t_DELETE(ble_gap_conn_params_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_conn_params_t_SIZEOF(ble_gap_conn_params_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_conn_params_t_SET_min_conn_interval(ble_gap_conn_params_t *structData, uint16_t data)
{
    structData->min_conn_interval = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_conn_params_t_GET_min_conn_interval(ble_gap_conn_params_t *structData)
{
    return structData->min_conn_interval;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_conn_params_t_GET_ADDRESSOF_min_conn_interval(ble_gap_conn_params_t *structData)
{
    return &structData->min_conn_interval;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_conn_params_t_SET_max_conn_interval(ble_gap_conn_params_t *structData, uint16_t data)
{
    structData->max_conn_interval = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_conn_params_t_GET_max_conn_interval(ble_gap_conn_params_t *structData)
{
    return structData->max_conn_interval;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_conn_params_t_GET_ADDRESSOF_max_conn_interval(ble_gap_conn_params_t *structData)
{
    return &structData->max_conn_interval;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_conn_params_t_SET_slave_latency(ble_gap_conn_params_t *structData, uint16_t data)
{
    structData->slave_latency = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_conn_params_t_GET_slave_latency(ble_gap_conn_params_t *structData)
{
    return structData->slave_latency;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_conn_params_t_GET_ADDRESSOF_slave_latency(ble_gap_conn_params_t *structData)
{
    return &structData->slave_latency;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_conn_params_t_SET_conn_sup_timeout(ble_gap_conn_params_t *structData, uint16_t data)
{
    structData->conn_sup_timeout = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_conn_params_t_GET_conn_sup_timeout(ble_gap_conn_params_t *structData)
{
    return structData->conn_sup_timeout;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_conn_params_t_GET_ADDRESSOF_conn_sup_timeout(ble_gap_conn_params_t *structData)
{
    return &structData->conn_sup_timeout;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_conn_sec_mode_t *ble_gap_conn_sec_mode_t_NEW()
{
    return (ble_gap_conn_sec_mode_t*)(malloc(sizeof(ble_gap_conn_sec_mode_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_conn_sec_mode_t_DELETE(ble_gap_conn_sec_mode_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_conn_sec_mode_t_SIZEOF(ble_gap_conn_sec_mode_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_conn_sec_mode_t_SET_sm(ble_gap_conn_sec_mode_t *structData, uint8_t data)
{
    structData->sm = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_conn_sec_mode_t_GET_sm(ble_gap_conn_sec_mode_t *structData)
{
    return structData->sm;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_conn_sec_mode_t_SET_lv(ble_gap_conn_sec_mode_t *structData, uint8_t data)
{
    structData->lv = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_conn_sec_mode_t_GET_lv(ble_gap_conn_sec_mode_t *structData)
{
    return structData->lv;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_adv_params_t *ble_gap_adv_params_t_NEW()
{
    return (ble_gap_adv_params_t*)(malloc(sizeof(ble_gap_adv_params_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_adv_params_t_DELETE(ble_gap_adv_params_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_adv_params_t_SIZEOF(ble_gap_adv_params_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_adv_params_t_SET_type(ble_gap_adv_params_t *structData, uint8_t data)
{
    structData->type = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_adv_params_t_GET_type(ble_gap_adv_params_t *structData)
{
    return structData->type;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_adv_params_t_GET_ADDRESSOF_type(ble_gap_adv_params_t *structData)
{
    return &structData->type;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_adv_params_t_SET_p_peer_addr(ble_gap_adv_params_t *structData, ble_gap_addr_t *data)
{
    structData->p_peer_addr = data;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_adv_params_t_SET_fp(ble_gap_adv_params_t *structData, uint8_t data)
{
    structData->fp = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_adv_params_t_GET_fp(ble_gap_adv_params_t *structData)
{
    return structData->fp;
}
EMSCRIPTEN_KEEPALIVE
uint8_t *ble_gap_adv_params_t_GET_ADDRESSOF_fp(ble_gap_adv_params_t *structData)
{
    return &structData->fp;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_adv_params_t_SET_interval(ble_gap_adv_params_t *structData, uint16_t data)
{
    structData->interval = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_adv_params_t_GET_interval(ble_gap_adv_params_t *structData)
{
    return structData->interval;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_adv_params_t_GET_ADDRESSOF_interval(ble_gap_adv_params_t *structData)
{
    return &structData->interval;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_adv_params_t_SET_timeout(ble_gap_adv_params_t *structData, uint16_t data)
{
    structData->timeout = data;
}
EMSCRIPTEN_KEEPALIVE
uint16_t ble_gap_adv_params_t_GET_timeout(ble_gap_adv_params_t *structData)
{
    return structData->timeout;
}
EMSCRIPTEN_KEEPALIVE
uint16_t *ble_gap_adv_params_t_GET_ADDRESSOF_timeout(ble_gap_adv_params_t *structData)
{
    return &structData->timeout;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_adv_params_t_SET_channel_mask(ble_gap_adv_params_t *structData, ble_gap_adv_ch_mask_t data)
{
    structData->channel_mask = data;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_adv_ch_mask_t ble_gap_adv_params_t_GET_channel_mask(ble_gap_adv_params_t *structData)
{
    return structData->channel_mask;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_adv_ch_mask_t *ble_gap_adv_params_t_GET_ADDRESSOF_channel_mask(ble_gap_adv_params_t *structData)
{
    return &structData->channel_mask;
}
EMSCRIPTEN_KEEPALIVE
ble_gap_adv_ch_mask_t *ble_gap_adv_ch_mask_t_NEW()
{
    return (ble_gap_adv_ch_mask_t*)(malloc(sizeof(ble_gap_adv_ch_mask_t)));
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_adv_ch_mask_t_DELETE(ble_gap_adv_ch_mask_t *structData)
{
    free(structData);
}
EMSCRIPTEN_KEEPALIVE
size_t ble_gap_adv_ch_mask_t_SIZEOF(ble_gap_adv_ch_mask_t *structData)
{
    return sizeof(structData);
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_adv_ch_mask_t_SET_ch_37_off(ble_gap_adv_ch_mask_t *structData, uint8_t data)
{
    structData->ch_37_off = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_adv_ch_mask_t_GET_ch_37_off(ble_gap_adv_ch_mask_t *structData)
{
    return structData->ch_37_off;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_adv_ch_mask_t_SET_ch_38_off(ble_gap_adv_ch_mask_t *structData, uint8_t data)
{
    structData->ch_38_off = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_adv_ch_mask_t_GET_ch_38_off(ble_gap_adv_ch_mask_t *structData)
{
    return structData->ch_38_off;
}
EMSCRIPTEN_KEEPALIVE
void ble_gap_adv_ch_mask_t_SET_ch_39_off(ble_gap_adv_ch_mask_t *structData, uint8_t data)
{
    structData->ch_39_off = data;
}
EMSCRIPTEN_KEEPALIVE
uint8_t ble_gap_adv_ch_mask_t_GET_ch_39_off(ble_gap_adv_ch_mask_t *structData)
{
    return structData->ch_39_off;
}
#ifdef __cplusplus
}
#endif
