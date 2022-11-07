import { request } from './request'

/**
 * 检验手机验证码是否正确
 * @param {String} phoneNo 11位手机号
 * @param {String} smsCode 11位手机号验证码
 * @returns
 */
const requestCheckSmsCode = (phoneNo, smsCode) => {
  const data = {
    phoneNo,
    smsCode,
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontSmsDataRestService/checkSmsCode',
      data,
      'POST',
      true,
      '校验中'
    )
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestCheckSmsCode }
