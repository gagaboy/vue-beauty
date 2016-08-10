<template lang="html">

  <div>

    <section class="markdown">
      <h1>表格-服务端加载</h1>
      <p>
        显示数据。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          遗留问题:formatter函数格式化后返回的html内容,插入后无法直接只用vue的事件机制,怎么办?
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
          <data-table :url='url' :columns='columns' v-on:select='handleIt' :formatter='formatter'></data-table>

        </code-box>

      </div>


    </div>


    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import dataTable from '../../../components/table/8'
import codeBox from '../../components/codeBox'
import apiTable from '../../components/apiTable'

export default {
  data: function () {
    return {
      apis: [],
      url:"/data/data.json",
      columns:[
        {title:"选择",field:'checkbox',type:'html'},
        {title:"姓名",field:'name'},
        {title:"性别",field:'sex'}
      ],
      msg:{},
      formatter:function (data) {
        console.log(data);
        for (var obj of data) {
          obj.checkbox = "<input type='checkbox' @click='clickCheck(" + obj.id + ",$event)'>";
        }
        return data;
      }
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
    },
    clickCheck:function () {
      alert(0)
    }
  }
}
</script>

<style lang="less">
</style>
