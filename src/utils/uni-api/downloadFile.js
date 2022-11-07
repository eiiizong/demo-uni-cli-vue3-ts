/**
 * 下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。
 * @param {!string} url - 下载资源的 url。
 * @param {string}  [header] - HTTP 请求 Header, header 中不能设置 Referer。
 * @param {string}  [timeout] - 超时时间，单位 ms。
 * @returns {Promise} 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/request/network-file?id=downloadFile
 * @example
  downloadFile('test').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const downloadFile = (url, header = {}, timeout = 60000) => {
  return new Promise((resolve, reject) => {
    uni.downloadFile({
      url,
      header,
      timeout,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('downloadFile 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { downloadFile }
