//const Transport = require('./transport');
//const ExitCriterias = require('./h5_transport_exit_criterias')


const h5_state = Object.freeze({
    STATE_START:0,
    STATE_RESET:1,
    STATE_UNINITIALIZED:2,
    STATE_INITIALIZED:3,
    STATE_ACTIVE:4,
    STATE_FAILED:5,
    STATE_UNKNOWN:6
});

const NON_ACTIVE_STATE_TIMEOUT = 250;
const PACKET_RETRANSMISSIONS = 6;
//const OPEN_WAIT_TIMEOUT = 2000;   // Duration to wait for state ACTIVE after open is called
const OPEN_WAIT_TIMEOUT = 5000;   // Duration to wait for state ACTIVE after open is called
const RESET_WAIT_DURATION = 300;

class H5Transport extends Transport{
    constructor(self, nextTransportLayer, retransmission_interval){
        super();
        this.self = self;
        this.seqNum = 0;
        this.ackNum = 0;
        this.c0Found = false;
        this.unprocessedData = [];
        this.incomingPacketCount = 0;
        this.outGoingPacketCount = 0;
        this.errorPacketCount = 0;
        this.currentState = h5_state.STATE_START;
        this.prevState = null;
        this.stateUpdateCallback = null;
        this.lastPacket = [];
        this.stateChangedEvent = new Event('stateChanged');
        this.packetAckEvent = new Event('packetAckWait');

        this.boundStateMachineWorker = this.stateMachineWorker.bind(this)

        this.nextTransportLayer = nextTransportLayer;
        this.retransmission_interval = retransmission_interval;

        this.setupStateMachine();

        /*this.startStateMachine();
        dispatchEvent(this.stateChangedEvent);
        dispatchEvent(this.stateChangedEvent);
        this.stopStateMachine();
        dispatchEvent(this.stateChangedEvent);
        this.sendControlPacket(control_pkt_type.CONTROL_PKT_SYNC);*/
    }

    async open(status_callback, data_callback, log_callback){
        //return new Promise(resolve => {
        if (this.currentState !== h5_state.STATE_START)
        {
            this.log("Not able to open, current state is not valid");
            return NRF_ERROR_INTERNAL;
        }

        this.startStateMachine();

        let _exitCriterias = this.exitCriterias[h5_state.STATE_START];
        let errorCode = super.open(status_callback, data_callback, log_callback);
        this.lastPacket.length = 0;

        if (errorCode != NRF_SUCCESS){
            _exitCriterias.ioResourceError = true;
            this.exitCriteriasChanged();
            //Promise.resolve(errorCode);
            return errorCode;
        }

        errorCode = await this.nextTransportLayer.open(this.statusHandler.bind(this), this.dataHandler.bind(this), this.logCallback);
        this.log("Opened USB device!")
        if (errorCode != NRF_SUCCESS){
            _exitCriterias.ioResourceError = true;
            this.exitCriteriasChanged();
            return NRF_ERROR_INTERNAL;
        }

        _exitCriterias.isOpened = true;
        this.exitCriteriasChanged();
        errorCode = await this.waitForState(h5_state.STATE_ACTIVE, OPEN_WAIT_TIMEOUT);
        if(errorCode){
            return NRF_SUCCESS;
        }
        else {
            return NRF_ERROR_TIMEOUT;
        }
    }

