<template>
     <button type="button" class="btn btn-light btn-sm" @click="goBack">后退</button>
    <h4 class="text-center">用户详情 --- {{id}}</h4>
</template>

<script>
    export default {
        name: "MyList",
        props:['id'],
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

</style>