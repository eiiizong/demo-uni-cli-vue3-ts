/**
 * 异步获取系统信息
 * @returns { Promise }
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/system/info?id=getsysteminfo
 * @example
  getSystemInfo().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const getSystemInfo = () => {
  return new Promise((resolve, reject) => {
    uni.getSystemInfo({
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('getSystemInfo 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { getSystemInfo }
