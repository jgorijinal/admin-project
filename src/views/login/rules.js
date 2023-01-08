// 校验密码长度
export const validatePassword = (rule, value, callback) => {
  if (value.length < 6) {
    callback(new Error('密码长度不能少于6位'))
  } else {
    callback()
  }
}

