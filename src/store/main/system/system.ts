import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './type'
import { getPageListData } from '@/service/main/system/system'
import { firstUpperCase } from '@/utils/common'

const systemModel: Module<ISystemState, IRootState> = {
  namespaced: true, // 一定要加这个
  state: {
    userList: [],
    userCount: 0
  },
  mutations: {
    changeUserList(state, newValue) {
      state.userList = newValue
    },
    changeUserCount(state, newValue) {
      state.userCount = newValue
    }
  },
  actions: {
    async getPageListAction({ commit }, playLoad: any) {
      let pageUrl = ''
      const pageName = playLoad.pageName
      console.log('pageName: ', pageName)
      const firstUpperPageName = firstUpperCase(pageName)
      switch (pageName) {
        case 'user':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
      }

      // 拿到要请求的参数 调用service 来发送服务请求
      const pageResult = await getPageListData(pageUrl, playLoad.queryInfo)
      const { list, totalCount } = pageResult.data

      commit(`change${firstUpperPageName}List`, list)
      commit(`change${firstUpperPageName}Count`, totalCount)
    }
  },
  modules: {}
}

export default systemModel
