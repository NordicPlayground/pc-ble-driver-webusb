const NRF_SUCCESS = 0;
const NRF_ERROR_INTERNAL = 3;
const NRF_ERROR_TIMEOUT = 13;
const NRF_ERROR_INVALID_DATA = 11;

const sd_rpc_app_status_t = Object.freeze({
    PKT_SEND_MAX_RETRIES_REACHED: 0,
    PKT_UNEXPECTED: 1,
    PKT_ENCODE_ERROR: 2,
    PKT_DECODE_ERROR: 3,
    PKT_SEND_ERROR: 4,
    IO_RESOURCES_UNAVAILABLE: 5,
    RESET_PERFORMED: 6,
    CONNECTION_ACTIVE: 7,
});

const sd_rpc_log_severity_t = Object.freeze({
    SD_RPC_LOG_TRACE: 0,
    SD_RPC_LOG_DEBUG: 1,
    SD_RPC_LOG_INFO: 2,
    SD_RPC_LOG_WARNING: 3,
    SD_RPC_LOG_ERROR: 4,
    SD_RPC_LOG_FATAL: 5,
});