    async close() {
        if(this.exitCriterias[this.currentState] !== undefined) {
            this.exitCriterias[this.currentState].close = true;
            this.exitCriteriasChanged();
        }

        this.stopStateMachine();

        return await this.nextTransportLayer.close();
    }
    transmitLastPacket(encodedPacket){
        this.lastPacket = encodedPacket;
        let remainingRetransmissions = PACKET_RETRANSMISSIONS;

        return new Promise(resolve => {
            let timeout;
            let seqNumBefore;

            let sendNextPacket = function() {
                this.logPacket(true, encodedPacket);
                this.nextTransportLayer.send(this.lastPacket);
                seqNumBefore = this.seqNum;
            }.bind(this);

            let timeoutFunc = function() {
                if(remainingRetransmissions-- <= 0){
                    removeEventListener('packetAckWait', packetAckFunc);
                    clearInterval(timeout);
                    resolve(NRF_ERROR_TIMEOUT);
                }
                this.log("Retransmitting packet")
                sendNextPacket();
            }.bind(this);

            let packetAckFunc = function() {
                if (seqNumBefore !== this.seqNum){
                    removeEventListener('packetAckWait', packetAckFunc);
                    clearInterval(timeout);
                    resolve(NRF_SUCCESS);
                }
            }.bind(this);

            timeout = setInterval(timeoutFunc, this.retransmission_interval);
            addEventListener('packetAckWait', packetAckFunc);

            remainingRetransmissions--;
            sendNextPacket();

        });
    }
    async send(data){
        if(this.currentState !== h5_state.STATE_ACTIVE){
            return NRF_ERROR_INVALID_STATE;
        }

        let h5Packet = [];
        h5_encode(data, h5Packet, this.seqNum, this.ackNum, true, true, h5_pkt_type_t.VENDOR_SPECIFIC_PACKET)

        let encodedPacket = [];
        slip_encode(new Uint8Array(h5Packet), encodedPacket);

        let transmitRes = await this.transmitLastPacket(new Uint8Array(encodedPacket));
        this.lastPacket = [];
        return transmitRes;

    }

    dataHandler(data, length){
        let packet = [];
        if(this.unprocessedData.length != 0){
            packet.push.apply(packet, this.unprocessedData);
        }

        for(let i = 0; i < length; i++){
            packet.push(data[i]);

            if(data[i] == 0xC0){
                if(this.c0Found){
                    // End of packet c0Found

                    // If we have two 0xC0 after another we assume it is the beginning of a new packet, and not the end
                    if(packet.length == 2){
                        packet.length = 0;
                        packet.push(0xC0);
                        continue;
                    }

                    this.processPacket(new Uint8Array(packet));
                    packet.length = 0;
                    this.unprocessedData.length = 0;
                    this.c0Found = false;
                } else {
                    this.c0Found = true;
                    packet.length = 0;
                    packet.push(0xC0);
                }
            }
        }

        if(packet.length > 0){
            this.unprocessedData.length = 0;
            this.unprocessedData.push.apply(this.unprocessedData, packet);
        }

    }
    exitCriteriasChanged(){
        if (this.currentState === h5_state.STATE_ACTIVE || this.currentState === h5_state.STATE_START){
            this.stateUpdateCallback(); // Calling state update function directly.
        }
    }

