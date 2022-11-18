<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { getSystemInfo } from '@/utils/uni-api'
import { useStoreSystemInfo } from '@/store/modules/systemInfo'
const storeSystemInfo = useStoreSystemInfo()
onLaunch((e) => {
  console.log('App Launch', e)

  getSystemInfo().then((res) => {
    console.log(res, 999888)
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
