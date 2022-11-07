import { request } from './request'

/**
 * 获取公示列表
 * @param {Number} pageNo 第几页
 * @param {Number} pageSize 每页条数
 * @param {String} chb015 区县
 * @param {String} chi037 主管部门
 * @param {String} chi031 企业规模
 * @param {String} aab012 企业名称
 * @returns
 */
const requestE403 = (
  pageNo = 1,
  pageSize = 10,
  chb015 = '',
  chi037 = '',
  chi031 = '',
  aab012 = ''
) => {
  const data = {
    methodnamedesc: '获取公示列表',
    chb57a: '1',
    pageNo: pageNo + '',
    pageSize: pageSize + '',
    chb015,
    chi031,
    chi037,
    aab012,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/E403', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestE403 }
