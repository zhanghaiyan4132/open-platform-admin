// 日期格式调整yyyy-MM-dd HH:mm:ss
const dateFull = val => {
  let date = new Date(val);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  let d = date.getDate();
  d = d < 10 ? '0' + d : d;
  let h = date.getHours();
  h = h < 10 ? '0' + h : h;
  let min = date.getMinutes();
  min = min < 10 ? '0' + min : min;
  let s = date.getSeconds();
  s = s < 10 ? '0' + s : s;
  return `${y}-${m}-${d} ${h}:${min}:${s}`;
};

const dateYmd = val => {
  let date = new Date(val);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  let d = date.getDate();
  d = d < 10 ? '0' + d : d;
  return `${y}-${m}-${d}`;
};
// 订单状态转译
const STATUS_CN = {
  WAIT: '待取件',
  // ACCEPT: '已接单',
  GOT: '运输中',
  SENT_SCAN: '派件中',
  SIGNED: '已签收',
  CANCEL: '已取消'
  // NOT_SEND: '揽收失败',
  // FAILED: '签收失败'
};
const orderStatus = val => STATUS_CN[val];
export default {
  dateFull,
  orderStatus,
  dateYmd
};
