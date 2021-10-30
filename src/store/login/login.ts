import { Module } from 'vuex'
import { ILoginInstance } from './types'
import { IRootState } from '../types'
import {
  accountLoginRequest,
  userInfoByIdRequest,
  userMenusByRoleIdRequest
} from '@/service/login/login'
import { IAccount } from '@/service/login/types'
import LocalCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRouter } from '@/utils/map-menus'

const loginModel: Module<ILoginInstance, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: '',
      userMenus: ''
    }
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token
    },
    setUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    setUserMenus(state, userMenus: any) {
      // 设置动态路由
      state.userMenus = userMenus
      const routes = mapMenusToRouter(userMenus)
      // 将userMenus 的映射关系 设置到 router.main.children上
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录的逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('setToken', token)
      LocalCache.setCache('token', token)

      // 2. 请求用户信息
      const userInfoResult = await userInfoByIdRequest(id)
      const userInfo = userInfoResult.data
      console.log('userInfo: ', userInfo)
      commit('setUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      // 3.请求菜单
      const userMenusResult = await userMenusByRoleIdRequest(userInfo.role.id)
      console.log('userMenusResult: ', userMenusResult)
      const userMenus = userMenusResult.data
      commit('setUserMenus', userMenus)
      LocalCache.setCache('userMenus', userMenus)

      // 4.跳转转到 首页
      router.push('/main')
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('commit: ', commit)
      console.log('payload: ', payload)
      console.log('phoneLoginAction: ')
    },
    setStoreByLocalStorage({ commit }) {
      const token = LocalCache.getCache('token')
      const userInfo = LocalCache.getCache('userInfo')
      const userMenus = LocalCache.getCache('userMenus')

      if (token) {
        commit('setToken', token)
      }
      if (userInfo) {
        commit('setUserInfo', userInfo)
      }
      if (userMenus) {
        commit('setUserMenus', userMenus)
      }
    }
  },
  modules: {}
}

export default loginModel
