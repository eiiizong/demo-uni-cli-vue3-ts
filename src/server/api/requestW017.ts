import type { W017SuccessResultListItem } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 新闻资讯数据
 * @param {number} pageNo 当前页
 * @param {number} pageSize 每页条数
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW017 = (
  pageNo: number,
  pageSize: number,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<W017SuccessResultListItem[]> => {
  const data = {
    pageNo,
    pageSize
  }

  return new Promise((resolve, reject) => {
    request('wx/wxController!W017.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestW017 }
