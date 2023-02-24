import type { W007SuccessResult } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 一本账统计 对比数据
 * @param {'0' | '1' | '2' | '3'} type 类型 0 当月 1 当季度 2 当年 3 累计
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW007 = (
  type: '0' | '1' | '2' | '3',
  isShowLoading = true,
  isShowErrorToast = true
): Promise<W007SuccessResult> => {
  const data = {
    type
  }

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
