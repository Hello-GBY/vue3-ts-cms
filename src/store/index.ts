import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import loginModel from './login/login'
import systemModel from './main/system/system'
import analysisModel from './main/analysis/analysis'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'code_gby',
      entireRoles: [],
      entireDepartments: [],
      entireMenus: []
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login: loginModel,
    system: systemModel,
    analysis: analysisModel
  }
})
export default store

// 对 store 进行初始化，
// 防止用户刷新之后 vuex 里的值没有了, localStorage 里面还有值
export function setupStoreByLocalStorage(): void {
  store.dispatch('login/setStoreByLocalStorage')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore<IStoreType>()
}
