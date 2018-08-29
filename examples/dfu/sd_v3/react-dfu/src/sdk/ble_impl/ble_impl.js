/*global Module */
import { encode_decode } from '../ble_common';
import { emscriptenBindings } from '../bindings/emscripten';
import { emscriptenAllocPTP, emscriptenFreePTP } from './common';
import { NRF_ERROR_INVALID_PARAM } from '../sd_rpc_types';
import { NRF_SD_BLE_API_VERSION } from '../bindings/version';

export const sd_ble_uuid_encode = async (adapter, p_uuid, p_uuid_le_len, p_uuid_le) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_uuid_encode_req_enc(p_uuid._getInternal(), p_uuid_le_len, p_uuid_le, buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_uuid_encode_rsp_dec(buffer, length, p_uuid_le_len, p_uuid_le, result);
    return encode_decode(adapter, encode_function, decode_function);
};

//let sd_ble_tx_packet_count_get;
export let sd_ble_tx_packet_count_get;
if (NRF_SD_BLE_API_VERSION < 4) {
    sd_ble_tx_packet_count_get = async (adapter, conn_handle, p_count) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_tx_packet_count_get_req_enc(conn_handle, p_count, buffer, length);
        const decode_function = (buffer, length, result) => {
            const p_p_count = emscriptenAllocPTP(p_count);
            const apiRes = emscriptenBindings.ble_tx_packet_count_get_rsp_dec(buffer, length, p_p_count, result);
            emscriptenFreePTP(p_p_count);
            return apiRes;
        };
        return encode_decode(adapter, encode_function, decode_function);
    };
}

export const sd_ble_uuid_vs_add = async (adapter, p_vs_uuid, p_uuid_type) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_uuid_vs_add_req_enc(p_vs_uuid._getInternal(), p_uuid_type, buffer, length);
    const decode_function = (buffer, length, result) => {
        const p_p_uuid_type = emscriptenAllocPTP(p_uuid_type);
        let apiRes =  emscriptenBindings.ble_uuid_vs_add_rsp_dec(buffer, length, p_p_uuid_type, result);
        emscriptenFreePTP(p_p_uuid_type);
        return apiRes;
    };
    return encode_decode(adapter, encode_function, decode_function);
};
export const sd_ble_uuid_decode = async (adapter, uuid_le_len, p_uuid_le, p_uuid) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_uuid_decode_req_enc(uuid_le_len, p_uuid_le, p_uuid._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => {
        const p_p_uuid = emscriptenAllocPTP(p_uuid._getInternal());
        const apiRes = emscriptenBindings.ble_uuid_decode_rsp_dec(buffer, length, p_p_uuid, result);
        emscriptenFreePTP(p_p_uuid);
        return apiRes;
    };
    return encode_decode(adapter, encode_function, decode_function);
};
export const sd_ble_version_get = async (adapter, p_version) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_version_get_req_enc(p_version._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_version_get_rsp_dec(buffer, length, p_version._getInternal(), result);
    return encode_decode(adapter, encode_function, decode_function);
};
export const sd_ble_opt_get = async (adapter, opt_id, p_opt) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_opt_get_req_enc(opt_id._getInternal(), p_opt, buffer, length);
    const decode_function = (buffer, length, result) => {
        const p_opt_id = emscriptenAllocPTP(opt_id._getInternal());
        const apiRes = emscriptenBindings.ble_opt_get_rsp_dec(buffer, length, p_opt_id, result);
        emscriptenFreePTP(p_opt_id);
        return apiRes;
    };
    return encode_decode(adapter, encode_function, decode_function);
};

export const sd_ble_opt_set = async (adapter, opt_id, p_opt) => {
    const encode_function = (buffer, length) => emscriptenBindings.ble_opt_set_req_enc(opt_id, p_opt._getInternal(), length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_opt_set_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};

//let sd_ble_cfg_set;
export let sd_ble_cfg_set;
if (NRF_SD_BLE_API_VERSION >= 5) {
    sd_ble_cfg_set = async (adapter, cfg_id, p_cfg, app_ram_base) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_cfg_set_req_enc(cfg_id, p_cfg._getInternal(), buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_cfg_set_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
}

//let sd_ble_enable;
export let sd_ble_enable;
if (NRF_SD_BLE_API_VERSION < 4) {
    sd_ble_enable = async (adapter, p_params, p_app_ram_base) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_enable_req_enc(p_params._getInternal(), buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_enable_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
} else {
    sd_ble_enable = async (adapter, p_app_ram_base) => {
        const encode_function = (buffer, length) => emscriptenBindings.ble_enable_req_enc(buffer, length);
        const decode_function = (buffer, length, result) => emscriptenBindings.ble_enable_rsp_dec(buffer, length, result);
        return encode_decode(adapter, encode_function, decode_function);
    };
}

export const sd_ble_user_mem_reply = async (adapter, conn_handle, p_block) => {
    if (p_block !== null) {
        return NRF_ERROR_INVALID_PARAM;
    }
    const encode_function = (buffer, length) => emscriptenBindings.ble_user_mem_reply_req_enc(conn_handle, p_block._getInternal(), buffer, length);
    const decode_function = (buffer, length, result) => emscriptenBindings.ble_user_mem_reply_rsp_dec(buffer, length, result);
    return encode_decode(adapter, encode_function, decode_function);
};
