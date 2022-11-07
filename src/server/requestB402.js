import { request } from './request'

/**
 * 根据企业id获取信息
 * @param {String} aab001 企业id
 * @param {String} aab100 目录id
 * @returns
 */
const requestB402 = (aab001, aab100) => {
  const data = {
    aab001,
    aab100,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/B402', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestB402 }
