/**
 * 取消监听键盘高度变化事件
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/key.html#offKeyboardHeightChange
 * @example
  offKeyboardHeightChange().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const offKeyboardHeightChange = () => {
  return new Promise((resolve, reject) => {
    uni.offKeyboardHeightChange((res) => {
      resolve(res)
    })
  })
}
export { offKeyboardHeightChange }
