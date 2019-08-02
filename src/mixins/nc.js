export default {
  data() {
    return {
      isBlockSlided: false,
      appKey: 'FFFF0N0000000000672C',
      modelName: 'no-captcha',
      nc_token: null,
      lang: 'cn',
      NC_Opt: null,
      nc: null
    };
  },
  methods: {
    ncInit() {
      var self = this;
      this.nc_token = [this.appKey, new Date().getTime(), Math.random()].join(
        ':'
      );
      this.NC_Opt = {
        renderTo: '#no-captcha',
        appkey: 'FFFF0N0000000000672C',
        scene: 'nc_login',
        token: this.nc_token,
        customWidth: 300,
        trans: {
          key1: 'code0'
        }, // elementID: ["usernameID"],
        is_Opt: 0,
        language: this.lang,
        isEnabled: true,
        timeout: 3000,
        times: 5,
        apimap: {},
        callback: function (data) {
          self.isBlockSlided = true;
          // window.console && console.log(self.nc_token);
          // window.console && console.log(data.csessionid);
          // window.console && console.log(data.sig); // 将这三个参数在这里回调服务器的接口，进行服务器的验证
        }
      };
    }
  }
};
