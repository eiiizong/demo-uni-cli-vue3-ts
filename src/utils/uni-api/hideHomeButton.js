/**
 * 隐藏返回首页按钮。
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/navigationbar?id=hidehomebutton
 * @example
  hideHomeButton().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const hideHomeButton = (str) => {
  return new Promise((resolve, reject) => {
    uni.hideHomeButton({
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('hideHomeButton 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { hideHomeButton }
