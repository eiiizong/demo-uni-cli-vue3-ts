<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { getSystemInfo } from '@/utils/uni-api'
import { useStoreSystemInfo } from '@/store/modules/systemInfo'
import { useCheckIDCard } from '@/hooks/common'
const storeSystemInfo = useStoreSystemInfo()
onLaunch((e) => {
  console.log('App Launch', e)

  const a = useCheckIDCard('510902199507236534')
  console.log(a, 98)

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
