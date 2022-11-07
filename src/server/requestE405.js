import { request } from './request'

/**
 * 获取活动头条（新闻）列表
 * @param {Number} pageNo 第几页
 * @param {Number} pageSize 每页条数
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestE405 = (pageNo, pageSize, isShowLoading = true) => {
  const data = {
    methodnamedesc: '获取活动头条（新闻）列表',
    pageNo: pageNo + '',
    pageSize: pageSize + '',
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/E405',
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
export { requestE405 }
