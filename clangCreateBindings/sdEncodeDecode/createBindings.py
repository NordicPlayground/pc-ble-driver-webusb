import clang.cindex
from clang.cindex import CursorKind
import os


def funcStr(name, argv):
    '''
        Return wrapped C code for a function funcname with argument types argv
    '''
    argsname = ["_{}".format(i) for i in range(len(argv))]
    str = "EMSCRIPTEN_KEEPALIVE\n"
    str += "void* emscripten_{0}({1}){{return (void*)({0}({2}));}}\n".format(name, ",".join([type+" "+name for type, name in zip(argv,argsname)] ),  ",".join([name for name in argsname] ))
    return str

def createJsBindingString(funcname, args):
    '''
        Return wrapped JS binding for function funcname and args number of arguments
    '''
    str = "'{}': Module.cwrap('{}', 'number', [{}])".format(funcname, "emscripten_"+funcname, ", ".join(["'number'"]*args))
    return str

def filePointers(file_root, args, parse_files):
    '''
        Return generator that iterates over clang compiled source files
    '''
    idx = clang.cindex.Index.create()
    for filename in parse_files:
        yield idx.parse(file_root+filename, args=args)

def build(version, s_ver):
    pc_ble_drive_webusb_root = os.getcwd()
    pc_ble_drive_root = pc_ble_drive_webusb_root + "/pc-ble-driver"

    sdk_root = pc_ble_drive_root+"/src/sd_api_v{}/sdk".format(version)
    source_files_to_parse = os.listdir("{}/components/serialization/application/codecs/{s_ver}/serializers".format(sdk_root, s_ver=s_ver))

    functions = []
    jsFunctions = []

    added_function_defs = set()

    compArgs    = '-x c++ --std=c++11 -DNRF_SD_BLE_API_VERSION={ver}'.format(ver=version).split()

    include_dir = [pc_ble_drive_root+"/include/common",pc_ble_drive_root+"/include/common/sdk_compat",
    pc_ble_drive_root+"/include/common/internal",pc_ble_drive_root+"/include/common/internal/transport"]
    cpp_dir = [sdk_root+"/components/serialization/application/codecs/{s_ver}/serializers".format(s_ver = s_ver),
    sdk_root+"/components/serialization/application/codecs/common",
    sdk_root+"/components/libraries/util",
    sdk_root+"/components/libraries/util",
    sdk_root+"/components/serialization/common",
    sdk_root+"/components/serialization/common/struct_ser/{s_ver}".format(s_ver = s_ver),
    sdk_root+"/components/softdevice/s132/headers"]

    file_root = sdk_root+"/components/serialization/application/codecs/{s_ver}/serializers/".format(s_ver = s_ver)

    pc_ble_driver_includes = [ '-I' + inc for inc in include_dir ]
    pc_ble_driver_cppincludes = [ '-I' + inc for inc in cpp_dir ]
    compArgs    = compArgs + pc_ble_driver_includes + pc_ble_driver_cppincludes


    parse_files = []
    parse_headerfiles = []
    for filename in source_files_to_parse:
        if filename.endswith(".c"):
            parse_files.append(filename)
        if filename.endswith(".h") and "nrf_soc" not in filename:
            parse_headerfiles.append(filename)

    for tu in filePointers(file_root, compArgs, parse_files):
        for c in tu.cursor.walk_preorder():
            if(c.kind == clang.cindex.CursorKind.FUNCTION_DECL and c.spelling.startswith("ble")):
                '''
                    Parsed node is a C function with a name that starts with "ble"
                '''
                try:
                    defstr = c.get_definition().displayname #funcname(T0, T1, ...)
                    funcname = c.spelling
                    if funcname not in added_function_defs:

                        args = defstr.replace(funcname,'')[1:-1].split(',') # Removes parentheses and splits argument types.

                        func_code = funcStr(funcname, args) # C/C++ code to be compiled with emscripten
                        functions.append(func_code)

                        js_code = createJsBindingString(funcname, len(args)) # JS-binding to interface emscripten
                        jsFunctions.append(js_code)

                        added_function_defs.add(funcname)

                except:
                    pass #Function not in this source file. Ignoring.
                    #print("Could not add function {}".format(c.spelling))
                    #print(dir(c.get_definition()))
                    #print

    source_code = ""

    source_code +="""
    /* Copyright (c) 2018 Nordic Semiconductor. All Rights Reserved.
     *
     * The information contained herein is property of Nordic Semiconductor ASA.
     * Terms and conditions of usage are described in detail in NORDIC
     * SEMICONDUCTOR STANDARD SOFTWARE LICENSE AGREEMENT.
     *
     * Licensees are granted free, non-transferable use of the information. NO
     * WARRANTY of ANY KIND is provided. This heading must NOT be removed from
     * the file.
     *
     */\n\n"""
    source_code += "#include \"Emscripten.h\"\n"
    for file in parse_headerfiles:
        source_code += "#include \"{}\"\n".format(file)
    source_code += "\n"

    source_code += "#ifdef __cplusplus\nextern \"C\" {\n#endif\n"
    source_code += "".join(functions)
    source_code += "#ifdef __cplusplus\n}\n#endif"

    js_source_code = ""
    js_source_code += "module.exports.emscriptenBindings = {{{}}}".format(",\n".join(jsFunctions))


    print("Wrapped {} functions".format(len(functions)))

    with open(pc_ble_drive_webusb_root+"/src/sd_api_v{}/bindings/emscripten_bindings.cpp".format(version), "w") as file:
        file.write(source_code)
    with open(pc_ble_drive_webusb_root+"/src/js/bindings/emscripten.js", "w") as file:
        file.write(js_source_code)
