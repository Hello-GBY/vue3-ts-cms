interface IAccount {
  name: string
  password: string
}
interface IAccountLogin {
  id: number
  name: string
  token: string
}

interface ILoginApiData<T = any> {
  code: number
  data: T
}

export { IAccount, ILoginApiData, IAccountLogin }
