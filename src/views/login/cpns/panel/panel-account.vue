<template>
  <el-form label-width="60px" :rules="rules" :model="account">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password" type="password" autocomplete="off" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '@/views/login/config/account-config'
export default defineComponent({
  name: '',
  components: {},
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    const loginActive = () => {
      // todo: 真正的登录
      console.log('真正的登录')
    }
    return {
      rules,
      account,
      loginActive
    }
  }
})
</script>

<style lang="scss" scoped></style>
