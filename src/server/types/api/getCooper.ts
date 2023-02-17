interface DataItem {
  /**
   * 机构id
   */
  orgId: string
  /**
   * 机构名称
   */
  orgName: string
  /**
   * 机构组织架构
   */
  orgNamePath: string
  /**
   * 机构名称
   */
  orgType: string
  /**
   * 机构名称
   */
  orgTypeName: string
}

/**
 * getCooper 接口调用成功返回的数据格式
 */
export interface GetCooperSuccessResult {
  /**
   * 机构名称
   */
  orgName: string
  /**
   * 机构名称下的子机构
   */
  children: DataItem[]
}
