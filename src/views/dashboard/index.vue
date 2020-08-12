<!--
 * @Author: your name
 * @Date: 2020-08-10 10:12:44
 * @LastEditTime: 2020-08-12 14:37:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/src/views/dashboard/index.vue
-->
<template>
  <div class="dashboard-view" >
    <div class="count-to-view">
      <count-to
        v-for="item in CountToList"
        :key="item.icon"
        :title="item.title"
        :endVal="item.endVal"
        :icon="item.icon"
        :color="item.color"
      />
    </div>
    <StackedLineChar />
    <LineChar />
    <div class="flex-layout">
      <Pie />
      <Scatter />
    </div>
    
  </div>
</template>

<script>
import CountTo from "../../components/CountTo/index";
import StackedLineChar from "../../components/Echarts/StackedLineChar/index"
import LineChar from "../../components/Echarts/LineChar/index"
import Pie from "../../components/Echarts/Pie/index"
import Scatter from "../../components/Echarts/Scatter/index"
export default {
  components: {
    CountTo,
    StackedLineChar,
    LineChar,
    Pie,
    Scatter
  },
  data() {
    return {
      CountToList: [
        {
          endVal: 12871,
          icon: "ios-people",
          color: "#41B884",
          title: "People",
        },
        {
          endVal: 5,
          icon: "ios-alarm",
          color: "#107BFF",
          title: "Alarm",
        },
        {
          endVal: 687,
          icon: "ios-camera",
          color: "#F0671A",
          title: "Camera",
        },
        {
          endVal: 12802,
          icon: "ios-cloud-download",
          color: "#5A52F2",
          title: "Download",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard-view {
  display: flex;
  flex-direction: column;
  .flex-layout {
    display: flex;
    justify-content: space-between;
  }
  .count-to-view {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
}

</style>
