import { request } from './request'

/**
 * 撤销申报
 * @param {String} chb000
 * @returns
 */
const requestB412 = (chb000) => {
  const data = {
    methodnamedesc: '撤销申报',
    chb000,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/B412', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestB412 }
