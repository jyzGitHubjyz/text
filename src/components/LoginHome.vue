<template>
    <div class="home-container">
        <!-- 头部组件 -->
        <my-header></my-header>

        <!-- 主体区域 -->
        <div class="home-main-box">
            <!-- 左侧边栏区域 -->
            <my-aside></my-aside>
        </div>
        <!-- 右侧内容主体区域 -->
        <div class="home-main-body">
            <!-- 路由的占位符 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    import MyAside from "./selectLeft/MyAside.vue";
    import MyHeader from "./selectLeft/MyHeader.vue";

    export default {
        name: "LoginHome",
        components:{
            MyAside,
            MyHeader
        }
    }
</script>

<style lang="less" scoped>
    .home-container {
        height: 100%;
        display: flex;
        flex-flow: row wrap;

        .home-main-box {
            height: calc(100% - 60px);
            display: flex;
            width: 13%;
        }
        .home-main-body {
            height: calc(100% - 60px);
            width: 87%;
        }
    }
</style>