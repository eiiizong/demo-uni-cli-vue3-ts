import { request } from './request'

/**
 * 退出登录
 * @param {String} userId 用户id
 * @returns
 */
const requestWxlogout = (userId) => {
  const data = {
    userId,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontLoginRestService/wxlogout', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestWxlogout }
