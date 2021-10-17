import MyRequest from '@/service/index'
import { IAccount, ILoginApiData } from './types'

enum loginApi {
  // baseURL = 'http://152.136.185.210:5000',
  loginBaseUrl = '/login'
}

function accountLoginRequest(account: IAccount): Promise<ILoginApiData> {
  return MyRequest.post<ILoginApiData>({
    url: loginApi.loginBaseUrl,
    data: account
  })
}

export { accountLoginRequest }
