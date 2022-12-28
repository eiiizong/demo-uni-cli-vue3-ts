<script setup lang="ts">
import { onLaunch, onShow, onHide, onError } from '@dcloudio/uni-app'
import { checkAppUpdate } from '@/utils/check'
import { getSystemInfo } from '@/utils/uni-api'
import { requestCustomLogin } from '@/server/custom-api'
import { useStoreSystemInfo } from '@/stores/modules'

const storeSystemInfo = useStoreSystemInfo()
onLaunch((e) => {
  // console.log('App Launch', e)
  // 登录
  requestCustomLogin().then((res) => {
    console.log(res, 987)
  })
  // 获取并储存系统信息
  getSystemInfo().then((res) => {
    storeSystemInfo.updateStoreSystemInfo(res)
  })
})

onShow((e) => {
  // console.log('App Show', e)
  checkAppUpdate()
})

onHide(() => {
  // console.log('App Hide')
})

onError((err) => {
  console.log('App error', err)
})
</script>
<style lang="scss">
// 引入通用样式
@use '@/assets/styles/index.scss';
/* 每个页面公共css */
// @import '@/assets/styles/scss/index.scss';
// @import '@/assets/iconfont/index.scss'; // iconfont
// @import '@/assets/fonts/Impact/Impact.scss'; // 字体文件
// @import '@/assets/fonts/YouSheBiaoTiHei/YouSheBiaoTiHei.scss'; // 字体文件
// @import '@/assets/fonts/PangMenZhengDao/PangMenZhengDao.scss'; // 字体文件
</style>
