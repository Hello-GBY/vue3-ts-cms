<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick()"
    ></i>
    <div class="content">
      <uin-breadcrumb :breadcrumbs="breadcrumbs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UinBreadcrumb, { breadcrumbProps } from '@/base-ui/breadcrumb/index'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumb } from '@/utils/map-menus'
import { useStore } from '@/store'

export default defineComponent({
  name: '',
  components: {
    UinBreadcrumb
  },
  emit: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)

    function handleFoldClick() {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 计算属性 更改面包屑
    const store = useStore()
    const breadcrumbs = computed<breadcrumbProps>(() => {
      const route = useRoute() // 当前激活的路由的信息对象
      const currentPath = route.path
      const userMenus = computed<any[]>(() => store.state.login.userMenus)
      return pathMapBreadcrumb(userMenus.value, currentPath)
    })
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
