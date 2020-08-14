<!--
 * @Author: 李伟
 * @Date: 2020-08-07 15:06:57
 * @LastEditTime: 2020-08-13 16:08:42
 * @LastEditors: Please set LastEditors
 * @Description: 主页
 * @FilePath: /vue-antdv-admin/src/views/main/index.vue
-->
<template>
  <div class="layout">
    <sider-my />
    <Layout class="main-content" :class="{ 'main-content-move': siderOpened }">
      <nav-bar />
      <Content>
        <transition>
          <keep-alive exclude="dashboard">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </Content>
    </Layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import screenfull from "screenfull";
import SiderMy from "./components/sider/SiderMy";
import NavBar from "./components/Navbar";

export default {
  name: "Home",
  components: {
    "sider-my": SiderMy,
    "nav-bar": NavBar,
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
  min-width: 900px;
  min-height: 100vh;
  .main-content {
    flex: 1;
    margin-left: 200px;
    min-height: 100vh;
    width: calc(100% - 200px);
    transition: all 0.3s;
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
    .ivu-layout-content {
      padding: 20px;
      box-sizing: border-box;
    }
  }
  .main-content-move {
    margin-left: 64px;
    width: calc(100% - 64px);
  }
}
</style>
