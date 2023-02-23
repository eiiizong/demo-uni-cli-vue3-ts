/**
 * w012 接口调用成功返回的数据格式
 */
export interface W012SuccessResultListItem {
  /**
   * 是否为人员 0 不是 1 是
   */
  ispeople: string
  /**
   * 组织名称
   */
  name: string
  /**
   * 组织id
   */
  orgid: number
  /**
   * 父组织id
   */
  porgid: number
  /**
   * 子节点
   */
  childList?: W012SuccessResultListItem[]
}
