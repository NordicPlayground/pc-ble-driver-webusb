print("Generating code for configuration of softdevice..")
import clangCreateBindings.parameterStructs.run
print()

print("Generating code to parse event ble struct..")
import clangCreateBindings.parseStruct.run
print()

print("Generating code to call encode/code api functions")
import clangCreateBindings.sdEncodeDecode.createBindings
print()
