let systemInfo = null

const getSystemInfoSync = () => {
  if (systemInfo === null) {
    systemInfo = uni.getSystemInfoSync()
  }

  return systemInfo
}

export { getSystemInfoSync }
