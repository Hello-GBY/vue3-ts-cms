<template>
  <div class="overview">
    <uin-card title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </uin-card>
    <uin-card title="技术栈">
      <uin-text-link :text-arrs="technologyStacks" />
      <uin-descriptions
        title="生产环境依赖"
        :column="2"
        :table-datas="dependencies"
      />
      <uin-descriptions
        title="开发环境依赖"
        :column="2"
        :table-datas="devDependencies"
      />
    </uin-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UinCard from '@/base-ui/card'
export default defineComponent({
  name: 'overview',
  components: {
    UinCard
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.overview {
  .c-left {
    text-align: left;
  }

  .el-card {
    margin-bottom: 20px;
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span {
      font-weight: 700;
    }
  }

  .description {
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-descriptions__title) {
      // ::v-deep .el-descriptions__title {
      font-weight: 400;
    }
  }
}
</style>
