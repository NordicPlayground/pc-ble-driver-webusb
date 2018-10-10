# pc-ble-driver-webusb

pc-ble-driver-webusb is designed to run in a web browser and communicate with devices using [WebUSB](https://wicg.github.io/webusb/). It interfaces with codecs from the [pc-ble-driver](https://github.com/NordicSemiconductor/pc-ble-driver) library by compiling them using the LLVM to Javascript compiler [Emscripten](https://github.com/kripken/emscripten/wiki).


# Developing applications using pc-ble-driver-webusb

Creating applications using this module is more similar to [pc-ble-driver](https://github.com/NordicSemiconductor/pc-ble-driver) than [pc-ble-driver-js](https://github.com/NordicSemiconductor/pc-ble-driver-js). It follows the same principle of calling softdevice functions that encode an operation, sends it to the USB device and decodes the response from the device. Your application must currently load the Emscripten Module object globally.

## Softdevice functions: sd_ble_**
Located in [src/js/ble_impl](https://github.com/mathiasap/pc-ble-driver-webusb/tree/master/src/js/ble_impl), and works the same way as the softdevice functions in [pc-ble-driver](https://github.com/NordicSemiconductor/pc-ble-driver/tree/master/src/common).

Example: ```let apiRes = await sd_ble_gap_scan_start(this.adapter, scanParam);```, where adapter is the adapter class that is connected to an nrf USB device and scanParam is a pointer to a struct in C++/WASM

## Allocating and populating structs for WebAssembly
Structs used by the encoder/decoder functions in C/WebAssembly have mirror interfaces in Javascript that can easily be manipulated. They are found in 
[src/js/bindings/bleSDAttributeStructs.js](https://github.com/mathiasap/pc-ble-driver-webusb/blob/master/src/js/bindings/bleSDAttributeStructs.js). Due to how the memory model of Emscripten works, the lifetime of these structs must be managed manually.

A new scanParam struct can be allocated like this: 
```const scanParam = new ble_gap_scan_params_t();```

Fields can be set using the SET function the available fields 
```
scanParam.active.SET(1);
scanParam.interval.SET(0x00A0);
scanParam.window.SET(0x0050);
scanParam.timeout.SET(0);
```

To get the size of the struct: ```scanParam.sizeof()```.

To free the memory used by the struct: ```scanParam.delete()``` (Does not free memory pointed to by struct recursively!).

To get the address of this struct: ```scanParam._getInternal()```.

Other functions are available to manipulate the struct attributes.
```
structType.attribute.GET() -> returns the value of this attribute
structType.attribute.SET(val) -> sets a value to this attribute (not available for const attrbutes)
structType.attribute.GETADDR() -> returns the memory address of the attribute (not available for bitfields)
structType.attribute.LENGTH() -> returns the length of the attribute array (available if attribute is an array)
```

A pointer can be cast to a struct without allocating new memory. 

Example: ble_cfg_t contains an attribute that is a ble_gap_cfg_t struct. The ble_cfg_t struct can than first be allocated, and the pointer to ble_gap_cfg_t can then be cast to a new struct.
```
let bleCfg = new ble_cfg_t();
const gapCfg = new ble_gap_cfg_t(bleCfg.gap_cfg.GETADDR());
```

I this case, you should not call ```gapCfg.delete()```, because the memory is allocated by ```bleCfg```, and not ```gapCfg```.


## Extracting information in the event struct sent from a USB device
The event struct you receive from the USB device is a packed C type struct. There is unfortunately not an open library in Javascript capable of unpacking this struct directly, as it contains unions and bitfields.
The solution is to access the fields contained by this struct using Emscripten functions.

[The event struct in pc-ble-driver](https://github.com/NordicSemiconductor/pc-ble-driver/blob/ed4c97e0b245c8c3938763b890154d518bca8553/src/sd_api_v5/sdk/components/softdevice/s132/headers/ble.h#L213) has a direct mapping to Javascript. 

The functions to extract data from this struct can be found [here](https://github.com/mathiasap/pc-ble-driver-webusb/blob/4c0a0d414a878f6bb1411f03e1209ca09715f436/src/js/bindings/bleEvtStruct.js#L2)

Example: We are scanning for devices and receive an advertisement report event and want to get a pointer to the bluetooth address of the advertising device, as well as the address type. In pc-ble-driver, we could do this like this.

```
void parseEvent(ble_evt_t *evtStruct)
{
    if(evtStruct.header.evt_id == BLE_GAP_EVT_ADV_REPORT)
    {
        uint8_t addrType = evtStruct->evt.gap_evt.params.adv_report.peer_addr.addr_type;
        uint8_t* addr = evtStruct->evt.gap_evt.params.adv_report.peer_addr.addr;
    }
}
```

In pc-ble-driver-webusb we have to do this:
```
  function parseEvent(data) {
      const ble_evt_id = ble_event_struct['ble_evt_t.header.evt_id'](data);
      switch(ble_evt_id) {
          case BLE_GAP_EVT_ADV_REPORT: {
              const peer_addr_ptr = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.peer_addr.addr'](data, 0);
              const peer_addr_type = ble_event_struct['ble_evt_t.evt.gap_evt.params.adv_report.peer_addr.addr_type'](data);

              // To copy the address from C memory to Javascript memory
              const peer_addr_data = new Uint8Array(Module.HEAPU8.buffer.slice(peer_addr_ptr, peer_addr_ptr + 6)).reverse();
          }
      }
  }
```

# Generate bindings and compile codecs

1. Download and install [Emscripten](https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html)
2. Install [Clang](http://releases.llvm.org/download.html). This is needed to generate bindings for Emscripten.
3. ```pip install clang``` for clang.cindex API
4. Use a terminal with Emscripten environment set up. (e.g emcmdprompt.bat on Windows, or "source emsdk_env.sh" on Mac/Linux.
5. python build.py -sd-ver 2,5 -libclang {/path/to/clang/bin}

This will generate bindings for SD versions 2 and 5 and compile them together with BLE codecs. Checkout the correct branch for the pc-ble-driver that matches the specified SD versions if needed.
Compiled binaries in "build/v{n}/". Both pc_ble_driver_sd_api_v{n}.js and the pc_ble_driver_sd_api_v{n}.wasm is required. The .js file must be included in the .html file of your project, and the wasm file will be fetched automatically.
