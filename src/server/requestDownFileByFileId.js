import { request } from './request'

/**
 * 下载图片
 * @param {String} fileId 图片统一储存id
 * @returns
 */
const requestDownFileByFileId = (fileId) => {
  const data = {
    chb004: '02',
  }

  return new Promise((resolve, reject) => {
    request('/upload/downFileByFileId/' + fileId, data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestDownFileByFileId }
