import type { W011SuccessResult } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 白名单查询
 * @param {string} crb111 公司名称
 * @param {number} pageNo 当前页
 * @param {number} pageSize 每页条数
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW011 = (
  crb111: string,
  pageNo: number,
  pageSize: number,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<W011SuccessResult> => {
  const data = {
    crb111,
    pageNo,
    pageSize
  }

  return new Promise((resolve, reject) => {
    request('wx/wxController!W011.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestW011 }
