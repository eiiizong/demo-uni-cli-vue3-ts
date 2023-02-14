// 全局状态管理类型
declare namespace Store {
  /**
   * store 用户信息
   */
  export interface UserInfo {
    /**
     * 用户唯一token
     */
    token?: string
    /**
     * openId
     */
    openId?: string
    /**
     * sessionId
     */
    sessionId?: string
    /**
     * sessionKey
     */
    sessionKey?: string
    /**
     * 用户头像网络地址
     */
    avatarUrl?: string
    /**
     * 用户身份证号
     */
    idCard?: string
    /**
     * 用户姓名
     */
    userName?: string
    /**
     * 用户单位名称
     */
    unitName?: string
    /**
     * 用户电话号码
     */
    tel?: string
    /**
     * 用户id
     */
    userId?: string
    /**
     * 用户类型 0 未登录用户 1 游客 2 领导 3 经办人 4 合作机构
     */
    userType?: '0' | '1' | '2' | '3' | '4'
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
     * 查询对id
     */
    userId?: string
  }
}

export type { Store }
