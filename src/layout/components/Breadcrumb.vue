<!--
 * @Author: your name
 * @Date: 2020-08-13 09:23:35
 * @LastEditTime: 2020-08-13 10:29:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-iview-admin/src/layout/components/Breadcrumb/Breadcrumb.vue
-->
<template>
  <div class="bread-crumb-view">
    <Breadcrumb>
      <BreadcrumbItem to="/" key="/">
        <Icon type="ios-home" />
        Home
      </BreadcrumbItem>

      <BreadcrumbItem
        v-for="item in crumbList"
        :key="item.path"
        :to="item.path"
      >
        <Icon :type="item.icon" />
        {{ item.title }}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      crumbList: null,
    };
  },
  watch: {
    $route(route) {
      if (route.path.startsWith("/dashboard")) {
        this.crumbList = null;
        return;
      }
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      const matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      this.crumbList = null;
      this.crumbList = matched.map((item) => {
        return {
          path: item.path,
          title: item.meta.title,
          icon: item.meta.icon,
        };
      });
    },
    handleClick(path) {
      this.$store.dispatch("SetActiveName", path);
    },
  },
};
</script>

<style lang="scss" scoped>
.bread-crumb-view {
  padding: 10px 20px;
  box-shadow: 0 3px 5px rgba($color: #000000, $alpha: 0.05);
}
</style>
