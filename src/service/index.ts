import MyRequest from './request/index'
import { BASE_URL } from './request/config'

const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: 10000
})
export default myRequest
