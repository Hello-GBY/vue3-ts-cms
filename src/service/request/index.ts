import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { InterceptorsHooks, MyAxiosRequestConfig } from './type'

// 统一封装axios
class MyRequest {
  instance: AxiosInstance // axios 实例
  interceptors?: InterceptorsHooks // 请求拦截、响应拦截hooks

  constructor(config: MyAxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 设置拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )
  }

  request(config: AxiosRequestConfig): Promise<AxiosResponse<never>> {
    return this.instance.request(config)
  }

  // get() {}
  // post() {}
}

export default MyRequest
