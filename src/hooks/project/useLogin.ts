import { login } from '@/utils/uni-api'
/**
 * 自定义登录 业务逻辑请自行更改
 * @param {Boolean} showTip [true] 用户未登录时 是否进行showModal提示
 * @returns {Promise}
 *
 * @example
  useLogin().then(res => {
    // 登录成功
  }).catch(err => {
    // 登录失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const useLogin = (showTip = true) => {
  return new Promise((resolve, reject) => {
    login().then((res) => {
      const { code } = res
      if (code) {
       console.log(code,123);
       
      }
    })
  })
}
export { useLogin }
