/**
 * w014 接口调用成功返回的list数据格式
 */
export interface W014SuccessResultListItem {
  /**
   * 查询对象姓名
   */
  name?: string
  /**
   * 查询对象id
   */
  userid?: string
  /**
   * 查询对象所属组织架构 例如：四川省/成都市融资再担保有限责任公司/资信评审部
   */
  orgnampath?: string
  /**
   * 查询对象所属组织架构 例如：['四川省','成都市融资再担保有限责任公司','资信评审部']
   */
  org?: string[]
}
