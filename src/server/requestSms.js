import { request } from './request'

/**
 * 获取用户信息
 * @returns
 */
const requestSms = (url, param) => {
  if (!!url && url.charAt(0) !== '/') {
    url = '/' + url
  }
  const data = {
    ...param,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontSmsDataRestService' + url, data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        console.log('err', err)
        reject(err)
      })
  })
}
export { requestSms }
