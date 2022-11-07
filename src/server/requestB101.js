import { request } from './request'

/**
 * 企业注册
 * @param {String} aab012 单位名称
 * @param {String} aab01w 统一社会编码
 * @param {String} aab151 法定代表人姓名
 * @param {String} aab152 法定代表人身份证号码/证件号
 * @param {String} aab153 法定代表人证件类型
 * @param {String} aab154 证件有效开始日期
 * @param {String} aab155 证件有效结束日期
 * @param {String} aab156 经办人人姓名
 * @param {String} aab157 经办人人身份证号码
 * @param {String} aab158 密码
 * @param {String} aab159 证件有效期
 * @param {String} aae005 联系电话
 * @param {String} aae005 联系电话
 * @param {String} chb015 区县
 * @param {String} chb017 乡镇
 * @param {String} chb018 村
 * @param {String<>} hi21List 文件列表
 * @returns
 */
const requestB101 = (
  aab012,
  aab01w,
  aab151,
  aab152,
  aab153,
  aab154,
  aab155,
  aab156,
  aab157,
  aab158,
  aab159,
  aae005,
  chb015,
  chb017,
  chb018,
  hi21List
) => {
  const data = {
    aab012,
    aab01w,
    aab151,
    aab152,
    aab153,
    aab154,
    aab155,
    aab156,
    aab157,
    aab158,
    aab159,
    aae005,
    chb015,
    chb017,
    chb018,
    hi21List,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontCommonDataRestService/invokeWx/B101', data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestB101 }
