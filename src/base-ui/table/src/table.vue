<template>
  <el-table :data="tableData" border style="width: 100%">
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
      default: () => false
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
