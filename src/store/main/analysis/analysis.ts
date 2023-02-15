import { Module } from 'vuex'

import { getAmountList } from '@/service/main/analysis/analysis'

import { IAnalysis } from './types'
import { IRootState } from '../../types'

const analysisModule: Module<IAnalysis, IRootState> = {
  namespaced: true,
  state() {
    return {
      topPanelDatas: []
    }
  },
  mutations: {
    changeTopPanelDatas(state, list) {
      state.topPanelDatas = list
    }
  },
  actions: {
    async getAnalysisDataAction({ commit }) {
      const resultTopPanelData = await getAmountList()
      commit('changeTopPanelDatas', resultTopPanelData)
    }
  }
}

export default analysisModule
