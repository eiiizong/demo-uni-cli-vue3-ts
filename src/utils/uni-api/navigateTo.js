import { showToast, getJumpRouteUrl } from './index'
/**
 * 保留当前页面，跳转到应用内的某个页面，使用 uni.navigateBack 可以返回到原页面。
 * @param {string} name - 跳转的页面名称 例如：`test`。
 * @param {string} packageName - 跳转的页面分包名称 例如：`packageA`。
 * @param {object|string} [params=null] - 路由参数。默认值`null`。例如：`{a: 1}` 或者 `a=1&b=2`。
 * @param {object} [events=null] - 页面间通信接口，用于监听被打开页面发送到当前页面的数据。默认值`null`。2.8.9+ 开始支持。
 * @param {string} [animationType='pop-out'] - 窗口显示的动画效果。默认值`pop-out`。仅 APP 支持。
 * @param {number} [animationDuration=300] - 窗口动画持续时间，单位为 ms。默认值`300`。仅 APP 支持。
 * @returns { Promise }
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/router.html#navigateto
 * @example
  navigateTo('test', 'packageA', { a:1 }).then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const navigateTo = (
  name,
  packageName = '',
  params = null,
  events = null,
  animationType = 'pop-in',
  animationDuration = 300
) => {
  return new Promise((resolve, reject) => {
    // 必需传入 name 参数
    if (name) {
      const url = getJumpRouteUrl(name, packageName, params)
      uni.navigateTo({
        url,
        events,
        animationType,
        animationDuration,
        success(res) {
          resolve(res)
        },
        fail(err) {
          console.error(`navigateTo 接口调用失败！跳转路径：${url}`, err)
          reject(err)
        },
      })
    } else {
      const errMsg = 'navigateTo 方法传入的第一个参数 name 不能为空，请检查！'
      showToast(errMsg).finally(() => {
        reject(errMsg)
      })
    }
  })
}

export { navigateTo }
