/**
 * 隐藏 tabBar 某一项的右上角的红点
 * @param {!number} index - tabBar的哪一项，从左边算起。
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/tabbar.html#hideTabBarRedDot
 * @example hideTabBarRedDot(1)
 */
const hideTabBarRedDot = (index) => {
  return new Promise((resolve, reject) => {
    uni.hideTabBarRedDot({
      index,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('hideTabBarRedDot 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { hideTabBarRedDot }
