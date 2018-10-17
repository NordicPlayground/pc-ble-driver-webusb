cmake_minimum_required(VERSION 3.3)

include (cmake/pc-ble-driver.cmake)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Wno-long-long -pedantic -O2")


# SDK source files, different per API version
foreach(SD_API_VER ${SD_API_VERS})
    string(TOLOWER ${SD_API_VER} SD_API_VER_L)
    file(GLOB_RECURSE LIB_SDK_${SD_API_VER}_C_SRC_FILES "pc-ble-driver/src/${SD_API_VER_L}/sdk/components/*.c" "src/${SD_API_VER_L}/bindings/*.c" "src/mock/*.c")
    file(GLOB_RECURSE LIB_SDK_${SD_API_VER}_CPP_SRC_FILES "pc-ble-driver/src/${SD_API_VER_L}/sdk/components/*.cpp" "src/${SD_API_VER_L}/bindings/*.cpp" "src/mock/*.cpp")
endforeach(SD_API_VER)

# Set C, CPP and platform source file groups and properties
foreach(SD_API_VER ${SD_API_VERS})
    set(LIB_${SD_API_VER}_C_SRC_FILES
                        ${LIB_SDK_${SD_API_VER}_C_SRC_FILES}
    )

    set(LIB_${SD_API_VER}_CPP_SRC_FILES
                          ${LIB_SDK_${SD_API_VER}_CPP_SRC_FILES}
    )


endforeach(SD_API_VER)

set(LIB_PLATFORM_SRC_FILES ${LIB_PLATFORM_C_SRC_FILES} ${LIB_PLATFORM_CPP_SRC_FILES})

# Add common compiler definitions
add_definitions(
    -DSD_RPC_EXPORTS
    -DHCI_LINK_CONTROL # Adds support for Link Control packets according to the HCI standard
)

# Add libraries
foreach(SD_API_VER ${SD_API_VERS})
    # Object library, from which both shared and static will be built
    add_library(${PC_BLE_DRIVER_${SD_API_VER}_OBJ_LIB} OBJECT ${LIB_${SD_API_VER}_C_SRC_FILES} ${LIB_${SD_API_VER}_CPP_SRC_FILES} ${LIB_PLATFORM_SRC_FILES})


    # actual shared and static libraries built from the same object files
    add_library(${PC_BLE_DRIVER_${SD_API_VER}_STATIC_LIB} STATIC $<TARGET_OBJECTS:${PC_BLE_DRIVER_${SD_API_VER}_OBJ_LIB}>)

    #add_executable(out.js ${PC_BLE_DRIVER_${SD_API_VER}_STATIC_LIB})
endforeach(SD_API_VER)



# Set common include directories
include_directories(
        pc-ble-driver/include/common/sdk_compat
        pc-ble-driver/include/common
)

# Set per-SD API version include directories and compiler definitions
foreach(SD_API_VER ${SD_API_VERS})
    string(TOLOWER ${SD_API_VER} SD_API_VER_L)
    target_include_directories (${PC_BLE_DRIVER_${SD_API_VER}_OBJ_LIB} PRIVATE
        pc-ble-driver/src/${SD_API_VER_L}/sdk/components/libraries/util
        pc-ble-driver/src/${SD_API_VER_L}/sdk/components/serialization/application/codecs/common
        pc-ble-driver/src/${SD_API_VER_L}/sdk/components/serialization/application/codecs/s130/serializers
        pc-ble-driver/src/${SD_API_VER_L}/sdk/components/serialization/application/codecs/s132/serializers
        pc-ble-driver/src/${SD_API_VER_L}/sdk/components/serialization/application/codecs/ble/serializers
        pc-ble-driver/src/${SD_API_VER_L}/sdk/components/serialization/common
        pc-ble-driver/src/${SD_API_VER_L}/sdk/components/serialization/common/struct_ser/s130
        pc-ble-driver/src/${SD_API_VER_L}/sdk/components/serialization/common/struct_ser/s132
        pc-ble-driver/src/${SD_API_VER_L}/sdk/components/serialization/common/struct_ser/s140
        pc-ble-driver/src/${SD_API_VER_L}/sdk/components/serialization/common/struct_ser/ble
        pc-ble-driver/src/${SD_API_VER_L}/sdk/components/softdevice/s132/headers
        pc-ble-driver/src/${SD_API_VER_L}/sdk/components/softdevice/s140/headers
    )
    # Provide the NRF_SD_BLE_API_VERSION macro to each variant
    string(REGEX MATCH "[0-9]+$" _SD_API_VER_NUM "${SD_API_VER}")
    set(SD_API_VER_COMPILER_DEF_NUM "-D${SD_API_VER_COMPILER_DEF}=${_SD_API_VER_NUM}")

    target_compile_definitions(${PC_BLE_DRIVER_${SD_API_VER}_OBJ_LIB} PRIVATE "${SD_API_VER_COMPILER_DEF_NUM}")




endforeach(SD_API_VER)
