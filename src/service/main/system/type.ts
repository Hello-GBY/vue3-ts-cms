interface IUsersListApiData<T = any> {
  code: number
  data: T
}
interface IUserListData<T = any> {
  list: T[]
  totalCount: number
}

interface IPageListDataQueryInfo {
  name: string
}

export { IUsersListApiData, IUserListData, IPageListDataQueryInfo }
