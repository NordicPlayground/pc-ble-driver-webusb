from clangCreateBindings.parameterStructs.clangParse import parseAll, setup

def build(version, s_ver):
    pc_ble_drive_webusb_root, headers = setup(version, s_ver)
    openList = ["ble_gap_adv_params_t", "ble_gap_conn_sec_mode_t", "ble_gap_conn_params_t",\
    "ble_gap_enc_info_t", "ble_gap_irk_t", "ble_gap_sign_info_t", "ble_gap_addr_t", "ble_gap_id_key_t", "ble_gap_privacy_params_t",\
    "ble_gap_sec_params_t", "ble_gap_conn_sec_t", "ble_gap_scan_params_t", "ble_gap_master_id_t",\
    "ble_gap_sec_keyset_t", "ble_gap_lesc_p256_pk_t", "ble_gap_lesc_oob_data_t", "ble_gap_lesc_dhkey_t",\
    "ble_uuid_t", "ble_gattc_handle_range_t", "ble_gattc_write_params_t", "ble_gatts_char_md_t", "ble_gatts_attr_t", "ble_gatts_char_handles_t",\
    "ble_gatts_value_t", "ble_gatts_hvx_params_t", "ble_gatts_rw_authorize_reply_params_t", "ble_gatts_attr_md_t", "ble_uuid128_t", "ble_version_t", "ble_opt_t", "ble_enable_params_t",\
    "ble_user_mem_block_t", "ble_cfg_t", "ble_gap_data_length_params_t", "ble_gap_data_length_limitation_t", "ble_gap_phys_t", "ser_ble_gap_app_keyset_t"]

    closedList = []
    addedList = []

    structs = {}
    parseAll(structs)

    cppSource = '#include "Emscripten.h"\n' +"#include <stdlib.h>\n" + "".join(['#include "{}"\n'.format(header) for header in headers])
    jsSource = "// SD API V{ver}\n\n".format(ver=version)
    cppSource += """#ifdef __cplusplus
    extern \"C\" {
    #endif
    """
    while(openList):
        structType = openList.pop()
        closedList.append(structType)
        try:
            struct = structs[structType]
        except KeyError:
            continue # Struct probably not used in softdevice api version being processed
        addedList.append(structType)
        for child in struct.members:
            if child.dataType in structs and child.dataType not in openList and child.dataType not in closedList:
                openList.append(child.dataType)

        cpp, js = struct.serialize()
        cppSource += cpp
        jsSource += js
    jsSource += "\nmodule.exports = {{ {} }};\n".format(", ".join(addedList));

    cppSource += """#ifdef __cplusplus
    }
    #endif
    """

    with open(pc_ble_drive_webusb_root+"/src/sd_api_v{}/bindings/ble_attr_structs.cpp".format(version), "w") as file:
        file.write(cppSource)
        print("Wrote {}/src/sd_api_v{}/bindings/ble_attr_structs.cpp".format(pc_ble_drive_webusb_root, version))

    with open(pc_ble_drive_webusb_root+"/src/js/bindings/bleSDAttributeStructs.js", "w") as file:
        file.write(jsSource)
        print("Wrote {}/src/js/bindings/bleSDAttributeStructs.js".format(pc_ble_drive_webusb_root))
