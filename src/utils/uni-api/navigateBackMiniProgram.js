/**
 * 跳转回上一个小程序，只有当另一个小程序跳转到当前小程序时才会能调用成功。
 * @param {object} [extraData=null] - 需要返回给上一个小程序的数据，上一个小程序可在 App.vue 的 onShow 中获取到这份数据。默认`null`。
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/other/open-miniprogram.html#navigateBackMiniProgram
 * @example
  navigateBackMiniProgram({ data1: 'test' }).then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const navigateBackMiniProgram = (extraData = null) => {
  return new Promise((resolve, reject) => {
    uni.showToast({
      extraData,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('navigateToMiniProgram 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}

export { navigateBackMiniProgram }
