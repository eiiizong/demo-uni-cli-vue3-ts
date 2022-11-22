<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { getSystemInfo } from '@/utils/uni-api'
import { useStoreSystemInfo } from '@/store/modules/systemInfo'
import { useCheckIDCard } from '@/hooks/common'
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
<style></style>
