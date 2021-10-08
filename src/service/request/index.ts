import axios from 'axios'
import Cookies from 'js-cookie'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { InterceptorsHooks, MyAxiosRequestConfig } from './type'
import { ElLoading } from 'element-plus'

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

    // 设置默认拦截器配置
    // request:
    this.instance.interceptors.request.use(
      (config) => {
        if (Cookies.get('Token')) {
          // config.headers.Authorization = Cookies.get('Token') + ''
        }
        const loadingInstance = ElLoading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })

        return config
      },
      (err) => {
        console.log('err: ', err)
      }
    )
    // response:
    this.instance.interceptors.response.use(
      (res) => {
        const data: any = res.data
        if (data.returnCode == '-1001') {
          console.log('请求失败的错误信息')
        } else {
          return data
        }
      },
      (err) => {
        if (err.response.status == 404) {
          console.log('404错误的提示！')
        } else if (err.response.status == 500) {
          console.log('服务器端错误提示！')
        }
      }
    )
  }

  request(config: MyAxiosRequestConfig): Promise<AxiosResponse<never>> {
    return this.instance.request(config)
  }

  // get() {}
  // post() {}
}

export default MyRequest
