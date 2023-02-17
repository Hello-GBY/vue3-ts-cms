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
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :pageName="pageName"
      @resetBthClick="handleResetClick"
      @queryBthClick="handleQueryClick"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigRef"
      :defaultInfo="modalInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
// 定义了全局方法之后需要扩充类型
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: any
  }
}
// 使用全局的函数
import { useStore } from '@/store'
import { defineComponent, reactive, computed } from 'vue'

import { IFormItem } from '@/base-ui/from'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/usePageModal'

import PageSearch from '@/components/page-serach'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { fromConfig, fromData } from './config/searchconfig'
import { contentTableConfig } from './config/contentconfig'
import { modalConfig } from './config/modal.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    // 绑定表单数据
    const searchData = reactive(fromData)
    const pageName = 'users'

    // 1.查询和重置处理
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    // 配置信息
    const store = useStore()
    const modalConfigRef = computed(() => {
      const roleOption: IFormItem | undefined = modalConfig.formItems?.find(
        (item) => item.field === 'roleId'
      )
      roleOption!.options = store.state.entireRoles.map((item: any) => {
        return { label: item.name, value: item.id }
      })
      const departmentOption: IFormItem | undefined =
        modalConfig.formItems?.find((item) => item.field === 'departmentId')
      departmentOption!.options = store.state.entireDepartments.map(
        (item: any) => {
          return { label: item.name, value: item.id }
        }
      )
      return modalConfig
    })

    // modal handle
    const newHandleCallback = () => {
      const passwordItem = modalConfigRef.value.formItems?.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editHandleCallback = () => {
      const passwordItem = modalConfigRef.value.formItems?.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }

    // 处理的hook
    const [modalInfo, pageModalRef, handleNewData, handleEditData] =
      usePageModal(newHandleCallback, editHandleCallback)

    return {
      fromConfig,
      searchData,
      pageName,
      contentTableConfig,
      handleQueryClick,
      handleResetClick,
      pageContentRef,
      handleNewData,
      handleEditData,
      pageModalRef,
      modalConfigRef,
      modalInfo
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
