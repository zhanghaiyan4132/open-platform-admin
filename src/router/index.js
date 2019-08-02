import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store/index';
import { getStore, setStore } from '@/utils/localStorage';
import Layout from '@/views/layout/Index';
import Cookies from 'js-cookie';
// import { MessageBox } from 'element-ui';
// import { isNull } from '@/utils/common';
// import user from "../store/modules/user";

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: '',
  routes: [
    { // 接口管理模块
      path: '',
      component: Layout,
      redirect: '/interfaceManage/interfaceList',
      name: 'InterfaceManage',
      meta: { title: '接口管理', icon: '', keepAlive: true },
      children: [
        {
          path: '/interfaceManage/interfaceList',
          name: 'InterfaceList',
          component: () => import('@/views/interfaceManage/interfaceList'),
          meta: { title: '接口列表', icon: '', keepAlive: true }
        },
        {
          path: '/interfaceAdd',
          name: 'InterfaceAdd',
          component: () => import('@/views/interfaceManage/interfaceAdd'),
          meta: {title: '新增接口', icon: '', keepAlive: true}
        }]
    },
    { // 常见问题模块
      path: '/commonProblem',
      component: Layout,
      redirect: '/commonProblem/commonProblemAdd',
      name: 'commonProblem',
      meta: { title: '常见问题', icon: '', keepAlive: true },
      children: [
        {
          path: '/commonProblemAdd',
          name: 'commonProblemAdd',
          component: () => import('@/views/commonProblem/commonProblemAdd'),
          meta: { title: '新增常见问题', icon: '', keepAlive: true }
        },
        {
          path: '/commonProblemUpdate',
          name: 'commonProblemUpdate',
          component: () => import('@/views/commonProblem/commonProblemUpdate'),
          meta: {title: '修改常见问题', icon: '', keepAlive: true}
        }]
    },
    // 接口审核管理
    {
      path: '/interfaceReviewManage',
      component: Layout,
      children: [
        {
          path: '/interfaceReviewManage',
          name: 'interfaceReviewManage',
          component: () => import('@/views/interfaceReviewManage'),
          hidden: false,
          meta: { title: '接口审核管理', icon: '', keepAlive: true }
        }
      ]
    },
    // 管理客户接口
    {
      path: '/interfaceManageCus',
      component: Layout,
      children: [
        {
          path: '/interfaceManageCus',
          name: 'interfaceManageCus',
          component: () => import('@/views/interfaceManageCus'),
          hidden: false,
          meta: { title: '管理客户接口', icon: '', keepAlive: true }
        }
      ]
    }

  ]
});

router.beforeEach((to, from, next) => {
  let token = Cookies.get('opp-token');
  if (!token) {
    // 暂时注释，后面开发要放开
    store.commit('DEL_USERINFO');
  }
  if (getStore('userName')) {
    store.commit('ADD_USERINFO');
  }
  // 保存上一页地址为登录后跳转使用
  if (from.path !== '/') {
    setStore('previous_page_url', from.path);
  }
  // 为了测试先放开登录验证
  if (getStore('loginUserId')) {
    next();
  } else {
    store.commit('SURE_USERINFO', true);
    next();
  }
  // next();
});

export default router;
