<template>
  <!--主页面布局-->
  <el-container class="main-content">
    <el-aside :width="isCollapse ? '60px' : '210px'">
      <uin-nav-menu :collapse="isCollapse"></uin-nav-menu>
    </el-aside>

    <el-container class="page">
      <el-header class="page-header">
        <uin-nav-header @foldChange="handleFoldChange"></uin-nav-header>
      </el-header>
      <el-main class="page-content">
        <div class="page-info">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UinNavHeader from '@/components/nav-header'
import UinNavMenu from '@/components/nav-menu'

export default defineComponent({
  name: '',
  components: {
    UinNavHeader,
    UinNavMenu
  },
  setup() {
    const isCollapse = ref(false)
    function handleFoldChange(isFold: boolean) {
      isCollapse.value = isFold
    }
    return { handleFoldChange, isCollapse }
  }
})
</script>

<style lang="scss" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main-content,
.page {
  height: 100%;
}
.page-content {
  height: calc(100% - 48px);
  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}
.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}
.el-header {
  height: 48px !important;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
}
.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
