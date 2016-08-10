<template lang="html">

    <div class="ant-table" :class="[size]">
        <table>
            <thead>
                <slot name="header"></slot>
            </thead>
            <tbody>
                <slot name="content"></slot>
            </tbody>
        </table>
        <slot></slot>
    </div>

</template>

<script>
    import tableHeader from './header'
    import tableContent from './content'

    export default {
        props: {
            size:{
                type: String,
                // 在设置值之前转换值,不必使用计算属性
                coerce:function (val) {
                    return "ant-table-" + val;
                }
            }
        },
        /*
            我们应当使用一个函数作为 data 选项，让这个函数返回一个新对象
            不能直接简单地把一个对象作为组件的data选项,这会导致所有的实例将共享同一个 data 对象！
         */
        data: function () {
            return {

            }
        },
        computed:{
        },
        ready: function () {
            console.log(this.items)
        },
        attached: function () {
        },
        methods: {

        },
        components: {
            tableHeader,
            tableContent
        }
    }
</script>

<style lang="css">
</style>
