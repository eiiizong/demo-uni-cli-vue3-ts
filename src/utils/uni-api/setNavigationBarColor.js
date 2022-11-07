/**
 * 设置页面导航条颜色。如果需要进入页面就设置颜色，请延迟执行，防止被框架内设置颜色逻辑覆盖
 * @param {!string} backgroundColor - 背景颜色值，有效值为十六进制颜色。
 * @param {string} [frontColor='#ffffff'] - 前景颜色值，包括按钮、标题、状态栏的颜色。默认值`#ffffff`。仅支持 #ffffff 和 #000000。
 * @param {object} [animation] - 动画效果。默认值`{duration:0,timingFunc:'linear'}`。
 * @param {number} [animation.duration=0] - 动画变化时间，单位 ms。默认值`0`。
 * @param {string} [animation.timingFunc='linear'] - 动画变化方式。默认值`linear`。可选值 linear、easeIn、easeOut、easeInOut。
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/navigationbar?id=setnavigationbarcolor
 * @example
  setNavigationBarColor('#f0f034').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const setNavigationBarColor = (
  backgroundColor,
  frontColor = '#ffffff',
  animation = {
    duration: 0,
    timingFunc: 'linear',
  }
) => {
  return new Promise((resolve, reject) => {
    uni.setNavigationBarColor({
      frontColor,
      backgroundColor,
      animation,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('setNavigationBarColor 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { setNavigationBarColor }
