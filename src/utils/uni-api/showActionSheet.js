/**
 * 显示操作菜单
 * @param {!Array<String>} itemList - 按钮的文字数组
 * @param {string} [title=''] - 菜单标题。默认值`''`。
 * @param {string} [alertText=''] - 警示文案（同菜单标题）。默认值`''`。
 * @param {string} [itemColor='#000000'] - 按钮的文字颜色，字符串格式。默认值`#000000`。
 * @param {object} [popover=null] - 大屏设备弹出原生选择按钮框的指示区域，默认居中显示。默认值`null`。App-iPad（2.6.6+）、H5（2.9.2）
 * @returns {Promise}  resolve(res.tapIndex)
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/prompt?id=showactionsheet
 * @example
  showActionSheet(['A', 'B', 'C']).then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const showActionSheet = (
  itemList,
  title = '',
  alertText = '',
  itemColor = '#000000',
  popover = null
) => {
  return new Promise((resolve, reject) => {
    uni.showActionSheet({
      title,
      itemList,
      popover,
      alertText,
      itemColor,
      success(res) {
        resolve(res.tapIndex)
      },
      fail(err) {
        console.error('showActionSheet 接口调用失败 => ', err) // 点击取消按钮也会触发
        reject(err)
      },
    })
  })
}
export { showActionSheet }
