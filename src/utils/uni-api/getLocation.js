/**
 * 获取当前的地理位置、速度。
 * @param {string} [type='wgs84'] - 默认为 `wgs84` 返回 gps 坐标，gcj02 返回国测局坐标，可用于 uni.openLocation 和 map 组件坐标，App 和 H5 需配置定位 SDK 信息才可支持 gcj02。
 * @param {Boolean} [altitude=false] - 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度。
 * @param {Boolean} [isHighAccuracy=false] - 开启高精度定位，默认为 `false`。
 * @param {Boolean} [geocode=false] - 是否解析地址信息，默认为 `false`。
 * @param {number} [highAccuracyExpireTime=3000] - 高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果。默认为 `3000`。
 * @param {String} [timeout='5'] - 定位超时时间，单位秒。默认为 `5`。
 * @param {number} [cacheTimeout=60] - 定位缓存超时时间，单位秒；每次定位缓存当前定位数据，并记下时间戳，当下次调用在cacheTimeout之内时，返回缓存数据。
 * @param {String} [accuracy='high'] - 默认为 `high`，指定期望精度，支持 high，best。当指定 high 时，期望精度值为100m，当指定 best 时期望精度值为20m。当定位得到的精度不符合条件时，在timeout之前会继续定位，尝试拿到符合要求的定位结果
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/location/location.html#getlocation
 * @example
  getLocation().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const getLocation = (
  type = 'wgs84',
  altitude = false,
  isHighAccuracy = false,
  geocode = false,
  highAccuracyExpireTime = 3000,
  timeout = '5',
  cacheTimeout = 60,
  accuracy = 'high'
) => {
  return new Promise((resolve, reject) => {
    uni.getLocation({
      type,
      altitude,
      isHighAccuracy,
      highAccuracyExpireTime,
      timeout,
      cacheTimeout,
      accuracy,
      geocode,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('getLocation 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { getLocation }
