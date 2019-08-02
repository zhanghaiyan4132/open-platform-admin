<template>
  <el-row type="flex">
    <el-col :span="5">
      <div class="logo-style">
        <img class="login-logo" src="@/assets/images/nav_logo@3x.png" />
      </div>
    </el-col>
    <el-col :span="14">
    </el-col>
    <el-col :span="5">
      <div class="avatar-container">
        <el-dropdown @command="handleCommand" size="medium" trigger="click" style="height: 60px;line-height: 60px">
          <el-avatar style="vertical-align: middle" :size="22" :src="circleUrl" class="user-avatar"></el-avatar>
          <span class="el-dropdown-link">
            运维管理员
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出</el-dropdown-item>
            <el-dropdown-item command="personal">个人中心</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// import netAPI from '@/api';
import Cookies from 'js-cookie';
import sideBar from './sidebar';
// import { getStore } from '@/utils/localStorage';
export default {
  components: {
    sideBar
  },
  name: 'navBar',
  data() {
    return {
      selectFlag: true,
      circleUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
    };
  },
  computed: {
    name() {
      return this.$store.state.user.userName;
    }
  },
  created() {
  },
  methods: {
    logout() {
      this.$confirm('推出登录后[接口对接]模块将无法查看, 是否继续?', '退出登录', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定退出',
        cancelButtonText: '取消'
      })
        .then(() => {
          this.$message({
            showClose: true,
            type: 'success',
            message: '退出登录成功!!!'
          });
          Cookies.remove('opp-token');
          this.$store.commit('DEL_USERINFO');
          this.$router.push('/userlogin');
        });
    },
    handleCommand(option) {
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.logo-style {
  /*cursor: pointer;*/
  .login-logo {
    height: 46px;
    margin: 7px 0 0 46px;
  }
}
.avatar-container {
  height: 60px;
  text-align: right;
}
.el-dropdown-link {
  vertical-align: middle;
  margin-left: 5px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
}
.el-icon-arrow-down {
  font-size: 16px;
}
.el-dropdown-menu {
  width: 120px;
  text-align: center;
  &__item {
    line-height: 40px;
  }
}
</style>
