<template>
  <!--表头-->
  <div class="header">
    <slot name="header">
      <div class="title">{{ title }}</div>
      <div class="handler">
        <slot name="headerHandler"> </slot>
      </div>
    </slot>
  </div>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    @selection-change="selectionChange"
  >
    <!--多选控制-->
    <el-table-column
      align="center"
      v-if="showSelectColumn"
      width="60"
      type="selection"
    >
    </el-table-column>
    <!--注意这里 是  type="index"-->
    <!--序号控制-->
    <el-table-column
      align="center"
      v-if="showIndexColumn"
      width="80"
      label="序号"
      type="index"
    >
    </el-table-column>
    <template v-for="column in columns" :key="column.prop">
      <el-table-column v-bind="column" align="center" show-overflow-tooltip>
        <template #default="scope">
          <slot :name="column.slotName" :row="scope.row">
            {{ scope.row[column.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
  <div class="footer">
    <slot name="footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.currentPage"
        :page-size="page.pageSize"
        layout="total, prev, pager, next, jumper"
        :total="tableDataCount"
      >
      </el-pagination>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: '',
  components: {},
  props: {
    tableData: {
      type: Array,
      require: true
    },
    totalCount: {
      type: Number,
      default: 0
    },
    tableDataCount: {
      type: Number,
      require: true
    },
    columns: {
      type: Array,
      require: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    listData: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    propList: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: '表格数据'
    },
    page: {
      type: Object,
      // 对象或者数组应当用工厂函数返回。
      // 工厂函数会收到组件所接收的原始 props
      // 作为参数
      default: () => ({
        currentPage: 0,
        pageSize: 10
      })
      // ** 不能用函数去操作
      // default: function (): any {
      //   return {
      //     currentPage: 1,
      //     pageSize: 10
      //   }
      // }
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    console.log('props: ', props)
    function selectionChange(value: any): void {
      // 不是通过返回 进行给父组件传递值
      emit('selectionChange', value)
    }
    const handleSizeChange = () => {
      return {}
    }
    const handleCurrentChange = () => {
      return {}
    }
    return {
      selectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .handler {
    align-items: center;
  }
}
.footer {
  margin-top: 15px;
  .el-pagination {
    text-align: right;
  }
}
</style>
