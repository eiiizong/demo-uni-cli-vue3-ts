import { request } from './request'

/**
 * 获取某知名企业信息
 * @param {String} aab220 企业id
 * @returns
 */
const requestB409 = (aab220) => {
  const data = {
    methodnamedesc: '获取某知名企业信息',
    aab220,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/B409', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestB409 }
