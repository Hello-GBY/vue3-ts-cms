import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRouter(userMenus: any[]): RouteRecordRaw[] {
  const Router: RouteRecordRaw[] = []

  // 1.加载默认 所有 routes (按照 router 下 main 的文件夹)
  const AllRoutes: RouteRecordRaw[] = []
  const RouterFiles = require.context('../router/main', true, /\.ts$/) // 加载文件夹
  RouterFiles.keys().forEach((fileName) => {
    // 获取文件导出的路由信息
    const ModuleFile = require('../router/main' + fileName.split('.')[1] + '')
    AllRoutes.push(ModuleFile.default)
  })

  // 2.根据菜单获取需要添加的routes

  return []
}
