/**
 * w011 接口调用成功返回的list数据格式
 */
export interface W011SuccessResultListItem {
  /**
   * 申报机构编码
   */
  aae017: string
  /**
   * 申报时间
   */
  aae036: number
  /**
   * 业务id
   */
  businessid: string
  /**
   * 项目编号
   */
  chi031: string
  /**
   * 流程id
   */
  cpb100: string
  /**
   * 流程状态 0 未经办 1经办中、2申请通过、3不通过、4打回、5撤销、6合并、7拆分、8取消经办、9业务作废
   */
  cpb102: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  /**
   * 申报机构转码
   */
  orgname: string
  /**
   * 业务名称
   */
  processname: string
  /**
   * 流程状态转码
   */
  state: string
}

/**
 * w009 接口调用成功返回的数据格式
 */
export interface W011SuccessResult {
  /**
   * 数据
   */
  pageBean: {
    /**
     * 当前条件下返回的数据
     */
    list: W011SuccessResultListItem[]
    /**
     * 当前请求页数
     */
    pageNum: number
    /**
     * 当前请求页数
     */
    pageNumber: number
    /**
     * 当前请求条数
     */
    pageSize: number
    /**
     * 数据总页数
     */
    pages: number
    /**
     * 数据总条数
     */
    total: number
  }
}
