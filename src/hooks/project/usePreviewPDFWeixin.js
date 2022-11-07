import { getIsDev } from '@/utils/get'
import {
  openDocument,
  showLoading,
  hideLoading,
  downloadFile,
} from '@/utils/uni-api'

/**
 * 预览 pdf
 * @param {string} chi215 文件统一存储id
 * @returns {Promise}
 *
 * @example
  previewPDFWeixin().then(res => {
	// 接口调用成功
  }).catch(err => {
	// 接口调用失败
  }).finally((res) => {
	// 接口调用完成
  })
 */
const usePreviewPDFWeixin = (chi215) => {
  showLoading()
  // 当前环境是否为开发环境
  const isDev = getIsDev()

  downloadFile('/upload/downFileByFileId?fileId=' + chi215)
    .then((res) => {
      openDocument(res, true, 'pdf')
        .then(() => {
          hideLoading()
        })
        .catch((err) => {
          hideLoading()
          showModal('打开文件报错')
        })
    })
    .catch((err) => {
      hideLoading()
      showModal('文件下载错误')
    })
}

export { usePreviewPDFWeixin }
