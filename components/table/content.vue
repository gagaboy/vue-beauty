<template lang="html">

    <!--<tbody>-->
        <tr v-for="item in items">
            <td><input type="checkbox" @click="clickCheck($index,$event)"></td>
            <td>{{item.name}}</td>
            <td>{{item.sex}}</td>
        </tr>
    <!--</tbody>-->

</template>

<script>
    export default {
        props: {
            items:{
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
            console.log(this.items)
        },
        attached: function () {
        },
        methods: {
            clickCheck:function (index,event) {
                console.log(index);
                console.log(event);
                //组装消息
                const item = this.items[index];
                const msg = Object.assign({
                    index:index,
                    checked:event.target.checked
                },item);
                //派发事件
                this.$dispatch('select',msg);
            }
        },
        components: {}
    }
</script>

<style lang="css">
</style>
