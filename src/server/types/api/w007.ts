/**
 * w007 接口调用成功返回的数据格式
 */
export interface W007SuccessResultListItem {
  /**
   * 户均贷款
   */
  averagemoney: number
  /**
   * 补偿金额
   */
  buchangjine: number
  /**
   * 补贴金额
   */
  butiejine: number
  /**
   * 存量余额
   */
  leavemoney: number
  /**
   * 月份
   */
  month: string
  /**
   * 投放总户数
   */
  totalnumber: number
  /**
   * 投放笔数
   */
  totaltime: number
}
