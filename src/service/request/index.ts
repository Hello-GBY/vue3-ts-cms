import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

class MyRequest {
  instance: AxiosInstance // axios 实例

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  request(config: AxiosRequestConfig): Promise<AxiosResponse<never>> {
    return this.instance.request(config)
  }

  get() {}
  post() {}
}

export default MyRequest
