<template>
  <el-container>
    <el-header class="yto-header">
      <div class="menuIcon">
        <i class="el-icon-s-unfold el-icon" @click="isCollapse"></i>
      </div>
      <navBar></navBar>
    </el-header>
    <el-container>
      <sideBar></sideBar>
      <el-scrollbar style="height: calc(100vh - 60px);width: 100%;" wrapClass="yto-x-auto">
        <el-main class="router-main">
          <router-view v-if="isRouterAlive" :key="key"></router-view>
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script>
import bottomFooter from '@/components/bottomFooter';
import navBar from './components/navBar';
import sideBar from './components/sidebar';

export default {
  components: {
    navBar,
    sideBar,
    bottomFooter
  },
  name: 'Index',
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true,
      key: Math.random()
    };
  },
  mounted() {

  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.key = Math.random();
        this.isRouterAlive = true;
      });
    },
    isCollapse() {
      this.$store.commit('TOGGLE_SIDEBAR');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.el-main {
   padding: 0 ;
}
.yto-header {
  background:linear-gradient(90deg,rgba(80,0,112,1) 0%,rgba(81,48,132,1) 100%);
  position: relative;
  .menuIcon {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    height: 60px;
    line-height: 60px;
    width: 46px;
    background-color: #fff;
    cursor: pointer;
  }
  .el-icon {
    display: inline-block;
    height: 100%;
    width: 100%;
    font-size: 20px;
    color: #7F7F7F;
  }
}
.router-main {
  margin: 10px;
  height: 100%;
  background-color: #fff;
}
.yto-footer {
  color: #666;
  height: 60px;
  line-height: 60px;
  .left {
    float: left;
  }
  .right {
    float: right;
    .icon {
      color: #e69b24;
      font-family: MicrosoftYaHei;
      margin-right: 20px;
      text-decoration: none;
    }
  }
}
</style>
