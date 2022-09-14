<template>
  <div class="bgDiv topD">
    <el-form-item label="用户名称" style="width: 360px;margin-left: 1%">
      <el-input style="width: 250px"/>
    </el-form-item>
    <el-form-item label="创建时间" style="width: 400px;margin-left: 1%">
      <el-col>
        <el-date-picker
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="用户地址" style="width: 400px;margin-left: 1%">
      <el-input style="width: 250px"/>
    </el-form-item>
  </div>
  <div class="bgDiv secondD"></div>
</template>

<script>
export default {
  name: 'MyRights',
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
</style>