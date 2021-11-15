import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './type'
import { getPageListData } from '@/service/main/system/system'

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
      // 拿到要请求的参数 调用service 来发送服务请求
      const pageResult = await getPageListData(
        playLoad.queryUrl,
        playLoad.queryInfo
      )
      const { list, totalCount } = pageResult.data

      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  },
  modules: {}
}
export default systemModel
