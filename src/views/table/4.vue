<template lang="html">

  <div>

    <section class="markdown">
      <h1>表格-动态Props</h1>
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
                title="表格-小尺寸"
                describe="小尺寸表格"
                code="<data-table size='small'></data-table>"
        >
          <data-table size='small' :items='items'></data-table>
        </code-box>

      </div>

      <div class="ant-col-lg-24 code-boxes-col-2-1">

        <code-box
          title="表格-小尺寸"
          describe="小尺寸表格"
          code="<data-table :items='items'></data-table>"
        >
          <data-table></data-table>
        </code-box>

      </div>


    </div>


    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import dataTable from '../../../components/table/4'
import codeBox from '../../components/codeBox'
import apiTable from '../../components/apiTable'

export default {
  data: function () {
    return {
      apis: [],
      items:[
        {name:"李前永",sex:"男"},
        {name:"邓磊",sex:"女"}
      ]
    }
  },
  components: {
    dataTable,
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">
</style>
