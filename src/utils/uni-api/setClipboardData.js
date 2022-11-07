/**
 * 设置系统剪贴板的内容。调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s
 * @param {String} data - 数据
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
const setClipboardData = (data) => {
  return new Promise((resolve, reject) => {
    uni.setClipboardData({
      data,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('setClipboardData 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { setClipboardData }
