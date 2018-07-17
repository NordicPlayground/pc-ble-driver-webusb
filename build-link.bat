emcmake cmake && ^
emmake make && ^
em++ -O3 --js-opts 1 -s WASM=1 -o build/v3/pc_ble_driver_sd_api_v3.js libpc_ble_driver_static_sd_api_v3.a  ^
-s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall', 'getValue', 'setValue', 'cwrap', 'writeArrayToMemory']" ^
&& del libpc_ble_driver_static_sd_api_v3.a
