import { request } from './request'

/**
 * 登录
 * @param {String} loginid 帐号
 * @param {String} password 密码
 * @returns
 */
const requestLogin = (loginid, password) => {
  const data = {
    chb004: '02',
    loginid,
    password,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontLoginRestService/login', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestLogin }
