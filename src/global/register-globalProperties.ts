import formatUtcFormat from '@/utils/fromat-utc'
import { App } from 'vue'

export default function registerGlobalProperties(app: App): void {
  app.config.globalProperties.$filters = {
    foo(val: string) {
      console.log('val: ', val)
    },
    formatTime(utcString: string) {
      // 返回数据
      return formatUtcFormat(utcString)
    }
  }
}
