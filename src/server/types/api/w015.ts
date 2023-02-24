/**
 * w015 接口调用成功返回的list数据格式
 */
export interface W015SuccessResultListItem {
  aae011: string
  aae011_desc: string
  aae036: number
  chi050: number
  chi051: string
}

/**
 * w015 接口调用成功返回的list数据格式
 */
export interface W015SuccessResult {
  /**
   * 数据
   */
  pageBean: {
    /**
     * 当前条件下返回的数据
     */
    list: W015SuccessResultListItem[]
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
