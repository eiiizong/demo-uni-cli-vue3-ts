/**
 * w013 接口调用成功返回的list数据格式
 */
export interface W013SuccessResultListItem {
  /**
   * 作废数
   */
  backnum: number
  /**
   * 项目编码
   */
  chi031: string
  /**
   * 项目编码中文
   */
  chi031_desc: string
  /**
   * 通过笔数
   */
  passnum: number
  /**
   * 作废笔数
   */
  unpassnum: number
}
