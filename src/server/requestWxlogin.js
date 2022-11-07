import { request } from './request'

/**
 * 小程序登录
 * @param {String} openidopenid 微信openid
 * @param {String} idCard 身份证号
 * @param {String} userName 姓名
 * @param {String} tel 手机号
 * @param {String} portraiturl 头像图片地址
 * @returns
 */
const requestWxlogin = (openid, idCard, userName, tel, portraiturl) => {
  const data = {
    openid,
    loginId: idCard,
    idCard,
    userName,
    tel,
    portraiturl,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontLoginRestService/wxlogin', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestWxlogin }
