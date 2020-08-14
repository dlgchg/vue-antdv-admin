<!--
 * @Author: your name
 * @Date: 2020-08-13 09:23:35
 * @LastEditTime: 2020-08-13 15:57:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-iview-admin/src/layout/components/Breadcrumb/Breadcrumb.vue
-->
<template>
  <Breadcrumb>
    <BreadcrumbItem to="/" key="/">
      <Icon type="ios-home" />
      Home
    </BreadcrumbItem>
    <BreadcrumbItem v-for="item in crumbList" :key="item.path" :to="item.path">
      <Icon :type="item.icon" />
      {{ item.title }}
    </BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      crumbList: null,
    };
  },
  watch: {
    $route() {
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
      if (this.$route.path.startsWith("/dashboard")) {
        this.crumbList = null;
        return;
      }
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

<style lang="scss" scoped></style>
