<template>
    <div class="common-layout">
        <el-container>
            <el-header>商品选择</el-header>
            <el-main>
                <el-form-item>
                    <label>物品添加</label>
                    <el-input class="w-50 m-2"/>
                    <el-button type="primary">添加</el-button>
                </el-form-item>
                <el-table :data="tableData" style="width: 100%" height="380">
                        <el-table-column type="selection"/>
                        <el-table-column prop="name" label="名称" width="100"/>
                        <el-table-column prop="gender" label="性别" width="90"/>
                        <el-table-column prop="date" label="日期" width="250"/>
                        <el-table-column prop="photo" label="图片">
                            <template #default="scope">
                                <el-image :src="scope.row.src" style="width:50px;height:50px"/>
                            </template>
                        </el-table-column>
                        <el-table-column prop="label" label="标签">
                            <template #default="scope">
                                <el-input v-model.trim="scope.row.inputValue" @blur="onInputConfig(scope.row)" :id="scope.row.id" placeholder="Please input" v-if="scope.row.flag"/>
                                <label :for="scope.row.id" v-else>
                                    <el-button @click="scope.row.flag = !scope.row.flag" type="success" :icon="Check" circle />
                                </label>
                            </template>
                        </el-table-column>
                        <el-table-column prop="details" label="详情">
                            <template #default="scope">
                                <el-button type="primary" plain @click="setCongifData(scope)">详情</el-button>
                            </template>
                        </el-table-column>
                    <el-table-column prop="operation" label="操作">
                        <el-button type="danger" :icon="Delete" circle/>
                    </el-table-column>
                </el-table>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>

    <!--编辑弹出框-->
    <el-dialog title="配置框" v-model="dialogFlag" width="50%">
        <el-form :model="form" label-width="120px">
            <el-form-item label="名称">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="form.resource">
                    <el-radio label="男" />
                    <el-radio label="女" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="地市">
                <el-select v-model="form.region" placeholder="请选择地市">
                    <el-option label="上海" value="shanghai" />
                    <el-option label="北京" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="时间">
                <el-col :span="11">
                    <el-date-picker
                            v-model="form.date1"
                            type="date"
                            placeholder="开始时间"
                            style="width: 100%"
                    />
                </el-col>
                <el-col :span="2" class="text-center">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="11">
                    <el-time-picker
                            v-model="form.date2"
                            placeholder="结束时间"
                            style="width: 100%"
                    />
                </el-col>
            </el-form-item>
            <el-form-item label="标签">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="标签1" name="type" />
                    <el-checkbox label="标签2" name="type" />
                    <el-checkbox label="标签3" name="type" />
                    <el-checkbox label="标签4" name="type" />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="自我介绍">
                <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
    import {
        Check,
        Delete,
        Edit,
        Message,
        Search,
        Star,
    } from '@element-plus/icons-vue'
    import {reactive} from 'vue'
    export default {
        name: 'MyGoods',
        data() {
            return {
                tableData: [
                    {
                        id:1,
                        date: '2016-05-03 —— 2022-09-11',
                        name: 'Tom',
                        gender:'男',
                        address: 'No. 189, Grove St, Los Angeles',
                        src: '../src/assets/logo.png',
                        flag:false,
                        inputValue:''
                    },
                    {
                        id:2,
                        date: '2016-05-02 —— 2022-09-11',
                        name: 'Tom',
                        gender:'男',
                        address: 'No. 189, Grove St, Los Angeles',
                        src: '../src/assets/logo.png',
                        flag:false,
                        inputValue:''
                    },
                    {
                        id:3,
                        date: '2016-05-04 —— 2022-09-11',
                        name: 'Tom',
                        gender:'女',
                        address: 'No. 189, Grove St, Los Angeles',
                        src: '../src/assets/logo.png',
                        flag:false,
                        inputValue:''
                    },
                    {
                        id:4,
                        date: '2016-05-01 —— 2022-09-11',
                        name: 'Tom',
                        gender:'男',
                        address: 'No. 189, Grove St, Los Angeles',
                        src: '../src/assets/logo.png',
                        flag:false,
                        inputValue:''
                    },{
                        id:5,
                        date: '2016-05-01 —— 2022-09-11',
                        name: 'Tom',
                        gender:'女',
                        address: 'No. 189, Grove St, Los Angeles',
                        src: '../src/assets/logo.png',
                        flag:false,
                        inputValue:''
                    },{
                        id:6,
                        date: '2016-05-01 —— 2022-09-11',
                        name: 'Tom',
                        gender:'女',
                        address: 'No. 189, Grove St, Los Angeles',
                        src: '../src/assets/logo.png',
                        flag:false,
                        inputValue:''
                    },
                ],
                form:reactive({
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                }),
                Delete: Delete,
                Check:Check,
                dialogFlag:false
            }
        },
        methods:{
            onInputConfig(row){
                const val = row.inputValue
                row.inputValue = ''
                row.flag = false
            },
            setCongifData(scope){
                console.log(scope);
                this.dialogFlag = true
                this.form.name = scope.row.name
                this.form.resource = scope.row.gender
            }
        }
    }
</script>

<style lang="less" scoped>
</style>