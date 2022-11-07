/**
 * 隐藏软键盘
 * 隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。
 * @returns {void}
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/key.html#hidekeyboard
 * @example hideKeyboard()
 */
const hideKeyboard = () => {
  uni.hideKeyboard()
}
export { hideKeyboard }
