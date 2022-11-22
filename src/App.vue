<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { getSystemInfo } from '@/utils/uni-api'
import { useStoreSystemInfo } from '@/store/modules'

const storeSystemInfo = useStoreSystemInfo()
onLaunch((e) => {
  console.log('App Launch', e)

  // 获取并储存系统信息
  getSystemInfo().then((res) => {
    storeSystemInfo.updateStoreSystemInfo(res)
  })
})

onShow((e) => {
  console.log('App Show', e)
})

onHide(() => {
  console.log('App Hide')
})
</script>
<style lang="scss">
/* 每个页面公共css */
@import '@/assets/styles/scss/index.scss';
// @import '@/assets/iconfont/index.scss'; // iconfont
// @import '@/assets/fonts/Impact/Impact.scss'; // 字体文件
// @import '@/assets/fonts/YouSheBiaoTiHei/YouSheBiaoTiHei.scss'; // 字体文件
// @import '@/assets/fonts/PangMenZhengDao/PangMenZhengDao.scss'; // 字体文件
</style>
