/**
 * 格式化银行卡号 66634343535353535355 => 6*****************5
 */
const useFormatBankCardNumber = (value) => {
  value = value.trim()
  if (!value) {
    return ''
  }
  let len = value.length
  let str =
    value.substr(0, 1) + '*'.repeat(len - 2) + value.substr(len - 1, len)
  return str
}

export { useFormatBankCardNumber }
