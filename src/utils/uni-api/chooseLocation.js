/**
 * 打开地图选择位置。
 * @param {Number} [latitude] - 目标地纬度
 * @param {Number} [longitude] - 目标地经度
 * @param {String} [keyword] 搜索关键字，仅App平台支持
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/location/location.html#chooselocation
 * @example
  getLocation().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const chooseLocation = (latitude, longitude, keyword) => {
  return new Promise((resolve, reject) => {
    uni.chooseLocation({
      latitude,
      longitude,
      keyword,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('chooseLocation 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}

export { chooseLocation }
