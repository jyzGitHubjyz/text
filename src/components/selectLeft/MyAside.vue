<template>
    <div class="sidebar">
        <el-menu
                active-text-color="#20a0ff"
                background-color="#324157"
                 class="el-menu-vertical-demo"
                 default-active="2"
                text-color="#bfcbd9"
                 :router="true">
            <template v-for="item in menusList">
                <template v-if="item.subs">
                    <el-sub-menu :index="item.index" :key="item.index">
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{item.title}}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-sub-menu
                                    v-if="subItem.subs"
                                    :index="subItem.index"
                                    :key="subItem.index"
                            >
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>

    export default {
        name: "MyAside",
        data() {
            return {
                menusList:[
                    {
                        icon: 'Odometer',
                        index: '/home/users',
                        title: '用户管理',
                        permiss: '1'
                    },
                    {
                        icon: 'Calendar',
                        index: '/home/rights',
                        title: '权限管理',
                        permiss: '2'
                    },
                    {
                        icon: 'DocumentCopy',
                        index: '/home/goods',
                        title: '商品管理',
                        permiss: '3'
                    },
                    {
                        icon: 'DocumentCopy',
                        index: '/home/orders',
                        title: '订单管理',
                        permiss: '3'
                    },
                    {
                        icon: 'Edit',
                        index: '/home/settings',
                        title: '系统设置',
                        permiss: '4',
                        subs: [
                            {
                                index: '/form',
                                title: '基本表单',
                                permiss: '5'
                            },
                            {
                                index: '/upload',
                                title: '文件上传',
                                permiss: '6'
                            },
                            {
                                index: '4',
                                title: '三级菜单',
                                permiss: '7',
                                subs: [
                                    {
                                        index: '/editor',
                                        title: '富文本编辑器',
                                        permiss: '8'
                                    },
                                    {
                                        index: '/markdown',
                                        title: 'markdown编辑器',
                                        permiss: '9'
                                    }
                                ]
                            }
                        ]
                    },
                ]
            }
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