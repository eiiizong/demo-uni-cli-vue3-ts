// 全局状态管理类型
namespace Store {
    // 主题
    export type StoreThemeName = 'default' | 'dark'
  
    export interface StoreTheme {
      // 主题名称
      name?: StoreThemeName
      // 主题颜色
      color?: string
    }
    // 语言
    export type StoreLanguage = 'zh-cn' | 'en'
    //  用户信息
    export interface StoreUserInfo {
      // 用户唯一 token
      token?: string
      // 用户唯一 openId
      openId?: string
      // 用户唯一 sessionId
      sessionId?: string
      // 用户唯一 session_key
      session_key?: string
      // 用户头像网络地址
      avatarUrl?: string
      // 用户身份证号
      idCard?: string
      // 用户姓名
      userName?: string
      // 用户电话号码
      tel?: string
      // 用户id
      user_id?: string
    }
  }
  
  export type { Store }
  