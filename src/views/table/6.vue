<template lang="html">

  <div>

    <section class="markdown">
      <h1>表格-slot内容分发</h1>
      <p>
        显示数据。
      </p>
      <h2>问题</h2>
      <ul>
        <p>
          <p>实际上这个例子并不适合演示slot,存在几个问题:</p>
          <ol>
            <li>由于table内不能使用自定义元素,所以导致模板渲染异常</li>
            <li>由于表格数据与表头存在对应关系,所以将表头和表格分成两个子组件,会导致两个组件相互独立无法通信,产生一系列问题</li>
          </ol>
          <p>但这个例子说明了内容分发的实际作用,tab组件或panel组件更适合使用slot分发</p>
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">

      <div class="ant-col-lg-24 code-boxes-col-2-1">

        <code-box
                title="表格-slot分发"
                describe="slot分发"
                code="<data-table :items='items' v-on:select='handleIt'></data-table>"
        >
          <data-table v-on:select='handleIt'>
              <p>这是一段没啥用的文字</p>
              <table-content :items='items' slot='content'></table-content>
              <table-header :columns='columns' slot='header'></table-header>
          </data-table>
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

import dataTable from '../../../components/table/6'
import tableHeader from '../../../components/table/header'
import tableContent from '../../../components/table/content'
import codeBox from '../../components/codeBox'
import apiTable from '../../components/apiTable'

export default {
  data: function () {
    return {
      apis: [],
      items:[
        {name:"李前永",sex:"男"},
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
    tableHeader,
    tableContent,
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
