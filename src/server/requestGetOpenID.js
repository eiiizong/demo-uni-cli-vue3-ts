import { request } from './request'
import { showModal, navigateTo } from '@/utils/uni-api'

/**
 * 获取openid
 * @param {String} code 微信code
 * @param {Boolean} isShowTip 是否显示登录提示
 * @returns
 */
const requestGetOpenID = (code, isShowTip) => {
  const data = {
    code,
  }

  return new Promise((resolve, reject) => {
    request('/frontRestService/frontWechatRestService/getOpenId', data)
      .then((res) => {
        const { openid, session_key, wxUserInfo, sessionId, token } = res.data
        // 存在用户信息
        if (wxUserInfo && sessionId) {
          const {
            idcard,
            loginid,
            openid,
            portraiturl,
            userid,
            username,
          } = wxUserInfo
          resolve({
            openid,
            idCard: idcard,
            session_key,
            userName: username,
            avatarUrl: portraiturl,
            sessionId,
            user_id: userid,
            token,
          })
        } else {
          // 不存在用户信息
          if (!openid) {
            showModal('出了点小问题#openid未能获取，请联系管理员！')
            reject(res.data)
          } else {
            if (isShowTip) {
              showModal(
                '检测到您还未进行登录验证，点击确定按钮进行登录验证！',
                '提示',
                true
              )
                .then(() => {
                  navigateTo('login', 'packageCommon')
                })
                .finally(() => {
                  resolve({
                    openid,
                    session_key: encodeURIComponent(session_key),
                  })
                })
            } else {
              resolve({
                openid,
                session_key: encodeURIComponent(session_key),
              })
            }
          }
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestGetOpenID }
