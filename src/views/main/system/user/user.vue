<template>
  <div class="user">
    <page-search
      :fromConfig="fromConfig"
      title="用户管理检索"
      v-model="searchData"
    >
    </page-search>
    <div class="content">
      <PageTable
        :tableData="userList"
        :columns="columns"
        :showIndexColumn="showIndexColumn"
        @selectionChange="selectionChange"
        :title="title"
      >
        <template #headerHandler>
          <el-button>新增用户</el-button>
          <el-button icon="el-icon-refresh"></el-button>
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
          <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
        </template>
        <template #handler>
          <el-button size="mini" icon="el-icon-edit" type="text" plain
            >编辑</el-button
          >
          <el-button size="mini" icon="el-icon-delete" type="text" plain
            >删除</el-button
          >
        </template>
      </PageTable>
    </div>
    <div class="page-pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="userCount"
        :page-size="10"
      >
      </el-pagination>
    </div>
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
import PageSearch from '@/components/page-serach/index'
import { useStore } from '@/store'
import PageTable from '@/base-ui/table'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageTable
  },
  setup() {
    // 绑定表单数据
    const searchData = reactive(fromData)
    const store = useStore()

    // 请求
    store.dispatch('system/getPageListAction', {
      queryUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    // 修改 store.state.system. 下的值是通过请求之后 获取的
    // 下面这个值打印的时候并没有赋值上去
    // store.state.system.userList

    // 要通过计算属性来监听获取到
    const userList = computed(() => store.state.system.userList)
    console.log('userList: ', userList)
    const userCount = computed(() => store.state.system.userCount)

    const columns = [
      // { prop: 'id', label: '序号', width: 80 },
      { prop: 'name', label: '用户名', minWidth: 120 },
      {
        prop: 'realname',
        label: '真实姓名',
        minWidth: 150
      },
      { prop: 'cellphone', label: '电话号码', minWidth: 130 },
      { prop: 'enable', label: '状态', minWidth: 90, slotName: 'enable' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: 220,
        slotName: 'createAt'
      },
      { prop: 'updateAt', label: '更新时间', minWidth: 220 },
      { label: '操作', slotName: 'handler', minWidth: 150 }
    ]

    const showIndexColumn = true
    const title = '这是标题'

    function selectionChange(val: any): void {
      console.log('val: ', val)
    }

    return {
      fromConfig,
      searchData,
      userList,
      columns,
      userCount,
      showIndexColumn,
      selectionChange,
      title
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
