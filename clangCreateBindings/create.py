from clangCreateBindings.parameterStructs.run import build as buildParameterStructs
from clangCreateBindings.parseStruct.run import build as buildParseStruct
from clangCreateBindings.sdEncodeDecode.createBindings import build as  buildSdEncodeDecode


def build(version):

    if version == 2:
        s_ver = "s130"
    elif version == 3:
        s_ver = "s132"
    else:
        s_ver = "ble"

    print("Generating code for configuration of softdevice..")
    buildParameterStructs(version, s_ver)
    print()
    print("Generating code to parse event ble struct..")
    buildParseStruct(version, s_ver)
    print()
    print("Generating code to call encode/code api functions")
    buildSdEncodeDecode(version, s_ver)
    print()
