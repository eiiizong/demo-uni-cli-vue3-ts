import { request } from './request'

/**
 * 新增企业信息
 * @param {String} aab105 表名
 * @returns
 */
const requestB102 = (aab105) => {
  const data = {
    aab105,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/B102', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestB102 }
