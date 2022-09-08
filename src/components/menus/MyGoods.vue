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
                        <template v-slot="scope">
                            <el-image :src="src" style="width:50px;height:50px"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="label" label="标签">
                        <el-input placeholder="Please input" v-if=""/>
                        <el-button type="success" :icon="Check" circle />
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
                        date: '2016-05-03',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        photo: '../assets/logo.png'
                    },
                    {
                        date: '2016-05-02',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        photo: ''
                    },
                    {
                        date: '2016-05-04',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        photo: '../assets/logo.png'
                    },
                    {
                        date: '2016-05-01',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        photo: '../assets/logo.png'
                    },
                ],
                Delete: Delete,
                Check:Check,
                src:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
            }
        }
    }
</script>

<style lang="less" scoped>
</style>