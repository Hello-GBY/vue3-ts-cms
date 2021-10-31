import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRouter(userMenus: any[]): RouteRecordRaw[] {
  const Routers: RouteRecordRaw[] = []

  // 1.加载默认 所有 routes (按照 router 下 main 的文件夹)
  const AllRoutes: RouteRecordRaw[] = []
  const RouterFiles = require.context('../router/main', true, /\.ts$/) // 加载文件夹
  RouterFiles.keys().forEach((fileName) => {
    // 获取文件导出的路由信息
    const ModuleFile = require('../router/main' + fileName.split('.')[1] + '')
    AllRoutes.push(ModuleFile.default)
  })

  // 2.根据菜单获取需要添加的routes
  const _recurseGetRouter = (menus: any[]): void => {
    for (const menu of menus) {
      // 类型为 2 的时候是需要的
      if (menu.type == 2) {
        const router = AllRoutes.find((router) => router.path == menu.url)
        if (router) Routers.push(router)
      } else {
        _recurseGetRouter(menu.children)
      }
    }
  }
  _recurseGetRouter(userMenus)
  console.log('Routers: ', Routers)
  return Routers
}
