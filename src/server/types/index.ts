/**
 * api 数据类型定义
 */
declare namespace Api {
  type Rows<T extends any> = {
    data: T
    success: number
  }

  
  
  interface AAA_01_List {
    id: string
    name: string
  }

  interface RequestResponseReslutError {
    id: string
    msg: string
  }

  export interface RequestResponseReslut {
    code?: number
    data?: unknown
    errors?: RequestResponseReslutError[]
    requestId?: string
    serviceSuccess?: boolean
  }
  /**
   * 合作机构列表
   */
  export interface AAA_01_Result {
    id: string
    name: string
    list: AAA_01_List[]
  }
}

export type { Api }
