import { request } from './request'

/**
 * 根据企业id获取信息菜单
 * @param {String} orgid 企业id
 * @returns
 */
const requestB401 = (orgid) => {
  const data = {
    orgid,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/B401', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestB401 }
