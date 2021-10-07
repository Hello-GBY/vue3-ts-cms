import MyRequest from './request/index'

const myRequest = new MyRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000
})
export default myRequest
