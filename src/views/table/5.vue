<template lang="html">

  <div>

    <section class="markdown">
      <h1>表格-自定义事件</h1>
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
          <data-table :items='items' v-ref:one></data-table>

          <v-button type='primary' @click='checkAll'>全选</v-button>

          <br>
          <br>
          <data-table :items='items' v-on:select='handleIt' v-ref:two></data-table>
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

import dataTable from '../../../components/table/5'
import codeBox from '../../components/codeBox'
import apiTable from '../../components/apiTable'
import vButton from '../../../components/button'

export default {
  data: function () {
    return {
      apis: [],
      items:[
        {name:"李前永",sex:"男"},
        {name:"邓磊",sex:"女"}
      ],
      msg:{}
    }
  },
  components: {
    dataTable,
    codeBox,
    apiTable,
    vButton
  },
  methods:{
    handleIt:function (msg) {
      console.log(msg);
      this.msg = msg;
    },
    checkAll:function () {
//      触发子组件上的checkAll事件
      this.$refs.one.$emit("checkAll");
    }
  }
}
</script>

<style lang="less">
</style>
