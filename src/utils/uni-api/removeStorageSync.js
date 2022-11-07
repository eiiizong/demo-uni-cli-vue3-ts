/**
 * 从本地缓存中同步移除指定 key。
 * @param {string} key 本地缓存中的指定的 key
 * @returns { Void }
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/storage/storage.html#removeStorageSync
 * @example
  removeStorageSync('test')
*/
const removeStorageSync = (key) => {
  uni.removeStorageSync(key)
}
export { removeStorageSync }
