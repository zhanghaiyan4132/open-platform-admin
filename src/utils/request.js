import axios from 'axios';
import Cookies from 'js-cookie';
import { Message } from 'element-ui';
import netAPI from '@/api';

// create an axios instance
const service = axios.create({
  baseURL: '/api',
  timeout: 5000, // request timeout
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});
service.interceptors.request.use(
  config => {
    // 获取开放平台接口
    let token = Cookies.get('opp-token');
    // 上生产时下面token赋值去掉
    token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGVuIiwiaWF0IjoxNTY0MTA4Nzc2LCJleHAiOjE1NjQ3MTM1NzZ9.SpMjxNRtoNYImyMTmDZ3duGSNUsz5PwnepqrFZjBNDY';
    let expires = Cookies.get('opp-token-expires');
    if (token) {
      // config.headers['Authorization'] = token;
      config.headers['Authorization'] = 'Bearer ' + token;
      // 增加定期刷新token
      var timer = null;
      // 后面放开
      // config.headers['Authorization'] = token;
      if (Date.now() - expires >= 600 * 1000) {
        timer = setTimeout(function () {
          // 超过10分钟，则更新下token
          netAPI
            .refresh()
            .then(response => {
              let data = response['headers']['authorization'];
              // 设置过期时间为30分钟
              Cookies.set('opp-token', data, { expires: 1 / (24 * 2) });
              Cookies.set('opp-token-expires', Date.now(), {
                expires: 1 / (24 * 2)
              });
              clearTimeout(timer);
            })
            .catch(err => {
              console.log('err', err);
              // 设置过期时间为15分钟
              Cookies.set('opp-token-expires', Date.now(), {
                expires: 1 / (24 * 2) / 2
              });
              clearTimeout(timer);
            });
        }, 3000);
      }
    }
    return config;
  },
  error => {
    // Do something with request error
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  res => {
    let { headers } = res;
    if (headers['authorization']) {
      // 时间统一都是半小时失效
      Cookies.set('opp-token', headers['authorization'], { expires: 1 / (24 * 2) });
      // 定期刷新token
      Cookies.set('opp-token-expires', Date.now(), { expires: 1 / (24 * 2) });
    }
    // 错误统一处理
    if (res.data.code && res.data.code !== 200) {
      Message.error(`${res.data.code}:${res.data.message}`);
    } else {
      return res;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
