import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义拦截器钩子
interface InterceptorsHooks<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  responseInterceptors?: (res: T) => T
  responseInterceptorsCatch?: (err: any) => any
}

interface MyAxiosRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: InterceptorsHooks<T>
  showLoading?: boolean // 展示全屏 loading
}

export { MyAxiosRequestConfig, InterceptorsHooks }
