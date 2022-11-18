/**
 * 登录
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
const login = (
  provider: 'weixin' | 'qq' | 'sinaweibo' | 'xiaomi' | 'apple' | 'univerify' | undefined,
  scopes: UniApp.LoginScopes | UniApp.LoginScopes[] | undefined,
  timeout: number,
  univerifyStyle: object
): Promise<UniApp.LoginRes> => {
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
        console.error('uni.login 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { login }