    statusHandler(code, error){

        if(code === sd_rpc_app_status_t.IO_RESOURCES_UNAVAILABLE) {
            this.exitCriterias[this.currentState].ioResourceError = true;
            this.exitCriteriasChanged();
        }
        this.statusCallback(code, error);
    }
    processPacket(packet){

        let ref = {seq_num : null, ack_num : null, reliable_packet : null, packet_type : null};

        let slipPayload = [];
        let err_code = slip_decode(packet, slipPayload);
        if(err_code != NRF_SUCCESS){
            errorPacketCount++;
            return;
        }
        slipPayload = new Uint8Array(slipPayload);

        this.logPacket(false, slipPayload);

        let h5Payload = [];

        err_code = h5_decode(slipPayload, h5Payload, ref, null, null, null);

        if(err_code !== NRF_SUCCESS){
            this.errorPacketCount++;
            return;
        }
        h5Payload = new Uint8Array(h5Payload);

        if(this.currentState === h5_state.STATE_RESET){
            //dispatchEvent
        }

        if(ref.packet_type === h5_pkt_type_t.LINK_CONTROL_PACKET){
            let isSyncPacket = h5Payload[0] === syncFirstByte && h5Payload[1] === syncSecondByte;
            let isSyncResponsePacket = h5Payload[0] === syncRspFirstByte && h5Payload[1] === syncRspSecondByte;
            let isSyncConfigPacket = h5Payload[0] === syncConfigFirstByte && h5Payload[1] === syncConfigSecondByte;
            let isSyncConfigResponsePacket = h5Payload[0] === syncConfigRspFirstByte && h5Payload[1] === syncConfigRspSecondByte;

            if(this.currentState === h5_state.STATE_UNINITIALIZED){
                if (isSyncResponsePacket) {
                    this.exitCriterias[this.currentState].syncRspReceived = true;
                    this.exitCriteriasChanged();
                }

                if (isSyncPacket) {
                    this.sendControlPacket(control_pkt_type.CONTROL_PKT_SYNC_RESPONSE);
                }
            }
            else if(this.currentState === h5_state.STATE_INITIALIZED){
                const exit = this.exitCriterias[this.currentState];

                if (isSyncConfigResponsePacket) {
                    exit.syncConfigRspReceived = true;
                    this.exitCriteriasChanged();
                }

                if (isSyncConfigPacket)
                {
                    this.sendControlPacket(control_pkt_type.CONTROL_PKT_SYNC_CONFIG_RESPONSE);
                    //dispatchEvent
                }

                if (isSyncPacket)
                {
                    this.sendControlPacket(control_pkt_type.CONTROL_PKT_SYNC_RESPONSE);
                    //dispatchEvent
                }

            }
            else if(this.currentState === h5_state.STATE_ACTIVE){
                const exit = this.exitCriterias[this.currentState];
                if (isSyncPacket)
                {
                    exit.syncReceived = true;
                    this.exitCriteriasChanged();
                }

                if (isSyncConfigPacket)
                {
                    this.sendControlPacket(control_pkt_type.CONTROL_PKT_SYNC_CONFIG_RESPONSE);
                }

            }
        }
        else if(ref.packet_type === h5_pkt_type_t.VENDOR_SPECIFIC_PACKET){
            if (this.currentState == h5_state.STATE_ACTIVE)
            {
                if (ref.reliable_packet)
                {
                    if (ref.seq_num == this.ackNum)
                    {
                        this.incrementAckNum();
                        this.sendControlPacket(control_pkt_type.CONTROL_PKT_ACK);
                        this.dataCallback(h5Payload, h5Payload.length);
                    }
                    else
                    {
                        this.sendControlPacket(control_pkt_type.CONTROL_PKT_ACK);
                    }
                }
            }
        }
        else if(ref.packet_type === h5_pkt_type_t.ACK_PACKET){
            this.log("Got ack packet");
            if (ref.ack_num === ((this.seqNum + 1) & 0x07))
            {
                // Received a packet with valid ack_num, inform threads that wait the command is received on the other end
                this.incrementSeqNum();
                dispatchEvent(this.packetAckEvent);
            }
            else if (ref.ack_num === this.seqNum)
            {
                // Discard packet, we assume that we have received a reply from a previous packet
            }
            else
            {
                this.exitCriterias[this.currentState].irrecoverableSyncError = true;
                this.exitCriteriasChanged();
            }
        }

    }
    transitionToState(newState){
        if(this.currentState !== h5_state.STATE_ACTIVE && this.currentState !== h5_state.STATE_START){
            // Current state periodically checks for changes/ resends sync commands if needed,
            // removing this check for old state.
            clearInterval(this.stateUpdateCallback);
        }
        this.currentState = newState;
        dispatchEvent(this.stateChangedEvent);
    }

    waitForState(state, timeoutMs){
        return new Promise(resolve => {
            let timeout;
            let timeoutFunc = function() {
                removeEventListener('stateChanged', stateChangedFunc);
                if (this.currentState !== state) {
                    resolve(false);
                }
            }.bind(this);

            let stateChangedFunc = function() {
                if (this.currentState === state){
                    removeEventListener('stateChanged', stateChangedFunc);
                    resolve(true);
                }
            }.bind(this);

            timeout = setTimeout(timeoutFunc, timeoutMs);
            addEventListener('stateChanged', stateChangedFunc);
        });
    }

    sendControlPacket(type){
        let h5_packet;

        switch (type) {
            case control_pkt_type.CONTROL_PKT_RESET:
                h5_packet = h5_pkt_type_t.RESET_PACKET;
                break;
            case control_pkt_type.CONTROL_PKT_SYNC:
            case control_pkt_type.CONTROL_PKT_SYNC_RESPONSE:
            case control_pkt_type.CONTROL_PKT_SYNC_CONFIG:
            case control_pkt_type.CONTROL_PKT_SYNC_CONFIG_RESPONSE:
                h5_packet = h5_pkt_type_t.LINK_CONTROL_PACKET;
                break;
            case control_pkt_type.CONTROL_PKT_ACK:
                h5_packet = h5_pkt_type_t.ACK_PACKET;
                break;
            default:
                h5_packet = h5_pkt_type_t.LINK_CONTROL_PACKET;
        }
        let payload = pkt_pattern[type];
        let h5Packet = [];
        h5_encode(payload, h5Packet, 0, type === control_pkt_type.CONTROL_PKT_ACK ? this.ackNum : 0, false, false, h5_packet);


        let slipPacket = [];
        slip_encode(new Uint8Array(h5Packet), slipPacket);

        this.logPacket(true, h5Packet);
        this.nextTransportLayer.send(new Uint8Array(slipPacket));
    }

