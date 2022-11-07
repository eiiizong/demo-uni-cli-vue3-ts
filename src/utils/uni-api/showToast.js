/**
 * 显示消息提示框
 * @param {!string} title - 提示的内容，长度与 icon 取值有关。
 * @param {string} [icon='none'] - 图标，有效值详见下方说明。默认`none`。支持 success、error、fail、exception、loading、none
 * @param {boolean} [mask=true] - 是否显示透明蒙层，防止触摸穿透。默认`true`。
 * @param {number} [duration=1500] - 提示的延迟时间。默认值`1500`。
 * @param {string} [position='center'] - 纯文本轻提示显示位置，填写有效值后只有 title 属性生效， 有效值详见下方说明。默认值`center`。
 * @param {string} [image=''] - 自定义图标的本地路径（app端暂不支持gif）。默认值`''`。
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/prompt?id=showtoast
 * @example
  showToast('我是轻提示', 'success').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const showToast = (
  title,
  icon = 'none',
  mask = true,
  duration = 1500,
  position = 'center',
  image = ''
) => {
  return new Promise((resolve, reject) => {
    uni.showToast({
      title,
      image,
      icon,
      duration,
      mask,
      position,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('showToast 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}

export { showToast }
