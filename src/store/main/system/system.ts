import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './type'
import { getPageListData } from '@/service/main/system/system'
import { firstUpperCase } from '@/utils/common'

const systemModel: Module<ISystemState, IRootState> = {
  namespaced: true, // 一定要加这个
  state: {
    // user
    usersList: [],
    usersCount: 0,
    // role
    roleList: [],
    roleCount: 0,
    //
    departmentTotalCount: 0,
    departmentList: [],
    //
    menuList: []
  },
  mutations: {
    changeUsersList: (state, newValue) => (state.usersList = newValue),
    changeUsersCount: (state, newValue) => (state.usersCount = newValue),
    changeRoleList: (state, newValue) => (state.roleList = newValue),
    changeRoleCount: (state, newValue) => (state.roleCount = newValue),
    changeDepartmentList: (state, departmentList) =>
      (state.departmentList = departmentList),
    changeDepartmentCount: (state, totalCount: number) =>
      (state.departmentTotalCount = totalCount),
    changeMenuList(state, menuList: any) {
      state.menuList = menuList
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => (state as any)[`${pageName}List`]
    },
    pageListCount(state) {
      return (pageName: string) => (state as any)[`${pageName}Count`]
    }
  },
  actions: {
    async getPageListAction({ commit }, playLoad: any) {
      const pageName = playLoad.pageName
      const apiUrl = `/${pageName}/List`
      // const firstUpperPageName = firstUpperCase(pageName)

      // 拿到要请求的参数 调用service 来发送服务请求
      const pageResult = await getPageListData(apiUrl, playLoad.queryInfo)
      const { list, totalCount } = pageResult || {}

      switch (pageName) {
        case 'users':
          commit('changeUsersCount', totalCount)
          commit('changeUsersList', list)
          break
        case 'department':
          commit('changeDepartmentCount', totalCount)
          commit('changeDepartmentList', list)
          break
        case 'role':
          commit('changeRoleCount', totalCount)
          commit('changeRoleList', list)
          break
        case 'menu':
          commit('changeMenuList', list)
          break
      }
    }
  },
  modules: {}
}

export default systemModel
