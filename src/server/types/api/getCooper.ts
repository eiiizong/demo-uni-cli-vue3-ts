/**
 * getCooper 接口调用成功返回的数据格式
 */
export interface GetCooperSuccessResultListItem {
  /**
   * 机构id
   */
  id: string
  /**
   * 机构名称
   */
  name: string
  /**
   * 机构pid
   */
  pid: string
  /**
   * 子节点
   */
  childList?: GetCooperSuccessResultListItem[]
}
