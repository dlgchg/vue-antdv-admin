<!--
 * @Author: 李伟
 * @Date: 2020-08-07 15:06:57
 * @LastEditTime: 2020-08-11 15:05:32
 * @LastEditors: Please set LastEditors
 * @Description: 主页
 * @FilePath: /vue-antdv-admin/src/views/main/index.vue
-->
<template>
  <div class="layout">
    <sider-my />
    <Layout class="main-content">
      <Header>
        <Icon
          type="md-menu"
          @click="collapsedSider"
          :class="rotateIcon"
          size="24"
        />
        <div class="user-view">
          <Tooltip content="全屏">
            <Icon :type="isFullscreen? 'ios-desktop-outline' : 'ios-desktop'" size="24" @click="requestFullScreen" />
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
      <Content class="main-content">
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import screenfull from "screenfull";
import SiderMy from "../../components/sider/SiderMy";
export default {
  name: "Home",
  components: {
    "sider-my": SiderMy,
  },
  data() {
    return {
      isFullscreen: false,
    };
  },
  computed: {
    ...mapGetters(["siderOpened", "permission_routes", "avatar", "name"]),
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
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  display: flex;

  .main-content {
    flex: 1;
    .ivu-layout-header {
      height: 50px;
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f3f7f7;
      box-shadow: 0px 3px 5px rgba($color: #000000, $alpha: 0.05);
      .menu-icon {
        transition: all 0.3s;
      }
      .rotate-icon {
        transform: rotate(-90deg);
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
  }
}
</style>
