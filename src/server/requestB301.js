import { request } from './request'

/**
 * 更新企业基本信息
 * @param {String} aab105 表名
 * @param {Object} info 修改字段
 * @returns
 */
const requestB301 = (aab105, info) => {
  const data = {
    aab105,
    info,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/B301', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestB301 }
