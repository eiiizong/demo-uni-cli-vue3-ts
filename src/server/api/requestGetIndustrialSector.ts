import type { GetIndustrialSectorSuccessResultListItem } from '@/server/types/api'
import { request } from '@/server/request'

/**
 * 根据chb015获取区县产业部门
 * @param {string} chb015 码表key
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */

const requestGetIndustrialSector = (
  chb015: string,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<GetIndustrialSectorSuccessResultListItem[]> => {
  const data = {
    chb015
  }

  return new Promise((resolve, reject) => {
    request('wx/wxController!getIndustrialSector.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestGetIndustrialSector }
