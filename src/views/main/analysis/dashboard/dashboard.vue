<template>
  <div class="dashboard">
    <!-- 1.顶部数据统计 -->
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panelData="item" />
        </el-col>
      </template>
    </el-row>

    <!-- 2.中间图标 -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import StatisticalPanel from '@/components/statistical-panel'
// import UinCard from '@/base-ui/card'

export default defineComponent({
  name: 'dashboard',
  components: {
    // UinCard,
    StatisticalPanel
  },
  setup() {
    // 1.发起数据统计的网络请求
    const store = useStore()
    store.dispatch('analysis/getAnalysisDataAction')

    // 2.获取顶部PanelData
    const topPanelData = computed(() => store.state.analysis.topPanelDatas) // 数据
    console.log('topPanelData: ', topPanelData.value)

    const categoryGoodsCount = computed(() => {
      // return store.state.analysis.categoryGoodsCount.map((item: any) => {
      //   return { value: item.goodsCount, name: item.name }
      // })
      return {}
    })

    const addressGoodsSale = computed(() => {
      // return store.state.analysis.goodsAddressSale.map((item: any) => {
      //   return { name: item.address, value: item.count }
      // })
      return {}
    })

    return { topPanelData, categoryGoodsCount, addressGoodsSale }
  }
})
</script>

<style scoped lang="less">
.dashboard {
  background-color: #f5f5f5;
  .row {
    margin-top: 20px;
  }
}
</style>
