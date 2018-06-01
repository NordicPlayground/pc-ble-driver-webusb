mingw32-make  && em++ -o src/js/pcbleblob.js libpc_ble_driver_static_sd_api_v3.a  ^
-s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall', 'getValue', 'setValue','Pointer_stringify', 'intArrayFromString', 'cwrap', 'writeArrayToMemory']" ^
&& del libpc_ble_driver_static_sd_api_v3.a