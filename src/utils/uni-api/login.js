/**
 * 登录
 * @param {String} [provider] - 登录服务提供商，通过 uni.getProvider 获取，如果不设置则弹出登录列表选择界面。
 * @param {String|Array} [scopes] - 授权类型，默认 auth_base。支持 auth_base（静默授权、auth_user（主动授权）、auth_zhima（芝麻信用）。支付宝小程序支持
 * @param {Number} [timeout] - 超时时间，单位ms。微信小程序、百度小程序、京东小程序支持。
 * @param {Object} [univerifyStyle] - 一键登录页面样式。App 3.0.0+ 支持。
 * @returns { Promise }
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/plugins/login.html#login
 * @example
  login().then(res => {
    // 登录成功
  }).catch(err => {
    // 登录失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const login = (provider, scopes, timeout, univerifyStyle) => {
  return new Promise((resolve, reject) => {
    uni.login({
      provider,
      scopes,
      timeout,
      univerifyStyle,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('login 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { login }
