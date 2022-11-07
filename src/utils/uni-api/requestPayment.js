/**
 * 小uni.requestPayment是一个统一各平台的客户端支付API，不管是在某家小程序还是在App中，客户端均使用本API调用支付。
 * 本API运行在各端时，会自动转换为各端的原生支付调用API。
 * @param {string} provider - 服务提供商，通过 uni.getProvider 获取。
 * @param {String|Object} orderInfo - 订单数据
 * @param {string} [timeStamp] - 时间戳从1970年1月1日至今的秒数，即当前的时间。微信小程序必填。
 * @param {string} [nonceStr] - 随机字符串，长度为32个字符以下。微信小程序必填。
 * @param {string} [_package] - 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=xx。 微信小程序必填。
 * @param {string} [signType] - 签名算法，应与后台下单时的值一致。 微信小程序必填。
 * @param {string} [paySign] - 签名。 微信小程序必填。
 * @param {Array<string>} [bannedChannels] - 需要隐藏的支付方式。
 * @param {Number} [service] - 固定值：1（拉起小程序收银台）开发者如果不希望使用字节跳动小程序收银台，service设置为3/4时，可以直接拉起微信/支付宝进行支付：service=3： 微信API支付，不拉起小程序收银台；service=4： 支付宝API支付，不拉起小程序收银台。其中service=3、4，仅在1.35.0.1+基础库(头条743+)支持。字节跳动小程序必填
 * @param {Number} [_debug] - 仅限调试用，上线前去掉该参数。_debug=1时，微信支付期间可以看到中间报错信息，方便调试。
 * @param {Function} [getOrderStatus] - 商户前端实现的查询支付订单状态方法（该方法需要返回个Promise对象）。 service=3、4时不需要传。字节跳动小程序必填。
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/plugins/payment.html#requestpayment
 * @example requestPayment()
 */
const requestPayment = (
  provider,
  orderInfo,
  timeStamp,
  nonceStr,
  _package,
  signType,
  paySign,
  bannedChannels,
  service,
  _debug,
  getOrderStatus
) => {
  return new Promise((resolve, reject) => {
    uni.requestPayment({
      provider,
      orderInfo,
      timeStamp,
      nonceStr,
      package: _package,
      signType,
      paySign,
      bannedChannels,
      service,
      _debug,
      getOrderStatus,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('requestPayment 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { requestPayment }
