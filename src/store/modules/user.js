import { login } from '@/api/sys'
import md5 from 'md5'
import { getItem, setItem } from '@/utils/storage'
import { TOKEN } from '@/constants'
export default {
  namespaced: true,
  state: () => {
    return {
      token: getItem(TOKEN) || ''
    }
  },
  mutations: {
    changeToken: (state, token) => {
      setItem(TOKEN, token)
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
          const { token } = res.data.data
          context.commit('changeToken', token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}