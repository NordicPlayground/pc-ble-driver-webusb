import os
import sys
from subprocess import run
import clang.cindex

libclangpath = ""
clangPathSet = False
generateBindings = True
compileLibrary = True
SD_VERS = []

argn = 1
EMSCRIPTEN_ASSERTIONS = 0
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
    elif (arg == "--no-compile"):
        compileLibrary = False
        continue
    elif (arg == "-sd-ver"):
        SD_VERS = [int(v) for v in sys.argv[argn].strip().split(",")]
        argn += 1
        continue
    elif (arg == "-emscripten-assert"):
        val = int(sys.argv[argn])
        argn += 1
        if val >= 0 and val <=2:
            EMSCRIPTEN_ASSERTIONS = val
        continue

checkEnv = True

reqs = ['EMSDK', 'EM_CONFIG', 'BINARYEN_ROOT', 'EMSCRIPTEN']
for req in reqs:
    if req in os.environ:
        print("Found {} = {}".format(req, os.environ[req]))
    else:
        print("ERROR: Could not find environment variable {}. Make sure it is exported.".format(req))
        checkEnv = False
print()
if not checkEnv:
    print("ERROR: Environment variables used by emscripten must be exported.")
    sys.exit(1)

if len(SD_VERS) == 0:
    print("ERROR: No softdevice versions specified.. (ex: -sd-ver 2,3)")
    sys.exit(1)

if not os.path.isdir('build'):
    os.makedirs('build')
for ver in SD_VERS:
    if not os.path.isdir('build/v{}'.format(ver)):
        os.makedirs('build/v{}'.format(ver))

if generateBindings:
    print("Using clang to autogenerate bindings for Emscripten..")
    if clangPathSet:
        clang.cindex.Config.set_library_path(libclangpath)

    if not os.path.isdir('src/js/bindings'):
        os.makedirs('src/js/bindings')
    for ver in SD_VERS:
        print("... for version {}\n\n".format(ver))
        if not os.path.isdir('src/sd_api_v{}'.format(ver)):
            os.makedirs('src/sd_api_v{}'.format(ver))
        if not os.path.isdir('src/sd_api_v{}/bindings'.format(ver)):
            os.makedirs('src/sd_api_v{}/bindings'.format(ver))

        if not os.path.isdir('src/js/bindings/sd_api_v{}'.format(ver)):
            os.makedirs('src/js/bindings/sd_api_v{}'.format(ver))

        try:
            from clangCreateBindings.create import build as buildBindings
            buildBindings(ver)
        except clang.cindex.LibclangError:
            print("ERROR: Could not locate clang library at path: '{}'".format(libclangpath))
            sys.exit(1)
    print("Bindings generated!\n\n")

if compileLibrary:
    cmake = 'emcmake cmake -DSD_API_VER_NUMS=\'{vers}\''.format(vers = ';'.join([str(v) for v in SD_VERS]))
    make = "emmake make -s ASSERTIONS={assertions}".format(assertions=EMSCRIPTEN_ASSERTIONS)
    print("Configure CMake...")
    os.system(cmake)
    print("Compiling to LLVM...")
    os.system(make)



for ver in SD_VERS:
    emscripten = """em++ -O2 --js-opts 1 -s WASM=1 -s BINARYEN_TRAP_MODE='clamp' -o build/v{ver}/pc_ble_driver_sd_api_v{ver}.js libpc_ble_driver_static_sd_api_v{ver}.a -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall', 'getValue', 'setValue', 'cwrap', 'writeArrayToMemory']" """.format(ver=ver)


    if compileLibrary:
        print("Compiling LLVM to WASM. (build/v{})\n".format(ver))
        os.system(emscripten)
        os.remove("libpc_ble_driver_static_sd_api_v{}.a".format(ver))

