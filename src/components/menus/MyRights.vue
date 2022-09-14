<template>
  <div class="bgDiv topD">
    <el-form-item label="用户名称" style="width: 360px;margin-left: 1%">
      <el-input style="width: 250px"/>
    </el-form-item>
    <el-form-item label="创建时间" style="width: 400px;margin-left: 1%">
      <el-col>
        <el-date-picker
                v-model="value1"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="用户地址" style="width: 350px;margin-left: 1%">
      <el-input style="width: 250px"/>
    </el-form-item>
    <el-button type="primary" round>搜索</el-button>
    <el-button type="info" round>重置</el-button>
  </div>
  <div class="bgDiv secondD">
    <el-table :data="permissionsData" style="width: 100%">
      <el-table-column prop="id" label="序号"/>
      <el-table-column prop="data" label="日期"/>
      <el-table-column prop="permisson" label="人员权限"/>
    </el-table>
  </div>
</template>

<script>
  import { ref } from 'vue'
export default {
  name: 'MyRights',
  data(){
    return {
      value1:ref(''),
      permissionsData:[
        {
          id:1,
          data:'2022-9-14',
          permisson:'超级管理员'
        },
        {
          id:2,
          data:'2022-9-14',
          permisson:'管理员'
        },
        {
          id:3,
          data:'2022-9-14',
          permisson:'用户'
        },
        {
          id:4,
          data:'2022-9-14',
          permisson:'用户'
        },
        {
          id:5,
          data:'2022-9-14',
          permisson:'用户'
        },
        {
          id:5,
          data:'2022-9-14',
          permisson:'用户'
        },

      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .bgDiv{
    background: #FFFFFF;
    opacity: 1;
    border-radius: 8px;
    width: 98%;
    margin-left: 1%;
  }
  .topD{
    height: 14%;
    margin-top: 1%;
    display: flex;
    justify-items: center;
    align-items: center;
  }
  .secondD{
    height: 81%;
    margin-top: 1%;
  }

  .el-form-item{
    margin-bottom:0px
  }
</style>