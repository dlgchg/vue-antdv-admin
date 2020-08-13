<!--
 * @Author: your name
 * @Date: 2020-08-13 09:00:16
 * @LastEditTime: 2020-08-13 09:20:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-iview-admin/src/views/component/Button.vue
-->
<template>
  <div class="button-view">
    <div>
      <h2>普通按钮</h2>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="info">Info</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
    </div>
    <div class="gary-view">
      <h2>幽灵按钮</h2>
      <p>幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。</p>
      <Button type="default" ghost>Default</Button>
      <Button type="primary" ghost>Primary</Button>
      <Button type="dashed" ghost>Dashed</Button>
      <Button type="text" ghost>Text</Button>
      <Button type="info" ghost>Info</Button>
      <Button type="success" ghost>Success</Button>
      <Button type="warning" ghost>Warning</Button>
      <Button type="error" ghost>Error</Button>
    </div>
    <div>
      <h2>图标按钮及按钮形状</h2>
      <p>
        通过设置icon属性在Button内嵌入一个Icon，或者直接在Button内使用Icon组件。使用Button的icon属性，图标位置将在最左边，如果需要自定义位置，需使用Icon组件。通过设置shape属性为circle，可将按钮置为圆的形状。
      </p>
      <Button type="primary" shape="circle" icon="ios-search"></Button>
      <Button type="primary" icon="ios-search">Search</Button>
      <Button type="primary" shape="circle" icon="ios-search">Search</Button>
      <Button type="primary" shape="circle">Circle</Button>
      <Button shape="circle" icon="ios-search"></Button>
      <Button icon="ios-search">Search</Button>
      <Button shape="circle" icon="ios-search">Search</Button>
      <Button shape="circle">Circle</Button>
    </div>
    <div>
      <h2>按钮尺寸</h2>
      <p>
        按钮有三种尺寸：大、默认（中）、小通过设置size为large和small将按钮设置为大和小尺寸，不设置为默认（中）尺寸。
      </p>
      <RadioGroup v-model="buttonSize" type="button">
        <Radio label="large">Large</Radio>
        <Radio label="default">Default</Radio>
        <Radio label="small">small</Radio>
      </RadioGroup>
      <Button :size="buttonSize" type="primary">Primary</Button>
      <Button :size="buttonSize" type="default">Default</Button>
      <Button :size="buttonSize" type="dashed">Dashed</Button>
      <Button :size="buttonSize" type="text">Text</Button>
      <Button
        :size="buttonSize"
        icon="ios-download-outline"
        type="primary"
        shape="circle"
      ></Button>
      <Button :size="buttonSize" icon="ios-download-outline" type="primary"
        >Download</Button
      >
      <ButtonGroup :size="buttonSize">
        <Button :size="buttonSize" type="primary">
          <Icon type="ios-arrow-back" />
          Backward
        </Button>
        <Button :size="buttonSize" type="primary">
          Forward
          <Icon type="ios-arrow-forward" />
        </Button>
      </ButtonGroup>
    </div>
    <div>
      <h2>长按钮</h2>
      <p>通过设置属性 long 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。</p>
      <Button type="success" long>SUBMIT</Button>
      <br /><br />
      <Button type="error" long>DELETE</Button>
    </div>
    <div>
      <h2>加载中状态</h2>
      <p>
        通过添加loading属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。
      </p>
      <Button type="primary" loading>Loading...</Button>
      <Button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
      </Button>
      <Button
        type="primary"
        :loading="loading2"
        icon="ios-power"
        @click="toLoading2"
      >
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
      </Button>
      <Button loading shape="circle"></Button>
      <Button loading shape="circle" type="primary"></Button>
    </div>
    <div>
      <h2>按钮组合</h2>
      <p>
        将多个Button放入ButtonGroup内，可实现按钮组合的效果。通过设置ButtonGroup的属性size为large和small，可将按钮组尺寸设置为大和小，不设置size，则为默认（中）尺寸。通过设置ButtonGroup的属性shape为circle，可将按钮组形状设置为圆角。
      </p>
      <ButtonGroup>
        <Button>Cancel</Button>
        <Button type="primary">Confirm</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button disabled>Yesterday</Button>
        <Button disabled>Today</Button>
        <Button disabled>Tomorrow</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button>M</Button>
        <Button type="dashed">R</Button>
      </ButtonGroup>
    </div>
    <div>
      <h2>按钮组纵向排列</h2>
      <p>通过设置ButtonGroup的属性vertical，可以使按钮组纵向排列。</p>
      <ButtonGroup vertical>
        <Button icon="logo-facebook"></Button>
        <Button icon="logo-twitter"></Button>
        <Button icon="logo-googleplus"></Button>
        <Button icon="logo-tumblr"></Button>
      </ButtonGroup>
    </div>
    <div>
      <h2>跳转按钮</h2>
      <p>
        通过设置 to 可以实现点击按钮直接跳转，支持传入 vue-router 对象。设置
        replace 则不会保存历史记录。设置 target，会跟 a 标签一样的行为。
      </p>
      <Button to="/">Normal</Button>
      <Button to="/" replace>No history</Button>
      <Button to="/" target="_blank">New window</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      loading2: false,
    };
  },
  methods: {
    toLoading() {
      this.loading = true;
    },
    toLoading2() {
      this.loading2 = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.ivu-btn {
  margin: 10px;
}

div {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  h2,
  p {
    width: 100%;
  }
}

.gary-view {
  background-color: gray;
  padding: 10px;
  box-sizing: border-box;
  h2,
  p {
    color: white;
  }
}
</style>
