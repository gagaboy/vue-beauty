<template lang="html">

    <div class="ant-table" :class="[size]">
        <table>
            <thead>
                <tr>
                    <th v-for="column in columns">{{column.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in current">
                    <td><input type="checkbox" @click="clickCheck($index,$event)"></td>
                    <td>{{item.name}}</td>
                    <td>{{item.sex}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="{{columns.length}}">
                        <span>分页条数:
                            <select v-model="pagesize">
                                <option value="5" selected>5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                        </span>
                        <span style="float:right">
                            <v-radio-group
                                    type='button'
                                    :on-change='pageChange'
                                    :default-value='pagenum'
                                    :radios='pages'>
                            </v-radio-group>
                        </span>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>


</template>

<script>
    import vRadio from '../radio'
    import vButton from '../button'

    export default {
        props: {
            size:{
                type: String,
                // 在设置值之前转换值,不必使用计算属性
                coerce:function (val) {
                    return "ant-table-" + val;
                }
            },
//            原始数据
            items:{
                type: Array,
                required: true
            },
//            表头信息
            columns:{
                type: Array,
                required: true
            },
//            分页大小
            pagesize:{
                type:Number,
                default: 5
            },
//            当前页数
            pagenum:{
                type:Number,
                default: 1
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
//            当前分页数据
            current:function () {
                return this.items.slice((this.pagenum-1)*this.pagesize,this.pagenum*this.pagesize);
            },
//            总页数
            total:function () {
                return Math.ceil(this.items.length/this.pagesize);
            },
            //分页数据
            pages:function () {
                const pages = [];
                for (var i = 0; i < this.total; i++) {
                    pages.push({value:i+1,name:i+1});
                }
                return pages;
            }
        },
        ready: function () {
            console.log(this.pagenum)
            console.log(this.pages)
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
            },
//            翻页
            pageChange:function (event) {
//                radioGroup在onChange回掉中没有直接回传当前值
//                事件只触发一次,有bug
                console.log(event);
                this.pagenum = event.target.value;
                console.log(this.pagenum);
            }
        },
        components: {
            vRadio,
            vRadioGroup:vRadio.vRadioGroup,
            vButton
        }
    }
</script>

<style lang="css">
</style>
