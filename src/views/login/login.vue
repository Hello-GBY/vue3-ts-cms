<template>
  <div>{{ $store.state.name }}</div>
  <el-button>按钮</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  components: {
    ElButton
  },
  setup() {
    return {
      // name: $store.state.namex
    }
  }
})
</script>

<style lang="scss" scoped></style>
>
