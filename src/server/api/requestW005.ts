import { request } from '@/server/request'

/**
 * 白名单反馈
 * @param {string} crb506 白名单企业名称
 * @param {string} crb505 所属区域
 * @param {string} crb502 问题描述
 * @param {string} crb504 联系方式
 * @param {string} crb501 填报单位
 * @param {string} crb507 提交人联系方式
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW005 = (
  crb506: string,
  crb505: string,
  crb502: string,
  crb504: string,
  crb501: string,
  crb507: string,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<any> => {
  const data = {
    crb506,
    crb505,
    crb502,
    crb504,
    crb501,
    crb507
  }

  return new Promise((resolve, reject) => {
    request('wx/wxController!W005.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestW005 }
