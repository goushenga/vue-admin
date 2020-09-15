<template>
  <div id="login">
    <div class="login_box">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="名称">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      labelPosition: 'top',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  watch: {
    getvalue(){
      console.log(this.formLabelAlign.name);
    }
  },
  updated() {
    this.getvalue()
  },

}
</script>

<style lang="scss" scoped>
#login {
  width: 100vw;
  height: 100vh;
  background: #344a5f;
  display: flex;
  align-items: center;
  justify-content: center;
  .login_box{
    width: 30%;
    border: 1px solid red;
    color: #ffffff!important;
    
  }
}
</style>
