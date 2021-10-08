import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义拦截器钩子

interface InterceptorsHooks {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (err: any) => any
}
interface MyAxiosRequestConfig extends AxiosRequestConfig {
  interceptors?: InterceptorsHooks
}

export { MyAxiosRequestConfig, InterceptorsHooks }