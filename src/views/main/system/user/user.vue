<template>
  <div class="user">
    <uin-from v-bind="fromConfig" v-model="fromData"> </uin-from>
    {{ fromData }}
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
