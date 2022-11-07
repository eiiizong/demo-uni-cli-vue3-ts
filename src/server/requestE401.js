import { request } from './request'

/**
 * 统计接口
 * @param {Array} methodList 统计方法组成的数组[{method: 'enterprisesUnder'}]
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestE401 = (methodList, isShowLoading = true) => {
  const data = {
    methodList: JSON.stringify(methodList),
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/E401',
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
export { requestE401 }
