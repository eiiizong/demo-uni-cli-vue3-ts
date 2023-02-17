import type { LoginSuccessResult } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 注册
 * @param {string} openId openId
 * @param {string} tel 手机号
 * @param {string} companyName 企业名称或者个体工商户名称
 * @param {string} userName 用户名
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 * @returns
 */
const requestRegisterCompany = (
  openId: string,
  tel: string,
  companyName: string,
  userName: string,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<LoginSuccessResult> => {
  const data = {
    openid: openId,
    tel,
    companyName,
    userName
  }

  return new Promise((resolve, reject) => {
    request('wx/wxController!registerCompany.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestRegisterCompany }
