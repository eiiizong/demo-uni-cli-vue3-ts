import type { W015SuccessResult } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 查询政策文件列表
 * @param {string} chi051 关键字
 * @param {number} pageNo 当前页
 * @param {number} pageSize 每页条数
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW015 = (
  chi051: string,
  pageNo: number,
  pageSize: number,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<W015SuccessResult> => {
  const data = {
    chi051,
    pageNo,
    pageSize
  }

  return new Promise((resolve, reject) => {
    request('wx/wxController!W015.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestW015 }
