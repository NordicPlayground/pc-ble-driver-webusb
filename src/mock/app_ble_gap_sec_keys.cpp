/*
    Placeholder for compatibility
*/
#include <stdint.h>
#include "app_ble_gap_sec_keys.h"

ser_ble_gap_app_keyset_t m_app_keys_table[8];


void app_ble_gap_sec_context_root_set(void *context)
{
}

void app_ble_gap_sec_context_root_release()
{
}

uint32_t app_ble_gap_sec_context_create(uint16_t conn_handle, uint32_t *p_index)
{
    return 0;
}

uint32_t app_ble_gap_sec_context_destroy(uint16_t conn_handle)
{
    return 0;
}
#if NRF_SD_BLE_API_VERSION < 3
uint32_t app_ble_gap_sec_context_find(uint16_t conn_handle, ser_ble_gap_app_keyset_t **pp_gap_app_keyset)
#else
uint32_t app_ble_gap_sec_context_find(uint16_t conn_handle, uint32_t *p_index)
#endif
{
    return 0;
}
