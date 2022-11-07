/**
 * 在当前页面显示导航条加载动画
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/navigationbar?id=shownavigationbarloading
 * @example
  showNavigationBarLoading().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const showNavigationBarLoading = () => {
  return new Promise((resolve, reject) => {
    uni.showNavigationBarLoading({
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('showNavigationBarLoading 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { showNavigationBarLoading }
