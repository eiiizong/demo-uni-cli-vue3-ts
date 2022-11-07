import { request } from './request'

/**
 * 根据获取企业信息满意度调查成果
 * @param
 * @returns
 */
const requestB406 = () => {
  const data = {}

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/B406', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestB406 }
