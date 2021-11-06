<template>
  <div class="user">
    <uin-from v-bind="fromConfig" :fromData="fromData"></uin-from>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import uinFrom from '@/base-ui/from/index'
import { fromConfig } from './config/searchconfig'
export default defineComponent({
  name: 'user',
  components: {
    uinFrom
  },
  setup() {
    const fromData = reactive({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    console.log('fromData: ', fromData)
    return {
      fromConfig,
      fromData
    }
  }
})
</script>

<style scoped lang="less">
.user {
  padding-top: 22px;
}
</style>
