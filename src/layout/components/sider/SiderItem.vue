<!--
 * @Author: 李伟
 * @Date: 2020-08-10 17:09:01
 * @LastEditTime: 2020-08-11 16:35:00
 * @LastEditors: Please set LastEditors
 * @Description: SiderItem
 * @FilePath: /vue-antdv-admin/src/components/sider/SiderItem.vue
-->
<template>
  <MenuItem
    v-if="hasOneShowingChild(item.children, item) && !item.hidden"
    :key="item.path"
    :name="item.meta.title"
    :to="resolvePath(item.path)"
    :alt="item.title"
  >
    <Icon :type="item.meta ? item.meta.icon : 'ios-help-circle'"></Icon>
    <span>{{ item.meta && item.meta.title }}</span>
  </MenuItem>
  <Submenu v-else-if="!item.hidden && !siderOpened" :name="item.path">
    <template slot="title">
      <Icon :type="item.meta ? item.meta.icon : 'ios-help-circle'" />
      <span>{{ item.meta && item.meta.title }}</span>
    </template>
    <sider-item
      v-for="child in item.children"
      :key="child.path"
      :item="child"
      :base-path="resolvePath(item.path)"
    />
  </Submenu>
  <div v-else-if="!item.hidden && siderOpened">
    <sider-item
      v-for="child in item.children"
      :key="child.path"
      :item="child"
      :base-path="resolvePath(item.path)"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import path from "path";
import { isExternal } from "../../../utils/validate";

export default {
  name: "SiderItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      onlyOneChild: null,
    };
  },
  computed: {
    ...mapGetters(["siderOpened"]),
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });

      if (showingChildren.length === 1) {
        return true;
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.ivu-menu-vertical .ivu-menu-item {
  padding: 14px;
  position: relative;
  cursor: pointer;
  z-index: 1;
  transition: all 0.2s ease-in-out;
}
</style>
