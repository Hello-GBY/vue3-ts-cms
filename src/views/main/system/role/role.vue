<template>
  <div class="role">
    <page-search
      title="角色管理检索"
      :fromConfig="fromConfig"
      v-model="searchData"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import pageSearch from '@/components/page-serach'
import pageContent from '@/components/page-content'
import { fromConfig, fromData } from './config/searchconfig'
import { contentTableConfig } from './config/contentconfig'

export default defineComponent({
  name: 'role',
  components: {
    pageSearch,
    pageContent
  },
  setup() {
    // 绑定表单数据
    const searchData = reactive(fromData)
    return {
      contentTableConfig,
      searchData,
      fromConfig
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 30px;
}
</style>
