<template>
  <el-form ref="accountForm" label-width="60px" :rules="rules" :model="account">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="account.password"
        type="password"
        autocomplete="off"
        show-password
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '@/views/login/config/account-config'
import { ElForm } from 'element-plus'
import LocalCahe from '@/utils/cache'
import { useStore } from '@/store'

export default defineComponent({
  name: '',
  components: {},
  setup() {
    const store = useStore()
    const account = reactive({
      name: LocalCahe.getCache('name'),
      password: LocalCahe.getCache('password')
    })
    const accountForm = ref<InstanceType<typeof ElForm>>()
    const loginActive = (isKeepPassWrod: boolean) => {
      // todo: 真正的登录
      console.log('真正的登录')
      accountForm.value?.validate((valid) => {
        if (valid) {
          // todo: 记住密码
          if (isKeepPassWrod) {
            // 本地缓存
            LocalCahe.setCache('name', account.name)
            LocalCahe.setCache('password', account.password)
          } else {
            LocalCahe.deleteCache('name')
            LocalCahe.deleteCache('password')
          }
          // todo: 验证登录
          console.log('验证登录: ', { ...account })
          store.dispatch('login/accountLoginAction', { ...account })
          // console.log('useStore: ', useStore('login'))
        }
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
