import MyRequest from './request/index'
import { BASE_URL } from './request/config'
import localCache from '@/utils/cache'
const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: 10000,
  interceptorHooks: {
    requestInterceptors: (config) => {
      const token = localCache.getCache('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorsCatch: (err) => {
      return err
    },
    responseInterceptors: (res) => {
      return res.data
    },
    responseInterceptorsCatch: (err) => {
      return err
    }
  }
})
export default myRequest
