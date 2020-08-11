<!--
 * @Author: 李伟
 * @Date: 2020-08-07 15:06:57
 * @LastEditTime: 2020-08-11 13:57:24
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
          <Button @click="handlerLoginOut">LoginOut</Button>
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
import SiderMy from "../../components/sider/SiderMy";
export default {
  name: "Home",
  components: {
    "sider-my": SiderMy,
  },
  computed: {
    ...mapGetters(["siderOpened", "permission_routes"]),
    rotateIcon() {
      return ["menu-icon", this.siderOpened ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.siderOpened ? "collapsed-menu" : ""];
    },
  },
  methods: {
    collapsedSider() {
      this.$store.dispatch("toggleSider");
    },
    handlerLoginOut() {
      this.$store.dispatch("loginOut").then(() => {
        this.$router.push("/login");
      });
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
    }
  }
}
</style>
