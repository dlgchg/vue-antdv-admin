<!--
 * @Author: your name
 * @Date: 2020-08-14 14:37:02
 * @LastEditTime: 2020-08-14 14:43:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-iview-admin/src/views/component/Step.vue
-->
<template>
  <div class="step-view">
    <div>
      <h2>基础用法</h2>
      <p>基本用法，组件会根据current自动判断各步骤状态</p>
      <Steps :current="1">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      </Steps>
    </div>
    <div>
      <h2>迷你版</h2>
      <p>设置属性size为small启用迷你版。</p>
      <Steps :current="2" size="small">
        <Step title="已完成"></Step>
        <Step title="进行中"></Step>
        <Step title="待进行"></Step>
        <Step title="待进行"></Step>
      </Steps>
    </div>
    <div>
      <h2>带图标的步骤条</h2>
      <p>通过设置Step的icon属性可以自定义图标。</p>
      <Steps :current="1">
        <Step title="注册" icon="ios-person"></Step>
        <Step title="上传头像" icon="ios-camera"></Step>
        <Step title="验证邮箱" icon="ios-mail"></Step>
      </Steps>
    </div>
    <div>
      <h2>切换步骤</h2>
      <p>点击下一步按钮可以切换当前进度状态。</p>
      <Steps :current="current">
        <Step title="步骤1"></Step>
        <Step title="步骤2"></Step>
        <Step title="步骤3"></Step>
        <Step title="步骤4"></Step>
      </Steps>
      <Button type="primary" @click="next">Next step</Button>
    </div>
    <div>
      <h2>垂直方向</h2>
      <p>设置属性direction为vertical在垂直方向展示。</p>
      <Steps :current="2" direction="vertical">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      </Steps>
    </div>
    <div>
      <h2>步骤运行错误</h2>
      <p>设置Steps的属性status为error指定当前步骤状态。</p>
      <Steps :current="1" status="error">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      </Steps>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    next() {
      if (this.current == 3) {
        this.current = 0;
      } else {
        this.current += 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.step-view {
  display: flex;
  flex-direction: column;
  div{
      margin-bottom: 20px;
  }
}
</style>
