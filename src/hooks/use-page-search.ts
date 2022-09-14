import { ref } from 'vue'
import pageContent from '@/components/page-content'

export function usePageSearch(): Array<any> {
  // 获取组件
  const pageContentRef = ref<InstanceType<typeof pageContent>>()
  // 点击重置
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }

  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}
