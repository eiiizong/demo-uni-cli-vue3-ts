import { request } from './request'
import config from '@/config'

/**
 * 新增投诉处理 (无业务)
 *
 * @returns
 */
const requestE102 = (params) => {
  const data = {
    chb004: '02',
    aab301: config.areaCode,
    chb09g: 2, //投诉渠道
    chb015: '999',
    chb017: '999',
    chb018: '999',
    ...params,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/E102', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestE102 }
