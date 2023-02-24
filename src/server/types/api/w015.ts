/**
 * w014 接口调用成功返回的list数据格式
 */
export interface W014SuccessResultListItem {
  /**
   * 所在区域
   */
  chb015: string
  /**
   * 所在区域
   */
  chb015_desc: string
  /**
   * 准入状态 1 已准入 2 已退出 3 退出中
   */
  crb11b: '1' | '2' | '3'
  /**
   * 准入状态
   */
  crb11b_desc: string
  /**
   * 白名单入库时间
   */
  crb11l: number
  /**
   * 退库时间
   */
  crb11m?: number
  /**
   * 白名单主键
   */
  crb110: number
  /**
   * 白名单企业名
   */
  crb111: string
  /**
   * 行业
   */
  crb116: string
  /**
   * 行业
   */
  crb116_desc: string
  /**
   * 行业规模
   */
  crb118: string
  /**
   * 行业规模
   */
  crb118_desc: string
}
