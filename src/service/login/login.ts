import MyRequest from '@/service/index'
import { IAccount, ILoginApiData, IAccountLogin } from './types'

// 定义 整个登录流程 需要用到的 url
enum loginApi {
  // baseURL = 'http://152.136.185.210:5000',
  LoginBaseUrl = '/login',
  LoginUserInfo = '/users/', // /users/{id}
  UserMenus = '/role/' // 用法：role/1/menu
}

// 登录请求
function accountLoginRequest(
  account: IAccount
): Promise<ILoginApiData<IAccountLogin>> {
  return MyRequest.post<ILoginApiData<IAccountLogin>>({
    url: loginApi.LoginBaseUrl,
    data: account
  })
}

// 请求用户数据
function userInfoByIdRequest(id: number): Promise<ILoginApiData> {
  return MyRequest.get<ILoginApiData>({
    url: loginApi.LoginUserInfo + id
  })
}

// 请求用户菜单
function userMenusByRoleIdRequest(id: number): Promise<ILoginApiData> {
  return MyRequest.get<ILoginApiData>({
    url: loginApi.UserMenus + id + '/menu'
  })
}

export { accountLoginRequest, userInfoByIdRequest, userMenusByRoleIdRequest }
