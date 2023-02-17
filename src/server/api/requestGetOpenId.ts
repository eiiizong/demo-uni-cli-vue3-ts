import type { GetOpenIdSuccessResult } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 获取openid或者登录信息
 * @param {string} code 小程序code
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 * @returns
 */
const requestGetOpenId = (
  code: string,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<GetOpenIdSuccessResult> => {
  const data = {
    code
  }

  return new Promise((resolve, reject) => {
    request('wx/wxController!getOpenId.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestGetOpenId }
