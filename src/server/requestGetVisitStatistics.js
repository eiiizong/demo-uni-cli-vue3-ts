import { request } from './request'

/**
 * 统计数据查询
 * @returns
 */
const requestGetVisitStatistics = (params = {}, isShowLoading = true) => {
  const data = {
    systemtype: '1',
    ...params,
  }
  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/behaviorService/getVisitStatistics',
      data,
      isShowLoading
    )
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        if (reject) {
          reject(err)
        } else {
          console.error(err)
        }
      })
  })
}
export { requestGetVisitStatistics }
