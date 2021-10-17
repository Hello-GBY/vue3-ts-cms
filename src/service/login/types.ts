interface IAccount {
  name: string
  password: string
}
interface ILoginApiData_Data {
  id: number
  name: string
  token: string
}

interface ILoginApiData {
  code: number
  data: ILoginApiData_Data
}

export { IAccount, ILoginApiData }
