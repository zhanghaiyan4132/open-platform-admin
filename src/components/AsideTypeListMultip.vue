<template>
  <div>
    <el-menu
      :default-active="activeTypeAction"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#333"
      unique-opened
      router
    >
      <template v-for="(item ,index) in menuList">
        <el-menu-item v-if="!item.children" :index="`/${rootPath}/${item.value}`" :key="index">
          <span class="num-multi" :class="{'activeIcon-multi': item.code === activeType}"></span>
          <span slot="title" :class="{'acitive-menu-title': item.code === activeType}">{{item.name}}</span>
        </el-menu-item>
        <el-submenu v-else :key="index" :index="`/${rootPath}/${item.value}`">
          <template slot="title">
            <span :class="{'acitive-menu-title': item.code === titleActive}">{{item.name}}</span>
          </template>
          <template v-for="(subItem,subIndex) in item.children">
            <el-menu-item
              :class="{'active': subItem.code === activeType}"
              :key="subIndex"
              :index="`/${rootPath}/${item.value}/${subItem.value}`"
            >
              <span class="num-multi" :class="{'activeIcon-multi': subItem.code === activeType}"></span>
              {{subItem.name}}
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: ['menuList', 'originType', 'pageType', 'rootPath', 'fullRouterPath'],
  data() {
    return {
      activeType: 'all',
      activeTypeAction: ''
    };
  },
  watch: {
    originType(val) {
      this.activeType = val;
    },
    fullRouterPath(val) {
      this.activeTypeAction = val;
    }
  },
  computed: {
    titleActive() {
      let titleFlag = this.activeTypeAction.split('/');
      return titleFlag[2];
    }
  },
  created() {
    this.activeType = this.originType || 'all';
    this.activeTypeAction = this.fullRouterPath || 'all';
  },
  methods: {
    changeActive(item) {
      this.activeType = item.value;
      this.$emit('click-item', item);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.num-multi {
  display: inline-block;
  height: 6px;
  width: 6px;
  border-radius: 3px;
  margin: 0px 10px;
}
.activeIcon-multi {
  background: #47086c;
}

.acitive-menu-title {
  font-weight: bold;
  color: #47086c;
}
.num {
  margin: 0px 12px;
  display: inline-block;
  height: 6px;
  width: 6px;
  margin-top: 17px;
  border-radius: 3px;
}
.activeIcon {
  background: #47086c;
}
.search-item {
  display: flex;
  margin-top: 2px;
  text-align: left;
  font-size: 14px;
  line-height: 40px;
  cursor: pointer;
  color: #333;
  .el-menu-item {
    margin: 0px 12px;
    display: inline-block;
    height: 6px;
    width: 6px;
    margin-top: 17px;
    border-radius: 3px;
  }
  &.active {
    color: #47086c;
    font-weight: bold;
    background: rgba(43, 1, 68, 0.05);
    border-radius: 6px;
  }
  .activeIcon {
    background: #47086c;
  }
}
.search-item:hover {
  color: #47086c;
  font-weight: bold;
  background: rgba(43, 1, 68, 0.05);
  border-radius: 6px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 30px;
  img {
    width: 100%;
    height: 100%;
  }
}
.title {
  color: #000;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}
.el-menu-vertical-demo {
  background: transparent;
  width: 200px;
  overflow: hidden;
  border: 0px !important;
}
/deep/ {
  .el-submenu__title,
  .el-menu-item {
    text-align: left;
    font-size: 14px !important;
    line-height: 40px !important;
    height: 40px !important;
    cursor: pointer;
    color: #333;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    &:hover {
      color: #47086c !important;
      font-weight: bold !important;
      background: rgba(43, 1, 68, 0.05) !important;
      border-radius: 6px !important;
    }
    &.active {
      color: #47086c !important;
      font-weight: bold !important;
      background: rgba(43, 1, 68, 0.05) !important;
      border-radius: 6px !important;
    }
  }
  .el-submenu__title {
    padding: 0px !important;
    padding-left: 30px !important;
  }
  .el-menu-item {
    padding: 0px !important;
    margin: 5px 0;
  }
  .el-menu--inline > li {
    padding-left: 20px !important;
  }
  .el-menu-item.is-active {
    background: rgba(43, 1, 68, 0.05) !important;
    border-radius: 6px !important;
  }
}
</style>
