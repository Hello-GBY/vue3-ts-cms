interface IAccount {
  name: string
  password: string
}
interface IAccountLogin {
  id: number
  name: string
  token: string
}

interface ILoginApiData {
  id: number
  token: string
  name: string
}

export { IAccount, ILoginApiData, IAccountLogin }
