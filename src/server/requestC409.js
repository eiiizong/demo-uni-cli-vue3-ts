import { request } from './request'

/**
 * 补贴项目申报
 * @param {Object} param 参数
 * @returns
 */
const requestC409 = (param) => {
  const data = {
    ...param,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/C409', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestC409 }
