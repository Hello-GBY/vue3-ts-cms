<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" alt="logo" src="~@/assets/img/vue3logo.svg" />
      <span class="title" v-show="!collapse"> Vue3 + Ts</span>
    </div>
    <!-- unique-opened -->
    <el-menu
      :default-active="menuActive"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id + ''">
        <!-- type == 1 可展开的菜单 -->
        <template v-if="item.type == 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id + ''">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item>
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'

//  vuex 对typescript 支持不好 要引入pinia库 来进行 store 的类型检测
export default defineComponent({
  name: '',
  components: {},
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed<any[]>(() => store.state.login.userMenus)
    const router = useRouter() // 全局的 router 实例

    const handleMenuItemClick = (item: any) => {
      router.push({ path: item.url ?? '/not-found' })
    }

    const route = useRoute() // 当前激活的路由的信息对象
    const currentPath = route.path
    const menuActive = ref('1')
    const currentMenu = pathMapToMenu(userMenus.value, currentPath)
    if (currentMenu) menuActive.value = currentMenu.id + ''

    return {
      userMenus,
      handleMenuItemClick,
      menuActive
    }
  }
})
</script>
<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      line-height: 100%;
      display: block;
    }
  }
  .el-menu {
    border-right: none;
  }
  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
  }
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135 !important;
  }
  ::v-deep .el-sub-menu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
