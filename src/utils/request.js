import axios from 'axios'

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.VUE_APP_BASE_API
})

export default instance