import { Module } from 'vuex'
import { ILoginInstance } from './types'
import { IRootState } from '../types'

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
    accountLoginAction({ commit }, payload: any) {
      console.log('payload: ', payload)
      console.log('accountLoginAction: ')
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('payload: ', payload)
      console.log('phoneLoginAction: ')
    }
  },
  modules: {}
}

export default loginModel
