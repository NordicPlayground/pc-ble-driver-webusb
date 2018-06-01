const control_pkt_type = Object.freeze({
    CONTROL_PKT_RESET:0,
    CONTROL_PKT_ACK:1,
    CONTROL_PKT_SYNC:2,
    CONTROL_PKT_SYNC_RESPONSE:3,
    CONTROL_PKT_SYNC_CONFIG:4,
    CONTROL_PKT_SYNC_CONFIG_RESPONSE:5
});


const h5_pkt_type_t = Object.freeze({
    ACK_PACKET:0,
    HCI_COMMAND_PACKET:1,
    ACL_DATA_PACKET:2,
    SYNC_DATA_PACKET:3,
    HCI_EVENT_PACKET:4,
    RESET_PACKET:5,
    VENDOR_SPECIFIC_PACKET:14,
    LINK_CONTROL_PACKET:15
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

function calculate_header_checksum(header)
{
    let checksum  = header[0];
    checksum += header[1];
    checksum += header[2];
    checksum &= 0xFF;
    checksum  = (~checksum + 1);

    return checksum & 0xff;
}

function calculate_crc16_checksum(out_packet, len)
{
    let crc = new Uint16Array([0xFFFF]);
    if(len===undefined)
    {
        console.log("len undefined")
    }
    for(let i = 0; i < (len === undefined? out_packet.length : len); i++){
        const data = out_packet[i];
        crc[0] = (crc[0] >> 8) | (crc[0] << 8);
        crc[0] ^= data;
        crc[0] ^= (crc[0] & 0xFF) >> 4;
        crc[0] ^= crc[0] << 12;
        crc[0] ^= (crc[0] & 0xFF) << 5;
    }
    return crc[0];
}

function add_crc16(out_packet)
{
    let crc16 = calculate_crc16_checksum(out_packet);
    out_packet.push(crc16 & 0xFF);
    out_packet.push((crc16 >> 8) & 0xFF);
}

function add_h5_header(out_packet, seq_num, ack_num, crc_present, reliable_packet, packet_type, payload_length){
    out_packet.push(
        (seq_num & seqNumMask)
        | ((ack_num & ackNumMask) << ackNumPos)
        | ((crc_present & crcPresentMask) << crcPresentPos)
        | ((reliable_packet & reliablePacketMask) << reliablePacketPos));

    out_packet.push(
        (packet_type & packetTypeMask)
        | ((payload_length & payloadLengthFirstNibbleMask) << payloadLengthOffset));

    out_packet.push((payload_length & payloadLengthSecondNibbleMask) >> payloadLengthOffset);
    out_packet.push(calculate_header_checksum(out_packet));
}



function h5_encode(in_packet, out_packet, seq_num, ack_num, crc_present, reliable_packet, packet_type){
    add_h5_header(out_packet, seq_num, ack_num, crc_present, reliable_packet, packet_type, in_packet.length);

    for(let i = 0; i < in_packet.length; i++){
        out_packet.push(in_packet[i]);
    }

    // Add CRC
    if (crc_present){
        add_crc16(out_packet);
    }
}

function h5_decode(slipPayload, h5Payload, ref, _data_integrity, _payload_length, _header_checksum){
    // Needs testing!
    if(slipPayload.length < 4){
        console.log('H5 decode error 1');
        return NRF_ERROR_INVALID_DATA;
    }

    ref.seq_num = slipPayload[0] & seqNumMask;
    ref.ack_num = (slipPayload[0] >> ackNumPos) & ackNumMask;
    let crc_present = !!(((slipPayload[0] >> crcPresentPos) & crcPresentMask) !== 0);
    ref.reliable_packet = !!(((slipPayload[0] >> reliablePacketPos) & reliablePacketMask) !== 0);
    ref.packet_type = slipPayload[1] & packetTypeMask;

    let payload_length = ((slipPayload[1] >> payloadLengthOffset) & payloadLengthFirstNibbleMask) + (slipPayload[2] << payloadLengthOffset);
    let header_checksum = slipPayload[3];

    let calculatedPayloadSize = payload_length + H5_HEADER_LENGTH + (crc_present ? 2 : 0);

    if(slipPayload.length != calculatedPayloadSize){
        return NRF_ERROR_INVALID_DATA;
    }

    // must be fixed to take in ref
    if (_payload_length !== null) _payload_length = payload_length;
    if (_data_integrity !== null) _data_integrity = crc_present;
    if (_header_checksum !== null) _header_checksum = header_checksum;

    let calculated_header_checksum = calculate_header_checksum(slipPayload);

    if (header_checksum !== calculated_header_checksum){
        return NRF_ERROR_INVALID_DATA;
    }

    if (crc_present){
        let packet_checksum = slipPayload[payload_length + H5_HEADER_LENGTH] + (slipPayload[payload_length + H5_HEADER_LENGTH + 1] << 8);
        let calculated_packet_checksum = calculate_crc16_checksum(slipPayload, payload_length + H5_HEADER_LENGTH);

        if (packet_checksum !== calculated_packet_checksum){
            return NRF_ERROR_INVALID_DATA;
        }
    }

    if(payload_length > 0){
        h5Payload.push.apply(h5Payload, slipPayload.slice(4 , 4 + payload_length));
    }
    return NRF_SUCCESS;
}
