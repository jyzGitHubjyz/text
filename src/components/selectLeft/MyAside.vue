<template>
    <div class="sidebar">
        <el-menu active-text-color="#ffd04b"
                 background-color="#545c64"
                 class="el-menu-vertical-demo"
                 default-active="2"
                 text-color="#fff"
                 :router="true">
            <el-menu-item index="/home/users">
                <template #title>
                    <span>用户管理</span>
                </template>
            </el-menu-item>
            <el-menu-item index="/home/rights">
                <span>权限管理</span>
            </el-menu-item>
            <el-menu-item index="/home/goods">
                <span>商品管理</span>
            </el-menu-item>
            <el-menu-item index="/home/orders">
                <span>订单管理</span>
            </el-menu-item>
            <el-sub-menu index="/home/settings">
                <template #title>
                <span>系统设置</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item index="4-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script>

    export default {
        name: "MyAside",
        data() {
            return {}
        }
    }
</script>

<style lang="less" scoped>
    .sidebar {
        display: block;
        left: 0;
        top: 70px;
        bottom: 0;
        width: 100%;
        height: 100%;
    }

    .sidebar > ul {
        height: 100%;
    }
</style>