
#include "adapter.h"
#include <memory>

#include "ble.h"
#include "ble_app.h"
#include "ble_gap_app.h"
#include "ble_gap.h"

#include <stdint.h>
#include "Emscripten.h"


typedef struct
{
    uint8_t *     p_data;   /**< Pointer to data. */
    uint16_t      data_len; /**< Length of data. */
} data_t;



#define ADV_BUFFER_SIZE 30
const char* DEVICE_NAME = "Emscripten";
#define BLE_UUID_HEART_RATE_SERVICE          0x180

#if NRF_SD_BLE_API_VERSION < 4
extern "C" {
    EMSCRIPTEN_KEEPALIVE
    ble_enable_params_t * createBleParams()
    {
        ble_enable_params_t* ble_enable_params = new ble_enable_params_t;
        #if NRF_SD_BLE_API == 3
            ble_enable_params->gatt_enable_params.att_mtu = GATT_MTU_SIZE_DEFAULT;
        #elif NRF_SD_BLE_API < 3
            ble_enable_params->gatts_enable_params.attr_tab_size = BLE_GATTS_ATTR_TAB_SIZE_DEFAULT;
            ble_enable_params->gatts_enable_params.service_changed = false;
            ble_enable_params->gap_enable_params.periph_conn_count = 1;
            ble_enable_params->gap_enable_params.central_conn_count = 0;
            ble_enable_params->gap_enable_params.central_sec_count = 0;
            ble_enable_params->common_enable_params.p_conn_bw_counts = NULL;
            ble_enable_params->common_enable_params.vs_uuid_count = 1;
        #endif
        return ble_enable_params;
    }
}
#endif

static uint32_t adv_report_parse(uint8_t type, data_t * p_advdata, data_t * p_typedata)
{
    uint32_t  index = 0;
    uint8_t * p_data;

    p_data = p_advdata->p_data;

    while (index < p_advdata->data_len)
    {
        uint8_t field_length = p_data[index];
        uint8_t field_type   = p_data[index + 1];

        if (field_type == type)
        {
            p_typedata->p_data   = &p_data[index + 2];
            p_typedata->data_len = field_length - 1;
            return NRF_SUCCESS;
        }
        index += field_length + 1;
    }
    return NRF_ERROR_NOT_FOUND;
}

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    uint8_t * getAdvName(ble_evt_t * p_ble_evt)
    {
        //p_ble_gap_evt->params.
        ble_gap_evt_t * p_ble_gap_evt = &(p_ble_evt->evt.gap_evt);
        uint32_t err_code;
        data_t   adv_data;
        data_t   dev_name;

        // Initialize advertisement report for parsing
        //p_ble_gap_evt->params.adv_report.
        adv_data.p_data     = (uint8_t *)p_ble_gap_evt->params.adv_report.data;
        adv_data.data_len   = p_ble_gap_evt->params.adv_report.dlen;

        //return (uint8_t*)(adv_data.p_data[10] );
        //search for advertising names
        err_code = adv_report_parse(BLE_GAP_AD_TYPE_COMPLETE_LOCAL_NAME,
                                    &adv_data,
                                    &dev_name);
        if (err_code == NRF_SUCCESS)
        {
            //return (uint8_t*)(5);
            uint8_t* strData = new uint8_t[dev_name.data_len];
            memcpy(strData, dev_name.p_data, dev_name.data_len);
            return strData;
        }
        else
        {
            // Look for the short local name if it was not found as complete
            err_code = adv_report_parse(BLE_GAP_AD_TYPE_SHORT_LOCAL_NAME,
                                        &adv_data,
                                        &dev_name);
            if (err_code != NRF_SUCCESS)
            {
                return (uint8_t*)(0);
            }
            uint8_t* strData = new uint8_t[dev_name.data_len];
            memcpy(strData, dev_name.p_data, dev_name.data_len);
            return strData;
        }

        return (uint8_t*)(0);

    }
}


extern "C" {
    EMSCRIPTEN_KEEPALIVE
    uint8_t * createAdvData(uint8_t* index)
    {
        uint32_t error_code;
        //uint8_t  data_buffer[ADV_BUFFER_SIZE];
        uint8_t*  data_buffer = new uint8_t[ADV_BUFFER_SIZE];
        const char  * device_name = DEVICE_NAME;
        const uint8_t name_length = (uint8_t)strlen(device_name);
        const uint8_t data_type   = BLE_GAP_AD_TYPE_COMPLETE_LOCAL_NAME;

        // Set the device name.
        data_buffer[(*index)++] = name_length + 1; // Device name + data type
        data_buffer[(*index)++] = data_type;
        memcpy((char *)&data_buffer[*index], device_name, name_length);
        *index += name_length;

        // Set the device's available services.
        data_buffer[(*index)++] = 3;
        data_buffer[(*index)++] = BLE_GAP_AD_TYPE_16BIT_SERVICE_UUID_COMPLETE;
        // Store BLE_UUID_HEART_RATE_SERVICE in little-endian format.
        data_buffer[(*index)++] = BLE_UUID_HEART_RATE_SERVICE & 0xFF;
        data_buffer[(*index)++] = (BLE_UUID_HEART_RATE_SERVICE & 0xFF00) >> 8;

         return data_buffer;
    }
}

#define SCAN_INTERVAL 0x00A0 /**< Determines scan interval in units of 0.625 milliseconds. */
#define SCAN_WINDOW   0x0050 /**< Determines scan window in units of 0.625 milliseconds. */
#define SCAN_TIMEOUT  0x3C    /**< Scan timeout between 0x01 and 0xFFFF in seconds, 0x0 disables timeout. */
extern "C" {
    EMSCRIPTEN_KEEPALIVE
    ble_gap_scan_params_t * createScanParam()
    {
        ble_gap_scan_params_t *m_scan_param = new ble_gap_scan_params_t({
            1,                       // Active scanning set.
            0,                       // Selective scanning not set.
        #if NRF_SD_BLE_API == 2
            NULL,                    // White-list not set.
        #endif
        #if NRF_SD_BLE_API >= 3
            0,                       // adv_dir_report not set.
        #endif

            (uint16_t)SCAN_INTERVAL,
            (uint16_t)SCAN_WINDOW,
            (uint16_t)SCAN_TIMEOUT
        });

        return m_scan_param;

    }
}
