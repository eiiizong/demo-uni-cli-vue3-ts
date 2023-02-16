/**
 * 用户信息
 */
interface UserInfo {
  /**
   * 帐号状态（0正常使用 1锁定 2暂停使用 3禁止使用）
   */
  accountStatus: '0' | '1' | '2' | '3'
  /**
   * 用户账号id
   */
  loginId: string
  /**
   * 用户 openId
   */
  openId: string
  /**
   * 用户注册时间
   */
  registerTime: number
  /**
   * 用户类型 0:游客,1:企业,2:合作机构,3:经办人,4:领导
   */
  role: '0' | '1' | '2' | '3' | '4'
  /**
   * 用户sessionId
   */
  sessionId: string
  /**
   * 用户手机号
   */
  tel: string
  /**
   * 用户id
   */
  userId: string
  /**
   * 用户姓名
   */
  userName: string
  /**
   * 企业名称
   */
  orgName?: string
  /**
   * 用户单位名称 组织架构 例如：四川省/成都市/合作银行/银海公司（测试）
   */
  orgNamePath?: string
  /**
   * 用户单位名称id 组织架构 例如： 1/2/3/4
   */
  orgIdPath?: string
}

/**
 * getOpenId 接口调用成功返回的数据格式
 */
export interface GetOpenIdSuccessResult {
  /**
   * openid
   */
  openid: string
  /**
   * session_key
   */
  session_key: string
  /**
   * 用户信息 已登录返回 未登录则没有该数据
   */
  wxUserInfo?: UserInfo
}
