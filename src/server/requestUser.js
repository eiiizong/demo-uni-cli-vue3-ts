import { request } from './request'

/**
 * 获取用户信息
 * @param {String} aac002 身份证号
 * @param {String} aac003 姓名
 * @returns
 */
const requestUser = (url, param) => {
  if (!!url && url.charAt(0) !== '/') {
    url = '/' + url
  }
  const data = {
    chb004: '02',
    ...param,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontLoginRestService' + url, data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestUser }
