import type { W013SuccessResultListItem } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 工作量查询
 * @param {string} tel 用户手机号
 * @param {string} userid 用户id
 * @param {string} startDate 开始时间
 * @param {string} endDate 结束时间
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW013 = (
  tel: string,
  userid: string,
  startDate: string,
  endDate: string,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<W013SuccessResultListItem[]> => {
  const data = {
    tel,
    userid,
    startDate,
    endDate
  }

  return new Promise((resolve, reject) => {
    request('wx/wxController!W013.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestW013 }
