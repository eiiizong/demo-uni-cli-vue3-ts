import { request } from './request'

/**
 * 企业消息查询
 * @param {String} aab001 企业id
 * @param {String} issee 查询条件 all
 * @param {Number} pageNo 第几页
 * @param {Number} pageSize 每页条数
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestB413 = (aab001, issee, pageNo, pageSize, isShowLoading = true) => {
  const data = {
    methodnamedesc: '企业消息查询',
    pageNo: pageNo + '',
    pageSize: pageSize + '',
    aab001,
    issee,
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/B413',
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
export { requestB413 }
