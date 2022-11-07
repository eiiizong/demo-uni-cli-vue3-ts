import { request } from './request'

/**
 * 根据
 * @param {Object} params
 * @returns
 */
const requestB405 = (params) => {
  const data = {
    ...params,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/B405', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestB405 }
