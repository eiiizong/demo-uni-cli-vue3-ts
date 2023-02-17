/**
 * 码表每个值的类型定义
 */
export interface CodeItem {
  /**
   * 码值中文
   */
  label: string
  /**
   * 码表名称
   */
  name: string
  /**
   * 码值
   */
  value: string
  /**
   * 码表key
   */
  type: string
}

/**
 * getCode 接口调用成功返回的数据格式
 */
export interface GetCodeSuccessResult {
  /**
   * 码表数据
   */
  codeList: CodeItem[]
  value?: CodeItem[]
}
