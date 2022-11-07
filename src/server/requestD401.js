import { request } from './request'

/**
 * 获取项目的匹配报告
 * @param {String} aab001 企业id
 * @param {String} chi031 补贴项目编码
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestD401 = (aab001, chi031, isShowLoading = true) => {
  const data = {
    methodnamedesc: '获取项目的匹配报告',
    aab001,
    chi031,
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/D401',
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
export { requestD401 }
