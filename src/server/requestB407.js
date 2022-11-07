import { request } from './request'

/**
 * 根据用户信息获取申报记录
 * @param {String} aab001 企业id
 * @param {String} queryParam 查询条件 all 全部 ing 进行中 back 退回的 finish完成的 cancel撤销
 * @param {Number} pageNo 第几页
 * @param {Number} pageSize 每页条数
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestB407 = (
  aab001,
  queryParam,
  pageNo,
  pageSize,
  isShowLoading = true
) => {
  const data = {
    methodnamedesc: '根据用户信息获取申报记录',
    aab001,
    queryParam,
    pageNo: pageNo + '',
    pageSize: pageSize + '',
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/B407',
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
export { requestB407 }
