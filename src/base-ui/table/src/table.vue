<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    @selection-change="selectionChange"
  >
    <el-table-column
      align="center"
      v-if="showSelectColumn"
      width="80"
      type="selection"
    >
    </el-table-column>
    <!--注意这里 是  type="index"-->
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
      default: true
    }
  },
  emits: ['selectionChange'],
  setup(props, { emit }) {
    function selectionChange(value: any): void {
      console.log('value: ', value)
      // 不是通过返回 进行给父组件传递值
      // return value
      emit('selectionChange', value)
    }
    return { selectionChange }
  }
})
</script>

<style lang="scss" scoped></style>
