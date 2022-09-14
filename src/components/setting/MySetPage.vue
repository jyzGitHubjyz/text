<template>
<!--    <div>
        <h3>标题：{{title}}</h3>
        <h5>作者：{{author}}</h5>
        <h6>发布时间：{{pubTime}}</h6>
    </div>
    <button @click="sendData">点击</button>
    <br>-->
    <div v-for="(item,index) in list" :key="index">
        <slot :data="item"></slot>
    </div>
</template>

<script>
    export default {
        name: "MySetPage",
        //props: ['title', 'author', 'pubTime'],
        data(){
          return{
              list:[
                  {
                      name: '1次',
                      age: 10,
                  },
                  {
                      name: '2次',
                      age: 20,
                  },
                  {
                      name: '3次',
                      age: 30,
                  }
              ]
          }
        },
        methods: {
            sendData() {
               this.$emit('showData','子组件传递的值')
            }
        }
    }
</script>

<style scoped>

</style>