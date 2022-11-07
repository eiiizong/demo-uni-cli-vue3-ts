/**
 * 隐藏消息提示框
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/prompt?id=hidetoast
 * @example hideToast()
 */
const hideToast = () => {
  return new Promise((resolve, reject) => {
    uni.hideToast({
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('hideToast 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { hideToast }
