import { request } from '@/server/request'

/**
 * 通过后台解密用户手机号
 * @param {string} encryptedData
 * @param {string} iv
 * @param {string} sessionKey
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */

const requestGetRealPhone = (
  encryptedData: string,
  iv: string,
  sessionKey: string,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<string> => {
  const data = {
    encryptedData,
    iv,
    session_key: decodeURIComponent(sessionKey)
  }

  return new Promise((resolve, reject) => {
    request('getRealPhone.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestGetRealPhone }
