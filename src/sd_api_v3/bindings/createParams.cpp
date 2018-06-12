
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
            ble_enable_params->gap_enable_params.central_conn_count = 1;
            ble_enable_params->gap_enable_params.central_sec_count = 1;
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
enum
{
    UNIT_0_625_MS = 625,  /**< Number of microseconds in 0.625 milliseconds. */
    UNIT_1_25_MS  = 1250, /**< Number of microseconds in 1.25 milliseconds. */
    UNIT_10_MS    = 10000 /**< Number of microseconds in 10 milliseconds. */
};
#define MSEC_TO_UNITS(TIME, RESOLUTION) (((TIME) * 1000) / (RESOLUTION))

#define MIN_CONNECTION_INTERVAL         MSEC_TO_UNITS(7.5, UNIT_1_25_MS) /**< Determines minimum connection interval in milliseconds. */
#define MAX_CONNECTION_INTERVAL         MSEC_TO_UNITS(7.5, UNIT_1_25_MS) /**< Determines maximum connection interval in milliseconds. */
#define SLAVE_LATENCY                   0                                /**< Slave Latency in number of connection events. */
#define CONNECTION_SUPERVISION_TIMEOUT  MSEC_TO_UNITS(4000, UNIT_10_MS)  /**< Determines supervision time-out in units of 10 milliseconds. */

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    ble_gap_conn_params_t * createConnectionParams()
    {
        ble_gap_conn_params_t *m_connection_param = new ble_gap_conn_params_t(
        {
            (uint16_t)MIN_CONNECTION_INTERVAL,
            (uint16_t)MAX_CONNECTION_INTERVAL,
            (uint16_t)SLAVE_LATENCY,
            (uint16_t)CONNECTION_SUPERVISION_TIMEOUT
        });
        return m_connection_param;

    }
}


extern "C" {
    EMSCRIPTEN_KEEPALIVE
    ble_gatts_char_md_t * createCharMd(ble_gatts_attr_md_t * cccd_md)
    {
        ble_gatts_char_md_t* char_md = new ble_gatts_char_md_t;
        memset(char_md, 0, sizeof(ble_gatts_char_md_t));
        char_md->char_props.notify = 1;
        char_md->p_char_user_desc  = NULL;
        char_md->p_char_pf         = NULL;
        char_md->p_user_desc_md    = NULL;
        char_md->p_cccd_md         = cccd_md;
        char_md->p_sccd_md         = NULL;

        return char_md;
    }

    EMSCRIPTEN_KEEPALIVE
    ble_gatts_attr_t * createAttCharValue(ble_uuid_t* ble_uuid, ble_gatts_attr_md_t* attr_md, uint16_t init_len, uint16_t init_offs, uint16_t max_len, uint8_t* p_value)
    {
        ble_gatts_attr_t* attr_char_value = new ble_gatts_attr_t;
        memset(attr_char_value, 0, sizeof(ble_gatts_attr_t));
        attr_char_value->p_uuid = ble_uuid;
        attr_char_value->p_attr_md    = attr_md;
        attr_char_value->init_len     = init_len;
        attr_char_value->init_offs    = init_offs;
        attr_char_value->max_len      = max_len;
        attr_char_value->p_value      = p_value;
        return attr_char_value;
    }
    EMSCRIPTEN_KEEPALIVE
    ble_gatts_attr_md_t * createGattsAttrMd(uint8_t vlen, uint8_t vloc, uint8_t rd_auth, uint8_t wr_auth)
    {
        ble_gatts_attr_md_t* md = new ble_gatts_attr_md_t;
        memset(md, 0, sizeof(ble_gatts_attr_md_t));

        BLE_GAP_CONN_SEC_MODE_SET_OPEN(&(md->read_perm));
        BLE_GAP_CONN_SEC_MODE_SET_OPEN(&(md->write_perm));
        md->vloc       = vloc;
        md->rd_auth    = rd_auth;
        md->wr_auth    = wr_auth;
        md->vlen       = vlen;

        return md;
    }
}
