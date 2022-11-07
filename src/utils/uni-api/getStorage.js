/**
 * 从本地缓存中异步获取指定 key 对应的内容。
 * @param {string} key 本地缓存中的指定的 key
 * @returns { Promise }
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/storage/storage.html#getStorage
 * @example
  getStorage('test').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const getStorage = (key) => {
  return new Promise((resolve, reject) => {
    uni.getStorage({
      key,
      success(res) {
        resolve(res.data)
      },
      fail(err) {
        console.error('getStorage 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { getStorage }
