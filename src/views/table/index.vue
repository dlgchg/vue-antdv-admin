<!--
 * @Author: your name
 * @Date: 2020-08-19 12:36:54
 * @LastEditTime: 2020-08-19 12:57:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-iview-admin/src/views/table/index.vue
-->
<template>
  <div>
      <a href="https://www.iviewui.com/components/table">iView Table</a>
    <div>
      <h2>基础用法</h2>
      <Table stripe border :columns="columns1" :data="data1"></Table>
    </div>
    <div>
      <h2>固定表头</h2>
      <p>
        通过设置属性 height
        给表格指定高度后，会自动固定表头。当纵向内容过多时可以使用
      </p>
      <Table
        stripe
        border
        height="200"
        :columns="columns1"
        :data="data1"
      ></Table>
    </div>
    <div>
      <h2>固定列</h2>
      <p>
        通过给数据 columns 的项设置 fixed 为 left 或
        right，可以左右固定需要的列。当横向内容过多时可以使用。
      </p>
      <Table width="550" border :columns="columns2" :data="data3"></Table>
    </div>
    <div>
      <h2>可选择</h2>
      <p>
        通过给 columns 数据设置一项，指定 type:
        'selection'，即可自动开启多选功能。 给 data 项设置特殊 key _checked:
        true 可以默认选中当前项。 给 data 项设置特殊 key _disabled: true
        可以禁止选择当前项。 正确使用好以下事件，可以达到需要的效果：
        @on-select，选中某一项触发，返回值为 selection 和
        row，分别为已选项和刚选择的项。 @on-select-all，点击全选时触发，返回值为
        selection，已选项。
        @on-selection-change，只要选中项发生变化时就会触发，返回值为
        selection，已选项。
      </p>
      <Table border ref="selection" :columns="columns4" :data="data1"></Table>
      <Button @click="handleSelectAll(true)">Set all selected</Button>
      <Button @click="handleSelectAll(false)">Cancel all selected</Button>
    </div>
    <div>
      <h2>排序</h2>
      <p>
        通过给 columns 数据的项，设置 sortable: true，即可对该列数据进行排序。
        排序默认使用升序和降序，也可以通过设置属性 sortMethod
        指定一个自定义排序函数，接收三个参数 a 、 b 和 type。 通过给某一列设置
        sortType 可以在初始化时使用排序。 如果使用远程排序，可以设置 sortable:
        'custom'，然后在触发排序事件
        @on-sort-change后，进行远程排序，并手动设置新的 data，详见 API。
        注意，排序并不会影响到源数据 data。
      </p>
      <Table border :columns="columns5" :data="data5"></Table>
    </div>
    <div>
      <h2>筛选</h2>
      <p>
        通过给 columns 数据的项，设置 filters，可进行筛选，filters
        接收一个数组，详见 Demo 和 API。 必须指定一个筛选函数 filterMethod
        才可以进行筛选，filterMethod 传入两个参数 value 和 row，详见 Demo 和
        API。 如果指定 filterMultiple: false，则使用单选，默认为多选。
        注意，筛选并不会影响到源数据 data。
      </p>
      <Table border :columns="columns6" :data="data5"></Table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
        },
      ],
      columns2: [
        {
          title: "Name",
          key: "name",
          width: 100,
          fixed: "left",
        },
        {
          title: "Age",
          key: "age",
          width: 100,
        },
        {
          title: "Province",
          key: "province",
          width: 100,
        },
        {
          title: "City",
          key: "city",
          width: 100,
        },
        {
          title: "Address",
          key: "address",
          width: 200,
        },
        {
          title: "Postcode",
          key: "zip",
          width: 100,
        },
        {
          title: "Action",
          key: "action",
          fixed: "right",
          width: 120,
          render: (h) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small",
                  },
                },
                "View"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small",
                  },
                },
                "Edit"
              ),
            ]);
          },
        },
      ],
      data3: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          province: "America",
          city: "New York",
          zip: 100000,
        },
        {
          name: "Jim Green",
          age: 24,
          address: "Washington, D.C. No. 1 Lake Park",
          province: "America",
          city: "Washington, D.C.",
          zip: 100000,
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          province: "Australian",
          city: "Sydney",
          zip: 100000,
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          province: "Canada",
          city: "Ottawa",
          zip: 100000,
        },
      ],
      columns4: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
      ],
      columns5: [
        {
          title: "Date",
          key: "date",
          sortable: true,
        },
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
          sortable: true,
        },
        {
          title: "Address",
          key: "address",
        },
      ],
      data5: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
        },
      ],
      columns6: [
        {
          title: "Date",
          key: "date",
        },
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
          filters: [
            {
              label: "Greater than 25",
              value: 1,
            },
            {
              label: "Less than 25",
              value: 2,
            },
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.age > 25;
            } else if (value === 2) {
              return row.age < 25;
            }
          },
        },
        {
          title: "Address",
          key: "address",
          filters: [
            {
              label: "New York",
              value: "New York",
            },
            {
              label: "London",
              value: "London",
            },
            {
              label: "Sydney",
              value: "Sydney",
            },
          ],
          filterMethod(value, row) {
            return row.address.indexOf(value) > -1;
          },
        },
      ],
    };
  },
  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    },
  },
};
</script>

<style></style>
