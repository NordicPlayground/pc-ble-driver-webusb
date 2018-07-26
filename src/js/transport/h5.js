const { NRF_SUCCESS, NRF_ERROR_INVALID_DATA } = require('../sd_rpc_types');

const control_pkt_type = Object.freeze({
    CONTROL_PKT_RESET: 0,
    CONTROL_PKT_ACK: 1,
    CONTROL_PKT_SYNC: 2,
    CONTROL_PKT_SYNC_RESPONSE: 3,
    CONTROL_PKT_SYNC_CONFIG: 4,
    CONTROL_PKT_SYNC_CONFIG_RESPONSE: 5,
});


const h5_pkt_type_t = Object.freeze({
    ACK_PACKET: 0,
    HCI_COMMAND_PACKET: 1,
    ACL_DATA_PACKET: 2,
    SYNC_DATA_PACKET: 3,
    HCI_EVENT_PACKET: 4,
    RESET_PACKET: 5,
    VENDOR_SPECIFIC_PACKET: 14,
    LINK_CONTROL_PACKET: 15,
});

const seqNumMask = 0x07;
const ackNumMask = 0x07;
const ackNumPos = 3;
const crcPresentMask = 0x01;
const crcPresentPos = 6;
const reliablePacketMask = 0x01;
const reliablePacketPos = 7;

const packetTypeMask = 0x0F;
const payloadLengthFirstNibbleMask = 0x000F;
const payloadLengthSecondNibbleMask = 0x0FF0;
const payloadLengthOffset = 4;
const H5_HEADER_LENGTH = 4;

function calculateHeaderChecksum(header) {
    let checksum = header[0];
    checksum += header[1];
    checksum += header[2];
    checksum &= 0xFF;
    checksum = (~checksum + 1);

    return checksum & 0xff;
}

function calculateCrc16Checksum(outPacket, len) {
    const crc = new Uint16Array([0xFFFF]);

    for (let i = 0; i < (len === undefined? outPacket.length : len); i += 1) {
        const data = outPacket[i];
        crc[0] = (crc[0] >> 8) | (crc[0] << 8);
        crc[0] ^= data;
        crc[0] ^= (crc[0] & 0xFF) >> 4;
        crc[0] ^= crc[0] << 12;
        crc[0] ^= (crc[0] & 0xFF) << 5;
    }
    return crc[0];
}

function addCrc16(outPacket) {
    const crc16 = calculateCrc16Checksum(outPacket);
    outPacket.push(crc16 & 0xFF);
    outPacket.push((crc16 >> 8) & 0xFF);
}

function add_h5_header(outPacket, seqNum, ackNum, crcPresent, reliablePacket, packetType, payloadLength) {
    outPacket.push(
        (seqNum & seqNumMask)
        | ((ackNum & ackNumMask) << ackNumPos)
        | ((crcPresent & crcPresentMask) << crcPresentPos)
        | ((reliablePacket & reliablePacketMask) << reliablePacketPos));

    outPacket.push(
        (packetType & packetTypeMask)
        | ((payloadLength & payloadLengthFirstNibbleMask) << payloadLengthOffset));

    outPacket.push((payloadLength & payloadLengthSecondNibbleMask) >> payloadLengthOffset);
    outPacket.push(calculateHeaderChecksum(outPacket));
}

function h5Encode(inPacket, outPacket, seqNum, ackNum, crcPresent, reliablePacket, packetType) {
    add_h5_header(outPacket, seqNum, ackNum, crcPresent, reliablePacket, packetType, inPacket.length);

    for (let i = 0; i < inPacket.length; i += 1) {
        outPacket.push(inPacket[i]);
    }

    // Add CRC
    if (crcPresent) {
        addCrc16(outPacket);
    }
}

function h5Decode(slipPayload, h5Payload, ref, _dataIntegrity, _payloadLength, _headerChecksum) {
    // Needs testing!
    if (slipPayload.length < 4) {
        return NRF_ERROR_INVALID_DATA;
    }

    ref.seq_num = slipPayload[0] & seqNumMask;
    ref.ack_num = (slipPayload[0] >> ackNumPos) & ackNumMask;
    const crcPresent = !!(((slipPayload[0] >> crcPresentPos) & crcPresentMask) !== 0);
    ref.reliable_packet = !!(((slipPayload[0] >> reliablePacketPos) & reliablePacketMask) !== 0);
    ref.packet_type = slipPayload[1] & packetTypeMask;

    const payloadLength = ((slipPayload[1] >> payloadLengthOffset) & payloadLengthFirstNibbleMask) + (slipPayload[2] << payloadLengthOffset);
    const headerChecksum = slipPayload[3];

    const calculatedPayloadSize = payloadLength + H5_HEADER_LENGTH + (crcPresent ? 2 : 0);

    if (slipPayload.length !== calculatedPayloadSize) {
        return NRF_ERROR_INVALID_DATA;
    }

    // must be fixed to take in ref
    if (_payloadLength !== null) _payloadLength = payloadLength;
    if (_dataIntegrity !== null) _dataIntegrity = crcPresent;
    if (_headerChecksum !== null) _headerChecksum = headerChecksum;

    const calculatedHeaderChecksum = calculateHeaderChecksum(slipPayload);

    if (headerChecksum !== calculatedHeaderChecksum) {
        return NRF_ERROR_INVALID_DATA;
    }

    if (crcPresent) {
        const packetChecksum = slipPayload[payloadLength + H5_HEADER_LENGTH] + (slipPayload[payloadLength + H5_HEADER_LENGTH + 1] << 8);
        const calculatedPacketChecksum = calculateCrc16Checksum(slipPayload, payloadLength + H5_HEADER_LENGTH);

        if (packetChecksum !== calculatedPacketChecksum) {
            return NRF_ERROR_INVALID_DATA;
        }
    }

    if (payloadLength > 0) {
        h5Payload.push.apply(h5Payload, slipPayload.slice(4, 4 + payloadLength));
    }
    return NRF_SUCCESS;
}

module.exports = {
    control_pkt_type,
    h5_pkt_type_t,
    add_h5_header,
    h5Encode,
    h5Decode,
};
