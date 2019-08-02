import Vue from 'vue';
import Vuex from 'vuex';
import sidebar from './modules/sidebar';
import user from './modules/user';
import tagsView from './modules/tagsView';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    sidebar,
    user,
    tagsView
  }
});
export default store;
