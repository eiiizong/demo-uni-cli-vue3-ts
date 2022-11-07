import { request } from './request'

/**
 * 通用调用方法
 * @param {String} methodname 方法名
 * @param {Object} param 参数
 * @returns
 */
const requestGetData = (methodname, param = {}) => {
  const data = {
    chb004: '02',
    methodname,
    ...param,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/getData', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestGetData }
