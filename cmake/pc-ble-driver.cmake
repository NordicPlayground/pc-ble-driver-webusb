# include guard
if(PC_BLE_DRIVER_CMAKE_INCLUDED)
    return()
endif(PC_BLE_DRIVER_CMAKE_INCLUDED)
set(PC_BLE_DRIVER_CMAKE_INCLUDED true)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")

math(EXPR COMPILER_ARCH_BITS "8*${CMAKE_SIZEOF_VOID_P}")
# Default to compiler architecture
set(ARCH_BITS ${COMPILER_ARCH_BITS})

SET(ARCH not_set CACHE STRING "Architecture (x86_32 or x86_64)")
string(TOLOWER "${ARCH}" ARCH)

# Add or remove SD API versions here
list(LENGTH SD_API_VER_NUMS SD_API_VER_COUNT)

set(SD_API_VER_PREFIX "SD_API_V")
set(SD_API_VERS )

foreach(SD_API_VER_NUM ${SD_API_VER_NUMS})
    # Set internal variable names based on the list of version numbers
    set(_SD_API_VER "${SD_API_VER_PREFIX}${SD_API_VER_NUM}")
    string(TOLOWER ${_SD_API_VER} _SD_API_VER_L)
    # Append it to the list
    list(APPEND SD_API_VERS ${_SD_API_VER})
    # Set project and variable names
    set(PC_BLE_DRIVER_${_SD_API_VER}_PROJECT_NAME "pc_ble_driver_${_SD_API_VER_L}")
    set(PC_BLE_DRIVER_${_SD_API_VER}_OBJ_LIB "pc_ble_driver_obj_${_SD_API_VER_L}")
    set(PC_BLE_DRIVER_${_SD_API_VER}_STATIC_LIB "pc_ble_driver_static_${_SD_API_VER_L}")
endforeach(SD_API_VER_NUM)

set(SD_API_VER_COMPILER_DEF "NRF_SD_BLE_API_VERSION")

# pc-ble-driver root folder
set(PC_BLE_DRIVER_ROOT_DIR ${CMAKE_CURRENT_LIST_DIR}/pc-ble-driver/..)

# pc-ble-driver hex folder
set(PC_BLE_DRIVER_HEX_DIR ${PC_BLE_DRIVER_ROOT_DIR}/hex)

# pc-ble-driver include path
set(PC_BLE_DRIVER_INCLUDE_DIR ${PC_BLE_DRIVER_ROOT_DIR}/include)

# Set public include folders
foreach(SD_API_VER ${SD_API_VERS})
    string(TOLOWER ${SD_API_VER} SD_API_VER_L)
    set(PC_BLE_DRIVER_${SD_API_VER}_PUBLIC_INCLUDE_DIRS ${PC_BLE_DRIVER_ROOT_DIR}/include
                                                        ${PC_BLE_DRIVER_ROOT_DIR}/include/common
                                                        ${PC_BLE_DRIVER_ROOT_DIR}/include/common/sdk_compat
                                                        ${PC_BLE_DRIVER_ROOT_DIR}/src/${SD_API_VER_L}/sdk/components/softdevice/s132/headers)
endforeach(SD_API_VER)

find_package(Git REQUIRED)

function(git_repo_metadata dir commit branch remotes)

    # Get the latest abbreviated commit hash of the working branch
    execute_process(
      COMMAND ${GIT_EXECUTABLE} log -1 --format=%H
      WORKING_DIRECTORY ${dir}
      OUTPUT_VARIABLE GIT_COMMIT_HASH
      OUTPUT_STRIP_TRAILING_WHITESPACE
    )

    set(${commit} ${GIT_COMMIT_HASH} PARENT_SCOPE)

    # Get the current working branch
    execute_process(
      COMMAND ${GIT_EXECUTABLE} rev-parse --abbrev-ref HEAD
      WORKING_DIRECTORY ${dir}
      OUTPUT_VARIABLE GIT_BRANCH
      OUTPUT_STRIP_TRAILING_WHITESPACE
    )

    set(${branch} ${GIT_BRANCH} PARENT_SCOPE)

    # Get the Git Remote
    execute_process(
      COMMAND ${GIT_EXECUTABLE} remote -v
      WORKING_DIRECTORY ${dir}
      OUTPUT_VARIABLE GIT_REMOTES
      OUTPUT_STRIP_TRAILING_WHITESPACE
    )

    set(${remotes} ${GIT_REMOTES} PARENT_SCOPE)

endfunction()

function(build_metadata dir dst)

    cmake_host_system_information(RESULT BUILD_MD_HOSTNAME QUERY HOSTNAME)
    string(TIMESTAMP BUILD_TIMESTAMP "%Y-%m-%d %H:%M:%S (YY-MM-DD HH:MM:SS, UTC)" UTC)

    set(str "\n")
    string(CONCAT str ${str} "* System: " ${CMAKE_SYSTEM} "\n")
    string(CONCAT str ${str} "* Hostname: " ${BUILD_MD_HOSTNAME} "\n")
    string(CONCAT str ${str} "* Timestamp: " ${BUILD_TIMESTAMP} "\n")
    string(CONCAT str ${str} "* Generator: " ${CMAKE_GENERATOR} "\n")
    string(CONCAT str ${str} "* Build type: " ${CMAKE_BUILD_TYPE} "\n")
    string(CONCAT str ${str} "* C Compiler: " "${CMAKE_C_COMPILER_ID} (${ARCH_BITS}-bit)" "\n")
    string(CONCAT str ${str} "* C++ Compiler: " "${CMAKE_CXX_COMPILER_ID} (${ARCH_BITS}-bit)" "\n")
    string(CONCAT str ${str} "* CMake version: " ${CMAKE_VERSION} "\n")
    string(CONCAT str ${str} "* SD API Versions:")
    foreach(SD_API_VER ${SD_API_VERS})
        string(CONCAT str ${str} " <${SD_API_VER}>")
    endforeach()
    string(CONCAT str ${str} "\n")

    set(${dst} ${str} PARENT_SCOPE)

endfunction()
