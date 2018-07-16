import clang.cindex
from clang.cindex import CursorKind
import ccsyspath
import os
from structSerialization import StructData, StructChild

# Install directory of LLVM/clang (32 bit)
clang.cindex.Config.set_library_path('C:/Program Files (x86)/LLVM/bin')

cwd = os.getcwd()
os.chdir('..')
pc_ble_drive_webusb_root = os.getcwd()
pc_ble_drive_root = pc_ble_drive_webusb_root + "\\pc-ble-driver"

sdk_root = pc_ble_drive_root+"\\src\\sd_api_v3\\sdk"
source_files_to_parse = os.listdir("{}\\components\\softdevice\\s132\\headers".format(sdk_root))
os.chdir(cwd)
headers = []


compArgs    = '-x c++ --std=c++11'.split()
syspath = ccsyspath.system_include_paths('clang++')
incargs = [ b'-I' + inc for inc in syspath ]


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

pc_ble_driver_includes = [ b'-I' + inc for inc in include_dir ]
pc_ble_driver_cppincludes = [ b'-I' + inc for inc in cpp_dir ]
compArgs    = compArgs + incargs +pc_ble_driver_includes +pc_ble_driver_cppincludes


parse_files = []
for filename in source_files_to_parse:
    if filename.endswith(".h"):
        parse_files.append(filename)

def filePointers():
    '''
        Return generator that iterates over clang compiled source files
    '''
    global headers
    idx = clang.cindex.Index.create()
    for filename in parse_files:
        headers.append(filename)
        yield idx.parse(file_root+filename, args=compArgs)

parsedStructs = set()

def createStructNode(structParent):
    global parsedStructs
    if structParent.spelling in parsedStructs:
        return
    parsedStructs.add(structParent.spelling)
    structNode = StructData(structParent.spelling)
    structFields = [e for e in structParent.walk_preorder()]
    insideUnion = False
    for fieldIndex in range(len(structFields)):
        child = structFields[fieldIndex]

        if child.kind == clang.cindex.CursorKind.TYPE_REF:
            prev = structFields[fieldIndex - 1]

            dataType = child.spelling
            dataName = prev.spelling

            isArray = prev.type.get_array_size() != -1
            isPointer = prev.type.kind == clang.cindex.TypeKind.POINTER
            isBitfield = prev.is_bitfield()

            childStruct = StructChild(structParent.spelling, dataType, dataName, isPointer, isArray, isBitfield)
            #print(dir(prev))
            #print(prev.type.spelling)
            if "const " in prev.type.spelling:
                childStruct.isConst = True
            else:
                childStruct.isConst = False
            childStruct.insideUnion = insideUnion
            structNode.addChild(childStruct)

        elif child.kind == clang.cindex.CursorKind.UNION_DECL:
            insideUnion = True
            prev = structFields[fieldIndex - 1]
            if prev.kind == clang.cindex.CursorKind.FIELD_DECL:
                structNode.unionName = prev.spelling+"."
                return structNode
            #return
    return structNode

def clangIsStruct(func):
    return clang.cindex.CursorKind.TYPEDEF_DECL == func



def parseAll(parsedStructs):
    for tu in filePointers():
        for c in tu.cursor.walk_preorder():
            if(clangIsStruct(c.kind) and c.spelling.startswith("ble") and c.spelling.endswith("_t")):
                '''
                    Parsed node is a C function with a name that starts with "ble"
                '''
                structNode = createStructNode(c)
                if structNode is not None:
                    parsedStructs[structNode.dataType] = structNode
