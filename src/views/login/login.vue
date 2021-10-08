<template>
  <div>{{ $store.state.name }}</div>
  <el-button>按钮</el-button>
  <el-button type="primary" @click="openFullScreen2"> As a service </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  components: { ElButton },
  setup() {
    // const openFullScreen2 = () => {
    // const loading = ElLoading.service({
    //   lock: true,
    //   text: 'Loading',
    //   spinner: 'el-icon-loading',
    //   background: 'rgba(0, 0, 0, 0.7)'
    // })
    //   setTimeout(() => {
    //     loading.close()
    //   }, 2000)
    // },
    return {
      // name: $store.state.namex
      // openFullScreen2
    }
  }
})
</script>

<style lang="scss" scoped></style>
>
