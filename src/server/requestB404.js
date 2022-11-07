import { request } from './request'

/**
 * 根据aab001获取企业信息
 * @param {String} aab001 企业id
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestB404 = (aab001, isShowLoading = true) => {
  const data = {
    methodnamedesc: '根据aab001获取企业信息',
    aab001,
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/B404',
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
export { requestB404 }
