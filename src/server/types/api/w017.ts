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
