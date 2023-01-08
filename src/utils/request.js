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

// 服务端会返回这种格式的内容
// code: 200,
// data: {token: "56ebb892-4480-4127-b06e-ca9efd5e9e60"},
// message: "登录成功",
// success: true,
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

