import { request } from '@/server/request'

/**
 * 获取openid或者登录信息
 * @param {string} code 小程序code
 * @param {Boolean} isShowLoading 是否显示加载中动画 默认值 true
 * @param {Boolean} isShowErrorToast 是否显示错误提示 默认值 true
 * @returns
 */
const requestGetOpenId = (code: string, isShowLoading = true, isShowErrorToast = true) => {
  const data = {
    methodnamedesc: '获取openid或者登录信息',
    code,
    userType: '1',
    appIndex: '2', // 小程序类别 默认 0 一卡通 1 移动监督 2 移动审核
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontLoginRestService/getOpenId',
      data,
      isShowLoading,
      isShowErrorToast
    )
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestGetOpenId }
