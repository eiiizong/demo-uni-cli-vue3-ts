import type { GetCodeSuccessResult } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 获取码表
 * @param {string} codeType 码表key
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */

const requestGetCode = (
  codeType: string,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<GetCodeSuccessResult> => {
  const data = {
    codeType
  }

  return new Promise((resolve, reject) => {
    request('wx/wxController!getCode.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestGetCode }
