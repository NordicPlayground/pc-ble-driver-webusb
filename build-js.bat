uglifyjs src/js/adapter_internal.js src/js/ble_common.js src/js/gattc.js src/js/sd_rpc_types.js ^
src/js/bindings/bleEvtStruct.js src/js/bindings/bleSDAttributeStructs.js src/js/bindings/emscripten.js ^
src/js/transport/transport.js src/js/transport/h5.js src/js/transport/h5_transport.js src/js/transport/h5_transport_exit_criterias.js ^
src/js/transport/serial.js src/js/transport/serialization_transport.js src/js/transport/slip.js src/js/transport/webusb_interface.js ^
src/js/ble_impl/common.js src/js/ble_impl/ble_gap_impl.js src/js/ble_impl/ble_gattc_impl.js src/js/ble_impl/ble_gatts_impl.js src/js/ble_impl/ble_impl.js ^
--compress -ecma 8 -o build/v3/bundle.js
