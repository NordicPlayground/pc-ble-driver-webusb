const { NRF_SUCCESS, NRF_ERROR_INVALID_DATA } = require('../sd_rpc_types');

const SLIP_END = 0xC0;
const SLIP_ESC = 0xDB;
const SLIP_ESC_END = 0xDC;
const SLIP_ESC_ESC = 0xDD;

function slipEncode(inPacket, outPacket) {
    outPacket.push(SLIP_END);

    for (let i = 0; i < inPacket.length; i += 1) {
        if (inPacket[i] === SLIP_END) {
            outPacket.push(SLIP_ESC);
            outPacket.push(SLIP_ESC_END);
        } else if (inPacket[i] === SLIP_ESC) {
            outPacket.push(SLIP_ESC);
            outPacket.push(SLIP_ESC_ESC);
        } else {
            outPacket.push(inPacket[i]);
        }
    }

    outPacket.push(SLIP_END);
}


function slipDecode(packet, outPacket) {
    for (let i = 0; i < packet.length; i += 1) {
        if (packet[i] === SLIP_END) {
            continue; // eslint-disable-line no-continue
        } else if (packet[i] === SLIP_ESC) {
            i += 1;
            if (packet[i] === SLIP_ESC_END) {
                outPacket.push(SLIP_END);
            } else if (packet[i] === SLIP_ESC_ESC) {
                outPacket.push(SLIP_ESC);
            } else {
                return NRF_ERROR_INVALID_DATA;
            }
        } else {
            outPacket.push(packet[i]);
        }
    }
    return NRF_SUCCESS;
}

module.exports = {
    slipEncode,
    slipDecode,
};
