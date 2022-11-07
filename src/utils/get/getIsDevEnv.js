/**
 * 获取当前环境是否为开发环境
 */
const getIsDevEnv = () => {
  return process.env.NODE_ENV === 'development'
}

export { getIsDevEnv }
