import { createStore } from 'vuex'
import { IRootState } from './types'
import loginModel from './login/login'

export default createStore<IRootState>({
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
