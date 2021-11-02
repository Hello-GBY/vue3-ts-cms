<template>
  <div class="user">
    <uin-from v-bind="fromConfig"></uin-from>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import uinFrom from '@/base-ui/from/index'
import { fromConfig } from './config/searchconfig'
export default defineComponent({
  name: 'user',
  components: {
    uinFrom
  },
  setup() {
    return {
      fromConfig
    }
  }
})
</script>

<style scoped lang="less">
.user {
  padding-top: 22px;
}
</style>
