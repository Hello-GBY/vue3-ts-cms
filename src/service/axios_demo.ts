import axios from 'axios'
// import MyRequest from '@/service/index'

// import { BASE_URL } from '@/service/request/config'
// axios 配置选项
// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
// axios.defaults.timeout = 10000
// axios.defaults.headers = {}

// 多个请求 一起返回
// axios
//   .all([axios.get('/home/multidata'), axios.get('/home/multidata')])
//   .then((res) => {
//     console.log('res: ', res) // res = [X,X]
//   })

// axios拦截器
// 请求拦截 (请求发送之前)
axios.interceptors.request.use(
  (config) => {
    // todo 1. 添加 token
    // todo 2. 展示loading
    return config
  },
  (err) => {
    console.log('请求发送错误！')
    console.log('err: ', err)
    return err
  }
)

// 响应拦截 (服务器正常返回了数据， 20X)
axios.interceptors.response.use(
  (res) => {
    console.log('res: ', res)
    return res.data
  },
  (err) => {
    console.log('服务器响应失败！！！')
    console.log('err: ', err)
    return err
  }
)
// axios.request({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// })
// interface dataType {
//   data: any
//   returnCode: string
//   success: true
// }
// MyRequest.request<dataType>({
//   url: '/home/multidata',
//   method: 'get',
//   interceptors: {
//     requestInterceptors: (config) => {
//       const Token = ''
//       const config_: any = config
//       if (Token) {
//         config_.headers.Authorization = 'token'
//       }
//       return config
//     }
//   },
//   showLoading: true
// }).then((res) => {
//   console.log('res: ', res)
// })

// MyRequest.get({
//   url: '/home/multidata'
// }).then((res) => {
//   console.log('res: ', res)
// })
