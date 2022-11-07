/**
 * 获取系统信息同步接口
 * @support 
 * 微信小程序支持情况说明：https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfoSync.html
 * 
 * 本接口从基础库版本 1.9.6 起支持在小程序插件中使用
 * 
 * uniapp支持情况说明：https://uniapp.dcloud.io/api/system/info?id=getsysteminfosync
 * 
 * @returns {Object}
 *
 * @example
 try {
  const res = getSystemInfoSync();
  console.log(res.model);
  console.log(res.pixelRatio);
  console.log(res.windowWidth);
  console.log(res.windowHeight);
  console.log(res.language);
  console.log(res.version);
  console.log(res.platform);
} catch (e) {
  // error
}
 */
const getSystemInfoSync = () => {
  return uni.getSystemInfoSync()
}
export { getSystemInfoSync }
