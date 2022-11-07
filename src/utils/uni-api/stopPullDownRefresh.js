/**
 * 停止当前页面下拉刷新。
 * @returns { Promise }
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/pulldown.html#stoppulldownrefresh
 * @example stopPullDownRefresh()
 */
const stopPullDownRefresh = () => {
  uni.stopPullDownRefresh()
}

export { stopPullDownRefresh }
