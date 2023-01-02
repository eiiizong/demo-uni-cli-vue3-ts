/**
 * 小程序的原生菜单中显示分享按钮
 * @param {string} [title=''] - 分享标题。百度小程序。
 * @param {string} [content=''] - 分享内容。百度小程序。
 * @param {string} [imageUrl=''] - 分享图标。百度小程序。
 * @param {string} [path=''] - 页面 path ，必须是以 / 开头的完整路径。百度小程序。
 * @param {boolean} [withShareTicket=false] - 是否使用带 shareTicket 的转发。默认false。微信小程序。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/plugins/share.html#showsharemenu
 * @example 
  showShareMenu().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const showShareMenu = (
  title: string = '',
  content: string = '',
  imageUrl: string = '',
  path: string = '',
  withShareTicket: boolean = false
): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.showShareMenu({
      withShareTicket,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('uni.showShareMenu 接口调用失败 => ', err)
        reject(err)
      },
      // @ts-ignore
      title,
      // @ts-ignore
      imageUrl,
      // @ts-ignore
      path,
    })
  })
}
export { showShareMenu }
