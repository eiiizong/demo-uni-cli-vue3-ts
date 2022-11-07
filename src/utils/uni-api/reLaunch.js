import { showToast, getJumpRouteUrl } from './index'
/**
 * 关闭所有页面，打开到应用内的某个页面。
 * @param {string} name - 跳转的页面名称 例如：`test`。
 * @param {string} packageName - 跳转的页面分包名称 例如：`packageA`。
 * @param {object|string} [params=null] - 路由参数。默认值`null`。例如：`{a: 1}` 或者 `a=1&b=2`
 * @returns { Promise }
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/router.html#reLaunch
 * @example
  reLaunch('test', 'packageA', { a:1 }).then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const reLaunch = (name, packageName, params = null) => {
  return new Promise((resolve, reject) => {
    // 必需传入 name 参数
    if (name) {
      const url = getJumpRouteUrl(name, packageName, params)
      uni.reLaunch({
        url,
        success(res) {
          resolve(res)
        },
        fail(err) {
          console.error(
            `
              reLaunch 接口调用失败
              跳转路径：${url}
            `,
            err
          )
          reject(err)
        },
      })
    } else {
      const errMsg = 'reLaunch 方法传入的第一个参数 name 不能为空，请检查！'
      showToast(errMsg).finally(() => {
        reject(errMsg)
      })
    }
  })
}

export { reLaunch }
