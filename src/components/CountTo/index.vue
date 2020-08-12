<!--
 * @Author: your name
 * @Date: 2020-08-12 09:42:05
 * @LastEditTime: 2020-08-12 14:39:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-iview-admin/src/components/CountTo/index.vue
-->
<template>
  <div class="count-to-card">
    <Icon class="count-icon" :type="icon" size="50" :color="color" />
    <div class="count-view">
      <h2 class="count-title">{{ title }}</h2>
      <count-to
        class="count"
        :startVal="startVal"
        :endVal="endVal"
        :duration="duration"
      />
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  props: {
    endVal: {
      type: Number,
      required: true,
      default: 0,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    color: {
      type: String,
      default: "#40C9C6",
    },
    icon: {
      type: String,
      required: true,
      default: "ios-alert",
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    countTo,
  },
  data() {
    return {
      startVal: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.count-to-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  width: 22%;
  padding: 15px 30px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 3px 3px 5px rgba(#000000, .05),-3px -3px 5px rgba(#000000, .05);
  &:hover {
    box-shadow: 3px 3px 5px rgba(#000000, 0.1),-3px -3px 5px rgba(#000000, 0.1);
    transform: scale(1.05);
    transition-duration: 0.3s;
  }
  .count-view {
    margin-left: 15px;
    .count-title {
      font-size: 20px;
      color: gray;
    }
    .count {
      font-weight: bold;
      font-size: 20px;
    }
  }
}
</style>
