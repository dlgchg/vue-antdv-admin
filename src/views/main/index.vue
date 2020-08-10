<!--
 * @Author: 李伟
 * @Date: 2020-08-07 15:06:57
 * @LastEditTime: 2020-08-10 10:24:34
 * @LastEditors: Please set LastEditors
 * @Description: 主页
 * @FilePath: /vue-antdv-admin/src/views/main/index.vue
-->
<template>
  <a-layout>
    <a-layout-sider
      v-model="collapsed"
      :class="{ hiddsider: collapsed }"
      :trigger="null"
      collapsible
      collapsedWidth="54"
      >Sider</a-layout-sider
    >
    <a-layout class="main-content">
      <a-layout-header>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-button @click="handlerLoginOut">LoginOut</a-button>
      </a-layout-header>
      <a-layout-content>
        <div style="height: 200vh"></div>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    handlerLoginOut: function() {
      this.$store.dispatch("loginOut");
      this.$router.replace("/login");
    },
  },
};
</script>
<style lang="scss" scoped>
.ant-layout-sider {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-origin: 0;
  transition: all 0.3s;
  background-color: #3E454C;
}
.hiddsider + .main-content {
  margin-left: 54px;
}

.main-content {
  margin-left: 200px;
  transition: margin-left 0.3s;
  .ant-layout-header{
      height: 50px;
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #F3F7F7;
      box-shadow: 0px 3px 5px rgba($color: #000000, $alpha: .05);
  }
}
</style>
