/**
 * 获取当前环境是否为开发环境
 */
const getIsDev = () => {
  return process.env.NODE_ENV !== 'development'
}

export { getIsDev }
