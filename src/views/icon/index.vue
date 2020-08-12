<!--
 * @Author: your name
 * @Date: 2020-08-10 13:05:09
 * @LastEditTime: 2020-08-12 15:44:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/src/views/icon/index.vue
-->
<template>
  <div>
    <div>
      图标大小<InputNumber :max="50" :min="20" v-model="iconSize" />
      <RadioGroup v-model="iconColor">
        <Radio label="#525B6E">
          <span>默认</span>
        </Radio>
        <Radio label="#DA2D3B">
          <span>红色</span>
        </Radio>
        <Radio label="#41B884">
          <span>绿色</span>
        </Radio>
        <Radio label="#F0671A">
          <span>橘色</span>
        </Radio>
        <Radio label="#000000">
          <span>黑色</span>
        </Radio>
      </RadioGroup>
    </div>
    <div class="icon-layout">
      <div class="icon-item" v-for="icon in icons" :key="icon" @click="copyIcon(icon)">
        <Icon :type="icon" :size="iconSize" :color="iconColor" />
        <h3 :style="{'color': iconColor}">{{ icon }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconColor: "#525B6E",
      iconSize: 30,
      icons: [
        "ios-add",
        "md-add",
        "ios-add-circle",
        "ios-add-circle-outline",
        "md-add-circle",
        "ios-alarm",
        "ios-alarm-outline",
        "md-alarm",
        "ios-albums",
        "ios-albums-outline",
        "md-albums",
        "ios-alert",
        "ios-alert-outline",
        "md-alert",
        "ios-american-football",
        "logo-android",
        "logo-angular",
        "ios-aperture",
        "ios-aperture-outline",
        "md-aperture",
      ],
    };
  },
  methods: {
    copyIcon(icon) {
      const _this = this
      const iconSize = this.iconSize
      const iconColor = this.iconColor
      let copyText = `<Icon type="${icon}" size="${iconSize}" color="${iconColor}" />`
      this.$copyText(copyText).then(() => {
        _this.$Message.info('Icon已复制');
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-layout {
  display: flex;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 15px 30px;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 20px;
  .icon-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    margin: 20px 0;
    cursor: pointer;
  }
}
</style>
