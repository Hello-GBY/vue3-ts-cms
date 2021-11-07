<template>
  <div class="user">
    <page-search
      :fromConfig="fromConfig"
      title="用户管理检索"
      v-model="searchData"
    >
    </page-search>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { fromConfig, fromData } from './config/searchconfig'
import PageSearch from '@/components/page-serach/index'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    // 绑定表单数据
    const searchData = reactive(fromData)
    return {
      fromConfig,
      searchData
    }
  }
})
</script>

<style scoped lang="less">
.user {
  // padding-top: 22px;
  margin-left: -18px;
}
</style>
