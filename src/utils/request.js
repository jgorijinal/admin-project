import axios from 'axios'

const service = axios.create({
  timeout: 5000,
  baseURL: process.env.VUE_APP_BASE_API
})

service.interceptors.request.use((config) => {
  config.headers.icode = '733D0317E18454D4'
  return config
}, (err) => {
  return Promise.reject(err)
})

export default service