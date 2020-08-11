<!--
 * @Author: your name
 * @Date: 2020-08-10 13:10:36
 * @LastEditTime: 2020-08-11 14:02:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/src/components/sider/index.vue
-->
<template>
  <Sider ref="side1" hide-trigger collapsible v-model="siderOpened">
    <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
      <sider-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      <!-- <template v-for="route in permission_routes">
        <MenuItem
          v-if="!route.hidden"
          :key="route.path"
          :name="route.meta.title"
          :to="route.path"
        >
          <Icon :type="route.meta ? route.meta.icon : 'ios-help-circle'"></Icon>
          <span>{{ route.meta && route.meta.title }}</span>
        </MenuItem>
      </template> -->
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
    ...mapGetters(["siderOpened", "permission_routes"]),
    menuitemClasses() {
      return ["menu-item", this.siderOpened ? "collapsed-menu" : ""];
    },
  },
};
</script>

<style lang="scss" scoped>
.ivu-layout-sider {
  height: 100vh;
}
</style>
