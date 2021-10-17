import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/service/axios_demo'
import '@/assets/css/base.scss'

import { setupStoreByLocalStorage } from '@/store/index'
// todo: 待优化
// import 'element-plus/packages/theme-chalk/src/base.scss'
// import 'element-plus/packages/theme-chalk/src/loading.scss'

const app = createApp(App)
app.use(store)
app.use(router)
setupStoreByLocalStorage() // 刷新浏览器 通过 LocalStorage重新赋值 vuex
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
