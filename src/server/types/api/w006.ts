/**
 * w006 接口调用成功返回的数据格式
 */
export interface W006SuccessResult {
  /**
   * 户均贷款(万元)
   */
  averagemoey?: number
  /**
   * 补偿金额(万元)
   */
  buchangjine?: number
  /**
   * 补贴金额(万元)
   */
  butiejine?: number
  /**
   * 机动资金池总金额(亿元)
   */
  jidongpoolmoney?: number
  /**
   * 存量余额(万元)
   */
  leavemoney?: number
  /**
   * 73模式金额(亿元)
   */
  money73?: number
  /**
   * 442模式金额(亿元)
   */
  money442?: number
  /**
   * 资金池总金额(亿元)
   */
  poolsummoney?: number
  /**
   * 风险资金池总金额(亿元)
   */
  riskpoolmoney?: number
  /**
   * 投放总金额(亿元)
   */
  totalmoney?: number
  /**
   * 投放总户数
   */
  totalnumber?: number
  /**
   * 投放总笔数
   */
  totaltime?: number
  /**
   * 白名单获贷率
   */
  whiterate?: number
  /**
   * 白名单企业数
   */
  whitenum?: number
  /**
   * 去年留存金额(万元)
   */
  lastyearleavemoney?: number
  /**
   * 去年投放户数
   */
  lastyeartotalnumber?: number
  /**
   * 去年补偿金额(万元)
   */
  lastyearbuchangjine?: number
  /**
   * 去年补贴金额(万元)
   */
  lastyearbutiejine?: number
  /**
   * 去年户均金额
   */
  lastyearaveragemoey?: number
  /**
   * 去年申报笔数
   */
  lastyeartotaltime?: number
}