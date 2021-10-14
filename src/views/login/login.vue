<template>
  <div id="login">
    <loginPanel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  name: '',
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(234, 230, 226);
}
</style>
