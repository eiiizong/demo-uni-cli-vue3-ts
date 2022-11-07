import { request } from './request'

/**
 * 获取正在申报的补贴项目申报流程
 * @param {String} chb000
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestB421 = (chb000, isShowLoading = true) => {
  const data = {
    methodnamedesc: '获取正在申报的补贴项目申报流程',
    chb000,
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/B421',
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
export { requestB421 }
