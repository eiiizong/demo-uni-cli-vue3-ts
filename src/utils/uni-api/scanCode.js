/**
 * 调起客户端扫码界面，扫码成功后返回对应的结果。
 * @param {boolean} [onlyFromCamera=true] - 是否只能从相机扫码，不允许从相册选择图片。默认值`true`。
 * @param {Array} [scanType=['qrCode', 'barCode', 'datamatrix', 'pdf417']] - 扫码类型。默认值`['qrCode', 'barCode', 'datamatrix', 'pdf417']`。参考值：barCode 一维码 / qrCode	二维码 / datamatrix Data Matrix 码 / pdf417	PDF417 条码
 * @param {boolean} [autoDecodeCharset=false] - 是否启用自动识别字符编码功能。默认值`false`。
 * @param {boolean} [autoZoom=true] - 是否启用自动放大。默认值`true`。
 * @param {boolean} [barCodeInput=false] - 是否支持手动输入条形码。默认值`false`。
 * @param {boolean} [hideAlbum=false] -是否隐藏相册（不允许从相册选择图片），只能从相机扫码。默认值`false`。
 * @returns {Promise} 
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/system/barcode.html#scancode
 * @example 
  scanCode().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const scanCode = (
  onlyFromCamera = true,
  scanType = ['qrCode', 'barCode', 'datamatrix', 'pdf417'],
  autoDecodeCharset = false,
  autoZoom = true,
  barCodeInput = false,
  hideAlbum = false
) => {
  return new Promise((resolve, reject) => {
    uni.scanCode({
      onlyFromCamera,
      scanType,
      autoDecodeCharset,
      autoZoom,
      barCodeInput,
      hideAlbum,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('scanCode 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { scanCode }
