import MyRequest from '../../index'

enum AnalysisAPI {
  amountList = '/goods/amount/list'
}

export function getAmountList() {
  return MyRequest.get({
    url: AnalysisAPI.amountList
  })
}
