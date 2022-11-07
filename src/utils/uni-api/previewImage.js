/**
 * 预览图片
 * @param {Array<String>} urls - 需要预览的图片链接列表。
 * @param {String|Number} current - 当前显示图片的链接
 * @param {Object} [longPressActions] - 长按图片显示操作菜单，如不填默认为保存相册。App 1.9.5+
 * @param {String} [indicator='default'] - 图片指示器样式，默认值为 `default`。可取值："default" - 底部圆点指示器； "number" - 顶部数字指示器； "none" - 不显示指示器。App
 * @param {Boolean} [loop=false] - 是否可循环预览，默认值为 `false`。App
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/media/image.html#unipreviewimageobject
 * @example 
  previewImage().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const previewImage = (
  urls,
  current,
  longPressActions,
  indicator = 'default',
  loop = false
) => {
  return new Promise((resolve, reject) => {
    uni.previewImage({
      urls,
      current,
      indicator,
      loop,
      longPressActions,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('previewImage 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}

export { previewImage }
