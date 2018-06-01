const SLIP_END = 0xC0;
const SLIP_ESC = 0xDB;
const SLIP_ESC_END = 0xDC;
const SLIP_ESC_ESC = 0xDD;

function slip_encode(in_packet, out_packet)
{
    out_packet.push(SLIP_END);

    for (let i = 0; i < in_packet.length; i++)
    {
        if (in_packet[i] === SLIP_END)
        {
            out_packet.push(SLIP_ESC);
            out_packet.push(SLIP_ESC_END);
        }
        else if (in_packet[i] === SLIP_ESC)
        {
            out_packet.push(SLIP_ESC);
            out_packet.push(SLIP_ESC_ESC);
        }
        else
        {
            out_packet.push(in_packet[i]);
        }
    }

    out_packet.push(SLIP_END);
}


function slip_decode(packet, out_packet)
{
    for (let i = 0; i < packet.length; i++)
    {
        if (packet[i] === SLIP_END)
        {
            continue;
        }
        else if (packet[i] === SLIP_ESC) {
            i++;
            if (packet[i] === SLIP_ESC_END)
            {
                out_packet.push(SLIP_END);
            }
            else if (packet[i] === SLIP_ESC_ESC)
            {
                out_packet.push(SLIP_ESC);
            }
            else
            {
                return NRF_ERROR_INVALID_DATA;
            }
        }
        else
        {
            out_packet.push(packet[i]);
        }
    }

    return NRF_SUCCESS;
}
