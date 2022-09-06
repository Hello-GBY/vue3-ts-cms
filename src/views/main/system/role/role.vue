<template>
  <div class="role">
    <page-search :fromConfig="fromConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageSearch from '@/components/page-serach'
import pageContent from '@/components/page-content'
import { fromConfig } from './config/searchconfig'
import { contentTableConfig } from './config/contentconfig'

export default defineComponent({
  name: 'role',
  components: {
    pageSearch,
    pageContent
  },
  setup() {
    return {
      contentTableConfig,
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
