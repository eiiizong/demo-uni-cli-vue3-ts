import { request } from './request'

/**
 * 根据补贴项目编码获取申报类别
 * @param {String} chi031 补贴项目编码
 * @returns
 */
const requestC416 = (chi031) => {
  const data = {
    methodnamedesc: '根据补贴项目编码获取申报数据项',
    chi031,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/C416', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestC416 }
