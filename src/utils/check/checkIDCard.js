// 加权因子
const Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]

// 身份证验证位值.10代表X
const ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]

/**
 * 校验身份证格式是否正确
 * @param {String} value 身份证号码
 * @param {String} errorMsgPrefix 错误信息提醒前缀
 * @returns {Object}  status 0 校验失败 1 校验成功 ; msg 校验失败时返回的错误信息
 */

const checkIDCard = (value, errorMsgPrefix = '身份证号') => {
  /**
   * 验证 15 位身份证
   * @param {String} value 身份证号
   * @returns {Boolean}
   */
  const checkIDCardLen15 = (value) => {
    const year = value.substring(6, 8)
    const month = value.substring(8, 10)
    const day = value.substring(10, 12)
    const temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day))
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
    if (
      temp_date.getYear() != parseFloat(year) ||
      temp_date.getMonth() != parseFloat(month) - 1 ||
      temp_date.getDate() != parseFloat(day)
    ) {
      return false
    } else {
      return true
    }
  }

  /**
   * 验证 15 位身份证
   * @param String value 身份证号
   * @returns
   */
  const checkIDCardLen18 = (value) => {
    const year = value.substring(6, 10)
    const month = value.substring(10, 12)
    const day = value.substring(12, 14)
    const temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day))
    // 这里用getFullYear()获取年份，避免千年虫问题
    if (
      temp_date.getFullYear() != parseFloat(year) ||
      temp_date.getMonth() != parseFloat(month) - 1 ||
      temp_date.getDate() != parseFloat(day)
    ) {
      return false
    } else {
      return true
    }
  }

  /**
   * 判断身份证号码为18位时 最后位的验证是否正确
   * @param values 身份证号码数组
   * @return
   */
  const isTrueValidateCodeBy18IdCard = (values) => {
    let sum = 0 // 声明加权求和变量
    if (values[17].toLowerCase() == 'x') {
      values[17] = 10 // 将最后位为x的验证码替换为10方便后续操作
    }
    for (let i = 0; i < 17; i++) {
      sum += Wi[i] * values[i] // 加权求和
    }
    let valCodePosition = sum % 11 // 得到验证码所位置
    if (values[17] == ValideCode[valCodePosition]) {
      return true
    } else {
      return false
    }
  }

  /**
   * 返回信息
   * @param {String} status 检验状态 0 校验失败 1 校验成功
   * @param {String} msg 校验失败时返回的错误信息
   * @returns
   */
  const returnInfo = (status, msg = '') => {
    return {
      status, // 0 校验失败 1 校验成功
      msg: errorMsgPrefix + msg, // 校验失败时返回的错误信息
    }
  }

  if (!value) {
    return returnInfo('0', '不能为空，请重新输入！')
  }

  // 格式化身份证的值 去除空格 将 X 转化为 x
  value = (value + '').trim().toUpperCase()
  const len = value.length

  if (len === 15) {
    if (!checkIDCardLen15(value)) {
      return returnInfo('0', '格式错误，请重新输入！')
    } else {
      return returnInfo('1')
    }
  } else if (len === 18) {
    const values = value.split('') // 得到身份证数组
    if (!checkIDCardLen18(value) || !isTrueValidateCodeBy18IdCard(values)) {
      return returnInfo('0', '格式错误，请重新输入！')
    } else {
      return returnInfo('1')
    }
  } else {
    return returnInfo('0', '格式错误，请重新输入！')
  }
}

export { checkIDCard }
