import moment from 'moment'

/**
 * 格式化时间
 * @param {String} val 要格式化的值
 * @param {String} format 格式格式  yyyy年MM月DD日 hh:mm
 * @param {Boolean} tag true 公司不正常时间 2020-02-02 12:00:00.0
 * @returns
 */
const useMoment = (val, format, tag = true) => {
  if (tag && val) {
    val = val.substring(0, 19) // 公司不正常时间
  }
  return moment(val).format(format)
}

export { useMoment }
