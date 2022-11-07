import { request } from './request'

/**
 * 根据 chb570 获取公示详情
 * @param {String} chb570
 * @param {String} type 为1时 表示当前请求浏览次数加1
 * @param {Number} pageNo 第几页
 * @param {Number} pageSize 每页条数
 * @returns
 */
const requestE404 = (chb570, type = '', pageNo = 1, pageSize = 10) => {
  const data = {
    type,
    pageNo: pageNo + '',
    chb570,
    pageSize: pageSize + '',
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/E404', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestE404 }
