<template>
  <el-table :data="tableData" border style="width: 100%">
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
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
