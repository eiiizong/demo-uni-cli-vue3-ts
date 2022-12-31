import { login, showModal, navigateTo } from '@/utils/uni-api'
import { requestGetOpenId } from '@/server/api'

/**
 * 自定义登录 业务逻辑请自行更改
 * @param {boolean} [isShowNotLoggedInPrompt=true] 用户未登录时 是否进行提示。默认 true。
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画。默认值 true。
 * @param {boolean} [isShowErrorToast=true] 是否显示接口调用错误提示。默认值 true。
 */
const requestCustomLogin = (
  isShowNotLoggedInPrompt: boolean = true,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<any> => {
  return new Promise((resolve, reject) => {
    login()
      .then((res) => {
        const { code } = res
        if (code) {
          requestGetOpenId(code, isShowLoading, isShowErrorToast)
            .then((res) => {
              resolve(res)
              //   const { openid, session_key, sessionId, wxUserInfo, token } = res.data
              // 用户已经登录
              //   if (wxUserInfo) {
              //     resolve({
              //       session_key: encodeURIComponent(session_key),
              //       sessionId,
              //       openid,
              //       userId: wxUserInfo.userId,
              //       user_id: wxUserInfo.userId,
              //       userName: wxUserInfo.userName,
              //       idCard: wxUserInfo.idCard,
              //       loginId: wxUserInfo.loginId,
              //       tel: wxUserInfo.tel,
              //       avatarUrl: wxUserInfo.portraiturl,
              //       token,
              //     })
              //   } else {
              //     if (isShowNotLoggedInPrompt) {
              //       if (!openid) {
              //         showModal('openid 获取失败，请联系管理员！')
              //       } else {
              //         showModal('检测到您还未进行登录验证，点击确定按钮进行登录验证！', '提示', true)
              //           .then((res) => {
              //             navigateTo('login', 'packageCommon')
              //           })
              //           .finally(() => {
              //             resolve({
              //               openid,
              //               session_key: encodeURIComponent(session_key),
              //             })
              //           })
              //       }
              //     } else {
              //       resolve({
              //         openid,
              //         session_key: encodeURIComponent(session_key),
              //       })
              //     }
              //   }
            })
            .catch((err) => {
              reject(err)
            })
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestCustomLogin }
