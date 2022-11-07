/**
 * 更新客户端版本。当判断用户小程序所在客户端版本过低时，可使用该接口跳转到更新微信页面。
 * @support 微信小程序支持情况说明：https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.updateWeChatApp.html
 * @returns {Promise}
 * @example
  updateWeChatApp().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const updateWeChatApp = () => {
  return new Promise((resolve, reject) => {
    uni.updateWeChatApp({
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('updateWeChatApp 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { updateWeChatApp }
