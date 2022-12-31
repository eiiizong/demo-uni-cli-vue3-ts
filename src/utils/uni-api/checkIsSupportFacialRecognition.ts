interface CheckIsSupportFacialRecognitionSucccessRes {}
interface CheckIsSupportFacialRecognitionFailRes {}
interface CheckIsSupportFacialRecognitionOptions {
  /**
   * 人脸核验的交互方式，默认读数字
   */
  checkAliveType?: 0 | 1 | 2
  /**
   * 成功返回的回调函数
   */
  success?: (result: CheckIsSupportFacialRecognitionSucccessRes) => void
  /**
   * 失败的回调函数
   */
  fail?: (result: CheckIsSupportFacialRecognitionFailRes) => void
  /**
   * 结束的回调函数（调用成功、失败都会执行）
   */
  complete?: (result: any) => void
}
namespace CustomUniApp {
  export interface Uni {
    checkIsSupportFacialRecognition(options?: CheckIsSupportFacialRecognitionOptions): void
  }
}
declare const uni: CustomUniApp.Uni

/**
 * 检查设备是否支持人脸检测
 * @param {0 | 1 | 2} [checkAliveType=2] - 人脸核验的交互方式，默认值2 => 0 读数字 1 屏幕闪烁 2 先检查是否可以屏幕闪烁，不可以则自动为读数字（默认）。
 * @support uniapp详细说明：https://uniapp.dcloud.io/api/caniuse.html#caniuse
 * @example 
   checkIsSupportFacialRecognition().then(res => {
    // success
  }).catch(err => {
    // error
  });
*/
const checkIsSupportFacialRecognition = (
  checkAliveType: 0 | 1 | 2 = 2
): Promise<CheckIsSupportFacialRecognitionSucccessRes> => {
  return new Promise((resolve, reject) => {
    uni.checkIsSupportFacialRecognition({
      checkAliveType,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      },
    })
  })
}
export { checkIsSupportFacialRecognition }
