/**
 * 从本地相册选择图片或使用相机拍照
 * @param {number} [count=9] - 最多可以选择的图片张数 默认值`9`。
 * @param {Array<string>} [sizeType=['original', 'compressed']] 所选的图片的尺寸 默认 `['original', 'compressed']`。original 原图，compressed 压缩图。
 * @param {Array<string>} [sourceType=['album', 'camera']] 选择图片的来源。默认`['album', 'camera']`。album 从相册选图，camera 使用相机。
 * @param {Array<string>} [extension=[]] 根据文件拓展名过滤，每一项都不能是空字符串。默认`[]`。
 * @param {Object} [crop=null] 图像裁剪参数，设置后 sizeType 失效。默认`null`。
 * @returns {promise}
 * @support  uniapp详细说明： https://uniapp.dcloud.net.cn/api/media/image.html#chooseimage
 * @example
  chooseImage().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const chooseImage = (
  count = 9,
  sizeType = ['original', 'compressed'],
  sourceType = ['album', 'camera'],
  extension = [],
  crop = null
) => {
  return new Promise((resolve, reject) => {
    uni.chooseImage({
      count,
      sizeType,
      sourceType,
      extension,
      crop,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('chooseImage 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}

export { chooseImage }
