<!--
 * @Author: your name
 * @Date: 2020-08-13 09:00:56
 * @LastEditTime: 2020-08-14 14:27:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-iview-admin/src/views/component/Tab.vue
-->
<template>
  <div class="tab-view">
    <div>
      <h2>基础用法</h2>
      <p>
        value 与 TabPane 的 name 对应，用于标识当前激活的是哪一项，name 值默认从
        0 开始，默认激活第一项。可以使用 v-model 双向绑定数据。
      </p>
      <Tabs value="name1">
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
      </Tabs>
    </div>
    <div>
      <h2>禁用某一项。</h2>
      <Tabs>
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二" disabled>标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
      </Tabs>
    </div>
    <div>
      <h2>图标</h2>
      <p>通过设置属性 icon，可以显示一个图标</p>
      <Tabs>
        <TabPane label="macOS" icon="logo-apple">标签一的内容</TabPane>
        <TabPane label="Windows" icon="logo-windows">标签二的内容</TabPane>
        <TabPane label="Linux" icon="logo-tux">标签三的内容</TabPane>
      </Tabs>
    </div>
    <div>
      <h2>迷你型</h2>
      <p>设置属性 size 为 small 可以显示为迷你型，只在 type 为 line 时有效</p>
      <Tabs size="small">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
      </Tabs>
    </div>
    <div>
      <h2>卡片样式</h2>
      <p>设置属性 type 为 card 可以显示卡片样式，常用于容器顶部</p>
      <Tabs type="card">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
      </Tabs>
    </div>
    <div>
      <h2>可关闭</h2>
      <p>
        通过设置属性 closable 可以关闭某一项，仅在 type 为 card 时有效。需结合
        @on-tab-remove 事件手动关闭标签页效
      </p>
      <Tabs type="card" closable @on-tab-remove="handleTabRemove">
        <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
        <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
        <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
      </Tabs>
    </div>
    <div>
      <h2>自定义标签页</h2>
      <p>设置 label 为 Render 函数后，可以自定义标签页的内容</p>
      <Tabs value="name1">
        <TabPane :label="label" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
      </Tabs>
    </div>
    <div>
      <h2>附加内容</h2>
      <p>设置 slot extra 可以在页签右边添加附加操作</p>
      <Tabs type="card">
        <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab"
          >标签{{ tab }}</TabPane
        >
        <Button @click="handleTabsAdd" size="small" slot="extra">增加</Button>
      </Tabs>
    </div>
    <div>
      <h2>拖拽调整页签顺序</h2>
      <p>
        开启属性 draggable，并配合事件 @on-drag-drop 可以实现拖拽调整页签顺序。
      </p>
      <Tabs type="card" :draggable="true" @on-drag-drop="handleDragDrop">
        <TabPane
          v-for="(tab, index) in tabList"
          :key="index"
          :label="tab.label"
          :name="tab.name"
          >{{ tab.label }}</TabPane
        >
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab0: true,
      tab1: true,
      tab2: true,
      tabs: 2,
      label: (h) => {
        return h("div", [
          h("span", "标签一"),
          h("Badge", {
            props: {
              count: 3,
            },
          }),
        ]);
      },
      tabList: [
        {
          label: "标签一",
          name: "name1",
        },
        {
          label: "标签二",
          name: "name2",
        },
        {
          label: "标签三",
          name: "name3",
        },
        {
          label: "标签四",
          name: "name4",
        },
        {
          label: "标签五",
          name: "name5",
        },
      ],
    };
  },
  methods: {
    handleTabsAdd() {
      this.tabs++;
    },
    handleTabRemove(name) {
      this["tab" + name] = false;
    },
    handleDragDrop(name, newName, a, b) {
      // names 为调整后的 name 集合
      this.tabList.splice(b, 1, ...this.tabList.splice(a, 1, this.tabList[b]));
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-view {
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 20px;
  }
}
</style>
