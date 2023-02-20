import type { W006SuccessResult } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 一本账统计
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW006 = (isShowLoading = true, isShowErrorToast = true): Promise<W006SuccessResult> => {
  const data = {}

  return new Promise((resolve, reject) => {
    request('wx/wxController!W006.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestW006 }
