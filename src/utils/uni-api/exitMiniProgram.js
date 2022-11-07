/**
 * 退出当前小程序。必须有点击行为才能调用成功。
 * @returns {Promise}
 * @support 微信小程序官方文档详细说明： https://developers.weixin.qq.com/minigame/dev/api/navigate/wx.exitMiniProgram.html
 * @example
  exitMiniProgram().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const exitMiniProgram = () => {
  return new Promise((resolve, reject) => {
    uni.exitMiniProgram({
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('exitMiniProgram 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { exitMiniProgram }
