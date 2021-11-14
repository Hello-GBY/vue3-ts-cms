import { App } from 'vue'

export default function registerGlobalProperties(app: App): void {
  app.config.globalProperties.$filters = {
    foo(val: string) {
      console.log('val: ', val)
    },
    formatTime(value: string) {
      // 返回数据
      return value + 'sdf'
    }
  }
}
