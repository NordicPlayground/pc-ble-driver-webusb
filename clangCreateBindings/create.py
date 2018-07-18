from clangCreateBindings.parameterStructs.run import build as buildParameterStructs
from clangCreateBindings.parseStruct.run import build as buildParseStruct
from clangCreateBindings.sdEncodeDecode.createBindings import build as  buildSdEncodeDecode


def build(version):
    print("Generating code for configuration of softdevice..")
    buildParameterStructs(version)
    print()
    print("Generating code to parse event ble struct..")
    buildParseStruct(version)
    print()
    print("Generating code to call encode/code api functions")
    buildSdEncodeDecode(version)
    print()
