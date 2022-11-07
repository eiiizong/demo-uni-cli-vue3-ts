import { request } from './request'

/**
 * 根据 orgid 获取地址
 * @param {String} orgid
 * @returns
 */
const requestE407 = (orgid) => {
  const data = {
    orgid,
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/E407',
      data,
      'POST',
      false
    )
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestE407 }
