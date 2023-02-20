<template>
  <!--v-model不建议从 props 中 获取-->
  <uin-from v-bind="fromConfig" v-model="fromDataProps">
    <!-- <slot name="heard">标题</slot> -->
    <!--itemProps 获取solt 传递过来的值-->
    <!-- <template #header="itemProps"> -->
    <template #header v-if="title ? true : false">
      <h1 class="headerTitle">{{ title }}</h1>
    </template>
    <template #footer>
      <!--  -->
      <div class="footer-button">
        <el-button @click="handleRestClick">
          <el-icon class="elIcon"> <RefreshRight /></el-icon>
          重置
        </el-button>
        <el-button
          type="primary"
          icon="refresh-right"
          @click="handleQueryClick"
        >
          <el-icon class="elIcon"><Search /></el-icon>
          提交
        </el-button>
      </div>
    </template>
  </uin-from>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import uinFrom from '@/base-ui/from/index'
import { RefreshRight, Search } from '@element-plus/icons'
export default defineComponent({
  name: '',
  components: {
    uinFrom,
    RefreshRight,
    Search
  },
  props: {
    fromConfig: {
      type: Object,
      require: true,
      default: () => ({})
    },
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
    title: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue', 'resetBthClick', 'queryBthClick'],
  setup(props, { emit }) {
    // 这种情况才是真正的双向绑定
    const fromDataProps = ref({ ...props.modelValue })
    watch(fromDataProps, (newValue) => emit('update:modelValue', newValue), {
      deep: true
    })

    // 点击重置
    const handleRestClick = () => {
      for (const key in fromDataProps.value) {
        fromDataProps.value[`${key}`] = props.modelValue[key]
      }
      emit('resetBthClick')
    }

    // 点击了搜索
    const handleQueryClick = () => {
      emit('queryBthClick', fromDataProps.value)
    }

    // 点击重置的时候
    return { fromDataProps, handleRestClick, handleQueryClick }
  }
})
</script>

<style lang="scss" scoped>
.footer-button {
  text-align: right;
  .elIcon {
    top: 2px;
    // left: 10px;
  }
  margin-left: 10px;
}
.headerTitle {
  margin-top: 0px;
}
</style>
