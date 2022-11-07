/**
 * 动态设置 tabBar 某一项的内容。
 * @param {number} index - tabBar 的哪一项。从左边0算起。
 * @param {string} text - tab 上的按钮文字。
 * @param {string} iconPath - 图片路径。icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效。
 * @param {string} selectedIconPath - 选中时的图片路径。icon 大小限制为 40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效。
 * @param {string} pagePath - 页面绝对路径。必须在 pages 中先定义，被替换掉的 pagePath 不会变成普通页面（仍然需要使用 uni.swichTab 跳转）。
 * @param {Boolean} [visible=true] - 该项是否显示。默认值`true`。App（3.2.10+）、H5（3.2.10+）。
 * @param {Object} [iconfont=null] - 字体图标，优先级高于 iconPath。默认值`null`。App（3.4.4+）。
 * @returns { Promise }
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/tabbar.html#settabbaritem
 * @example
  setTabBarItem(0,'test','static/images/tabbar/home_green.png','static/images/tabbar/home_green_active.png').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const setTabBarItem = (
  index,
  text,
  iconPath,
  selectedIconPath,
  pagePath,
  visible = true,
  iconfont = null
) => {
  return new Promise((resolve, reject) => {
    uni.setTabBarItem({
      index,
      text,
      iconPath,
      selectedIconPath,
      pagePath,
      visible,
      iconfont,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('setTabBarItem 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { setTabBarItem }
