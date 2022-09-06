<template>
  <div class="user">
    <page-search
      :fromConfig="fromConfig"
      title="用户管理检索"
      v-model="searchData"
    >
    </page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      :pageName="pageName"
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
import { computed, defineComponent, reactive } from 'vue'

import { fromConfig, fromData } from './config/searchconfig'
import { contentTableConfig } from './config/contentconfig'

import { useStore } from '@/store'

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
    // const store = useStore()

    // // 请求
    // store.dispatch('system/getPageListAction', {
    //   // queryUrl: '/users/list',
    //   queryName: 'users',
    //   queryInfo: {
    //     offset: 0,
    //     size: 10
    //   }
    // })

    // 修改 store.state.system. 下的值是通过请求之后 获取的
    // 下面这个值打印的时候并没有赋值上去
    // store.state.system.userList

    // 要通过计算属性来监听获取到
    // const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)

    function selectionChange(val: any): void {
      console.log('val: ', val)
    }
    const pageName = 'user'
    return {
      fromConfig,
      searchData,
      selectionChange,
      contentTableConfig,
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
