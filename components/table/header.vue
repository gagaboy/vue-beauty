<template lang="html">

    <!--<thead>-->
        <tr>
            <th v-for="item in columns">{{item.title}}</th>
        </tr>
    <!--</thead>-->

</template>

<script>
    export default {
        props: {
            columns:{
                type: Array,
                required: true
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
        },
        attached: function () {
        },
        methods: {
        },
        components: {}
    }
</script>

<style lang="css">
</style>
