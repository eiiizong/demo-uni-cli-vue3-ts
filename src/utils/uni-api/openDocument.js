/**
 * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx。
 * @param {string} filePath - 文件路径，可通过 downFile 获得。
 * @param {Boolean} [showMenu=true] - 右上角是否有可以转发分享的功能
 * @param {string} [fileType='pdf'] - 文件类型，指定文件类型打开文件。默认值`pdf`。微信小程序支持的有效值 doc, xls, ppt, pdf, docx, xlsx, pptx。支付宝小程序仅支持pdf。
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/file/file.html#opendocument
 * @example
  openDocument('test.pdf').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const openDocument = (filePath, showMenu = true, fileType = 'pdf') => {
  return new Promise((resolve, reject) => {
    uni.openDocument({
      filePath,
      showMenu,
      fileType,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('openDocument 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { openDocument }
