from nodes import StructType, structs, recursiveStructParser, structEmbeddings
from clangParse import filePointers, clangIsStruct, createStructNode, pc_ble_drive_webusb_root
from generateCode import generateCppEmscriptenFunctionBinding, generateJsEmscriptenFunctionBinding, writeCppFunctions, writeJsFunctions


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

writeCppFunctions(cppFunctions, pc_ble_drive_webusb_root)
writeJsFunctions(jsFunctions, pc_ble_drive_webusb_root)
