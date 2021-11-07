<template>
  <div class="user">
    <uin-from v-bind="fromConfig" v-model="fromData">
      <!-- <slot name="heard">标题</slot> -->
      <!--itemProps 获取solt 传递过来的值-->
      <!-- <template #header="itemProps"> -->
      <template #header>
        <h1 class="headerTitle">Here might be a page title</h1>
      </template>
      <template #footer>
        <!--  -->
        <div class="footer-button">
          <el-button>
            <el-icon class="elIcon"><RefreshRight /></el-icon>
            重置
          </el-button>
          <el-button type="primary" icon="refresh-right">
            <el-icon class="elIcon"><Search /></el-icon>
            提交
          </el-button>
        </div>
      </template>
    </uin-from>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import uinFrom from '@/base-ui/from/index'
import { fromConfig } from './config/searchconfig'
import { RefreshRight, Search } from '@element-plus/icons'
export default defineComponent({
  name: 'user',
  components: {
    uinFrom,
    RefreshRight,
    Search
  },
  setup() {
    const fromData = reactive({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      fromConfig,
      fromData
    }
  }
})
</script>

<style scoped lang="less">
.user {
  // padding-top: 22px;
  margin-left: -18px;
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
}
</style>
