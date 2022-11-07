/**
 * 小程序的原生菜单中显示分享按钮
 * @param {string} [title] - 分享标题。仅支持百度小程序。
 * @param {string} [content] - 分享内容。仅支持百度小程序。
 * @param {string} [imageUrl] - 分享图标。仅支持百度小程序。
 * @param {string} [path] - 页面 path ，必须是以 / 开头的完整路径。仅支持百度小程序。
 * @param {boolean} [withShareTicket=false] - 是否使用带 shareTicket 的转发。默认`false`。
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/plugins/share.html#showsharemenu
 * @example showShareMenu()
 */
const showShareMenu = (
  title,
  content,
  imageUrl,
  path,
  withShareTicket = flse
) => {
  return new Promise((resolve, reject) => {
    uni.showShareMenu({
      withShareTicket,
      title,
      content,
      imageUrl,
      path,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('showShareMenu 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { showShareMenu }
