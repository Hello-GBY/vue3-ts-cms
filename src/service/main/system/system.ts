import myRequest from '@/service'
import { IUsersListApiData, IUserListData } from './type'

// any 可以更改成返回的参数定义接口
export function getPageListData(
  url: string,
  queryInfo: any
): Promise<IUsersListApiData<IUserListData>> {
  return myRequest.post<IUsersListApiData<IUserListData>>({
    url,
    data: queryInfo
  })
}
