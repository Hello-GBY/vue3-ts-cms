import { createStore } from 'vuex'
import { IRootState } from './types'
import loginModel from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'code_gby',
      age: 18
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login: loginModel
  }
})
export default store

// 对 store 进行初始化，
// 防止用户刷新之后 vuex 里的值没有了, localStorage 里面还有值
export function setupStoreByLocalStorage(): void {
  store.dispatch('login/setStoreByLocalStorage')
}
