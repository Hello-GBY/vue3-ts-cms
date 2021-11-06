<template>
  <div>
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path ?? '' }">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ArrowRight } from '@element-plus/icons'
import { breadcrumbType } from '../types/type'

export default defineComponent({
  name: '',
  components: {},
  props: {
    breadcrumbs: {
      type: Array as PropType<breadcrumbType[]>,
      default: () => []
    }
  },
  setup(props) {
    return { ArrowRight }
  }
})
</script>
<style lang="scss" scoped></style>
