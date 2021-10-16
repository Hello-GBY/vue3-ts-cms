<template>
  <el-form ref="accountForm" label-width="60px" :rules="rules" :model="account">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password" type="password" autocomplete="off" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '@/views/login/config/account-config'
import { ElForm } from 'element-plus'
export default defineComponent({
  name: '',
  components: {},
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    const accountForm = ref<InstanceType<typeof ElForm>>()
    const loginActive = () => {
      // todo: 真正的登录
      console.log('真正的登录')
      accountForm.value?.validate((validate) => {
        console.log('validate: ', validate)
      })
    }
    return {
      rules,
      account,
      loginActive,
      accountForm
    }
  }
})
</script>

<style lang="scss" scoped></style>
