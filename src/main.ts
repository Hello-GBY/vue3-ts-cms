import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { ElButton, ElTooltip } from 'element-plus'
// const components = [ElButton, ElTooltip]
const app = createApp(App)
app.use(store).use(router).mount('#app')
