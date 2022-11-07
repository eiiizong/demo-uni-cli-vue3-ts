import config from '@/config'
import {
  openDocument,
  showLoading,
  hideLoading,
  downloadFile,
  showModal,
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
const previewPDFWeixin = (chi215) => {
  showLoading()
  // console.log(chi215, 987)
  downloadFile(config.requestUrl + '/upload/downFileByFileId?fileId=' + chi215)
    .then((res) => {
      // console.log(res, 876)
      openDocument(res.tempFilePath, true, 'pdf')
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
      // console.log(err, 99)
      showModal('文件下载错误')
    })
}

export { previewPDFWeixin }
