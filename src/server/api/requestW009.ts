import type { W009SuccessResult } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 申报进度
 * @param {string} tel 用户手机号
 * @param {number} pageNo 当前页
 * @param {number} pageSize 每页条数
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW009 = (
  tel: string,
  pageNo: number,
  pageSize: number,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<W009SuccessResult> => {
  const data = {
    tel,
    pageNo,
    pageSize
  }

  return new Promise((resolve, reject) => {
    request('wx/wxController!W009.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestW009 }
