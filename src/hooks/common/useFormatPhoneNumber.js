/**
 * 格式化电话号码 13288876677 => 132****6677
 */
const useFormatPhoneNumber = (value) => {
  if (!value) {
    return ''
  }
  value = value.trim()
  const pat = /(\d{3})\d*(\d{4})/
  const str = value.replace(pat, '$1****$2')
  return str
}

export { useFormatPhoneNumber }
