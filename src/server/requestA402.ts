import { request } from './request'

/**
 * 获取登录人岗位信息
 * @param {String} loginid 用户id
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestA402 = (loginid: string, isShowLoading = true) => {
  const data = {
    loginid,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/A402', data, isShowLoading)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestA402 }
