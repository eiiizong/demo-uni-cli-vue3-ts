/**
 * 监听键盘高度变化
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/key.html#onKeyboardHeightChange
 * @example
  onKeyboardHeightChange().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const onKeyboardHeightChange = () => {
  return new Promise((resolve, reject) => {
    uni.onKeyboardHeightChange((res) => {
      resolve(res)
    })
  })
}
export { onKeyboardHeightChange }
