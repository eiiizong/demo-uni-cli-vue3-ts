import { request } from './request'

/**
 * 企业消息查询
 * @returns
 */
const requestB414 = (aab001, mgid) => {
  const data = {
    aab001,
    mgid,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/B414', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestB414 }
