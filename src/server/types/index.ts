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
    code?: number
    data?: {
      resultData: {
        code?: string
        message?: string
        token?: string
        data?: T
      }
    }
    errors?: RequestResponseReslutError[]
    requestId?: string
    serviceSuccess?: boolean
  }
  /**
   * getOpenId 接口
   */
  export interface GetOpenIdResult {
    openid: string
    sessionId: string
    session_key: string
    wxUserInfo?: {
      /**
       * 电话号码
       */
      tel: string

      openId: string
      /**
       * 用户头像url
       */
      portraiturl: string
      userId: string
    }
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
