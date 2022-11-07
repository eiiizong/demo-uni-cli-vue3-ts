/**
 * 根据身份证号获取性别
 * @param {String} idCard 身份证号
 */
const useGetGenderByIDCard = (idCard) => {
  // 格式化身份证的值 去除空格 将 X 转化为 x
  idCard = (idCard + '').trim().toUpperCase()
  if (!idCard) {
    console.error('身份证号码为空，请检查！')
    return '无'
  }

  const len = idCard.length
  let genderStr = ''

  if (len != 15 && len != 18) {
    console.error('身份证号码只能为15位或18位,其它不合法，请检查！')
    return '无'
  }

  if (parseInt(idCard.slice(-2, -1)) % 2 == 1) {
    genderStr = '男'
  } else {
    genderStr = '女'
  }
  return genderStr
}

export { useGetGenderByIDCard }
