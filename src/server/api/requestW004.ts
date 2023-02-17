import { request } from '@/server/request'

/**
 * 我要融资申请
 * @param {string} ENTITY_NAME 融资主体名称
 * @param {string} SOCIAL_CODE 统一社会信用代码
 * @param {string} LOAN_PURPOSE 贷款用途
 * @param {string} FINANCING_PERIOD 融资期限
 * @param {string} INTENDED_APPLICATION_QUOTA 拟申请额度(万元)
 * @param {string} CONTACT_PERSON 联系人
 * @param {string} CONTACT_INFORMATION 联系方式
 * @param {string} TAX_PLACE 缴税地(地区编码)
 * @param {string} BANK 合作银行
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW004 = (
  ENTITY_NAME: string,
  SOCIAL_CODE: string,
  LOAN_PURPOSE: string,
  FINANCING_PERIOD: string,
  INTENDED_APPLICATION_QUOTA: string,
  CONTACT_PERSON: string,
  CONTACT_INFORMATION: string,
  TAX_PLACE: string,
  BANK: string,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<any> => {
  const data = {
    ENTITY_NAME,
    SOCIAL_CODE,
    LOAN_PURPOSE,
    FINANCING_PERIOD,
    INTENDED_APPLICATION_QUOTA,
    CONTACT_PERSON,
    CONTACT_INFORMATION,
    TAX_PLACE,
    BANK,
    // 来源
    source: 'wx'
  }

  return new Promise((resolve, reject) => {
    request('wx/wxController!W003.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestW004 }
