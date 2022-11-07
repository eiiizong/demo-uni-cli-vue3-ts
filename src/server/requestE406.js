import { request } from './request'

/**
 * 获取活动头条（新闻）详情
 * @param {String} chm650 新闻主键
 * @returns
 */
const requestE406 = (chm650) => {
  const data = {
    chm650,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/E406', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestE406 }
