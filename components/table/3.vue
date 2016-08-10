<template lang="html">

    <div class="ant-table" :class="[sizeClass]">
        <table>
            <thead>
            <tr>
                <th>姓名</th>
                <th>性别</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td>{{item.name}}</td>
                    <td>{{item.sex}}</td>
                </tr>
            </tbody>
        </table>
    </div>


</template>

<script>
    export default {
        props: ['size','items'],
        /*
            我们应当使用一个函数作为 data 选项，让这个函数返回一个新对象
            不能直接简单地把一个对象作为组件的data选项,这会导致所有的实例将共享同一个 data 对象！
         */
        data: function () {
            return {

            }
        },
        computed:{
            sizeClass:function () {
                if(this.size){
                    return "ant-table-" + this.size;
                }else{
                    return "";
                }
            }
        },
        ready: function () {
            console.log(this.items)
        },
        attached: function () {
        },
        methods: {},
        components: {}
    }
</script>

<style lang="css">
</style>
