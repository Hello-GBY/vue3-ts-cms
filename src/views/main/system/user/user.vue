<template>
  <div class="user">
    <page-search
      :fromConfig="fromConfig"
      title="用户管理检索"
      v-model="searchData"
    >
    </page-search>
    <div class="content">
      <PageTable :data="userList" :columns="columns">
        <template #enable="scope">
          <el-button>{{ scope.row.enable }}</el-button>
        </template>
        <template #createAt="scope">
          <el-button>{{ scope.row.createAt }}</el-button>
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
    const userCount = computed(() => store.state.system.userCount)
    console.log('userCount: ', userCount.value)
    console.log('userList: ', userList)

    const columns = [
      // { prop: 'id', label: '序号', width: 80 },
      { prop: 'name', label: '用户名', minWidth: 180 },
      {
        prop: 'realname',
        label: '真实姓名',
        minWidth: 150
      },
      { prop: 'cellphone', label: '电话号码', minWidth: 130 },
      { prop: 'enable', label: '状态', width: 80, slotName: 'enable' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: 255,
        slotName: 'createAt'
      },
      { prop: 'updateAt', label: '更新时间', minWidth: 255 }
    ]
    return {
      fromConfig,
      searchData,
      userList,
      columns,
      userCount
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
