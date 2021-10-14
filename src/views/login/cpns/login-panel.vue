<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <div class="tabs">
      <el-tabs type="border-card" stretch>
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-user-solid"></i>密码登录</span>
          </template>
          <login-account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
          </template>
          <login-phone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassWrod">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <div class="login-button">
      <el-button
        type="primary"
        class="login-button-button"
        @click="handleLoginClick"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './panel/panel-account.vue'
import LoginPhone from './panel/panel-phone.vue'

export default defineComponent({
  name: '',
  components: { LoginAccount, LoginPhone },
  setup() {
    const isKeepPassWrod = ref(false)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()

    function handleLoginClick() {
      accountRef.value?.loginActive() // 调用子组件的登录
    }

    return { isKeepPassWrod, handleLoginClick, accountRef }
  }
})
</script>

<style lang="scss" scoped>
.login-panel {
  width: 320px;
  // height: 320px;
  // background: rgba(68, 96, 147, 0.1);
  .title {
    text-align: center;
  }
  .login-input {
    .login-input-1 {
      margin: 0px 15px;
      margin-bottom: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      .input-lable {
        width: 70px;
      }
    }
  }
  .account-control {
    display: flex;
    align-items: inherit;
    justify-content: space-between;
    margin: 0px 2px 0px 12px;
  }
  .login-button {
    // width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-button-button {
      width: 100%;
    }
  }
}
</style>
