const emscriptenAllocPTP = pointer => {
    const tmpPP = Module._malloc(4);
    Module.HEAPU8.set(new Uint8Array([pointer & 0xFF, (pointer >> 8) & 0xFF, (pointer >> 16) & 0xFF, (pointer >> 24) & 0xFF]), tmpPP);
    return tmpPP;
}
const emscriptenFreePTP = pointerToPointer => {
    Module._free(pointerToPointer);
}
