import { request } from './request'

/**
 * 获取手机验证码
 * @param {String} phoneNumber 11位手机号
 * @returns
 */
const requestGetSmsCode = (phoneNumber) => {
  const data = {
    phoneNo: phoneNumber,
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontSmsDataRestService/getSmsCode',
      data,
      'POST',
      true,
      '发送中'
    )
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestGetSmsCode }
