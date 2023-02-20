<template>
  <!-- :dataContent="dataContent" -->
  <div class="content">
    <PageTable
      :tableData="userList"
      v-bind="contentTableConfig"
      :tableDataCount="listCount"
      v-model:pageYT="pageInfo"
    >
      <template #headerHandler>
        <el-button size="mini">新增用户</el-button>
        <el-button icon="el-icon-refresh" size="mini"></el-button>
      </template>
      <template #enable="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启动' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <slot>{{ $filters.formatTime(scope.row.updateAt) }}</slot>
      </template>
      <template #handler>
        <el-button size="mini" icon="el-icon-edit" type="text" plain
          >编辑</el-button
        >
        <el-button size="mini" icon="el-icon-delete" type="text" plain
          >删除</el-button
        >
      </template>
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </PageTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import PageTable from '@/base-ui/table/index'
// import { usePermission } from '@/hooks/use-permission'

export default defineComponent({
  name: 'pagecontent',
  components: {
    PageTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String
    }
  },
  setup(props) {
    const store = useStore()
    // 从vuex中获取
    const userList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const listCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )
    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...queryInfo
        }
      })
    }
    // 双向绑定pageInfo
    const pageInfo = ref({
      currentPage: 0,
      pageSize: 10
    })
    getPageData()

    // 4.剩余需要的插槽
    const otherPropSlots = computed(() => {
      if (props.contentTableConfig) {
        return props.contentTableConfig.columns.filter((item: any) => {
          if (item.slotName === 'status') return false
          else if (item.slotName === 'create') return false
          else if (item.slotName === 'update') return false
          else if (item.slotName === 'handler') return false
          return true
        })
      }
      return []
    })
    return { userList, getPageData, listCount, pageInfo, otherPropSlots }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 25px;
  // todo:待优化
  border-top: 20px solid #eee; // 后续需要加阴影 没办法加上去
}
</style>
