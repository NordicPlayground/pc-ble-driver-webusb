import os
import sys
from subprocess import run


SD_VERS = [3]

"""if len(sys.argv) >= 3:
    if(sys.argv[1] == "-v"):
        SD_VERS = sys.argv[2].strip().split(",")
""" #TODO
    

checkEnv = True


reqs = ['EMSDK', 'EM_CONFIG', 'BINARYEN_ROOT', 'JAVA_HOME', 'EMSCRIPTEN']
for req in reqs:
    if req in os.environ:
        print("Found {} = {}".format(req, os.environ[req]))
    else:
        print("Could not find environment variable {}. Make sure it is exported.".format(req))
        checkEnv = False
print()
if not checkEnv:
    print("Environment variables used by emscripten must be exported.")
    sys.exit(1)
    
if not os.path.isdir('build'):
    os.makedirs('build')
for ver in SD_VERS:
    if not os.path.isdir('build/v{}'.format(ver)):
        os.makedirs('build/v{}'.format(ver))

print("Using clang to autogenerate bindings for Emscripten..")
import clangCreateBindings.create
print("Bindings generated!\n\n")

cmake = "emcmake cmake"
make = "emmake make"
emscripten = """em++ -O2 --js-opts 1 -s WASM=1 -o build/v3/pc_ble_driver_sd_api_v3.js libpc_ble_driver_static_sd_api_v3.a -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall', 'getValue', 'setValue', 'cwrap', 'writeArrayToMemory']" """
cleanup = "del libpc_ble_driver_static_sd_api_v3.a"

createBundle = """uglifyjs src/js/adapter_internal.js src/js/ble_common.js src/js/gattc.js src/js/sd_rpc_types.js \
src/js/bindings/bleEvtStruct.js src/js/bindings/bleSDAttributeStructs.js src/js/bindings/emscripten.js \
src/js/transport/transport.js src/js/transport/h5.js src/js/transport/h5_transport.js src/js/transport/h5_transport_exit_criterias.js \
src/js/transport/serial.js src/js/transport/serialization_transport.js src/js/transport/slip.js src/js/transport/webusb_interface.js \
src/js/ble_impl/common.js src/js/ble_impl/ble_gap_impl.js src/js/ble_impl/ble_gattc_impl.js src/js/ble_impl/ble_gatts_impl.js src/js/ble_impl/ble_impl.js \
--compress -ecma 8 -o build/v3/bundle.js"""


print("Processing transport and encode/decode..")
os.system(createBundle)

print("Compiling...\n")

os.system(cmake)
os.system(make)
os.system(emscripten)
os.system(cleanup)
