import os
import sys
from subprocess import run
import clang.cindex

libclangpath = ""
clangPathSet = False
generateBindings = True
bundleBindings = True
compileLibrary = True


argn = 1
while argn < len(sys.argv):
    arg = sys.argv[argn]
    argn += 1
    if(arg == "-libclang"):
        libclangpath = sys.argv[argn]
        clangPathSet = True
        argn +=1
        continue
    elif (arg == "--no-create-bindings"):
        generateBindings = False
        continue
    elif (arg == "--no-bundle-bindings"):
        bundleBindings = False
        continue
    elif (arg == "--no-compile"):
        compileLibrary = False
        continue
    elif (arg == "-sd-ver"):
        SD_VERS = sys.argv[argn].strip().split(",")
        argn += 1
        continue


SD_VERS = [3] # currently only v3

checkEnv = True

reqs = ['EMSDK', 'EM_CONFIG', 'BINARYEN_ROOT', 'EMSCRIPTEN']
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

if generateBindings:
    print("Using clang to autogenerate bindings for Emscripten..")

    if not os.path.isdir('src/js/bindings'):
        os.makedirs('src/js/bindings')
    for ver in SD_VERS:
        if not os.path.isdir('src/sd_api_v{}'.format(ver)):
            os.makedirs('src/sd_api_v{}'.format(ver))
        if not os.path.isdir('src/sd_api_v{}/bindings'.format(ver)):
            os.makedirs('src/sd_api_v{}/bindings'.format(ver))

        if not os.path.isdir('src/js/bindings/sd_api_v{}'.format(ver)):
            os.makedirs('src/js/bindings/sd_api_v{}'.format(ver))

        try:
            if clangPathSet:
                clang.cindex.Config.set_library_path(libclangpath)

            from clangCreateBindings.create import build as buildBindings
            buildBindings(ver)
        except clang.cindex.LibclangError:
            print("Could not locate clang library at path: '{}'".format(libclangpath))
            sys.exit(1)
    print("Bindings generated!\n\n")

cmake = "emcmake cmake"
make = "emmake make"
for ver in SD_VERS:
    emscripten = """em++ -O2 --js-opts 1 -s WASM=1 -o build/v{ver}/pc_ble_driver_sd_api_v{ver}.js libpc_ble_driver_static_sd_api_v{ver}.a -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall', 'getValue', 'setValue', 'cwrap', 'writeArrayToMemory']" """.format(ver=ver)

    createBundle = """uglifyjs src/js/adapter_internal.js src/js/ble_common.js src/js/gattc.js src/js/sd_rpc_types.js \
    src/js/bindings/sd_api_v{ver}/bleEvtStruct.js src/js/bindings/sd_api_v{ver}/bleSDAttributeStructs.js src/js/bindings/sd_api_v{ver}/emscripten.js \
    src/js/transport/transport.js src/js/transport/h5.js src/js/transport/h5_transport.js src/js/transport/h5_transport_exit_criterias.js \
    src/js/transport/serial.js src/js/transport/serialization_transport.js src/js/transport/slip.js src/js/transport/webusb_interface.js \
    src/js/ble_impl/common.js src/js/ble_impl/ble_gap_impl.js src/js/ble_impl/ble_gattc_impl.js src/js/ble_impl/ble_gatts_impl.js src/js/ble_impl/ble_impl.js \
    --compress -ecma 8 -o build/v3/bundle.js""".format(ver=ver)

    if bundleBindings:
        print("Processing transport and encode/decode..")
        os.system("npm install -g uglify-es")
        os.system(createBundle)

    if compileLibrary:
        print("Compiling...\n")
        os.system(cmake)
        os.system(make)
        os.system(emscripten)
        os.remove("libpc_ble_driver_static_sd_api_v{}.a".format(ver))
