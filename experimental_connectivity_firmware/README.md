# About the firmware
This firmware can be used with nRF52 dongle PCA10059. Softdevice S132 with softdevice API version 3.
## Modifications
A few modifications are done to the firmware. Interface 1 (CDC communication) and 2 (data transfers) now have mirror interfaces at 3 and 4, but with a few changes. 
1. ```bInterfaceClass = 0xFF``` for both interfaces
2. No interface association descriptor applying to interface 3 and 4.
3. The dongle is now a USB 2.1 device. The OS should request a BOS descriptor. The BOS descriptor tells Windows computers to request another descriptor.
4. Windows will request a platform compatibility descriptor that instructs it to load the WinUSB driver for interface 0 (dfu trigger), 3(CDC communication) and 4(data transfer).

The WebUSB application can now use the nRF dongle without problems, given that interfaces 3 and 4 are used instead of 1 and 2 for communications.