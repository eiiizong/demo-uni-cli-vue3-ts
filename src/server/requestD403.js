import { request } from './request'

/**
 * 获取补贴项目校验信息
 * @returns
 */
const requestD403 = (chb000) => {
  const data = {
    chb000,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/D403', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestD403 }
