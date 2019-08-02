<template>
  <div id="app" class="loading-area">
    <router-view />
  </div>
</template>

<script>
// import netAPI from '@/api';
// import { setInterval } from 'timers';
// import Cookies from 'js-cookie';
import { getStore } from '@/utils/localStorage';
export default {
  name: 'App',
  mounted() {
  },

  watch: {
    '$route'() {
      if (window._czc) {
        let location = window.location;
        let contentUrl = location.pathname + location.hash;
        let refererUrl = getStore('previous_page_url') || '/';
        // console.log('refererUrl=' + refererUrl);
        window._czc.push(['_trackPageview', contentUrl, refererUrl]);
      }
    }
  },
  methods: {
    // 刷新token
    // refresh() {
    //   setInterval(this.refreshData, 1 * 60 * 1000);
    // },
    // refreshData() {
    //   let token = Cookies.get('jwt-token');
    //   if (token) {
    //     netAPI.refresh({ 'jwt-token': token }).then(response => {
    //       let data = response.token;
    //       Cookies.set('jwt-token', data, { expires: 1 / (24 * 2) });
    //       Cookies.set('jwt-token-expires', Date.now(), {
    //         expires: 1 / (24 * 2)
    //       });
    //     }).catch((err) => {
    //       console.log('err=' + err);
    //     });
    //   }
    // }
  }
};
</script>
<style>
#app {
  height: 100%;
}
</style>
