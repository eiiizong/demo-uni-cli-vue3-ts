import CryptoJS from 'crypto-js'

const KEY = CryptoJS.enc.Utf8.parse('123456bccb654321') // 十六位十六进制数作为密钥
const IV = CryptoJS.enc.Utf8.parse('123456abba654321') // 十六位十六进制数作为密钥偏移量

/**
 * AES 加密
 * @param word: 需要加密的文本
 * KEY: // 需要前后端保持一致
 * mode: CBC // 需要前后端保持一致
 * pad: Pkcs7 // 前端 Pkcs7 对应 后端 Pkcs5
 */
const AES_Encrypt = (plaintext) => {
  let ciphertext = CryptoJS.AES.encrypt(plaintext, KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString()
  return ciphertext
}

/**
 * AES 解密
 * @param jsonStr
 */
const AES_Decrypt = (jsonStr) => {
  let decrypt = CryptoJS.AES.decrypt(jsonStr, KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

export { AES_Encrypt, AES_Decrypt }
