<template>
  <div class="nav-info">
    <div class="info">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar size="medium" class="avatar" :src="avatar"></el-avatar>
          <span class="name">{{ name }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              icon="el-icon-circle-close"
              @click="handleExitClick"
              >退出系统</el-dropdown-item
            >
            <el-dropdown-item
              icon="el-icon-info"
              divided
              @click="handlePersonalInformationClick"
              >个人信息</el-dropdown-item
            >
            <el-dropdown-item
              icon="el-icon-unlock"
              @click="handlePersonalInformationClick"
              >修改密码</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="operation">
      <span><i class="el-icon-bell"></i></span>
      <span><i class="el-icon-chat-dot-round"></i></span>
      <span>
        <span class="dot"></span>
        <i class="el-icon-postcard"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
let avatar = require('@/assets/img/avatar.jpg')
console.log('avatar: ', avatar)
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store/index'
import { useRouter } from 'vue-router'

import localCache from '@/utils/cache'
import { ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)

    const router = useRouter()

    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }
    const handlePersonalInformationClick = () => {
      ElMessage({
        message: '演示模式，不允许操作',
        type: 'warning'
      })
    }
    return {
      name,
      handleExitClick,
      avatar,
      handlePersonalInformationClick
    }
  }
})

Number('123')
</script>

<style scoped lang="less">
.nav-info {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;

    .avatar {
      width: 30px;
      height: 30px;
    }
    .name {
      margin-left: 8px;
    }
  }

  .operation {
    margin-right: 20px;
    span {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 35px;
      line-height: 35px;

      &:hover {
        background: #f2f2f2;
      }

      i {
        font-size: 20px;
      }

      .dot {
        position: absolute;
        top: 3px;
        right: 3px;
        z-index: 10;
        width: 6px;
        height: 6px;
        background: red;
        border-radius: 100%;
      }
    }
  }
}
</style>
