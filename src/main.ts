import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/service/axios_demo'
// import 'element-plus/packages/theme-chalk/src/base.scss'
import 'element-plus/packages/theme-chalk/src/loading.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
