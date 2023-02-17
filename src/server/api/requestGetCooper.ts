import { request } from '@/server/request'

/**
 * 获取所有的合作机构
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */

const requestGetCooper = (isShowLoading = true, isShowErrorToast = true): Promise<string> => {
  const data = {}

  return new Promise((resolve, reject) => {
    request('getCooper.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestGetCooper }
