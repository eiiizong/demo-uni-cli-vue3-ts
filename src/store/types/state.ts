export interface AppStateUserInfo {
  token?: string
  openId?: string
  sessionId?: string
  session_key?: string
  avatarUrl?: string
  idCard?: string
  userName?: string
  tel?: string
}

export interface AppState {
  userInfo: AppStateUserInfo
  userList: {}
  systemInfo: {}
}
