<template>
  <el-form label-width="80px" :rules="rules" :model="phone">
    <el-form-item label="手机号" prop="phoneNumber">
      <el-input v-model="phone.phoneNumber" />
    </el-form-item>
    <el-form-item label="验证码" prop="phoneCode">
      <div class="get-code">
        <el-input
          class="code-input"
          v-model="phone.phoneCode"
          type="password"
          autocomplete="off"
        />
        <el-button type="primary" disabled="false" @click="getPhoneCode"
          >获取验证码</el-button
        >
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { rules } from '@/views/login/config/phone-config.ts'
export default defineComponent({
  name: '',
  components: {},
  setup() {
    const phone = reactive({
      phoneNumber: '',
      phoneCode: ''
    })
    function getPhoneCode() {
      // todo: 获取验证码
    }
    return {
      rules,
      phone,
      getPhoneCode
    }
  }
})
</script>

<style lang="scss" scoped>
.get-code {
  display: flex;
  align-items: center;
  // width: 90px;
  .code-input {
    margin-right: 10px;
  }
}
</style>
