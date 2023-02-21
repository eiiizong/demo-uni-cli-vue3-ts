/**
 * w006 接口调用成功返回的数据格式
 */
export interface W006SuccessResult {
  /**
   * 投放总金额(亿元)
   */
  totalmoney?: number
  /**
   * 73模式金额(亿元)
   */
  money73?: number
  /**
   * 442模式金额(亿元)
   */
  money442?: number
  /**
   * 投放总户数
   */
  totalnumber?: number
  /**
   * 投放总户数 echarts 数据
   */
  totalnumberValues?: number[]
  /**
   * 投放总户数 比例
   */
  totalnumberrate?: number
  /**
   * 投放总户数去年
   */
  lastyeartotalnumber?: number
  /**
   * 存量余额(万元)
   */
  leavemoney?: number
  /**
   * 存量余额 echarts 数据
   */
  leavemoneyValues?: number[]
  /**
   * 存量余额(万元) 比例
   */
  leavemoneyrate?: number
  /**
   * 存量余额(万元) 去年
   */
  lastyearleavemoney?: number
  /**
   * 补贴金额(万元)
   */
  butiejine?: number
  /**
   * 补贴金额 echarts 数据
   */
  butiejineValues?: number[]
  /**
   * 补贴金额(万元) 比例
   */
  butiejinerate?: number
  /**
   * 补贴金额(万元) 去年
   */
  lastyearbutiejine?: number
  /**
   * 补偿金额(万元)
   */
  buchangjine?: number
  /**
   * 补偿金额 echarts 数据
   */
  buchangjineValues?: number[]
  /**
   * 补偿金额(万元) 比例
   */
  buchangjinerate?: number
  /**
   * 补偿金额(万元) 去年
   */
  lastyearbuchangjine?: number
  /**
   * 投放笔数
   */
  totaltime?: number
  /**
   * 投放笔数 echarts 数据
   */
  totaltimeValues?: number[]
  /**
   * 投放笔数 比例
   */
  totaltimerate?: number
  /**
   * 投放笔数 去年
   */
  lastyeartotaltime?: number
  /**
   * 户均贷款(万元)
   */
  averagemoey?: number
  /**
   * 户均贷款 echarts 数据
   */
  averagemoeyValues?: number[]
  /**
   * 户均贷款(万元) 比例
   */
  averagemoeyrate?: number
  /**
   * 户均贷款(万元) 去年
   */
  lastyearaveragemoey?: number

  /**
   * 资金池总金额(万元)
   */
  poolsummoney?: number
  /**
   * 机动资金池总金额(万元)
   */
  jidongpoolmoney?: number
  /**
   * 风险资金池总金额(万元)
   */
  riskpoolmoney?: number
  /**
   * 白名单企业数
   */
  whitenum?: number
  /**
   * 白名单获贷率
   */
  whiterate?: number
}
