/**
 * 社会统一信用代码 91440101675657502F => 9*****************F
 */
const useFormatSocialUnifiedCreditCode = (value) => {
  value = value.trim()
  if (!value) {
    return ''
  }
  let len = value.length
  let str =
    value.substr(0, 1) + '*'.repeat(len - 2) + value.substr(len - 1, len)
  return str
}

export { useFormatSocialUnifiedCreditCode }
