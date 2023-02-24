import type { W012SuccessResultListItem } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 政策文件查看
 * @param { string | number} chi050
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW016 = (
  chi050: string | number,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<W012SuccessResultListItem[]> => {
  const data = {
    chi050
  }

  return new Promise((resolve, reject) => {
    request('wx/wxController!W016.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestW016 }
