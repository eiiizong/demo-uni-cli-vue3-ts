/**
 * 获取时间
 * @param {String} milliseconds 毫秒数
 * @param {String} fileds 日期粒度 year month day（默认）、 hours、 minute second 未完成
 * @param {String} format 格式 未完成
 */
const useGetTime = (milliseconds, fileds, format) => {
  const minute = 1000 * 60 // 分
  const hour = minute * 60 // 时
  const day = hour * 24 // 天
  const week = day * 7 // 周
  const halfamonth = day * 15 // 半月
  const month = day * 30 // 月

  // const now = new Date().getTime() // 获取当前时间毫秒
  // const diffValue = now - milliseconds // 时间差

  let resultTime = ''

  milliseconds = Number(milliseconds)
  if (milliseconds < 0) {
    milliseconds = -milliseconds
    resultTime = '已逾期'
  }

  const calcDay = milliseconds / day // 计算多少天
  const calcHourMs = milliseconds % day // 计算剩余多少小时的毫秒
  const calcHour = calcHourMs / hour // 计算多少小时
  const calcMinuteMs = calcHourMs % hour // 计算剩余多少分钟的毫秒
  const calcMinute = calcMinuteMs / minute // 计算多少分钟
  const calcSecondMs = calcMinuteMs % minute // 计算剩余多少秒的毫秒
  const calcSecond = calcSecondMs / 1000 // 计算多少秒

  if (parseInt(calcDay) == 0) {
    resultTime += `${parseInt(calcHour)}小时${parseInt(
      calcMinute
    )}分钟${parseInt(calcSecond)}秒`
  } else if (parseInt(calcDay) == 0 && parseInt(calcHour) == 0) {
    resultTime += `${parseInt(calcMinute)}分钟${parseInt(calcSecond)}秒`
  } else if (
    parseInt(calcMinute) == 0 &&
    parseInt(calcHour) == 0 &&
    parseInt(calcDay) == 0
  ) {
    resultTime += `${parseInt(calcSecond)}秒`
  } else {
    resultTime += `${parseInt(calcHour)}天${parseInt(calcHour)}小时${parseInt(
      calcMinute
    )}分钟${parseInt(calcSecond)}秒`
  }
  return resultTime
}

export { useGetTime }
