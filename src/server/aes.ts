import CryptoJS from 'crypto-js'

const KEY = CryptoJS.enc.Utf8.parse('_aes_secret_key_')
const IV = CryptoJS.enc.Utf8.parse('_aes_secret_iv__')

/**
 * AES 加密
 * @param plaintext: 需要加密的文本
 */
const AES_Encrypt = (plaintext:string) => {
  let key = KEY
  let iv = IV
  let srcs = CryptoJS.enc.Utf8.parse(plaintext)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  })

  const encryptRes = CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
  return encryptRes
}

/**
 * AES 解密
 * @param jsonStr
 */
const AES_Decrypt = (jsonStr:string) => {
  let key = KEY
  let iv = IV
  let base64 = CryptoJS.enc.Base64.parse(jsonStr)
  let src = CryptoJS.enc.Base64.stringify(base64)

  const decrypt = CryptoJS.AES.decrypt(src, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  })

  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8).toString()

  return decryptedStr
}

export { AES_Encrypt, AES_Decrypt }
