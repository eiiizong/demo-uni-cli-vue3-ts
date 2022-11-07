import { request } from './request'

/**
 * 上传图片
 * @param {String} filePath 图片路径
 * @returns
 */
const requestUploadFileByBase64 = (filePath) => {
  const data = {
    fileContent: filePath,
    fileName: 'file',
  }

  return new Promise((resolve, reject) => {
    request('/upload/uploadFileByBase64', data, 'POST', true, '上传中')
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestUploadFileByBase64 }
