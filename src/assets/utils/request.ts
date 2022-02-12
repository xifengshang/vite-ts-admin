import axios from 'axios'

// 创建zxios实例
const service = axios.create({
  // baseURL: '',
  timeout: 10000,
  headers:{'Content-Type':'application/json;charset=utf-8'}
})

service.interceptors.request.use(config => {
  return config
})

service.interceptors.response.use((res:any) => {
  return Promise.resolve(res)
})

export default service