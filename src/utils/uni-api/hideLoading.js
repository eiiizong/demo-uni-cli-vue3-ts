/**
 * 隐藏 loading 提示框
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/prompt?id=hideloading
 * @example hideLoading()
 */
const hideLoading = () => {
  return new Promise((resolve, reject) => {
    uni.hideLoading({
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('hideLoading 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { hideLoading }
