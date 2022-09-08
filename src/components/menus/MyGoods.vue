<template>
    <div class="common-layout">
        <el-container>
            <el-header>商品选择</el-header>
            <el-main>
                <el-form-item label="Activity name">
                    <el-input/>
                </el-form-item>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column type="selection"/>
                    <el-table-column prop="name" label="名称" width="180"/>
                    <el-table-column prop="date" label="日期" width="180"/>
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
                    <el-table-column prop="operation" label="操作">
                        <el-button type="danger" :icon="Delete" circle/>
                    </el-table-column>
                    <el-table-column prop="details" label="详情"/>
                </el-table>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
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
    export default {
        name: 'MyGoods',
        data() {
            return {
                tableData: [
                    {
                        id:1,
                        date: '2016-05-03',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        src: '../src/assets/logo.png',
                        flag:false,
                        inputValue:''
                    },
                    {
                        id:2,
                        date: '2016-05-02',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        src: '../src/assets/logo.png',
                        flag:false,
                        inputValue:''
                    },
                    {
                        id:3,
                        date: '2016-05-04',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        src: '../src/assets/logo.png',
                        flag:false,
                        inputValue:''
                    },
                    {
                        id:4,
                        date: '2016-05-01',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        src: '../src/assets/logo.png',
                        flag:false,
                        inputValue:''
                    },
                ],
                Delete: Delete,
                Check:Check,
            }
        },
        methods:{
            onInputConfig(row){
                const val = row.inputValue
                row.inputValue = ''
                row.flag = false
            }
        }
    }
</script>

<style lang="less" scoped>
</style>