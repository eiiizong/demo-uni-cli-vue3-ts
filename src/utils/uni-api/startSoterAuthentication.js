/**
 * 开始 SOTER 生物认证
 * @param {string} challenge 挑战因子。挑战因子为调用者为此次生物鉴权准备的用于签名的字符串关键识别信息，将作为 resultJSON 的一部分，供调用者识别本次请求。例如：如果场景为请求用户对某订单进行授权确认，则可以将订单号填入此参数。
 * @param {<string>} requestAuthModes 请求使用的可接受的生物认证方式。目前支持 ['fingerPrint'] 和 ['facial']
 * @param {string} authContent 验证描述，即识别过程中显示在界面上的对话框提示内容
 * @example
  startSoterAuthentication('user_id_123', ['fingerPrint'], '请指纹解锁').then(res => {
    // success
  }).catch(err => {
    // error 
  })
 */
const startSoterAuthentication = (
  challenge,
  requestAuthModes = ['fingerPrint'],
  authContent = ''
) => {
  return new Promise((resolve, reject) => {
    uni.startSoterAuthentication({
      requestAuthModes,
      challenge,
      authContent,
      success(res) {
        resolve(resolve)
      },
      fail(err) {
        reject(err)
      },
    })
  })
}

export { startSoterAuthentication }
