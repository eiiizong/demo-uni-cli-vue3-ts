import { request } from './request'

/**
 * 获取最新注册企业名单
 * @param {Number} pageNo 第几页
 * @param {Number} pageSize 每页条数
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestB411 = (pageNo, pageSize, isShowLoading = true) => {
  const data = {
    methodnamedesc: '获取最新注册企业名单',
    pageNo: pageNo + '',
    pageSize: pageSize + '',
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/B411',
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
export { requestB411 }
