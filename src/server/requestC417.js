import { request } from './request'

/**
 * 获取政策文件列表
 * @param {String} pageNo 补贴项目编码
 * @param {String} pageSize 补贴项目编码
 * @param {String} chi037 部门编码
 * @param {String} chi231 政策文件名称
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestC417 = (
  chi037 = '',
  chi231 = '',
  pageNo = 1,
  pageSize = '10',
  isShowLoading = true
) => {
  const data = {
    methodnamedesc: '获取政策文件列表',
    pageNo,
    pageSize,
    chi037,
    chi231,
    chi238: '1', // 附件类型 1 政策文件
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/C417',
      data,
      isShowLoading
    )
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestC417 }
