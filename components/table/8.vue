<template lang="html">

    <div class="ant-table" :class="[size]">
        <table>
            <thead>
                <tr>
                    <th v-for="column in columns">{{column.title}}</th>
                </tr>
            </thead>
            <tbody v-show="current.length">
                <tr v-for="item in current">
                    <td v-for="column in columns">
                        <template v-if="column.type=='html'">
                            {{{item[column.field]}}}
                        </template>
                        <template v-else>
                            {{item[column.field]}}
                        </template>
                    </td>
                    <!--<td><input type="checkbox" @click="clickCheck($index,$event)"></td>-->
                    <!--<td>{{item.name}}</td>-->
                    <!--<td>{{item.sex}}</td>-->
                </tr>
            </tbody>
            <tbody v-show="!current.length">
                <tr>
                    <td colspan="{{columns.length}}" style="text-align:center">loading...</td>
                </tr>
            </tbody>
            <tfoot v-show="current.length">
                <tr>
                    <td colspan="{{columns.length}}">
                        <span>分页条数:
                            <select v-model="pagesize">
                                <option value="5">5</option>
                                <option value="10" selected>10</option>
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
//            接口地址
            url:{
                type: String,
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
                default: 10
            },
//            当前页数
            pagenum:{
                type:Number,
                default: 1
            },
            formatter:{
                type:Function
            }
        },
        /*
            我们应当使用一个函数作为 data 选项，让这个函数返回一个新对象
            不能直接简单地把一个对象作为组件的data选项,这会导致所有的实例将共享同一个 data 对象！
         */
        data: function () {
            return {
                //            当前分页数据,默认没有
                current:[],
                total:0
            }
        },
        computed:{
            //分页数据
            pages:function () {
                const pages = [];
                for (var i = 0; i < this.total; i++) {
                    pages.push({value:i+1,name:i+1});
                }
                return pages;
            }
        },
        created:function () {
//            初始加载数据
            this.loadData({pagenum:this.pagenum});
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
                this.loadData({pagenum:this.pagenum});
            },
            loadData:function (params) {
                var self = this;
//                拼装请求参数
                var url = './data/data' + params.pagenum + '.json';
                this.$http.get(url,{params:params}).then((response) => {
                    const r = response.json();
                    let d = self.formatter ? self.formatter(r.data) : r.data;
                    self.current = d;
                    self.total = Math.ceil(r.total/self.pagesize);
                    self.pagenum = r.pagenum;
                    self.pagesize = r.pagesize;
                }, (response) => {
                        // error callback
                });
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
