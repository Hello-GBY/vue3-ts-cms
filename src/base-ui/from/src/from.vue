<template>
  <el-form ref="userFrom" :model="form">
    <el-row :gutter="20">
      <!-- <el-col :span="8">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col> -->
      <template v-for="item in fromItems" :key="item.label">
        <el-col :span="8">
          <el-form-item :label="item.label">
            <template v-if="item.type == 'input' || 'password'">
              <el-input
                :placeholder="item.placeholder"
                :show-password="item.type === 'password'"
              >
              </el-input>
            </template>
            <template v-else-if="item.type == 'select'">
              <el-select :placeholder="item.placeholder">
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </el-option>
              </el-select>
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'
import { IFormItem } from '../type/types'
// PropType 确定传递过来的泛型
export default defineComponent({
  name: '',
  props: {
    fromItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    }
  },
  components: {},
  setup() {
    const form = reactive({ name: '' })
    return { form }
  }
})
</script>

<style lang="scss" scoped></style>
