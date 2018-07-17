import clang.cindex
from clang.cindex import CursorKind
import os
from clangCreateBindings.parseStruct.nodes import StructType, structs


pc_ble_drive_webusb_root = os.getcwd()
pc_ble_drive_root = pc_ble_drive_webusb_root + "\\pc-ble-driver"

sdk_root = pc_ble_drive_root+"\\src\\sd_api_v3\\sdk"
source_files_to_parse = os.listdir("{}\\components\\softdevice\\s132\\headers".format(sdk_root))




compArgs    = '-x c++ --std=c++11'.split()


include_dir = [pc_ble_drive_root+"\\include\\common\\internal",
pc_ble_drive_root+"\\include\\common\\internal\\transport",
pc_ble_drive_root+"\\include\\common\\config"]

cpp_dir = [sdk_root+"\\components\\serialization\\application\\codecs\\s132\\serializers",
sdk_root+"\\components\\serialization\\application\\codecs\\common",
sdk_root+"\\components\\libraries\\util",
sdk_root+"\\components\\libraries\\util",
sdk_root+"\\components\\serialization\\common",
sdk_root+"\\components\\serialization\\common\\struct_ser\\s132",
sdk_root+"\\components\\softdevice\\s132\\headers"]

file_root = sdk_root+"\\components\\softdevice\\s132\\headers\\"

pc_ble_driver_includes = [ '-I' + inc for inc in include_dir ]
pc_ble_driver_cppincludes = [ '-I' + inc for inc in cpp_dir ]
compArgs = compArgs + pc_ble_driver_includes + pc_ble_driver_cppincludes


parse_files = []
for filename in source_files_to_parse:
    if filename.endswith(".h"):
        parse_files.append(filename)

def filePointers():
    '''
        Return generator that iterates over clang compiled source files
    '''
    idx = clang.cindex.Index.create()
    for filename in parse_files:
        yield idx.parse(file_root+filename, args=compArgs)

def clangIsStruct(func):
    return clang.cindex.CursorKind.TYPEDEF_DECL == func


def createStructNode(structParent):
    insideUnion = False
    structNode = StructType(structParent.spelling)
    structFields = [e for e in structParent.walk_preorder()]

    for fieldIndex in range(len(structFields)):
        child = structFields[fieldIndex]

        if child.kind == clang.cindex.CursorKind.TYPE_REF:
            if not insideUnion:
                dataType = child.spelling
                dataName = structFields[fieldIndex - 1].spelling

                prev = structFields[fieldIndex - 1]
                fieldSize = prev.type.get_array_size() # -1 for other structs,size for primitive type
                if prev.type.kind == clang.cindex.TypeKind.POINTER and fieldSize == -1:
                    fieldSize = 0
                structNode.addField(dataType, dataName, fieldSize)
            else:
                dataType = child.spelling
                dataName = structFields[fieldIndex - 1].spelling
                prev = structFields[fieldIndex - 1]
                fieldSize = prev.type.get_array_size() # -1 for other structs,size for primitive type
                structNode.addUnionField(dataType, dataName, fieldSize)


        elif child.kind == clang.cindex.CursorKind.UNION_DECL:
            insideUnion = True
            prev = structFields[fieldIndex - 1]
            if prev.kind == clang.cindex.CursorKind.FIELD_DECL:
                structNode.unionName = prev.spelling
                return structNode
    return structNode
