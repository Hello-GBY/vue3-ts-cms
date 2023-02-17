<template>
  <div class="Ifrom">
    <div class="header">
      <!--可通过v-bind 将插槽的值传递给调用者-->
      <!-- <slot name="header" v-bind="{ checked }"></slot> -->
      <slot name="header"></slot>
    </div>
    <el-form ref="userFrom" :label-width="labelWidth" v-model="fromData">
      <el-row :gutter="50">
        <!-- <el-col :span="8">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-col> -->
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :rules="item.rules">
              <template v-if="item.type == 'input' || item.type == 'password'">
                <el-input
                  :placeholder="item.placeHolder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  v-model="fromData[`${item.field}`]"
                >
                </el-input>
              </template>
              <template v-else-if="item.type == 'select'">
                <el-select
                  :placeholder="item.placeHolder"
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
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from '../type/types'
// PropType 确定传递过来的泛型
export default defineComponent({
  name: '',
  props: {
    // 双向绑定 默认传递过来的值
    modelValue: {
      type: Object,
      require: true,
      default: () => ({})
    },
    // fromData: {
    //   type: Object,
    //   require: true,
    //   default: () => ({})
    // },
    formItems: {
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
  emits: ['update:modelValue'],
  components: {},
  setup(props, { emit }) {
    // const fromData = computed({
    //   get: () => props.modelValue,
    //   set: (newValue) => {
    //     emit('update:modelValue', newValue)
    //   }
    // })
    // 这种情况才是真正的双向绑定
    const fromData = ref({ ...props.modelValue })
    watch(fromData, (newValue) => emit('update:modelValue', newValue), {
      deep: true
    })
    const checked = false

    return { fromData, checked }
  }
})
</script>

<style lang="scss" scoped>
.Ifrom {
  padding: 25px 25px 25px 25px;
}
</style>
