<template>
  <div class="user">
    <page-search
      :fromConfig="fromConfig"
      v-model="fromData"
      title="用户管理检索"
    ></page-search>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { fromConfig } from './config/searchconfig'
import PageSearch from '@/components/page-serach/src/page-search.vue'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    const fromData = reactive({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      fromConfig,
      fromData
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
