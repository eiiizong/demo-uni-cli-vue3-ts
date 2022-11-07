import { request } from './request'

/**
 * 统计访问
 * @param {Object} param 参数
 * @param {Boolean} isLoading 是否显示加载中
 * @returns
 */
const requestSaveVisitLog = (param, isLoading = false) => {
  const data = {
    ...param,
  }
  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/behaviorService/saveVisitLog',
      data,
      'POST',
      isLoading
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
export { requestSaveVisitLog }
