/**
 * 动态设置下拉背景字体、loading 图的样式。
 * @param {string} [textStyle='light'] - 下拉背景字体、loading 图的样式。默认值`light`。值为：dark、light。
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/bgcolor.html#setbackgroundtextstyle
 * @example 
   setBackgroundTextStyle().then(res => {
     // 接口调用成功
   }).catch(err => {
     // 接口调用失败
   }).finally((res) => {
     // 接口调用完成
   })
 */
const setBackgroundTextStyle = (textStyle = 'light') => {
  return new Promise((resolve, reject) => {
    uni.setBackgroundTextStyle({
      textStyle,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('setBackgroundTextStyle 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { setBackgroundTextStyle }
