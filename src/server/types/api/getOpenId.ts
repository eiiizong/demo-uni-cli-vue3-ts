import type { LoginSuccessResult } from '@/server/types/api'

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
  wxUserInfo?: LoginSuccessResult
}
