/**
 * w017 接口调用成功返回的list数据格式
 */
export interface W017SuccessResultListItem {
  /**
   *
   */
  c_type?: string
  /**
   *
   */
  code?: string
  /**
   * 新闻内容
   */
  content?: string
  /**
   * 新闻创建时间
   */
  create_time?: string
  /**
   * 新闻描述
   */
  description?: string
  /**
   * 新闻缩略图
   */
  thumb?: string
  /**
   * 新闻标题
   */
  title?: string
}

export interface W017SuccessResult {
  /**
   * 数据
   */
  pageBean: {
    /**
     * 当前条件下返回的数据
     */
    list: W017SuccessResultListItem[]
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
