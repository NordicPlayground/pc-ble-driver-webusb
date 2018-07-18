#added_function_defs = set()


def generateCppEmscriptenFunctionBinding(pathObject):
    '''
        Return wrapped C code for a struct field
    '''
    retType = pathObject.returnType
    structType = pathObject.rootType
    pathstr = structType+"_evt_data" + pathObject.pathstr
    funcName = pathstr.replace("->","__").replace(".", "__")
    str = "EMSCRIPTEN_KEEPALIVE\n"
    if pathObject.arrayType: # Index argument specified
        str += "{0}* {1}({2}* {2}_evt_data, uint8_t index){{return &{3}[index];}}".format(retType, funcName, structType, pathstr)
    elif pathObject.pointerType: # Index argument specified
            str += "{0}* {1}({2}* {2}_evt_data){{return {3};}}".format(retType, funcName, structType, pathstr)
    elif pathObject.structPointer: # Index argument specified
            str += "{0}* {1}({2}* {2}_evt_data){{return &{3};}}".format(retType, funcName, structType, pathstr)
    else:
        str += "{0} {1}({2}* {2}_evt_data){{return {3};}}".format(retType, funcName, structType, pathstr)
    return str


def generateJsEmscriptenFunctionBinding(pathObject):
    '''
        Return wrapped JS binding for struct field
    '''

    pathstr = pathObject.rootType +"_evt_data" + pathObject.pathstr
    cppFuncName = pathstr.replace("->","__").replace(".", "__")
    jsFuncName = pathstr.replace("->",".").replace(pathObject.rootType + "_evt_data", pathObject.rootType)
    cwrap = ""

    if pathObject.arrayType: # Index argument specified
        cwrap += "Module.cwrap('{}','number', ['number', 'number'])".format(cppFuncName)
    else:
        cwrap += "Module.cwrap('{}','number', ['number'])".format(cppFuncName)

    str = "'"+jsFuncName+"'" + ": " +cwrap
    return str


def writeCppFunctions(functions, dir, version):
    source_code ="""/* Copyright (c) 2018 Nordic Semiconductor. All Rights Reserved.
     *
     * The information contained herein is property of Nordic Semiconductor ASA.
     * Terms and conditions of usage are described in detail in NORDIC
     * SEMICONDUCTOR STANDARD SOFTWARE LICENSE AGREEMENT.
     *
     * Licensees are granted free, non-transferable use of the information. NO
     * WARRANTY of ANY KIND is provided. This heading must NOT be removed from
     * the file.
     *
     */\n\n
    #include "Emscripten.h"
    #include "ble.h"
    #include "ble_ranges.h"
    #include "ble_types.h"
    #include "ble_gap.h"
    #include "ble_l2cap.h"
    #include "ble_gatt.h"
    #include "ble_gattc.h"
    #include "ble_gatts.h"

    #ifdef __cplusplus
    extern \"C\" {{
    #endif
    {}
    #ifdef __cplusplus
    }}
    #endif
    """.format(functions)

    with open(dir+"/src/sd_api_v{}/bindings/ble_evt_struct.cpp".format(version), "w") as file:
        file.write(source_code)
        print("Wrote {}/src/sd_api_v{}/bindings/ble_evt_struct.cpp".format(dir, version))

def writeJsFunctions(functions, dir, version):
    source_code ="""let ble_event_struct = {{
    {}
    }}
    """.format(functions)

    with open(dir+"/src/js/bindings/sd_api_v{}/bleEvtStruct.js".format(version), "w") as file:
        file.write(source_code)
        print("Wrote {}/src/js/bindings/sd_api_v{}/bleEvtStruct.js".format(dir, version))
