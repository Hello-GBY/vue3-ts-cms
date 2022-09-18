<template>
  <div class="user">
    <page-search
      :fromConfig="fromConfig"
      title="用户管理检索"
      v-model="searchData"
      @resetBthClick="handleResetClick"
      @queryBthClick="handleQueryClick"
    >
    </page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      :pageName="pageName"
      @resetBthClick="handleResetClick"
      @queryBthClick="handleQueryClick"
    ></page-content>
  </div>
</template>

<script lang="ts">
// 定义了全局方法之后需要扩充类型
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: any
  }
}
import { defineComponent, reactive } from 'vue'

import { fromConfig, fromData } from './config/searchconfig'
import { contentTableConfig } from './config/contentconfig'

// import { useStore } from '@/store'
// 使用全局的函数
import { usePageSearch } from '@/hooks/use-page-search'

import PageSearch from '@/components/page-serach/index'
import PageContent from '@/components/page-content/index'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    // 绑定表单数据
    const searchData = reactive(fromData)
    const pageName = 'users'

    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    return {
      fromConfig,
      searchData,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      pageName
    }
  }
})
</script>

<style scoped lang="less">
.user {
  // padding-top: 22px;
  // margin-left: -18px;
  .content {
    padding: 25px;
    // todo:待优化
    border-top: 20px solid #eee; // 后续需要加阴影 没办法加上去
  }
  。page-pagination {
    text-align: right;
  }
}
</style>
