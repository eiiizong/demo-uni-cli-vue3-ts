import type { W008SuccessResultListItem } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 我要融资 合作银行
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW008 = (isShowLoading = true, isShowErrorToast = true): Promise<W008SuccessResultListItem[]> => {
  const data = {}

  return new Promise((resolve, reject) => {
    request('wx/wxController!W008.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestW008 }
