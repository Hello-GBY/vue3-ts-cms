import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalRegister from '@/global/index'
import { setupStoreByLocalStorage } from '@/store/index'

import '@/service/axios_demo'
import '@/assets/css/base.scss'
import 'element-plus/theme-chalk/src/base.scss'
// import 'element-plus/theme-chalk/src/base.scss'
import 'element-plus/theme-chalk/el-message.css'
// import 'element-plus/packages/theme-chalk/src/loading.scss'

const app = createApp(App)
app.use(store)
setupStoreByLocalStorage() // 注意 要在router 之前、刷新浏览器 通过 LocalStorage重新赋值 vuex
app.use(router)
app.mount('#app')
globalRegister(app) // 设置全局注册

console.log(process.env.VUE_APP_BASE_URL)
