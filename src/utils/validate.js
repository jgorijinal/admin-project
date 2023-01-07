// 判断是否是外部的 svg 图标地址
// 比如 https://res.lgdsunday.club/user.svg
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

