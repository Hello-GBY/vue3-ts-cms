/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare const VUE_APP_BASE_URL: string
// declare module 'axios'
// declare module 'raven-js'
// declare module 'raven-js/plugins/vue'
// 定义了全局方法之后需要扩充类型
