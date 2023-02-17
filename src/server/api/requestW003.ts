import { request } from '@/server/request'

/**
 * 白名单申请
 * @param {string} borrower 借款人
 * @param {string} businessEntity 经营主体
 * @param {string} industry 所属行业
 * @param {string} registeredAddress 注册地址
 * @param {string} taxPlace 缴税地(地区编码)
 * @param {string} crb19n 区县产业部门
 * @param {string} contactPerson 联系人
 * @param {string} contactInformation 联系方式
 * @param {string} typeOfEnterprise 企业类型
 * @param {string} loanAmount 贷款金额(万元)
 * @param {string} loanPurpose 贷款用途
 * @param {string} loanTerm 贷款期限
 * @param {string} borrowerd 是否贷过款
 * @param {string} taxAmount 上一年度缴税金额(万元)s
 * @param {string} businessIncome 上一年度主营业务收入(万元)
 * @param {string} debtSituation 目前负债情况(万元)
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW003 = (
  borrower: string,
  businessEntity: string,
  industry: string,
  registeredAddress: string,
  taxPlace: string,
  crb19n: string,
  contactPerson: string,
  contactInformation: string,
  typeOfEnterprise: string,
  loanAmount: string,
  loanPurpose: string,
  loanTerm: string,
  borrowerd: string,
  taxAmount: string,
  businessIncome: string,
  debtSituation: string,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<any> => {
  const data = {
    borrower,
    businessEntity,
    industry,
    registeredAddress,
    taxPlace,
    crb19n,
    contactPerson,
    contactInformation,
    typeOfEnterprise,
    loanAmount,
    loanPurpose,
    loanTerm,
    borrowerd,
    taxAmount: Number(taxAmount),
    businessIncome: Number(businessIncome),
    debtSituation: Number(debtSituation),
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
export { requestW003 }
