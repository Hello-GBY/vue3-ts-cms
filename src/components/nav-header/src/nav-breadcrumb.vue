<template>
  <div>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">
        promotion detail
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowRight } from '@element-plus/icons'

export default defineComponent({
  name: '',
  components: {},
  props: {},
  setup(props) {
    return { ArrowRight }
  }
})
</script>
<style lang="scss" scoped></style>
