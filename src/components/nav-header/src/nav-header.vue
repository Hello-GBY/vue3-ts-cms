<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick()"
    ></i>
    <div class="content">
      <NavBreadcrumb :breadcrumbs="breadcrumbs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavBreadcrumb, { breadcrumbProps } from '@/base-ui/breadcrumb/index'

export default defineComponent({
  name: '',
  components: {
    NavBreadcrumb
  },
  emit: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)

    function handleFoldClick() {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    const breadcrumbs: breadcrumbProps = [{ name: '首页' }]

    return { isFold, handleFoldClick, breadcrumbs }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 15px;
  }
}
</style>
