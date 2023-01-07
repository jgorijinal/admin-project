<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="formData"
      :rules="rules"
      label-width="120px"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="formData.username" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="formData.password" type="password" autocomplete="off" />
    </el-form-item>
  </el-form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
// 表单数据
const formData = ref({
  username: 'cuiyang123',
  password: ''
})

</script>
<style lang="scss" scoped>
  
</style>