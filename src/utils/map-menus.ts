import { RouteRecordRaw } from 'vue-router'
import { breadcrumbProps } from '@/base-ui/breadcrumb/index'

/* userMenus : [{
  children: (2) [{id: 39, url: '/main/analysis/overview', name: '核心技术', sort: 106, type: 2, …}]
    icon: "el-icon-monitor"
    id: 38
    name: "系统总览"
    sort: 1
    type: 1
    url: "/main/analysis"
}]
*/
let firstMenu: any = null
export function mapMenusToRouter(userMenus: any[]): RouteRecordRaw[] {
  const Routers: RouteRecordRaw[] = []

  // 1.加载默认 所有 routes (按照 router 下 main 的文件夹格式)
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
        if (!firstMenu) firstMenu = router
      } else {
        _recurseGetRouter(menu.children)
      }
    }
  }
  _recurseGetRouter(userMenus)
  console.log('Routers: ', Routers)
  return Routers
}

// 计算当前活动menusActive
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: breadcrumbProps
): any {
  // 从 userMenus 查找 匹配的路径
  for (const menu of userMenus) {
    if (menu.type == '1') {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      // 递归出口
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type == '2' && menu.url == currentPath) {
      return menu
    }
  }
}

// 计算面包屑
export function pathMapBreadcrumb(userMenus: any[], currentPath: string): any {
  const breadcrumbs: breadcrumbProps = []
  // 从 userMenus 查找 匹配的路径
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// 项目根路径时默认打开第一个导航
export { firstMenu }
