/**
 * w009 接口调用成功返回的list数据格式
 */
export interface W009SuccessResultListItem {
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
   * 流程状态
   */
  cpb102: string
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
export interface W009SuccessResult {
  /**
   * 数据
   */
  pageBean: {
    /**
     * 当前条件下返回的数据
     */
    list: W009SuccessResultListItem[]
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
