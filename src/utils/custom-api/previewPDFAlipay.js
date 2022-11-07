import config from '@/config/index.js'
import {
  downloadFile,
  openDocument,
  showLoading,
  hideLoading,
  request,
} from '~/utils/uni-api/index.js'
/**
 * 预览 pdf
 * @param {string} chi050 必填。文件码值，可通过 downFile 获得
 * @param {string} fileType 默认值：pdf。
 * @returns {Promise}
 *
 * @example
  previewPDF().then(res => {
  // 接口调用成功
  }).catch(err => {
  // 接口调用失败
  }).finally((res) => {
  // 接口调用完成
  })
 */
const previewPDFAlipay = (chi050, fileType = 'pdf') => {
  showLoading()
  let url = ''
  return new Promise((resolve, reject) => {
    const data = {
      chi050,
    }
    request(
      '/frontRestService/frontBcpDataRestService/createPolicyFilePdf',
      data,
      {},
      false
    ).then((res) => {
      const { newFileName } = res
      if (newFileName) {
        url = config.requestUrl + '/localPath/pdf/' + newFileName
        downloadFile(url)
          .then((res) => {
            const { tempFilePath } = res
            // console.log('downloadFile res', res)
            if (tempFilePath) {
              openDocument(tempFilePath, fileType)
                .then((res) => {
                  // console.log('openDocument res', res)
                  resolve(res)
                })
                .catch((err) => {
                  // console.log('openDocument err', res)
                  reject(err)
                })
                .finally(() => {
                  // console.log('openDocument finally', res)
                  request(
                    '/frontRestService/frontBcpDataRestService/deletePolicyFilePdf',
                    {
                      newFileName,
                    },
                    {},
                    false
                  )
                    .then(() => {})
                    .finally(() => {
                      hideLoading()
                    })
                })
            } else {
              hideLoading()
            }
          })
          .catch((err) => {
            // console.log('downloadFile err', err)
            hideLoading()
            reject(err)
          })
      }
    })
  })
}

export { previewPDFAlipay }
