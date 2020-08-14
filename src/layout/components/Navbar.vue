<!--
 * @Author: 李伟
 * @Date: 2020-08-11 15:44:18
 * @LastEditTime: 2020-08-13 15:59:17
 * @LastEditors: Please set LastEditors
 * @Description: Navabr
 * @FilePath: /vue-iview-admin/src/layout/Navbar.vue
-->
<template>
  <Header>
    <div class="bread-view">
      <Icon
        type="md-menu"
        @click="collapsedSider"
        :class="rotateIcon"
        size="24"
      />
      <bread-crumb />
    </div>
    <Input
      style="border: none;background-color: transparent;width: auto;"
      placeholder="Enter text"
      clearable
      search
    />
    <div class="user-view">
      <Tooltip content="全屏">
        <Icon
          :type="isFullscreen ? 'ios-desktop-outline' : 'ios-desktop'"
          size="24"
          @click="requestFullScreen"
        />
      </Tooltip>

      <img class="vartar-img" :src="avatar" :alt="name" />
      <Dropdown @on-click="dropdownClick">
        <a href="javascript:void(0)">
          {{ name }}
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem name="userinfo">个人中心</DropdownItem>
          <DropdownItem name="home">首页</DropdownItem>
          <DropdownItem name="github">项目地址</DropdownItem>
          <DropdownItem divided name="exit">退出</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </Header>
</template>

<script>
import { mapGetters } from "vuex";
import screenfull from "screenfull";
import Breadcrumb from "./Breadcrumb";
export default {
  data() {
    return {
      isFullscreen: false,
    };
  },
  components: {
    "bread-crumb": Breadcrumb,
  },
  computed: {
    ...mapGetters(["siderOpened", "avatar", "name"]),
    rotateIcon() {
      return ["menu-icon", this.siderOpened ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.siderOpened ? "collapsed-menu" : ""];
    },
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.desctory();
  },
  methods: {
    change() {
      this.isFullscreen = screenfull.isFullscreen;
    },
    init() {
      if (screenfull.isEnabled) {
        screenfull.on("change", this.change);
      }
    },
    desctory() {
      if (screenfull.isEnabled) {
        screenfull.off("change", this.change);
      }
    },
    collapsedSider() {
      this.$store.dispatch("toggleSider");
    },
    dropdownClick(name) {
      if (name === "exit") {
        this.handlerLoginOut();
      }
    },
    handlerLoginOut() {
      this.$store.dispatch("loginOut").then(() => {
        this.$router.push("/login");
      });
    },
    requestFullScreen() {
      if (!screenfull.isEnabled) {
        this.$Notice.warning({
          title: "you browser can not work",
        });
        return false;
      }
      screenfull.toggle();
    },
  },
};
</script>

<style lang="scss" scoped>
.ivu-layout-header {
  height: 50px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f7f7;
  box-shadow: 0px 3px 5px rgba($color: #000000, $alpha: 0.05);
  .bread-view {
    display: flex;
    align-items: center;
    .menu-icon {
      transition: all 0.3s;
      margin-right: 20px;
    }
    .rotate-icon {
      transform: rotate(-90deg);
    }
  }
  .ivu-input-wrapper {
    margin: auto 10px;
  }
  .user-view {
    display: flex;
    align-items: center;

    .ivu-icon {
      margin-right: 10px;
      cursor: pointer;
    }
    .vartar-img {
      width: 30px;
      height: 30px;
      border: 1px solid rgba($color: #000000, $alpha: 0.05);
      border-radius: 5px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
</style>
