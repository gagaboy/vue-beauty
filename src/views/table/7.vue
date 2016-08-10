<template lang="html">

  <div>

    <section class="markdown">
      <h1>表格-比较完备的纯客户端数据表格</h1>
      <p>
        显示数据。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          自己想。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">

      <div class="ant-col-lg-24 code-boxes-col-2-1">

        <code-box
                title="表格-自定义事件"
                describe="自定义事件"
                code="<data-table :items='items' v-on:select='handleIt'></data-table>"
        >
          <data-table :items='items'  :columns='columns' v-on:select='handleIt'></data-table>
          <p v-if='msg.name'>点击了第{{msg.index+1}}行,勾选状态:{{msg.checked}},对应的人:{{msg.name}}</p>
        </code-box>

      </div>


    </div>


    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import dataTable from '../../../components/table/7'
import codeBox from '../../components/codeBox'
import apiTable from '../../components/apiTable'

export default {
  data: function () {
    return {
      apis: [],
      items:[
        {name:"李前永",sex:"男"},
        {name:"王永强",sex:"男"},
        {name:"王道伟",sex:"男"},
        {name:"余力",sex:"男"},
        {name:"邓波",sex:"男"},
        {name:"姚丽梅",sex:"男"},
        {name:"徐远志",sex:"男"},
        {name:"蓝冰",sex:"男"},
        {name:"羊峻霄",sex:"男"},
        {name:"胥庆龄",sex:"男"},
        {name:"邓磊",sex:"女"}
      ],
      columns:[
        {title:"选择"},
        {title:"姓名"},
        {title:"性别"}
      ],
      msg:{}
    }
  },
  components: {
    dataTable,
    codeBox,
    apiTable
  },
  methods:{
    handleIt:function (msg) {
      console.log(msg);
      this.msg = msg;
    }
  }
}
</script>

<style lang="less">
</style>
