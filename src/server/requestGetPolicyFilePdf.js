import { request } from './request'

/**
 * 预览政策文件pdf
 * @param {String} chi230
 * @returns
 */
const requestGetPolicyFilePdf = (chi230) => {
  const data = {
    methodNamedesc: '预览政策文件pdf',
    chi230,
  }
  return new Promise((resolve, reject) => {
    request('/upload/getPolicyFilePdf', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestGetPolicyFilePdf }
