<template class="e_box">
    <el-aside :width="isCollapse ? '46px':'208px'" class="yto-aside">
      <el-scrollbar style="height: calc(100vh - 100px);width: 210px;">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          :style="{'width': isCollapse? '46px':'208px'}"
          :collapse="isCollapse"
          mode="vertical"
          active-text-color="#47086C"
          text-color="#5D5D5D"
          router
        >
          <template v-for="(item ,index) in menuList">
            <el-menu-item v-if="item.children && item.children.length === 1" :index="item.children[0].path" :key="index">
              <span slot="title">{{item.children[0].meta.title}}</span>
            </el-menu-item>
            <el-submenu v-else :key="index" :index="item.path">
              <template slot="title">
                <span>{{item.meta.title}}</span>
              </template>
              <template v-for="(subItem,subIndex) in item.children">
                <el-menu-item
                  :key="subIndex"
                  :index="subItem.path"
                >
                  <span class="num-multi"></span>
                  {{subItem.meta.title}}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </el-menu>
      </el-scrollbar>
    </el-aside>
</template>

<script>
export default {
  components: {},
  name: 'sidebar',
  data() {
    return {
      menuList: []
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.sidebar.isOpen;
    }
  },
  created() {
    this.menuList = this.$router.options.routes;
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  .yto-aside {
    transition: width 0.3s;
    overflow: hidden;
    background-color: #fff;
    padding: 20px 0;
    .el-menu {
      border-right: none;
      color: #5D5D5D;
    }

    /deep/ .el-scrollbar__wrap {
      overflow: hidden;
    }
  }
</style>
