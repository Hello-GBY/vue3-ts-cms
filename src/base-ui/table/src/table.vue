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
      width="80"
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
      <el-table-column v-bind="column" align="center">
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
      <div class="title">{{ title }}</div>
      <div class="handler">
        <slot name="footerHandler"> </slot>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  components: {},
  props: {
    tableData: {
      type: Array,
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
    title: {
      type: String,
      default: ''
    }
  },
  emits: ['selectionChange'],
  setup(props, { emit }) {
    console.log('props: ', props)
    function selectionChange(value: any): void {
      // 不是通过返回 进行给父组件传递值
      emit('selectionChange', value)
    }
    return { selectionChange }
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
