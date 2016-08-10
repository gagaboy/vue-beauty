<template lang="html">

  <div>

    <section class="markdown">
      <h1>简单表格</h1>
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

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="简单表格"
          describe="直接输出简单表格"
          code="<data-table></data-table>"
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

import dataTable from '../../../components/table/1'
import codeBox from '../../components/codeBox'
import apiTable from '../../components/apiTable'

export default {
  data: function () {
    return {
      apis: []
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
