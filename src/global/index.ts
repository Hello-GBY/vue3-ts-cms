import { App } from 'vue'
import registerGlobalProperties from './register-globalProperties'

export default function globalRegister(app: App): void {
  app.use(registerGlobalProperties)
}
