import type { W007SuccessResultListItem } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 一本账统计 对比数据echarts数据
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW007 = (isShowLoading = true, isShowErrorToast = true): Promise<W007SuccessResultListItem[]> => {
  const data = {}

  return new Promise((resolve, reject) => {
    request('wx/wxController!W007.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestW007 }
