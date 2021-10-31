<template>
  <div class="user">
    <div class="search">
      <uin-from :fromItems="fromItems"></uin-from>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import uinFrom, { IFormItem } from '@/base-ui/from/index'

export default defineComponent({
  name: 'user',
  components: {
    uinFrom
  },
  setup() {
    const fromItems: IFormItem[] = [
      {
        label: '用户名',
        type: 'input',
        rules: [],
        placeholder: '请输入用户名'
      },
      {
        label: '密码',
        type: 'password',
        placeholder: '请输入密码'
      },
      {
        label: '喜欢的运动',
        type: 'select',
        placeholder: '请选择创建时间',
        options: [
          {
            label: '篮球',
            value: '篮球'
          },
          {
            label: '足球',
            value: '足球'
          }
        ]
      },
      {
        label: '创建时间',
        type: 'datepicker',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: 'daterange'
        }
      }
    ]
    return {
      fromItems
    }
  }
})
</script>

<style scoped></style>
