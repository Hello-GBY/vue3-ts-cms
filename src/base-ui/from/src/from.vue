<template>
  <el-form ref="userFrom" :label-width="labelWidth" v-model="fromData">
    <el-row :gutter="50">
      <!-- <el-col :span="8">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col> -->
      <template v-for="item in fromItems" :key="item.label">
        <el-col v-bind="colLayout">
          <el-form-item :label="item.label" :rules="item.rules">
            <template v-if="item.type == 'input' || item.type == 'password'">
              <el-input
                :placeholder="item.placeholder"
                :show-password="item.type === 'password'"
                v-bind="item.otherOptions"
                v-model="fromData[`${item.field}`]"
              >
              </el-input>
            </template>
            <template v-else-if="item.type == 'select'">
              <el-select
                :placeholder="item.placeholder"
                style="width: 100%"
                v-bind="item.otherOptions"
                v-model="fromData[`${item.field}`]"
              >
                <el-option
                  v-for="ele in item.options || []"
                  :key="ele.value"
                  :value="ele.value"
                  :label="ele.label"
                >
                </el-option>
              </el-select>
            </template>
            <template v-else-if="item.type == 'datepicker'">
              <el-date-picker
                style="width: 100%"
                v-bind="item.otherOptions"
                v-model="fromData[`${item.field}`]"
              ></el-date-picker>
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
    fromData: {
      type: Object,
      require: true,
      default: () => ({})
    },
    fromItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px
        lg: 8, // >1200px
        md: 12, // >992px
        sm: 24, // >768px
        xs: 24 // < 768px
      })
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
