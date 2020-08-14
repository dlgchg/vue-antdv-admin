<!--
 * @Author: your name
 * @Date: 2020-08-14 14:45:43
 * @LastEditTime: 2020-08-14 14:57:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-iview-admin/:src/views/component/Avatar.vue
-->
<template>
  <div class="avatar-view">
    <div>
      <h2>基础用法</h2>
      <p>头像有三种尺寸，两种形状可选。</p>

      <Avatar :src="avatar" size="large" />
      <Avatar :src="avatar" />
      <Avatar :src="avatar" size="small" />
      <Avatar shape="square" :src="avatar" size="large" />
      <Avatar shape="square" :src="avatar" />
      <Avatar shape="square" :src="avatar" size="small" />
    </div>
    <div>
      <h2>带徽标的头像</h2>
      <p>通常用于消息提示。</p>

      <Badge :count="1">
        <Avatar :src="avatar" size="large" />
      </Badge>
      <Badge :count="1">
        <Avatar :src="avatar" />
      </Badge>
      <Badge :count="1">
        <Avatar :src="avatar" size="small" />
      </Badge>

      <Badge :count="1">
        <Avatar shape="square" :src="avatar" size="large" />
      </Badge>
      <Badge :count="1">
        <Avatar shape="square" :src="avatar" />
      </Badge>
      <Badge :count="1">
        <Avatar shape="square" :src="avatar" size="small" />
      </Badge>
    </div>
    <div>
      <h2>带徽标的头像</h2>
      <p>通常用于消息提示。</p>
      <Avatar :style="{ background: color }">{{ user }}</Avatar>
      <Button size="small" @click="handleChange">Change</Button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const UserList = ["U", "Lucy", "Tom", "Edward"];
const ColorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

export default {
  data() {
    return {
      user: UserList[0],
      color: ColorList[0],
    };
  },
  methods: {
    handleChange() {
      const index = UserList.indexOf(this.user);
      this.user =
        index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
      this.color =
        index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
    },
  },
  computed: {
    ...mapGetters(["avatar"]),
  },
};
</script>

<style lang="scss" scoped>
.avatar-view {
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 20px;
    p {
        margin-bottom: 20px;
    }
    .ivu-avatar{
        margin: 10px;
    }
  }
}
</style>
