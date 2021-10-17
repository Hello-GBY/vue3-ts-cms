import axios from 'axios'
// import Cookies from 'js-cookie'
import type { AxiosInstance } from 'axios'
import type { InterceptorsHooks, MyAxiosRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/components/loading/src/loading.type'
import LocalCache from '@/utils/cache'

const LOADING_FLAG = false
// 统一封装axios
class MyRequest {
  instance: AxiosInstance // axios 实例
  interceptors?: InterceptorsHooks // 请求拦截、响应拦截hooks
  loadingInstance?: ILoadingInstance // 全局loading实例
  showLoading: boolean // 是否显示loading

  constructor(config: MyAxiosRequestConfig) {
    this.instance = axios.create(config) // 初始化_创建axios实例
    this.interceptors = config.interceptors // 拦截器
    this.showLoading = config.showLoading ?? LOADING_FLAG // 全局loading

    // 自定义拦截器
    // request:
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    // response:
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )

    // 默认拦截器配置（必须执行）
    // request:
    this.instance.interceptors.request.use(
      (config: any) => {
        //todo: 这块 any 可以优化
        if (LocalCache.getCache('token')) {
          config.headers.Authorization = LocalCache.getCache('token')
        }

        if (this.showLoading) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }
        return config
      },
      (err) => {
        console.log('err: ', err)
      }
    )
    // response:
    this.instance.interceptors.response.use(
      (res) => {
        // todo: 有坑
        const data: any = res.data
        if (data.returnCode == '-1001') {
          console.log('请求失败的错误信息')
        } else {
          if (this.showLoading) {
            this.loadingInstance?.close()
            this.showLoading = LOADING_FLAG
          }
          return data
        }
      },
      (err) => {
        // 错误拦截
        this.loadingInstance?.close()
        this.showLoading = LOADING_FLAG
        if (err.response.status == 404) {
          console.log('404错误的提示！')
        } else if (err.response.status == 500) {
          console.log('服务器端错误提示！')
        }
      }
    )
  }

  request<T>(config: MyAxiosRequestConfig<T>): Promise<T> {
    this.showLoading = config.showLoading ?? false // 全局loading
    return this.instance.request<never, T>(config)
    // return new Promise((resolve, reject) => {
    //   this.instance
    //     .request<never, T>(config)
    //     .then((res) => {
    //       // if (config.interceptors?.responseInterceptors) {
    //       //   res = config.interceptors.responseInterceptors(res)
    //       // }
    //       resolve(res)
    //     })
    //     .catch((err) => {
    //       reject(err)
    //     })
    // })
  }

  get<T>(config: MyAxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T>(config: MyAxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T>(config: MyAxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
  put<T>(config: MyAxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PUT' })
  }
  patch<T>(config: MyAxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default MyRequest
