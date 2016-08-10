<template lang="html">

    <div class="ant-table" :class="[size]">
        <table>
            <thead>
            <tr>
                <th>选择</th>
                <th>姓名</th>
                <th>性别</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td><input type="checkbox" @click="clickCheck($index,$event)" v-model="checkStates[$index]"></td>
                    <td>{{item.name}}</td>
                    <td>{{item.sex}}</td>
                </tr>
            </tbody>
        </table>
    </div>


</template>

<script>
    export default {
        props: {
            size:{
                type: String,
                // 在设置值之前转换值,不必使用计算属性
                coerce:function (val) {
                    return "ant-table-" + val;
                }
            },
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
//                全选状态
                checkAllState:false,
                checkStates:[false,false]
            }
        },
        computed:{
//            checkStates:function () {
//                return this.items.map(x => false);
//            }
        },
        ready: function () {
            console.log(this.items)
        },
        attached: function () {
        },
        events:{
            checkAll:function (event) {
//                设置状态
                let self = this;
                this.checkAllState = !this.checkAllState;
                for (var i = 0; i < this.checkStates.length; i++) {
                    self.checkStates.$set(i,self.checkAllState);
                }
            }
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
