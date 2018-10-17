from clangCreateBindings.parseStruct.nodes import StructType, structs, recursiveStructParser, structEmbeddings
from clangCreateBindings.parseStruct.clangParse import filePointers, clangIsStruct, createStructNode, setup
from clangCreateBindings.parseStruct.generateCode import generateCppEmscriptenFunctionBinding, generateJsEmscriptenFunctionBinding, writeCppFunctions, writeJsFunctions

def build(version, s_ver, sd_dir_name):
    pc_ble_drive_webusb_root = setup(version, s_ver, sd_dir_name)
    for tu in filePointers():
        for c in tu.cursor.walk_preorder():
            if(clangIsStruct(c.kind) and c.spelling.startswith("ble") and c.spelling.endswith("_t")):
                '''
                    Parsed node is a C function with a name that starts with "ble"
                '''
                structNode = createStructNode(c)
                structs[c.spelling] = structNode

    rootStruct = structs['ble_evt_t']
    recursiveStructParser(rootStruct, [], 'ble_evt_t', ["->"])

    cppFunctions = "\n".join([generateCppEmscriptenFunctionBinding(obj) for obj in list(structEmbeddings)])
    jsFunctions = ",\n".join([generateJsEmscriptenFunctionBinding(obj) for obj in list(structEmbeddings)])
    structs.clear()
    structEmbeddings.clear()
    writeCppFunctions(cppFunctions, pc_ble_drive_webusb_root, version)
    writeJsFunctions(jsFunctions, pc_ble_drive_webusb_root, version)
