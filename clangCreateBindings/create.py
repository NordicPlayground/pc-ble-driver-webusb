from clangCreateBindings.parameterStructs.run import build as buildParameterStructs
from clangCreateBindings.parseStruct.run import build as buildParseStruct
from clangCreateBindings.sdEncodeDecode.createBindings import build as  buildSdEncodeDecode


def build(version):

    if version == 2:
        s_ver = "s130"
        sd_dir_name = "s132"
    elif version == 3:
        s_ver = "s132"
        sd_dir_name = "s132"
    elif version == 5:
        s_ver = "ble"
        sd_dir_name = "s132"
    elif version == 6:
        s_ver = "ble"
        sd_dir_name = "s140"

    """
        During development of new soft device API versions, some structs may not be complete. e.g. it is implemented in source,
        but there is no signature in a header file. Following structs will be ignored from parsing.
        ble_gap_evt_adv_set_terminated_dec is missing header implementation
    """
    encodeDecodeIgnoreStructs = ["ble_gap_evt_adv_set_terminated_dec"]

    print("Generating code for configuration of softdevice..")
    buildParameterStructs(version, s_ver, sd_dir_name)
    print()
    print("Generating code to parse event ble struct..")
    buildParseStruct(version, s_ver, sd_dir_name)
    print()
    print("Generating code to call encode/code api functions")
    buildSdEncodeDecode(version, s_ver, sd_dir_name, encodeDecodeIgnoreStructs)
    print()
    with open('src/js/bindings/version.js', 'w') as file:
        file.write("module.exports = {{ NRF_SD_BLE_API_VERSION: {ver} }};\n".format(ver=version))