    incrementSeqNum(){
        this.seqNum++;
        this.seqNum = this.seqNum & 0x07;
    }
    incrementAckNum(){
        this.ackNum++;
        this.ackNum = this.ackNum & 0x07;
    }

    log(message){
        if(this.logCallback){
            this.logCallback(sd_rpc_log_severity_t.SD_RPC_LOG_DEBUG, message);
        }
        else{
            console.log("Log: " + message);
        }
    }

    logPacket(outgoing, packet){
        if (outgoing)
        {
            this.outgoingPacketCount++;
        }
        else
        {
            this.incomingPacketCount++;
        }

        let logLine = this.h5PktToString(outgoing, packet);

        if (this.logCallback !== undefined)
        {
            this.logCallback(sd_rpc_log_severity_t.SD_RPC_LOG_DEBUG, logLine);
        }
        else
        {
            console.log(logLine);
        }
    }

    h5PktToString(out, h5Packet) {
        return "";
    }

    setupStateMachine(){
        this.stateActions = {};
        this.exitCriterias = {};

        // State Start
        this.stateActions[h5_state.STATE_START] = function(){
            this.log("Entered start state");
            const exit = this.exitCriterias[h5_state.STATE_START];
            exit.reset();

            this.stateUpdateCallback = function(){
                if(!exit.isFullfilled()){
                    return;
                }

                if (exit.ioResourceError){
                    this.transitionToState(h5_state.STATE_FAILED);
                    return;
                }

                else if (exit.isOpened){
                    this.transitionToState(h5_state.STATE_RESET)
                    return;
                }

                else{
                    this.transitionToState(h5_state.STATE_FAILED);
                    return;
                }
            }.bind(this);
        }.bind(this);

        // State reset
        this.stateActions[h5_state.STATE_RESET] = function(){
            this.log("Entered reset state");
            const exit = this.exitCriterias[h5_state.STATE_RESET];
            exit.reset();

            this.stateUpdateCallback = setInterval(function(){
                if(!exit.isFullfilled()){
                    this.sendControlPacket(control_pkt_type.CONTROL_PKT_RESET);
                    this.statusHandler(sd_rpc_app_status_t.RESET_PERFORMED, "Target Reset performed");
                    exit.resetSent = true;
                    return;
                }

                if (!exit.isFullfilled()){
                    this.transitionToState(h5_state.STATE_FAILED);
                    return;
                }
                else{
                    this.transitionToState(h5_state.STATE_UNINITIALIZED);
                    return;
                }
            }.bind(this), RESET_WAIT_DURATION);
        }.bind(this);

        // State uninitialized
        this.stateActions[h5_state.STATE_UNINITIALIZED] = function(){
            this.log("Entered uninitialized state");
            const exit = this.exitCriterias[h5_state.STATE_UNINITIALIZED];
            exit.reset();
            let syncRetransmission = PACKET_RETRANSMISSIONS;

            this.stateUpdateCallback = setInterval(function(){
                if(!exit.isFullfilled() && syncRetransmission > 0){
                    this.sendControlPacket(control_pkt_type.CONTROL_PKT_SYNC);
                    exit.syncSent = true;
                    syncRetransmission -= 1;
                    return;
                }

                if (exit.isFullfilled()){
                    this.transitionToState(h5_state.STATE_INITIALIZED);
                    return;
                }
                else{
                    this.transitionToState(h5_state.STATE_FAILED);
                    return;
                }
            }.bind(this), NON_ACTIVE_STATE_TIMEOUT);
        }.bind(this);

        // State initialized
        this.stateActions[h5_state.STATE_INITIALIZED] = function(){
            this.log("Entered initialized state");
            const exit = this.exitCriterias[h5_state.STATE_INITIALIZED];
            exit.reset();
            let syncRetransmission = PACKET_RETRANSMISSIONS;

            this.stateUpdateCallback = setInterval(function(){
                if(!exit.isFullfilled() && syncRetransmission > 0){
                    this.sendControlPacket(control_pkt_type.CONTROL_PKT_SYNC_CONFIG);
                    exit.syncConfigSent = true;
                    syncRetransmission -= 1;
                    return;
                }

                if (exit.syncConfigSent && exit.syncConfigRspReceived){
                    this.transitionToState(h5_state.STATE_ACTIVE);
                    return;
                }
                else{
                    this.transitionToState(h5_state.STATE_FAILED);
                    return;
                }
            }.bind(this), NON_ACTIVE_STATE_TIMEOUT);
        }.bind(this);

        // State active
        this.stateActions[h5_state.STATE_ACTIVE] = function(){
            this.log("Entered active state");
            this.seqNum = 0;
            this.ackNum = 0;
            const exit = this.exitCriterias[h5_state.STATE_ACTIVE];
            exit.reset();

            this.statusHandler(sd_rpc_app_status_t.CONNECTION_ACTIVE, "Connection active");

            this.stateUpdateCallback = function(){
                if(!exit.isFullfilled()){
                    return;
                }

                if (exit.syncReceived || exit.irrecoverableSyncError){
                    this.transitionToState(h5_state.STATE_RESET);
                    return;
                }
                else if(exit.close){
                    this.transitionToState(h5_state.STATE_START);
                    return;
                }
                else if(exit.ioResourceError){
                    this.transitionToState(h5_state.STATE_FAILED);
                    return;
                }
                else{
                    this.transitionToState(h5_state.STATE_FAILED);
                    return;
                }
            }.bind(this);
        }.bind(this);

        this.stateActions[h5_state.STATE_FAILED] = function(){
            this.log("Giving up! I can not provide you a way of your failed state!");
            return;
        }.bind(this);

        this.exitCriterias[h5_state.STATE_START] = new StartExitCriterias();
        this.exitCriterias[h5_state.STATE_RESET] = new ResetExitCriterias();
        this.exitCriterias[h5_state.STATE_UNINITIALIZED] = new UninitializedExitCriterias();
        this.exitCriterias[h5_state.STATE_INITIALIZED] = new InitializedExitCriterias();
        this.exitCriterias[h5_state.STATE_ACTIVE] = new ActiveExitCriterias();

    }
    startStateMachine(){
        addEventListener('stateChanged', this.boundStateMachineWorker);
        dispatchEvent(this.stateChangedEvent);
    }
    stopStateMachine(){
        removeEventListener('stateChanged',  this.boundStateMachineWorker);
    }

