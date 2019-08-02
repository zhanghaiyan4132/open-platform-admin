function baseFunc(regStr) {
  let regObj = reg[regStr];
  return (rule, value, callback) => {
    if (!regObj.reg.test(value)) {
      callback(new Error(regObj.message));
      return false;
    }
    callback();
  };
}
const reg = {
  // 验证密码由6到28位数字密码组合
  password: {
    reg: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,25}$/,
    message: '密码由8-25位数字、字母组合'
  },
  // 汉字、字母、数字
  cn_letter_number: {
    // eslint-disable-next-line no-useless-escape
    reg: /^[\u4e00-\u9fa5_a-zA-Z0-9\s\·\~\！\#\￥\……\*\（\）\——\-\+\=\【\】\{\}\、\|\；\‘\’\：\“\”\《\》\？\，\。\、\`\~\!\#\^\*\(\)\_\[\]{\}\\\|\;\'\'\:\"\"\,\.\/\<\>\?]+$/, /// ^[A-Za-z0-9\u4e00-\u9fa5]*$/,
    message: '请勿输入特殊字符'
  },
  // 数字横杠，且横杠不连续
  number_line: {
    // reg: /^([\d]|-(?!-))*$/,
    // reg: /^(((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?|(1[3456789]\d{9}))$/,
    reg: /^((\d{3,5}|\d{3,5}-)?(\d{7,10})|(-(\d{3,}))?|(1[23456789]\d{9}))$/,
    message: '请输入正确的电话号码'
  },
  // 正数字
  number: {
    reg: /^[\d.]*$/,
    message: '只能输入正数字'
  },
  // 正整数
  int: {
    reg: /^[\d]*$/,
    message: '只能输入正整数'
  },
  // 部分邮箱
  some_email: {
    reg: /^[a-zA-Z0-9_.-]+@(163.com|126.com|139.com|qq.com|souhu.com|aliyun.com|189.cn|yto.net.cn)$/,
    message: '不支持的邮箱格式或者邮箱域名'
  },
  cn_phone: {
    reg: /^((\d{2,5}|\d{2,5}-)?(\d{7,8})|(1[23456789]\d{9}))$/,
    message: '请输入正确的电话号码'
  },
  cn_mobile: {
    reg: /^(1[23456789]\d{9})$/,
    message: '手机号格式不正确'
  }
};

export default { reg, baseFn: baseFunc };
