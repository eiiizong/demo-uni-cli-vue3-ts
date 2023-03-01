import type { W014SuccessResultListItem } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 人员查询
 * @param {string} name
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW014 = (
  name: string,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<W014SuccessResultListItem[]> => {
  const data = {
    name
  }

  return new Promise((resolve, reject) => {
    request('wx/wxController!W014.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestW014 }
