import { request } from './request'

/**
 * 保存知名企业联系我们信息
 * @param {String} aab220 ab20主键
 * @param {String} aab01w 统一信用代码
 * @param {String} aab012 企业名称
 * @param {String} aab241 用户类型
 * @param {String} aab242 姓名
 * @param {String} aab243 机构
 * @param {String} aab244 邮箱
 * @param {String} aab245 电话
 * @param {String} aab246 主题
 * @param {String} aab247 内容
 * @param
 * @returns
 */
const requestB415 = (
  aab220,
  aab01w,
  aab012,
  aab241,
  aab242,
  aab243,
  aab244,
  aab245,
  aab246,
  aab247
) => {
  const data = {
    methodnamedesc: '保存知名企业联系我们信息',
    aab220,
    aab01w,
    aab012,
    aab241,
    aab242,
    aab243,
    aab244,
    aab245,
    aab246,
    aab247,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/B415', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestB415 }
