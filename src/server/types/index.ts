/**
 * api 数据类型定义
 */
declare namespace Api {
  /**
   * 接口调用错误
   */
  interface RequestResponseReslutError {
    id: string
    msg: string
  }

  /**
   * 定义所有接口返回的数据类型
   */
  export interface RequestResponseReslut<T> {
    /**
     * 状态码 200 成功
     */
    code?: number
    /**
     * 数据
     */
    data?: T
    /**
     * true 成功
     */
    serviceSuccess?: boolean
    /**
     * 错误信息
     */
    message?: string
  }

  interface B001_ItemList {
    id: string
    name: string
  }
  /**
   * 合作机构列表
   */
  export interface B001_SuccessResultItem extends B001_ItemList {
    list: B001_ItemList[]
  }
}

export type { Api }
