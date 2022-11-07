/**
 * 同步清理本地数据缓存。
 * @returns {void}
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/storage/storage.html#clearStorageSync
 * @example clearStorageSync()
 */
const clearStorageSync = (key, data) => {
  uni.clearStorageSync(key, data)
}
export { clearStorageSync }