    stateMachineWorker(){
        if(this.currentState === h5_state.STATE_FAILED || this.runStateMachine === false){
            //exit?
        }

        /*
            Transition to new state
        */
        if(this.currentState !== this.prevState){
            this.prevState = this.currentState;
            this.stateActions[this.currentState]();

        }

    }
}


const syncFirstByte = 0x01;
const syncSecondByte = 0x7E;
const syncRspFirstByte = 0x02;
const syncRspSecondByte = 0x7D;
const syncConfigFirstByte = 0x03;
const syncConfigSecondByte = 0xFC;
const syncConfigRspFirstByte = 0x04;
const syncConfigRspSecondByte = 0x7B;
const syncConfigField = 0x11;

const pkt_pattern = {};
pkt_pattern[control_pkt_type.CONTROL_PKT_RESET] = new Uint8Array([]);
pkt_pattern[control_pkt_type.CONTROL_PKT_ACK] = new Uint8Array([]);
pkt_pattern[control_pkt_type.CONTROL_PKT_SYNC] = new Uint8Array([syncFirstByte, syncSecondByte]);
pkt_pattern[control_pkt_type.CONTROL_PKT_SYNC_RESPONSE] = new Uint8Array([syncRspFirstByte, syncRspSecondByte]);
pkt_pattern[control_pkt_type.CONTROL_PKT_SYNC_CONFIG] = new Uint8Array([syncConfigFirstByte, syncConfigSecondByte, syncConfigField]);
pkt_pattern[control_pkt_type.CONTROL_PKT_SYNC_CONFIG_RESPONSE] = new Uint8Array([syncConfigRspFirstByte, syncConfigRspSecondByte, syncConfigField]);
