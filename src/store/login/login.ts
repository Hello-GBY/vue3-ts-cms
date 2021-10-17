import { Module } from 'vuex'
import { ILoginInstance } from './types'
import { IRootState } from '../types'
import { accountLoginRequest } from '@/service/login/login'
import { IAccount } from '@/service/login/types'

const loginModel: Module<ILoginInstance, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: ''
    }
  },
  mutations: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录的逻辑
      const loginResult = await accountLoginRequest(payload)
      console.log('loginResult: ', loginResult)
    },

    phoneLoginAction({ commit }, payload: any) {
      console.log('payload: ', payload)
      console.log('phoneLoginAction: ')
    }
  },
  modules: {}
}

export default loginModel
