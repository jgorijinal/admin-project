import axios from 'axios'
import { ElMessage } from 'element-plus'

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


service.interceptors.response.use(res => {
  const { success, data , message } =  res.data
  if (success) {
    ElMessage.success(message)
    return data
  } else {
    ElMessage.error(message)
    return Promise.reject(new Error(message))
  }
}, (err) => {
  ElMessage.error(err.message)
  return Promise.reject(err)
})

export default service