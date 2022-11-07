/**
 * 获取图片信息
 * @param {string} src 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
 * @support 
 * 微信小程序支持情况说明：https://developers.weixin.qq.com
 * 
 * uniapp支持情况说明：https://uniapp.dcloud.io/api/media/image?id=getimageinfo

 * @returns {Promise}
 *
 * @example
  getImageInfo().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const getImageInfo = (src) => {
  return new Promise((resolve, reject) => {
    // 当前环境是否为开发环境
    const isDev = process.env.NODE_ENV === 'development'
    // #ifdef MP-ALIPAY
    // #endif
    uni.getImageInfo({
      src,
      success (res) {
        resolve(res)
      },
      fail (err) {
        if (isDev) {
          console.log('getImageInfo 接口调用失败 => ', err)
        }
        reject(err)
      },
    })
  })
}
export { getImageInfo }
