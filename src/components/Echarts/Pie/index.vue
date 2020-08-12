<!--
 * @Author: your name
 * @Date: 2020-08-12 11:33:10
 * @LastEditTime: 2020-08-12 14:33:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-iview-admin/src/components/Echarts/Pie/index.vue
-->
<template>
  <div class="chart-card">
    <div id="dash-pie" style="width: 100%; height: 500px" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChar();
    let _this = this;
    window.addEventListener("resize", () => {
      _this.chart.resize();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChar() {
      this.chart = this.$echarts.init(document.getElementById("dash-pie"));
      let options = {
        title: {
          text: "Customized Pie",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc",
          },
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 274, name: "联盟广告" },
              { value: 235, name: "视频广告" },
              { value: 400, name: "搜索引擎" },
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)",
            },
            labelLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)",
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
            itemStyle: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },

            animationType: "scale",
            animationEasing: "elasticOut",
          },
        ],
      };
      this.$nextTick(() => {
        this.chart.setOption(options);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.chart-card {
  background: white;
  width: 30%;
  padding: 15px 30px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 3px 3px 5px rgba(#000000, 0.05), -3px -3px 5px rgba(#000000, 0.05);
  margin-top: 20px;
}
</style>
