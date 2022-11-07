import { request } from './request'

/**
 * 上传图片
 * @param {String} filePath 图片路径
 * @returns
 */
const requestUploadFile = (filePath) => {
  const data = {
    filePath,
    name: 'file',
  }
  return new Promise((resolve, reject) => {
    request('/upload/uploadFile', data, 'POST', true, '上传中')
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestUploadFile }
