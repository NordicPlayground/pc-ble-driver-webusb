/*global Module */
// SD API V3

class ser_ble_gap_app_keyset_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ser_ble_gap_app_keyset_t_NEW', 'number', [], [])>>>0;
        }

        this.conn_active = {SET: (val) => Module.ccall('ser_ble_gap_app_keyset_t_SET_conn_active', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ser_ble_gap_app_keyset_t_GET_conn_active', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ser_ble_gap_app_keyset_t_GET_ADDRESSOF_conn_active', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.keyset = {SET: (val) => Module.ccall('ser_ble_gap_app_keyset_t_SET_keyset', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ser_ble_gap_app_keyset_t_GET_keyset', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ser_ble_gap_app_keyset_t_GET_ADDRESSOF_keyset', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ser_ble_gap_app_keyset_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ser_ble_gap_app_keyset_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_user_mem_block_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_user_mem_block_t_NEW', 'number', [], [])>>>0;
        }

        this.p_mem = {SET: (val) => Module.ccall('ble_user_mem_block_t_SET_p_mem', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_user_mem_block_t_GET_p_mem', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_user_mem_block_t_GET_ADDRESSOF_p_mem', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.len = {SET: (val) => Module.ccall('ble_user_mem_block_t_SET_len', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_user_mem_block_t_GET_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_user_mem_block_t_GET_ADDRESSOF_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_user_mem_block_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_user_mem_block_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_enable_params_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_enable_params_t_NEW', 'number', [], [])>>>0;
        }

        this.common_enable_params = {SET: (val) => Module.ccall('ble_enable_params_t_SET_common_enable_params', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_enable_params_t_GET_common_enable_params', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_enable_params_t_GET_ADDRESSOF_common_enable_params', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.gap_enable_params = {SET: (val) => Module.ccall('ble_enable_params_t_SET_gap_enable_params', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_enable_params_t_GET_gap_enable_params', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_enable_params_t_GET_ADDRESSOF_gap_enable_params', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.gatt_enable_params = {SET: (val) => Module.ccall('ble_enable_params_t_SET_gatt_enable_params', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_enable_params_t_GET_gatt_enable_params', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_enable_params_t_GET_ADDRESSOF_gatt_enable_params', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.gatts_enable_params = {SET: (val) => Module.ccall('ble_enable_params_t_SET_gatts_enable_params', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_enable_params_t_GET_gatts_enable_params', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_enable_params_t_GET_ADDRESSOF_gatts_enable_params', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_enable_params_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_enable_params_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gatts_enable_params_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gatts_enable_params_t_NEW', 'number', [], [])>>>0;
        }

        this.service_changed = {SET: (val) => Module.ccall('ble_gatts_enable_params_t_SET_service_changed', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_enable_params_t_GET_service_changed', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.attr_tab_size = {SET: (val) => Module.ccall('ble_gatts_enable_params_t_SET_attr_tab_size', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_enable_params_t_GET_attr_tab_size', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_enable_params_t_GET_ADDRESSOF_attr_tab_size', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gatts_enable_params_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gatts_enable_params_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gatt_enable_params_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gatt_enable_params_t_NEW', 'number', [], [])>>>0;
        }

        this.att_mtu = {SET: (val) => Module.ccall('ble_gatt_enable_params_t_SET_att_mtu', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatt_enable_params_t_GET_att_mtu', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatt_enable_params_t_GET_ADDRESSOF_att_mtu', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gatt_enable_params_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gatt_enable_params_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_enable_params_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_enable_params_t_NEW', 'number', [], [])>>>0;
        }

        this.periph_conn_count = {SET: (val) => Module.ccall('ble_gap_enable_params_t_SET_periph_conn_count', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_enable_params_t_GET_periph_conn_count', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gap_enable_params_t_GET_ADDRESSOF_periph_conn_count', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.central_conn_count = {SET: (val) => Module.ccall('ble_gap_enable_params_t_SET_central_conn_count', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_enable_params_t_GET_central_conn_count', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gap_enable_params_t_GET_ADDRESSOF_central_conn_count', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.central_sec_count = {SET: (val) => Module.ccall('ble_gap_enable_params_t_SET_central_sec_count', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_enable_params_t_GET_central_sec_count', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gap_enable_params_t_GET_ADDRESSOF_central_sec_count', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_device_name = {SET: (val) => Module.ccall('ble_gap_enable_params_t_SET_p_device_name', null, ['number', 'number'], [this._EmscriptenInternalData, val])}
    }
    delete() {
        Module.ccall('ble_gap_enable_params_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_enable_params_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_device_name_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_device_name_t_NEW', 'number', [], [])>>>0;
        }

        this.write_perm = {SET: (val) => Module.ccall('ble_gap_device_name_t_SET_write_perm', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_device_name_t_GET_write_perm', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_device_name_t_GET_ADDRESSOF_write_perm', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.vloc = {SET: (val) => Module.ccall('ble_gap_device_name_t_SET_vloc', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_device_name_t_GET_vloc', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.p_value = {SET: (val) => Module.ccall('ble_gap_device_name_t_SET_p_value', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_device_name_t_GET_p_value', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_device_name_t_GET_ADDRESSOF_p_value', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.current_len = {SET: (val) => Module.ccall('ble_gap_device_name_t_SET_current_len', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_device_name_t_GET_current_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_device_name_t_GET_ADDRESSOF_current_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.max_len = {SET: (val) => Module.ccall('ble_gap_device_name_t_SET_max_len', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_device_name_t_GET_max_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_device_name_t_GET_ADDRESSOF_max_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_device_name_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_device_name_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_common_enable_params_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_common_enable_params_t_NEW', 'number', [], [])>>>0;
        }

        this.vs_uuid_count = {SET: (val) => Module.ccall('ble_common_enable_params_t_SET_vs_uuid_count', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_common_enable_params_t_GET_vs_uuid_count', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_common_enable_params_t_GET_ADDRESSOF_vs_uuid_count', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_conn_bw_counts = {SET: (val) => Module.ccall('ble_common_enable_params_t_SET_p_conn_bw_counts', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_common_enable_params_t_GET_p_conn_bw_counts', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_common_enable_params_t_GET_ADDRESSOF_p_conn_bw_counts', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_common_enable_params_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_common_enable_params_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_conn_bw_counts_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_conn_bw_counts_t_NEW', 'number', [], [])>>>0;
        }

        this.tx_counts = {SET: (val) => Module.ccall('ble_conn_bw_counts_t_SET_tx_counts', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_conn_bw_counts_t_GET_tx_counts', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_conn_bw_counts_t_GET_ADDRESSOF_tx_counts', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.rx_counts = {SET: (val) => Module.ccall('ble_conn_bw_counts_t_SET_rx_counts', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_conn_bw_counts_t_GET_rx_counts', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_conn_bw_counts_t_GET_ADDRESSOF_rx_counts', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_conn_bw_counts_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_conn_bw_counts_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_conn_bw_count_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_conn_bw_count_t_NEW', 'number', [], [])>>>0;
        }

        this.high_count = {SET: (val) => Module.ccall('ble_conn_bw_count_t_SET_high_count', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_conn_bw_count_t_GET_high_count', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_conn_bw_count_t_GET_ADDRESSOF_high_count', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.mid_count = {SET: (val) => Module.ccall('ble_conn_bw_count_t_SET_mid_count', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_conn_bw_count_t_GET_mid_count', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_conn_bw_count_t_GET_ADDRESSOF_mid_count', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.low_count = {SET: (val) => Module.ccall('ble_conn_bw_count_t_SET_low_count', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_conn_bw_count_t_GET_low_count', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_conn_bw_count_t_GET_ADDRESSOF_low_count', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_conn_bw_count_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_conn_bw_count_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_opt_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_opt_t_NEW', 'number', [], [])>>>0;
        }

        this.common_opt = {SET: (val) => Module.ccall('ble_opt_t_SET_common_opt', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_opt_t_GET_common_opt', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_opt_t_GET_ADDRESSOF_common_opt', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.gap_opt = {SET: (val) => Module.ccall('ble_opt_t_SET_gap_opt', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_opt_t_GET_gap_opt', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_opt_t_GET_ADDRESSOF_gap_opt', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_opt_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_opt_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_opt_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_opt_t_NEW', 'number', [], [])>>>0;
        }

        this.ch_map = {SET: (val) => Module.ccall('ble_gap_opt_t_SET_ch_map', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_t_GET_ch_map', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_opt_t_GET_ADDRESSOF_ch_map', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.local_conn_latency = {SET: (val) => Module.ccall('ble_gap_opt_t_SET_local_conn_latency', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_t_GET_local_conn_latency', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_opt_t_GET_ADDRESSOF_local_conn_latency', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.passkey = {SET: (val) => Module.ccall('ble_gap_opt_t_SET_passkey', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_t_GET_passkey', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_opt_t_GET_ADDRESSOF_passkey', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.scan_req_report = {SET: (val) => Module.ccall('ble_gap_opt_t_SET_scan_req_report', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_t_GET_scan_req_report', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_opt_t_GET_ADDRESSOF_scan_req_report', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.compat_mode = {SET: (val) => Module.ccall('ble_gap_opt_t_SET_compat_mode', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_t_GET_compat_mode', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_opt_t_GET_ADDRESSOF_compat_mode', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.ext_len = {SET: (val) => Module.ccall('ble_gap_opt_t_SET_ext_len', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_t_GET_ext_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_opt_t_GET_ADDRESSOF_ext_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.auth_payload_timeout = {SET: (val) => Module.ccall('ble_gap_opt_t_SET_auth_payload_timeout', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_t_GET_auth_payload_timeout', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_opt_t_GET_ADDRESSOF_auth_payload_timeout', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_opt_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_opt_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_opt_auth_payload_timeout_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_opt_auth_payload_timeout_t_NEW', 'number', [], [])>>>0;
        }

        this.conn_handle = {SET: (val) => Module.ccall('ble_gap_opt_auth_payload_timeout_t_SET_conn_handle', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_auth_payload_timeout_t_GET_conn_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_opt_auth_payload_timeout_t_GET_ADDRESSOF_conn_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.auth_payload_timeout = {SET: (val) => Module.ccall('ble_gap_opt_auth_payload_timeout_t_SET_auth_payload_timeout', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_auth_payload_timeout_t_GET_auth_payload_timeout', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_opt_auth_payload_timeout_t_GET_ADDRESSOF_auth_payload_timeout', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_opt_auth_payload_timeout_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_opt_auth_payload_timeout_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_opt_ext_len_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_opt_ext_len_t_NEW', 'number', [], [])>>>0;
        }

        this.rxtx_max_pdu_payload_size = {SET: (val) => Module.ccall('ble_gap_opt_ext_len_t_SET_rxtx_max_pdu_payload_size', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_ext_len_t_GET_rxtx_max_pdu_payload_size', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gap_opt_ext_len_t_GET_ADDRESSOF_rxtx_max_pdu_payload_size', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_opt_ext_len_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_opt_ext_len_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_opt_compat_mode_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_opt_compat_mode_t_NEW', 'number', [], [])>>>0;
        }

        this.mode_1_enable = {SET: (val) => Module.ccall('ble_gap_opt_compat_mode_t_SET_mode_1_enable', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_compat_mode_t_GET_mode_1_enable', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
    }
    delete() {
        Module.ccall('ble_gap_opt_compat_mode_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_opt_compat_mode_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_opt_scan_req_report_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_opt_scan_req_report_t_NEW', 'number', [], [])>>>0;
        }

        this.enable = {SET: (val) => Module.ccall('ble_gap_opt_scan_req_report_t_SET_enable', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_scan_req_report_t_GET_enable', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
    }
    delete() {
        Module.ccall('ble_gap_opt_scan_req_report_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_opt_scan_req_report_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_opt_passkey_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_opt_passkey_t_NEW', 'number', [], [])>>>0;
        }

        this.p_passkey = {SET: (val) => Module.ccall('ble_gap_opt_passkey_t_SET_p_passkey', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_passkey_t_GET_p_passkey', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_opt_passkey_t_GET_ADDRESSOF_p_passkey', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_opt_passkey_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_opt_passkey_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_opt_local_conn_latency_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_opt_local_conn_latency_t_NEW', 'number', [], [])>>>0;
        }

        this.conn_handle = {SET: (val) => Module.ccall('ble_gap_opt_local_conn_latency_t_SET_conn_handle', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_local_conn_latency_t_GET_conn_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_opt_local_conn_latency_t_GET_ADDRESSOF_conn_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.requested_latency = {SET: (val) => Module.ccall('ble_gap_opt_local_conn_latency_t_SET_requested_latency', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_local_conn_latency_t_GET_requested_latency', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_opt_local_conn_latency_t_GET_ADDRESSOF_requested_latency', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_actual_latency = {SET: (val) => Module.ccall('ble_gap_opt_local_conn_latency_t_SET_p_actual_latency', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_local_conn_latency_t_GET_p_actual_latency', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_opt_local_conn_latency_t_GET_ADDRESSOF_p_actual_latency', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_opt_local_conn_latency_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_opt_local_conn_latency_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_opt_ch_map_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_opt_ch_map_t_NEW', 'number', [], [])>>>0;
        }

        this.conn_handle = {SET: (val) => Module.ccall('ble_gap_opt_ch_map_t_SET_conn_handle', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_opt_ch_map_t_GET_conn_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_opt_ch_map_t_GET_ADDRESSOF_conn_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.ch_map = {GETADDR: () => (Module.ccall('ble_gap_opt_ch_map_t_GET_ADDRESSOF_ch_map', 'number', ['number'], [this._EmscriptenInternalData])>>>0), LENGTH: () => Module.ccall('ble_gap_opt_ch_map_t_LENGTH_ch_map', 'number', ['number'], [this._EmscriptenInternalData])>>>0}
    }
    delete() {
        Module.ccall('ble_gap_opt_ch_map_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_opt_ch_map_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_common_opt_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_common_opt_t_NEW', 'number', [], [])>>>0;
        }

        this.conn_bw = {SET: (val) => Module.ccall('ble_common_opt_t_SET_conn_bw', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_common_opt_t_GET_conn_bw', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_common_opt_t_GET_ADDRESSOF_conn_bw', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.pa_lna = {SET: (val) => Module.ccall('ble_common_opt_t_SET_pa_lna', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_common_opt_t_GET_pa_lna', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_common_opt_t_GET_ADDRESSOF_pa_lna', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.conn_evt_ext = {SET: (val) => Module.ccall('ble_common_opt_t_SET_conn_evt_ext', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_common_opt_t_GET_conn_evt_ext', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_common_opt_t_GET_ADDRESSOF_conn_evt_ext', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_common_opt_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_common_opt_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_common_opt_conn_evt_ext_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_common_opt_conn_evt_ext_t_NEW', 'number', [], [])>>>0;
        }

        this.enable = {SET: (val) => Module.ccall('ble_common_opt_conn_evt_ext_t_SET_enable', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_common_opt_conn_evt_ext_t_GET_enable', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
    }
    delete() {
        Module.ccall('ble_common_opt_conn_evt_ext_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_common_opt_conn_evt_ext_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_common_opt_pa_lna_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_common_opt_pa_lna_t_NEW', 'number', [], [])>>>0;
        }

        this.pa_cfg = {SET: (val) => Module.ccall('ble_common_opt_pa_lna_t_SET_pa_cfg', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_common_opt_pa_lna_t_GET_pa_cfg', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_common_opt_pa_lna_t_GET_ADDRESSOF_pa_cfg', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.lna_cfg = {SET: (val) => Module.ccall('ble_common_opt_pa_lna_t_SET_lna_cfg', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_common_opt_pa_lna_t_GET_lna_cfg', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_common_opt_pa_lna_t_GET_ADDRESSOF_lna_cfg', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.ppi_ch_id_set = {SET: (val) => Module.ccall('ble_common_opt_pa_lna_t_SET_ppi_ch_id_set', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_common_opt_pa_lna_t_GET_ppi_ch_id_set', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_common_opt_pa_lna_t_GET_ADDRESSOF_ppi_ch_id_set', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.ppi_ch_id_clr = {SET: (val) => Module.ccall('ble_common_opt_pa_lna_t_SET_ppi_ch_id_clr', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_common_opt_pa_lna_t_GET_ppi_ch_id_clr', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_common_opt_pa_lna_t_GET_ADDRESSOF_ppi_ch_id_clr', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.gpiote_ch_id = {SET: (val) => Module.ccall('ble_common_opt_pa_lna_t_SET_gpiote_ch_id', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_common_opt_pa_lna_t_GET_gpiote_ch_id', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_common_opt_pa_lna_t_GET_ADDRESSOF_gpiote_ch_id', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_common_opt_pa_lna_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_common_opt_pa_lna_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_pa_lna_cfg_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_pa_lna_cfg_t_NEW', 'number', [], [])>>>0;
        }

        this.enable = {SET: (val) => Module.ccall('ble_pa_lna_cfg_t_SET_enable', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_pa_lna_cfg_t_GET_enable', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.active_high = {SET: (val) => Module.ccall('ble_pa_lna_cfg_t_SET_active_high', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_pa_lna_cfg_t_GET_active_high', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.gpio_pin = {SET: (val) => Module.ccall('ble_pa_lna_cfg_t_SET_gpio_pin', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_pa_lna_cfg_t_GET_gpio_pin', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
    }
    delete() {
        Module.ccall('ble_pa_lna_cfg_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_pa_lna_cfg_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_common_opt_conn_bw_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_common_opt_conn_bw_t_NEW', 'number', [], [])>>>0;
        }

        this.role = {SET: (val) => Module.ccall('ble_common_opt_conn_bw_t_SET_role', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_common_opt_conn_bw_t_GET_role', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_common_opt_conn_bw_t_GET_ADDRESSOF_role', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.conn_bw = {SET: (val) => Module.ccall('ble_common_opt_conn_bw_t_SET_conn_bw', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_common_opt_conn_bw_t_GET_conn_bw', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_common_opt_conn_bw_t_GET_ADDRESSOF_conn_bw', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_common_opt_conn_bw_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_common_opt_conn_bw_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_conn_bw_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_conn_bw_t_NEW', 'number', [], [])>>>0;
        }

        this.conn_bw_tx = {SET: (val) => Module.ccall('ble_conn_bw_t_SET_conn_bw_tx', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_conn_bw_t_GET_conn_bw_tx', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_conn_bw_t_GET_ADDRESSOF_conn_bw_tx', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.conn_bw_rx = {SET: (val) => Module.ccall('ble_conn_bw_t_SET_conn_bw_rx', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_conn_bw_t_GET_conn_bw_rx', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_conn_bw_t_GET_ADDRESSOF_conn_bw_rx', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_conn_bw_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_conn_bw_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_version_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_version_t_NEW', 'number', [], [])>>>0;
        }

        this.version_number = {SET: (val) => Module.ccall('ble_version_t_SET_version_number', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_version_t_GET_version_number', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_version_t_GET_ADDRESSOF_version_number', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.company_id = {SET: (val) => Module.ccall('ble_version_t_SET_company_id', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_version_t_GET_company_id', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_version_t_GET_ADDRESSOF_company_id', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.subversion_number = {SET: (val) => Module.ccall('ble_version_t_SET_subversion_number', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_version_t_GET_subversion_number', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_version_t_GET_ADDRESSOF_subversion_number', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_version_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_version_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_uuid128_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_uuid128_t_NEW', 'number', [], [])>>>0;
        }

        this.uuid128 = {GETADDR: () => (Module.ccall('ble_uuid128_t_GET_ADDRESSOF_uuid128', 'number', ['number'], [this._EmscriptenInternalData])>>>0), LENGTH: () => Module.ccall('ble_uuid128_t_LENGTH_uuid128', 'number', ['number'], [this._EmscriptenInternalData])>>>0}
    }
    delete() {
        Module.ccall('ble_uuid128_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_uuid128_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gatts_attr_md_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gatts_attr_md_t_NEW', 'number', [], [])>>>0;
        }

        this.read_perm = {SET: (val) => Module.ccall('ble_gatts_attr_md_t_SET_read_perm', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_attr_md_t_GET_read_perm', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_attr_md_t_GET_ADDRESSOF_read_perm', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.write_perm = {SET: (val) => Module.ccall('ble_gatts_attr_md_t_SET_write_perm', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_attr_md_t_GET_write_perm', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_attr_md_t_GET_ADDRESSOF_write_perm', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.vlen = {SET: (val) => Module.ccall('ble_gatts_attr_md_t_SET_vlen', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_attr_md_t_GET_vlen', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.vloc = {SET: (val) => Module.ccall('ble_gatts_attr_md_t_SET_vloc', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_attr_md_t_GET_vloc', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.rd_auth = {SET: (val) => Module.ccall('ble_gatts_attr_md_t_SET_rd_auth', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_attr_md_t_GET_rd_auth', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.wr_auth = {SET: (val) => Module.ccall('ble_gatts_attr_md_t_SET_wr_auth', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_attr_md_t_GET_wr_auth', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
    }
    delete() {
        Module.ccall('ble_gatts_attr_md_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gatts_attr_md_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gatts_rw_authorize_reply_params_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gatts_rw_authorize_reply_params_t_NEW', 'number', [], [])>>>0;
        }

        this.type = {SET: (val) => Module.ccall('ble_gatts_rw_authorize_reply_params_t_SET_type', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_rw_authorize_reply_params_t_GET_type', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gatts_rw_authorize_reply_params_t_GET_ADDRESSOF_type', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.read = {SET: (val) => Module.ccall('ble_gatts_rw_authorize_reply_params_t_SET_read', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_rw_authorize_reply_params_t_GET_read', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_rw_authorize_reply_params_t_GET_ADDRESSOF_read', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.write = {SET: (val) => Module.ccall('ble_gatts_rw_authorize_reply_params_t_SET_write', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_rw_authorize_reply_params_t_GET_write', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_rw_authorize_reply_params_t_GET_ADDRESSOF_write', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gatts_rw_authorize_reply_params_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gatts_rw_authorize_reply_params_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gatts_authorize_params_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gatts_authorize_params_t_NEW', 'number', [], [])>>>0;
        }

        this.gatt_status = {SET: (val) => Module.ccall('ble_gatts_authorize_params_t_SET_gatt_status', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_authorize_params_t_GET_gatt_status', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_authorize_params_t_GET_ADDRESSOF_gatt_status', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.update = {SET: (val) => Module.ccall('ble_gatts_authorize_params_t_SET_update', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_authorize_params_t_GET_update', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.offset = {SET: (val) => Module.ccall('ble_gatts_authorize_params_t_SET_offset', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_authorize_params_t_GET_offset', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_authorize_params_t_GET_ADDRESSOF_offset', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.len = {SET: (val) => Module.ccall('ble_gatts_authorize_params_t_SET_len', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_authorize_params_t_GET_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_authorize_params_t_GET_ADDRESSOF_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_data = {SET: (val) => Module.ccall('ble_gatts_authorize_params_t_SET_p_data', null, ['number', 'number'], [this._EmscriptenInternalData, val])}
    }
    delete() {
        Module.ccall('ble_gatts_authorize_params_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gatts_authorize_params_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gatts_hvx_params_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gatts_hvx_params_t_NEW', 'number', [], [])>>>0;
        }

        this.handle = {SET: (val) => Module.ccall('ble_gatts_hvx_params_t_SET_handle', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_hvx_params_t_GET_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_hvx_params_t_GET_ADDRESSOF_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.type = {SET: (val) => Module.ccall('ble_gatts_hvx_params_t_SET_type', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_hvx_params_t_GET_type', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gatts_hvx_params_t_GET_ADDRESSOF_type', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.offset = {SET: (val) => Module.ccall('ble_gatts_hvx_params_t_SET_offset', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_hvx_params_t_GET_offset', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_hvx_params_t_GET_ADDRESSOF_offset', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_len = {SET: (val) => Module.ccall('ble_gatts_hvx_params_t_SET_p_len', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_hvx_params_t_GET_p_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_hvx_params_t_GET_ADDRESSOF_p_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_data = {SET: (val) => Module.ccall('ble_gatts_hvx_params_t_SET_p_data', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_hvx_params_t_GET_p_data', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_hvx_params_t_GET_ADDRESSOF_p_data', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gatts_hvx_params_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gatts_hvx_params_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gatts_value_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gatts_value_t_NEW', 'number', [], [])>>>0;
        }

        this.len = {SET: (val) => Module.ccall('ble_gatts_value_t_SET_len', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_value_t_GET_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_value_t_GET_ADDRESSOF_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.offset = {SET: (val) => Module.ccall('ble_gatts_value_t_SET_offset', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_value_t_GET_offset', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_value_t_GET_ADDRESSOF_offset', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_value = {SET: (val) => Module.ccall('ble_gatts_value_t_SET_p_value', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_value_t_GET_p_value', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_value_t_GET_ADDRESSOF_p_value', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gatts_value_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gatts_value_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gatts_char_handles_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gatts_char_handles_t_NEW', 'number', [], [])>>>0;
        }

        this.value_handle = {SET: (val) => Module.ccall('ble_gatts_char_handles_t_SET_value_handle', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_handles_t_GET_value_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_char_handles_t_GET_ADDRESSOF_value_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.user_desc_handle = {SET: (val) => Module.ccall('ble_gatts_char_handles_t_SET_user_desc_handle', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_handles_t_GET_user_desc_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_char_handles_t_GET_ADDRESSOF_user_desc_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.cccd_handle = {SET: (val) => Module.ccall('ble_gatts_char_handles_t_SET_cccd_handle', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_handles_t_GET_cccd_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_char_handles_t_GET_ADDRESSOF_cccd_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.sccd_handle = {SET: (val) => Module.ccall('ble_gatts_char_handles_t_SET_sccd_handle', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_handles_t_GET_sccd_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_char_handles_t_GET_ADDRESSOF_sccd_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gatts_char_handles_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gatts_char_handles_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gatts_attr_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gatts_attr_t_NEW', 'number', [], [])>>>0;
        }

        this.p_uuid = {SET: (val) => Module.ccall('ble_gatts_attr_t_SET_p_uuid', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_attr_t_GET_p_uuid', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_attr_t_GET_ADDRESSOF_p_uuid', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_attr_md = {SET: (val) => Module.ccall('ble_gatts_attr_t_SET_p_attr_md', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_attr_t_GET_p_attr_md', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_attr_t_GET_ADDRESSOF_p_attr_md', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.init_len = {SET: (val) => Module.ccall('ble_gatts_attr_t_SET_init_len', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_attr_t_GET_init_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_attr_t_GET_ADDRESSOF_init_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.init_offs = {SET: (val) => Module.ccall('ble_gatts_attr_t_SET_init_offs', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_attr_t_GET_init_offs', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_attr_t_GET_ADDRESSOF_init_offs', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.max_len = {SET: (val) => Module.ccall('ble_gatts_attr_t_SET_max_len', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_attr_t_GET_max_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_attr_t_GET_ADDRESSOF_max_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_value = {SET: (val) => Module.ccall('ble_gatts_attr_t_SET_p_value', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_attr_t_GET_p_value', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_attr_t_GET_ADDRESSOF_p_value', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gatts_attr_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gatts_attr_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gatts_char_md_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gatts_char_md_t_NEW', 'number', [], [])>>>0;
        }

        this.char_props = {SET: (val) => Module.ccall('ble_gatts_char_md_t_SET_char_props', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_md_t_GET_char_props', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_char_md_t_GET_ADDRESSOF_char_props', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.char_ext_props = {SET: (val) => Module.ccall('ble_gatts_char_md_t_SET_char_ext_props', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_md_t_GET_char_ext_props', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_char_md_t_GET_ADDRESSOF_char_ext_props', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_char_user_desc = {SET: (val) => Module.ccall('ble_gatts_char_md_t_SET_p_char_user_desc', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_md_t_GET_p_char_user_desc', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_char_md_t_GET_ADDRESSOF_p_char_user_desc', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.char_user_desc_max_size = {SET: (val) => Module.ccall('ble_gatts_char_md_t_SET_char_user_desc_max_size', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_md_t_GET_char_user_desc_max_size', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_char_md_t_GET_ADDRESSOF_char_user_desc_max_size', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.char_user_desc_size = {SET: (val) => Module.ccall('ble_gatts_char_md_t_SET_char_user_desc_size', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_md_t_GET_char_user_desc_size', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_char_md_t_GET_ADDRESSOF_char_user_desc_size', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_char_pf = {SET: (val) => Module.ccall('ble_gatts_char_md_t_SET_p_char_pf', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_md_t_GET_p_char_pf', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_char_md_t_GET_ADDRESSOF_p_char_pf', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_user_desc_md = {SET: (val) => Module.ccall('ble_gatts_char_md_t_SET_p_user_desc_md', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_md_t_GET_p_user_desc_md', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_char_md_t_GET_ADDRESSOF_p_user_desc_md', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_cccd_md = {SET: (val) => Module.ccall('ble_gatts_char_md_t_SET_p_cccd_md', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_md_t_GET_p_cccd_md', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_char_md_t_GET_ADDRESSOF_p_cccd_md', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_sccd_md = {SET: (val) => Module.ccall('ble_gatts_char_md_t_SET_p_sccd_md', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_md_t_GET_p_sccd_md', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gatts_char_md_t_GET_ADDRESSOF_p_sccd_md', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gatts_char_md_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gatts_char_md_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gatts_char_pf_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gatts_char_pf_t_NEW', 'number', [], [])>>>0;
        }

        this.format = {SET: (val) => Module.ccall('ble_gatts_char_pf_t_SET_format', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_pf_t_GET_format', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gatts_char_pf_t_GET_ADDRESSOF_format', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.exponent = {SET: (val) => Module.ccall('ble_gatts_char_pf_t_SET_exponent', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_pf_t_GET_exponent', 'number', ['number'], [this._EmscriptenInternalData])>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gatts_char_pf_t_GET_ADDRESSOF_exponent', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.unit = {SET: (val) => Module.ccall('ble_gatts_char_pf_t_SET_unit', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_pf_t_GET_unit', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_char_pf_t_GET_ADDRESSOF_unit', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.name_space = {SET: (val) => Module.ccall('ble_gatts_char_pf_t_SET_name_space', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_pf_t_GET_name_space', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gatts_char_pf_t_GET_ADDRESSOF_name_space', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.desc = {SET: (val) => Module.ccall('ble_gatts_char_pf_t_SET_desc', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatts_char_pf_t_GET_desc', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gatts_char_pf_t_GET_ADDRESSOF_desc', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gatts_char_pf_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gatts_char_pf_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gatt_char_ext_props_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gatt_char_ext_props_t_NEW', 'number', [], [])>>>0;
        }

        this.reliable_wr = {SET: (val) => Module.ccall('ble_gatt_char_ext_props_t_SET_reliable_wr', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatt_char_ext_props_t_GET_reliable_wr', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.wr_aux = {SET: (val) => Module.ccall('ble_gatt_char_ext_props_t_SET_wr_aux', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatt_char_ext_props_t_GET_wr_aux', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
    }
    delete() {
        Module.ccall('ble_gatt_char_ext_props_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gatt_char_ext_props_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gatt_char_props_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gatt_char_props_t_NEW', 'number', [], [])>>>0;
        }

        this.broadcast = {SET: (val) => Module.ccall('ble_gatt_char_props_t_SET_broadcast', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatt_char_props_t_GET_broadcast', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.read = {SET: (val) => Module.ccall('ble_gatt_char_props_t_SET_read', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatt_char_props_t_GET_read', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.write_wo_resp = {SET: (val) => Module.ccall('ble_gatt_char_props_t_SET_write_wo_resp', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatt_char_props_t_GET_write_wo_resp', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.write = {SET: (val) => Module.ccall('ble_gatt_char_props_t_SET_write', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatt_char_props_t_GET_write', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.notify = {SET: (val) => Module.ccall('ble_gatt_char_props_t_SET_notify', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatt_char_props_t_GET_notify', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.indicate = {SET: (val) => Module.ccall('ble_gatt_char_props_t_SET_indicate', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatt_char_props_t_GET_indicate', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.auth_signed_wr = {SET: (val) => Module.ccall('ble_gatt_char_props_t_SET_auth_signed_wr', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gatt_char_props_t_GET_auth_signed_wr', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
    }
    delete() {
        Module.ccall('ble_gatt_char_props_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gatt_char_props_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gattc_write_params_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gattc_write_params_t_NEW', 'number', [], [])>>>0;
        }

        this.write_op = {SET: (val) => Module.ccall('ble_gattc_write_params_t_SET_write_op', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gattc_write_params_t_GET_write_op', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gattc_write_params_t_GET_ADDRESSOF_write_op', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.flags = {SET: (val) => Module.ccall('ble_gattc_write_params_t_SET_flags', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gattc_write_params_t_GET_flags', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gattc_write_params_t_GET_ADDRESSOF_flags', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.handle = {SET: (val) => Module.ccall('ble_gattc_write_params_t_SET_handle', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gattc_write_params_t_GET_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gattc_write_params_t_GET_ADDRESSOF_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.offset = {SET: (val) => Module.ccall('ble_gattc_write_params_t_SET_offset', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gattc_write_params_t_GET_offset', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gattc_write_params_t_GET_ADDRESSOF_offset', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.len = {SET: (val) => Module.ccall('ble_gattc_write_params_t_SET_len', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gattc_write_params_t_GET_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gattc_write_params_t_GET_ADDRESSOF_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_value = {SET: (val) => Module.ccall('ble_gattc_write_params_t_SET_p_value', null, ['number', 'number'], [this._EmscriptenInternalData, val])}
    }
    delete() {
        Module.ccall('ble_gattc_write_params_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gattc_write_params_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gattc_handle_range_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gattc_handle_range_t_NEW', 'number', [], [])>>>0;
        }

        this.start_handle = {SET: (val) => Module.ccall('ble_gattc_handle_range_t_SET_start_handle', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gattc_handle_range_t_GET_start_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gattc_handle_range_t_GET_ADDRESSOF_start_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.end_handle = {SET: (val) => Module.ccall('ble_gattc_handle_range_t_SET_end_handle', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gattc_handle_range_t_GET_end_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gattc_handle_range_t_GET_ADDRESSOF_end_handle', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gattc_handle_range_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gattc_handle_range_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_uuid_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_uuid_t_NEW', 'number', [], [])>>>0;
        }

        this.uuid = {SET: (val) => Module.ccall('ble_uuid_t_SET_uuid', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_uuid_t_GET_uuid', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_uuid_t_GET_ADDRESSOF_uuid', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.type = {SET: (val) => Module.ccall('ble_uuid_t_SET_type', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_uuid_t_GET_type', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_uuid_t_GET_ADDRESSOF_type', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_uuid_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_uuid_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_lesc_dhkey_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_lesc_dhkey_t_NEW', 'number', [], [])>>>0;
        }

        this.key = {GETADDR: () => (Module.ccall('ble_gap_lesc_dhkey_t_GET_ADDRESSOF_key', 'number', ['number'], [this._EmscriptenInternalData])>>>0), LENGTH: () => Module.ccall('ble_gap_lesc_dhkey_t_LENGTH_key', 'number', ['number'], [this._EmscriptenInternalData])>>>0}
    }
    delete() {
        Module.ccall('ble_gap_lesc_dhkey_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_lesc_dhkey_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_lesc_oob_data_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_lesc_oob_data_t_NEW', 'number', [], [])>>>0;
        }

        this.addr = {SET: (val) => Module.ccall('ble_gap_lesc_oob_data_t_SET_addr', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_lesc_oob_data_t_GET_addr', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_lesc_oob_data_t_GET_ADDRESSOF_addr', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.r = {GETADDR: () => (Module.ccall('ble_gap_lesc_oob_data_t_GET_ADDRESSOF_r', 'number', ['number'], [this._EmscriptenInternalData])>>>0), LENGTH: () => Module.ccall('ble_gap_lesc_oob_data_t_LENGTH_r', 'number', ['number'], [this._EmscriptenInternalData])>>>0}
        this.c = {GETADDR: () => (Module.ccall('ble_gap_lesc_oob_data_t_GET_ADDRESSOF_c', 'number', ['number'], [this._EmscriptenInternalData])>>>0), LENGTH: () => Module.ccall('ble_gap_lesc_oob_data_t_LENGTH_c', 'number', ['number'], [this._EmscriptenInternalData])>>>0}
    }
    delete() {
        Module.ccall('ble_gap_lesc_oob_data_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_lesc_oob_data_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_lesc_p256_pk_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_lesc_p256_pk_t_NEW', 'number', [], [])>>>0;
        }

        this.pk = {GETADDR: () => (Module.ccall('ble_gap_lesc_p256_pk_t_GET_ADDRESSOF_pk', 'number', ['number'], [this._EmscriptenInternalData])>>>0), LENGTH: () => Module.ccall('ble_gap_lesc_p256_pk_t_LENGTH_pk', 'number', ['number'], [this._EmscriptenInternalData])>>>0}
    }
    delete() {
        Module.ccall('ble_gap_lesc_p256_pk_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_lesc_p256_pk_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_sec_keyset_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_sec_keyset_t_NEW', 'number', [], [])>>>0;
        }

        this.keys_own = {SET: (val) => Module.ccall('ble_gap_sec_keyset_t_SET_keys_own', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_keyset_t_GET_keys_own', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_sec_keyset_t_GET_ADDRESSOF_keys_own', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.keys_peer = {SET: (val) => Module.ccall('ble_gap_sec_keyset_t_SET_keys_peer', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_keyset_t_GET_keys_peer', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_sec_keyset_t_GET_ADDRESSOF_keys_peer', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_sec_keyset_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_sec_keyset_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_sec_keys_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_sec_keys_t_NEW', 'number', [], [])>>>0;
        }

        this.p_enc_key = {SET: (val) => Module.ccall('ble_gap_sec_keys_t_SET_p_enc_key', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_keys_t_GET_p_enc_key', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_sec_keys_t_GET_ADDRESSOF_p_enc_key', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_id_key = {SET: (val) => Module.ccall('ble_gap_sec_keys_t_SET_p_id_key', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_keys_t_GET_p_id_key', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_sec_keys_t_GET_ADDRESSOF_p_id_key', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_sign_key = {SET: (val) => Module.ccall('ble_gap_sec_keys_t_SET_p_sign_key', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_keys_t_GET_p_sign_key', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_sec_keys_t_GET_ADDRESSOF_p_sign_key', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_pk = {SET: (val) => Module.ccall('ble_gap_sec_keys_t_SET_p_pk', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_keys_t_GET_p_pk', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_sec_keys_t_GET_ADDRESSOF_p_pk', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_sec_keys_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_sec_keys_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_enc_key_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_enc_key_t_NEW', 'number', [], [])>>>0;
        }

        this.enc_info = {SET: (val) => Module.ccall('ble_gap_enc_key_t_SET_enc_info', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_enc_key_t_GET_enc_info', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_enc_key_t_GET_ADDRESSOF_enc_info', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.master_id = {SET: (val) => Module.ccall('ble_gap_enc_key_t_SET_master_id', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_enc_key_t_GET_master_id', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_enc_key_t_GET_ADDRESSOF_master_id', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_enc_key_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_enc_key_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_master_id_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_master_id_t_NEW', 'number', [], [])>>>0;
        }

        this.ediv = {SET: (val) => Module.ccall('ble_gap_master_id_t_SET_ediv', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_master_id_t_GET_ediv', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_master_id_t_GET_ADDRESSOF_ediv', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.rand = {GETADDR: () => (Module.ccall('ble_gap_master_id_t_GET_ADDRESSOF_rand', 'number', ['number'], [this._EmscriptenInternalData])>>>0), LENGTH: () => Module.ccall('ble_gap_master_id_t_LENGTH_rand', 'number', ['number'], [this._EmscriptenInternalData])>>>0}
    }
    delete() {
        Module.ccall('ble_gap_master_id_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_master_id_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_scan_params_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_scan_params_t_NEW', 'number', [], [])>>>0;
        }

        this.active = {SET: (val) => Module.ccall('ble_gap_scan_params_t_SET_active', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_scan_params_t_GET_active', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.use_whitelist = {SET: (val) => Module.ccall('ble_gap_scan_params_t_SET_use_whitelist', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_scan_params_t_GET_use_whitelist', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.adv_dir_report = {SET: (val) => Module.ccall('ble_gap_scan_params_t_SET_adv_dir_report', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_scan_params_t_GET_adv_dir_report', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.interval = {SET: (val) => Module.ccall('ble_gap_scan_params_t_SET_interval', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_scan_params_t_GET_interval', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_scan_params_t_GET_ADDRESSOF_interval', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.window = {SET: (val) => Module.ccall('ble_gap_scan_params_t_SET_window', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_scan_params_t_GET_window', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_scan_params_t_GET_ADDRESSOF_window', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.timeout = {SET: (val) => Module.ccall('ble_gap_scan_params_t_SET_timeout', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_scan_params_t_GET_timeout', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_scan_params_t_GET_ADDRESSOF_timeout', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_scan_params_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_scan_params_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_conn_sec_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_conn_sec_t_NEW', 'number', [], [])>>>0;
        }

        this.sec_mode = {SET: (val) => Module.ccall('ble_gap_conn_sec_t_SET_sec_mode', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_conn_sec_t_GET_sec_mode', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_conn_sec_t_GET_ADDRESSOF_sec_mode', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.encr_key_size = {SET: (val) => Module.ccall('ble_gap_conn_sec_t_SET_encr_key_size', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_conn_sec_t_GET_encr_key_size', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gap_conn_sec_t_GET_ADDRESSOF_encr_key_size', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_conn_sec_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_conn_sec_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_sec_params_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_sec_params_t_NEW', 'number', [], [])>>>0;
        }

        this.bond = {SET: (val) => Module.ccall('ble_gap_sec_params_t_SET_bond', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_params_t_GET_bond', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.mitm = {SET: (val) => Module.ccall('ble_gap_sec_params_t_SET_mitm', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_params_t_GET_mitm', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.lesc = {SET: (val) => Module.ccall('ble_gap_sec_params_t_SET_lesc', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_params_t_GET_lesc', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.keypress = {SET: (val) => Module.ccall('ble_gap_sec_params_t_SET_keypress', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_params_t_GET_keypress', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.io_caps = {SET: (val) => Module.ccall('ble_gap_sec_params_t_SET_io_caps', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_params_t_GET_io_caps', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.oob = {SET: (val) => Module.ccall('ble_gap_sec_params_t_SET_oob', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_params_t_GET_oob', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.min_key_size = {SET: (val) => Module.ccall('ble_gap_sec_params_t_SET_min_key_size', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_params_t_GET_min_key_size', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gap_sec_params_t_GET_ADDRESSOF_min_key_size', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.max_key_size = {SET: (val) => Module.ccall('ble_gap_sec_params_t_SET_max_key_size', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_params_t_GET_max_key_size', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gap_sec_params_t_GET_ADDRESSOF_max_key_size', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.kdist_own = {SET: (val) => Module.ccall('ble_gap_sec_params_t_SET_kdist_own', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_params_t_GET_kdist_own', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_sec_params_t_GET_ADDRESSOF_kdist_own', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.kdist_peer = {SET: (val) => Module.ccall('ble_gap_sec_params_t_SET_kdist_peer', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_params_t_GET_kdist_peer', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_sec_params_t_GET_ADDRESSOF_kdist_peer', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_sec_params_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_sec_params_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_sec_kdist_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_sec_kdist_t_NEW', 'number', [], [])>>>0;
        }

        this.enc = {SET: (val) => Module.ccall('ble_gap_sec_kdist_t_SET_enc', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_kdist_t_GET_enc', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.id = {SET: (val) => Module.ccall('ble_gap_sec_kdist_t_SET_id', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_kdist_t_GET_id', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.sign = {SET: (val) => Module.ccall('ble_gap_sec_kdist_t_SET_sign', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_kdist_t_GET_sign', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.link = {SET: (val) => Module.ccall('ble_gap_sec_kdist_t_SET_link', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_sec_kdist_t_GET_link', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
    }
    delete() {
        Module.ccall('ble_gap_sec_kdist_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_sec_kdist_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_privacy_params_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_privacy_params_t_NEW', 'number', [], [])>>>0;
        }

        this.privacy_mode = {SET: (val) => Module.ccall('ble_gap_privacy_params_t_SET_privacy_mode', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_privacy_params_t_GET_privacy_mode', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gap_privacy_params_t_GET_ADDRESSOF_privacy_mode', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.private_addr_type = {SET: (val) => Module.ccall('ble_gap_privacy_params_t_SET_private_addr_type', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_privacy_params_t_GET_private_addr_type', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gap_privacy_params_t_GET_ADDRESSOF_private_addr_type', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.private_addr_cycle_s = {SET: (val) => Module.ccall('ble_gap_privacy_params_t_SET_private_addr_cycle_s', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_privacy_params_t_GET_private_addr_cycle_s', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_privacy_params_t_GET_ADDRESSOF_private_addr_cycle_s', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_device_irk = {SET: (val) => Module.ccall('ble_gap_privacy_params_t_SET_p_device_irk', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_privacy_params_t_GET_p_device_irk', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_privacy_params_t_GET_ADDRESSOF_p_device_irk', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_privacy_params_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_privacy_params_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_id_key_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_id_key_t_NEW', 'number', [], [])>>>0;
        }

        this.id_info = {SET: (val) => Module.ccall('ble_gap_id_key_t_SET_id_info', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_id_key_t_GET_id_info', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_id_key_t_GET_ADDRESSOF_id_info', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.id_addr_info = {SET: (val) => Module.ccall('ble_gap_id_key_t_SET_id_addr_info', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_id_key_t_GET_id_addr_info', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_id_key_t_GET_ADDRESSOF_id_addr_info', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_id_key_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_id_key_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_addr_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_addr_t_NEW', 'number', [], [])>>>0;
        }

        this.addr_id_peer = {SET: (val) => Module.ccall('ble_gap_addr_t_SET_addr_id_peer', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_addr_t_GET_addr_id_peer', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.addr_type = {SET: (val) => Module.ccall('ble_gap_addr_t_SET_addr_type', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_addr_t_GET_addr_type', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.addr = {GETADDR: () => (Module.ccall('ble_gap_addr_t_GET_ADDRESSOF_addr', 'number', ['number'], [this._EmscriptenInternalData])>>>0), LENGTH: () => Module.ccall('ble_gap_addr_t_LENGTH_addr', 'number', ['number'], [this._EmscriptenInternalData])>>>0}
    }
    delete() {
        Module.ccall('ble_gap_addr_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_addr_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_sign_info_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_sign_info_t_NEW', 'number', [], [])>>>0;
        }

        this.csrk = {GETADDR: () => (Module.ccall('ble_gap_sign_info_t_GET_ADDRESSOF_csrk', 'number', ['number'], [this._EmscriptenInternalData])>>>0), LENGTH: () => Module.ccall('ble_gap_sign_info_t_LENGTH_csrk', 'number', ['number'], [this._EmscriptenInternalData])>>>0}
    }
    delete() {
        Module.ccall('ble_gap_sign_info_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_sign_info_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_irk_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_irk_t_NEW', 'number', [], [])>>>0;
        }

        this.irk = {GETADDR: () => (Module.ccall('ble_gap_irk_t_GET_ADDRESSOF_irk', 'number', ['number'], [this._EmscriptenInternalData])>>>0), LENGTH: () => Module.ccall('ble_gap_irk_t_LENGTH_irk', 'number', ['number'], [this._EmscriptenInternalData])>>>0}
    }
    delete() {
        Module.ccall('ble_gap_irk_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_irk_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_enc_info_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_enc_info_t_NEW', 'number', [], [])>>>0;
        }

        this.ltk = {GETADDR: () => (Module.ccall('ble_gap_enc_info_t_GET_ADDRESSOF_ltk', 'number', ['number'], [this._EmscriptenInternalData])>>>0), LENGTH: () => Module.ccall('ble_gap_enc_info_t_LENGTH_ltk', 'number', ['number'], [this._EmscriptenInternalData])>>>0}
        this.lesc = {SET: (val) => Module.ccall('ble_gap_enc_info_t_SET_lesc', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_enc_info_t_GET_lesc', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.auth = {SET: (val) => Module.ccall('ble_gap_enc_info_t_SET_auth', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_enc_info_t_GET_auth', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.ltk_len = {SET: (val) => Module.ccall('ble_gap_enc_info_t_SET_ltk_len', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_enc_info_t_GET_ltk_len', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
    }
    delete() {
        Module.ccall('ble_gap_enc_info_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_enc_info_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_conn_params_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_conn_params_t_NEW', 'number', [], [])>>>0;
        }

        this.min_conn_interval = {SET: (val) => Module.ccall('ble_gap_conn_params_t_SET_min_conn_interval', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_conn_params_t_GET_min_conn_interval', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_conn_params_t_GET_ADDRESSOF_min_conn_interval', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.max_conn_interval = {SET: (val) => Module.ccall('ble_gap_conn_params_t_SET_max_conn_interval', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_conn_params_t_GET_max_conn_interval', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_conn_params_t_GET_ADDRESSOF_max_conn_interval', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.slave_latency = {SET: (val) => Module.ccall('ble_gap_conn_params_t_SET_slave_latency', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_conn_params_t_GET_slave_latency', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_conn_params_t_GET_ADDRESSOF_slave_latency', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.conn_sup_timeout = {SET: (val) => Module.ccall('ble_gap_conn_params_t_SET_conn_sup_timeout', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_conn_params_t_GET_conn_sup_timeout', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_conn_params_t_GET_ADDRESSOF_conn_sup_timeout', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_conn_params_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_conn_params_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_conn_sec_mode_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_conn_sec_mode_t_NEW', 'number', [], [])>>>0;
        }

        this.sm = {SET: (val) => Module.ccall('ble_gap_conn_sec_mode_t_SET_sm', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_conn_sec_mode_t_GET_sm', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.lv = {SET: (val) => Module.ccall('ble_gap_conn_sec_mode_t_SET_lv', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_conn_sec_mode_t_GET_lv', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
    }
    delete() {
        Module.ccall('ble_gap_conn_sec_mode_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_conn_sec_mode_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_adv_params_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_adv_params_t_NEW', 'number', [], [])>>>0;
        }

        this.type = {SET: (val) => Module.ccall('ble_gap_adv_params_t_SET_type', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_adv_params_t_GET_type', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gap_adv_params_t_GET_ADDRESSOF_type', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.p_peer_addr = {SET: (val) => Module.ccall('ble_gap_adv_params_t_SET_p_peer_addr', null, ['number', 'number'], [this._EmscriptenInternalData, val])}
        this.fp = {SET: (val) => Module.ccall('ble_gap_adv_params_t_SET_fp', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_adv_params_t_GET_fp', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF, GETADDR: () => (Module.ccall('ble_gap_adv_params_t_GET_ADDRESSOF_fp', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.interval = {SET: (val) => Module.ccall('ble_gap_adv_params_t_SET_interval', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_adv_params_t_GET_interval', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_adv_params_t_GET_ADDRESSOF_interval', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.timeout = {SET: (val) => Module.ccall('ble_gap_adv_params_t_SET_timeout', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_adv_params_t_GET_timeout', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFFFF, GETADDR: () => (Module.ccall('ble_gap_adv_params_t_GET_ADDRESSOF_timeout', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
        this.channel_mask = {SET: (val) => Module.ccall('ble_gap_adv_params_t_SET_channel_mask', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_adv_params_t_GET_channel_mask', 'number', ['number'], [this._EmscriptenInternalData])>>>0), GETADDR: () => (Module.ccall('ble_gap_adv_params_t_GET_ADDRESSOF_channel_mask', 'number', ['number'], [this._EmscriptenInternalData])>>>0)}
    }
    delete() {
        Module.ccall('ble_gap_adv_params_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_adv_params_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}
class ble_gap_adv_ch_mask_t {
    constructor(address){
        if(address) {
            this._EmscriptenInternalData = address;
        } else {
            this._EmscriptenInternalData = Module.ccall('ble_gap_adv_ch_mask_t_NEW', 'number', [], [])>>>0;
        }

        this.ch_37_off = {SET: (val) => Module.ccall('ble_gap_adv_ch_mask_t_SET_ch_37_off', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_adv_ch_mask_t_GET_ch_37_off', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.ch_38_off = {SET: (val) => Module.ccall('ble_gap_adv_ch_mask_t_SET_ch_38_off', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_adv_ch_mask_t_GET_ch_38_off', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
        this.ch_39_off = {SET: (val) => Module.ccall('ble_gap_adv_ch_mask_t_SET_ch_39_off', null, ['number', 'number'], [this._EmscriptenInternalData, val]), GET: () => (Module.ccall('ble_gap_adv_ch_mask_t_GET_ch_39_off', 'number', ['number'], [this._EmscriptenInternalData])>>>0)&0xFF}
    }
    delete() {
        Module.ccall('ble_gap_adv_ch_mask_t_DELETE', null, ['number'], [this._EmscriptenInternalData]);
        this._EmscriptenInternalData = undefined;
    }
    sizeof() {
        return Module.ccall('ble_gap_adv_ch_mask_t_SIZEOF', 'number', ['number'], [this._EmscriptenInternalData])>>>0;
    }
    _getInternal() {
        return this._EmscriptenInternalData;
    }
}

module.exports = { ser_ble_gap_app_keyset_t, ble_user_mem_block_t, ble_enable_params_t, ble_gatts_enable_params_t, ble_gatt_enable_params_t, ble_gap_enable_params_t, ble_gap_device_name_t, ble_common_enable_params_t, ble_conn_bw_counts_t, ble_conn_bw_count_t, ble_opt_t, ble_gap_opt_t, ble_gap_opt_auth_payload_timeout_t, ble_gap_opt_ext_len_t, ble_gap_opt_compat_mode_t, ble_gap_opt_scan_req_report_t, ble_gap_opt_passkey_t, ble_gap_opt_local_conn_latency_t, ble_gap_opt_ch_map_t, ble_common_opt_t, ble_common_opt_conn_evt_ext_t, ble_common_opt_pa_lna_t, ble_pa_lna_cfg_t, ble_common_opt_conn_bw_t, ble_conn_bw_t, ble_version_t, ble_uuid128_t, ble_gatts_attr_md_t, ble_gatts_rw_authorize_reply_params_t, ble_gatts_authorize_params_t, ble_gatts_hvx_params_t, ble_gatts_value_t, ble_gatts_char_handles_t, ble_gatts_attr_t, ble_gatts_char_md_t, ble_gatts_char_pf_t, ble_gatt_char_ext_props_t, ble_gatt_char_props_t, ble_gattc_write_params_t, ble_gattc_handle_range_t, ble_uuid_t, ble_gap_lesc_dhkey_t, ble_gap_lesc_oob_data_t, ble_gap_lesc_p256_pk_t, ble_gap_sec_keyset_t, ble_gap_sec_keys_t, ble_gap_enc_key_t, ble_gap_master_id_t, ble_gap_scan_params_t, ble_gap_conn_sec_t, ble_gap_sec_params_t, ble_gap_sec_kdist_t, ble_gap_privacy_params_t, ble_gap_id_key_t, ble_gap_addr_t, ble_gap_sign_info_t, ble_gap_irk_t, ble_gap_enc_info_t, ble_gap_conn_params_t, ble_gap_conn_sec_mode_t, ble_gap_adv_params_t, ble_gap_adv_ch_mask_t };
