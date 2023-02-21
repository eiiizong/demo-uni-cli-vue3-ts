/**
 * w009 接口调用成功返回的list数据格式
 */
export interface W009SuccessResultListItem {
  aae017: string
  aae036: number
  businessid: string
  chi031: string
  cpb100: string
  cpb102: string
  /**
   * 当前环节业务局名称
   */
  orgname: string
  /**
   * 当前环节流程名称
   */
  processname: string
  /**
   * 申请状态
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
  pageBen: {
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
