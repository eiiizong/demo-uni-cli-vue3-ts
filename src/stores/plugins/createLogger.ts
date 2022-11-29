import type { PiniaPluginContext } from 'pinia'

const repeat = (str: string, times: number) => {
  return new Array(times + 1).join(str)
}

const pad = (num: number, maxLength: number) => {
  return repeat('0', maxLength - num.toString().length) + num
}

const getFormattedTime = () => {
  var time = new Date()
  return (
    ' @ ' +
    pad(time.getHours(), 2) +
    ':' +
    pad(time.getMinutes(), 2) +
    ':' +
    pad(time.getSeconds(), 2) +
    '.' +
    pad(time.getMilliseconds(), 3)
  )
}

/**
 * store 日志打印
 */
const createLogger = ({ store }: PiniaPluginContext) => {
  store.$subscribe(
    (mutation, state) => {
      const { storeId, type } = mutation
      var message = 'Store ' + storeId + ' ' + type + getFormattedTime()
      console.groupCollapsed(message)
      console.log('%c mutation.storeId', 'color: #9E9E9E; font-weight: bold', storeId)
      console.log('%c mutation.type', 'color: #03A9F4; font-weight: bold', type)
      console.log('%c next state', 'color: #4CAF50; font-weight: bold', { ...state })
      console.groupEnd()
    },
    // 在组件销毁后依然监听状态的改变
    { detached: true }
  )
}

export { createLogger }
