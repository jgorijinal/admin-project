<template>
    <div class="login-container">
      <el-form
        class="login-form" 
        ref="ruleFormRef"
        :model="formData"
        :rules="rules"
      > 
        <div class="title-container">
          <h1 class="title">用户登录</h1>
        </div>
        <el-form-item prop="username">
          <el-input
            v-model="formData.username"
            type="text"
            :prefix-icon="Avatar"
            placeholder="用户名"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formData.password"
            type="password"
            :prefix-icon="Lock"
            autocomplete="off"
            placeholder="密码"
            show-password
          />
        </el-form-item>
        <el-button type="primary" style="width:100%;margin-bottom:30px">登录</el-button>
      </el-form>
    </div>
</template>
<script setup>
import { Avatar } from '@element-plus/icons-vue'
import { Lock } from  '@element-plus/icons-vue'
import { ref } from "vue";
// 表单数据
const formData = ref({
  username: "cuiyang123",
  password: ""
})
const rules = []
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 100%;
      .el-input__wrapper {
        background-color: transparent;
        border: 0;
        box-shadow: none;
        width: 100%;
      }
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
      input:-internal-autofill-selected {
        background-color: #2d3a4b !important;
      }
    }
  }
  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    ::v-deep .lang-select {
      position: absolute;
      right: 0;
      top: 4px;
      color: white;
      .el-icon {
        color: white;
      }
    }
  }
  .tips {
    line-height: 20px;
    color: white;
    margin-top: 20px;
  }
}
</style>
