import MyRequest from '@/service/index'
import { IAccount } from './types'

enum loginApi {
  baseURL = 'http://152.136.185.210:5000',
  loginBaseUrl = '/login'
}

function accountLoginRequest(account: IAccount): Promise<any> {
  return MyRequest.post({
    baseURL: loginApi.baseURL,
    url: loginApi.loginBaseUrl,
    data: account
  })
}

export { accountLoginRequest }
