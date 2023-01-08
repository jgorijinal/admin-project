import { login } from '@/api/sys'
import md5 from 'md5'
export default {
  namespaced: true,
  state: () => {
    return {
      token:''
    }
  },
  mutations: {
    changeToken: (state, token) => {
      state.token = token
    }
  },
  actions: {
    loginAction(context, formData) {
      const { username, password } = formData
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        }).then(res => {
          console.log(res)
          // TODO: token 处理
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}