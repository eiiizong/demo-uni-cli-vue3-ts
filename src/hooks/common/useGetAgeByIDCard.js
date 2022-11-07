/**
 * 根据身份证号获取年龄
 * @param {String} idCard 身份证号
 */

const useGetAgeByIDCard = (idCard) => {
  // 格式化身份证的值 去除空格 将 X 转化为 x
  idCard = (idCard + '').trim().toUpperCase()
  if (!idCard) {
    console.error('身份证号码为空，请检查！')
    return 0
  }

  const len = idCard.length

  if (len != 15 && len != 18) {
    console.error('身份证号码只能为15位或18位,其它不合法，请检查！')
    return 0
  }

  let birthday = ''
  // 处理15位的身份证号码从号码中得到生日和性别代码
  if (len == 15) {
    birthday =
      '19' +
      idCard.substr(6, 2) +
      '/' +
      idCard.substr(8, 2) +
      '/' +
      idCard.substr(10, 2)
  }
  // 处理18位的身份证号码从号码中得到生日和性别代码
  if (len == 18) {
    birthday =
      idCard.substr(6, 4) +
      '/' +
      idCard.substr(10, 2) +
      '/' +
      idCard.substr(12, 2)
  }

  // 时间字符串里，必须是“/”
  let birthDate = new Date(birthday)
  let nowDate = new Date()

  let age = nowDate.getFullYear() - birthDate.getFullYear()

  // 再考虑月、天的因素。进行比较。
  // 现在的月份小于生日月份 年龄减1
  // 现在的月份等于生日月份并且现在的号数小于生日月份的号数 年龄减1
  if (
    nowDate.getMonth() < birthDate.getMonth() ||
    (nowDate.getMonth() == birthDate.getMonth() &&
      nowDate.getDate() < birthDate.getDate())
  ) {
    age--
  }
  return age
}

export { useGetAgeByIDCard }
