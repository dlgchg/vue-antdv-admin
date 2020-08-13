<!--
 * @Author: your name
 * @Date: 2020-08-10 13:10:36
 * @LastEditTime: 2020-08-13 10:05:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/src/components/sider/index.vue
-->
<template>
  <Sider ref="side1" hide-trigger collapsible v-model="siderOpened">
    <Menu :active-name="activeName" theme="dark" width="auto" :class="menuitemClasses">
      <sider-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
    </Menu>
  </Sider>
</template>

<script>
import { mapGetters } from "vuex";
import SiderItem from "./SiderItem"

export default {
  name: "SiderMy",
  components: {"sider-item":SiderItem},
  computed: {
    ...mapGetters(["siderOpened", "permission_routes","activeName"]),
    menuitemClasses() {
      return ["menu-item", this.siderOpened ? "collapsed-menu" : ""];
    },
  },
};
</script>

<style lang="scss" scoped>
.ivu-layout-sider {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
