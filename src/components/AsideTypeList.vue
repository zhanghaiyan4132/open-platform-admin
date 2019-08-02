<template>
  <div>
    <div v-if="pageType==2">
      <div class="title">{{InterFaceName}}</div>
    </div>
    <div
      @click="changeActive(item)"
      class="search-item"
      v-for="(item, index) in menuList"
      :key="index"
      :class="{active: item.value === activeType}"
    >
      <i class="num" :class="{activeIcon: item.value === activeType}"></i>
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import { getStore } from '@/utils/localStorage';
export default {
  props: ['menuList', 'originType', 'pageType', 'InterFaceName'],
  data() {
    return {
      activeType: 'all'
    };
  },
  watch: {
    originType(val) {
      this.activeType = val;
    }
  },
  computed: {
    name() {
      return this.$store.state.user.nickName || this.$store.state.user.userName;
    },
    getIcon() {
      return this.$store.state.user.headIcon || getStore('userInfo_img');
    }
  },
  created() {
    this.activeType = this.originType || 'all';
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
.search-item {
  display: flex;
  margin: 5px 0;
  text-align: left;
  font-size: 14px;
  line-height: 40px;
  cursor: pointer;
  color: #333;
  .num {
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
  font-size: 16px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: #595062;
  line-height: 50px;
  padding-left: 10px;
  font-weight: bold;
}
</style>
