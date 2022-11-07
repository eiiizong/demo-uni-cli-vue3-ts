import { request } from './request'

/**
 * 获取政策文件列表
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestC413 = (isShowLoading = true) => {
  const data = {
    methodnamedesc: '获取政策文件列表',
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/C413',
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
export { requestC413 }
