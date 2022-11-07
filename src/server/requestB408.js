import { request } from './request'

/**
 * 获取知名企业目录信息
 * @param {Number} pageNo 第几页
 * @param {Number} pageSize 每页条数
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestB408 = (pageNo, pageSize, isShowLoading = true) => {
  const data = {
    methodnamedesc: '获取知名企业目录信息',
    pageNo: pageNo + '',
    pageSize: pageSize + '',
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/B408',
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
export { requestB408 }
