<template>
  <div>系统设置</div>
<!--  <div>{{message}}</div>
  <br>
  <my-set-page @showData="getSonData"  :title="info.title" :author="'post by ' + info.author" pub-time="1989"></my-set-page>-->
  <my-set-page>
    <template #default="{data}">我{{ data.age }}岁 -- {{ data.name }}</template>
  </my-set-page>

</template>

<script>

  import MySetPage from "../setting/MySetPage.vue";

export default {
  name: 'MySettings',
  components: {MySetPage},
  data() {
    return {
      info: {
        title: 'abc',
        author: '123',
      },
      message:'父组件原来的值'
    }
  },
  methods:{
    getSonData(data){
      this.message = data;
    }
  },
  //components: {MySetPage},
}
</script>

<style lang="less" scoped>

</style>