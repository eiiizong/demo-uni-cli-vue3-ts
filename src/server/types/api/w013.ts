/**
 * w013 接口调用成功返回的list数据格式
 */
export interface W013SuccessResultListItem {
  /**
   * 作废金额
   */
  backmoney: number
  /**
   * 73作废金额
   */
  backmoney73: number
  /**
   * 442作废金额
   */
  backmoney442: number
  /**
   * 作废笔数
   */
  backnum: number
  /**
   * 73作废笔数
   */
  backnum73: number
  /**
   * 442作废笔数
   */
  backnum442: number
  /**
   * 项目编码
   */
  chi031: string
  /**
   * 项目编码中文
   */
  chi031_desc: string
  /**
   * 通过金额
   */
  passmoney: number
  /**
   * 73通过金额
   */
  passmoney73: number
  /**
   * 442通过金额
   */
  passmoney442: number
  /**
   * 通过笔数
   */
  passnum: number
  /**
   * 73通过笔数
   */
  passnum73: number
  /**
   * 442通过笔数
   */
  passnum442: number
  /**
   * 作废金额
   */
  unpassmoney: number
  /**
   * 73作废金额
   */
  unpassmoney73: number
  /**
   * 442作废金额
   */
  unpassmoney442: number
  /**
   * 作废笔数
   */
  unpassnum: number
  /**
   * 73作废笔数
   */
  unpassnum73: number
  /**
   * 443作废笔数
   */
  unpassnum442: number
}
