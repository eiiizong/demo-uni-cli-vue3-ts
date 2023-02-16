import type { LoginSuccessResult } from '@/server/types/api'

// 全局状态管理类型
declare namespace Store {
  /**
   * store 用户信息
   */
  export interface UserInfo extends LoginSuccessResult {
    /**
     * 用户唯一 token
     */
    token?: string
  }
  /**
   * store 工作量查询信息
   */
  export interface WorkloadQueryInfo {
    /**
     * 开始日期
     */
    startDate?: string
    /**
     * 结束日期
     */
    endDate?: string
    /**
     * 查询对象姓名
     */
    userName?: string
    /**
     * 查询对象id
     */
    userId?: string
    /**
     * 查询对象组织架构
     */
    org?: string[]
  }
}

export type { Store }
