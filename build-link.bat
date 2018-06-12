emcmake cmake && ^
mingw32-make  && ^
em++ -o build/pc_ble_driver_sd_api_v3.js libpc_ble_driver_static_sd_api_v3.a  ^
--pre-js src/js/adapter_internal.js --pre-js src/js/transport/serial.js --pre-js src/js/transport/transport.js ^
--pre-js src/js/transport/h5.js --pre-js src/js/transport/h5_transport.js --pre-js src/js/transport/h5_transport_exit_criterias.js ^
--pre-js src/js/transport/serialization_transport.js --pre-js src/js/transport/slip.js --pre-js src/js/transport/webusb_interface.js ^
--pre-js src/js/sd_rpc_types.js --pre-js src/js/ble_common.js --pre-js src/js/ble_impl.js ^
--post-js src/js/bindings/bleEvtStruct.js --post-js src/js/bindings/emscripten.js --post-js src/js/ble_evt/ble.js ^
-s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall', 'getValue', 'setValue','Pointer_stringify', 'intArrayFromString', 'cwrap', 'writeArrayToMemory']" ^
&& del libpc_ble_driver_static_sd_api_v3.a
