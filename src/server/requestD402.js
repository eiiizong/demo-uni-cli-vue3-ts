import { request } from './request'

/**
 * 获取政策计算器列表
 * @param {String} aab001 企业id
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestD402 = (aab001, isShowLoading = true) => {
  const data = {
    methodnamedesc: '获取项目的匹配报告',
    aab001,
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/D402',
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
export { requestD402 }
