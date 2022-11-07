/**
 * 在当前页面隐藏导航条加载动画
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/navigationbar?id=hidenavigationbarloading
 * @example
  hideNavigationBarLoading().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const hideNavigationBarLoading = (str) => {
  return new Promise((resolve, reject) => {
    uni.hideNavigationBarLoading({
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('hideNavigationBarLoading 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { hideNavigationBarLoading }
