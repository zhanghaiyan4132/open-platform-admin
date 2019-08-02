// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'normalize.css/normalize.css';// A modern alternative to CSS resets
import ElementUI from 'element-ui';
import './styles/index.scss';
import App from './App';
import router from './router';
import store from './store';
import './assets/icons/index';
import Yto from './components/index';
import filters from '@/filters';

Vue.config.productionTip = false;

Vue.use(ElementUI, { size: 'small' });
Vue.use(Yto);

// 添加filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
