/**
 * 用户信息
 */
interface UserInfo {
  /**
   * 电话号码
   */
  tel: string
  /**
   * 用户头像url
   */
  portraiturl?: string
  /**
   * 用户id
   */
  userId?: string
  /**
   * 用户姓名
   */
  userName?: string
  /**
   * 用户类型 0 未登录用户 1 游客 2 领导 3 经办人 4 合作机构
   */
  userType?: '0' | '1' | '2' | '3' | '4'
  /**
   * 单位名称
   */
  unitName?: string
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
   * sessionId
   */
  sessionId: string
  /**
   * session_key
   */
  session_key: string
  /**
   * token
   */
  token?: string
  /**
   * 用户信息 已登录返回 未登录则没有该数据
   */
  wxUserInfo?: UserInfo
}
