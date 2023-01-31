import type { LoginSuccessResult } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 登录
 * @param {string} openId
 * @param {string} tel
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 * @returns
 */
const requestLogin = (
  openId: string,
  tel: string,
  isShowLoading: boolean = true,
  isShowErrorToast: boolean = true
): Promise<LoginSuccessResult> => {
  const data = {
    openid: openId,
    tel,
    loginId: '510902199507236534',
    idCard: '510902199507236534',
    userName: '曾小明',
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontLoginRestService/login', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestLogin }
