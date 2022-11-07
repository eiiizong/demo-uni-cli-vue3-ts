import { request } from './request'

/**
 * 获取政策文件
 * @param {String} pageNo 第几页
 * @param {String} pageSize 每页条数
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestC403 = (pageNo, pageSize, isShowLoading = true) => {
  const data = {
    methodnamedesc: '获取政策文件',
    pageNo,
    pageSize,
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/C403',
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
export { requestC403 }
