import store from '@/store'
/**
 * 岗位权限判断
 * @param {String} pathName 路由名称
 * @param {Boolean} isAuth 是否需要权限验证
 */
const useCheckPositionNameAuth = (pathName, isAuth = false) => {
  if (!isAuth) {
    return true
  }

  let tag = false
  const { positionNameArr } = store.state.userInfo
  if (positionNameArr && positionNameArr.length > 0) {
    switch (pathName) {
      // 我的代办
      case 'query-agent':
        tag = true
        break
      // 入户调查
      case 'household-survey':
        if (positionNameArr.includes('入户调查')) {
          tag = true
        }
        break
      // 经办历史
      case 'my-handling-history':
        tag = true
        break
      // 投诉处理
      case 'query-complaint-handling':
        if (positionNameArr.includes('投诉处理')) {
          tag = true
        }
        break
      // 逾期督办
      case 'query-overdue-supervision':
        if (positionNameArr.includes('逾期督办')) {
          tag = true
        }
        break
      // 被督办记录
      case 'my-supervised-record':
        tag = true
        break

      // 首页 阳光申报
      case 'declare-list':
        if (
          positionNameArr.includes('200038_乡镇_受理') ||
          positionNameArr.includes('20779_乡镇_受理')
        ) {
          tag = true
        }
        break
      // 我的 阳光申报记录
      case 'declare-record':
        if (
          positionNameArr.includes('200038_乡镇_受理') ||
          positionNameArr.includes('20779_乡镇_受理')
        ) {
          tag = true
        }
        break
      default:
        tag = false
        break
    }
  }
  return tag
}

export { useCheckPositionNameAuth }
