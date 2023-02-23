import type { W012SuccessResultListItem } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 人员组织树查询
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW012 = (isShowLoading = true, isShowErrorToast = true): Promise<W012SuccessResultListItem[]> => {
  const data = {}

  return new Promise((resolve, reject) => {
    request('wx/wxController!W012.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestW012 }
