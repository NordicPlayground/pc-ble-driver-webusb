class ble_evt_t{
  constructor(data){
    this.data = data;
  }

  header(){
    return new ble_evt_hdr_t(this.data, 0);
  }

  common_evt(){
    return new ble_common_evt_t(this.data, 4);
  }
  gap_evt(){
    return new ble_gap_evt_adv_report_t(this.data, 4);
  }
  gattc_evt(){

  }
  gatts_evt(){

  }
  l2cap_evt(){

  }
}

class ble_evt_hdr_t{
  constructor(data, start){
    this.data = data;
    this.start = start;
  }

  evt_id(){
    return new Uint16Array(this.data.slice(this.start,this.start+2))[0];
  }
  evt_len(){
    return new Uint16Array(this.data.slice(this.start+2,this.start+4))[0];
  }
}

class ble_common_evt_t {
  constructor(data, start){
    this.data = data;
    this.start = start;
  }

  conn_handle() {
    return new Uint16Array(this.data.slice(this.start,this.start+2))[0];
  }

  user_mem_request() {
    return new ble_evt_user_mem_request_t(this.data, this.start+2);
  }

  user_mem_release() {
    return new ble_evt_user_mem_release_t(this.data, this.start+2);
  }
}

class ble_evt_user_mem_request_t {
  constructor(data, start){
    this.data = data;
    this.start = start;
  }

  type() {
    return new Uint8Array(this.data.slice(this.start,this.start+1))[0];
  }
}

class ble_evt_user_mem_release_t {
  constructor(data, start){
    this.data = data;
    this.start = start;
  }

  type() {
    return new Uint8Array(this.data.slice(this.start,this.start+1))[0];
  }

  mem_block() {
    return new ble_user_mem_block_t(this.data, this.start+1);
  }

}

class ble_user_mem_block_t {
  constructor(data, start){
    this.data = data;
    this.start = start;
  }

  p_mem() {
    return new Uint8Array(this.data.slice(this.start,this.start+1))[0];
  }

  len() {
    return new Uint16Array(this.data.slice(this.start+1,this.start+3))[0];
  }
}


class ble_gap_evt_t {
  constructor(data, start){
    this.data = data;
    this.start = start;
  }

  conn_handle() {
    return new Uint16Array(this.data.slice(this.start,this.start+2))[0];
  }

  adv_report() {
    return new ble_gap_evt_adv_report_t(this.data, this.start+2)
  }
}

class ble_gap_evt_adv_report_t {
  constructor(data, start){
    this.data = data;
    this.start = start;
  }
  peer_addr() {
    return new ble_gap_addr_t(this.data, this.start);
  }

  direct_addr() {
    return new ble_gap_addr_t(this.data, this.start+3);
  }

  rssi() {
    return new Int8Array(this.data.slice(this.start+6,this.start+7))[0];
  }

  scan_rsp() {
    return new Uint8Array(this.data.slice(this.start+7,this.start+8))[0];
  }

  type() {
    return new Uint8Array(this.data.slice(this.start+8,this.start+9))[0];
  }

  dlen() {
    return new Uint8Array(this.data.slice(this.start+9,this.start+10))[0];
  }

  data() {
    return new Uint8Array(this.data.slice(this.start+10,this.start+10+31));
  }
}

class ble_gap_addr_t {
  constructor(data, start){
    this.data = data;
    this.start = start;
  }

  addr_id_peer() {
    return new Uint8Array(this.data.slice(this.start,this.start+1))[0];
  }

  addr_type() {
    return new Uint8Array(this.data.slice(this.start+1,this.start+2))[0];
  }

  addr() {
    return new Uint8Array(this.data.slice(this.start+2,this.start+3))[0];
  }
}
