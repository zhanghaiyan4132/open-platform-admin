import request from '@/utils/request';

export default {
  // 获取省市区
  getDistrict(parentCode) {
    return request({
      url: '/region/dreigon',
      method: 'get',
      params: { parentCode: parentCode }
    });
  }
};
