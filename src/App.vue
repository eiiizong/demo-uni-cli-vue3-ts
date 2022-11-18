<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { getSystemInfo } from '@/utils/uni-api'

onLaunch((e) => {
  console.log('App Launch', e)

  getSystemInfo().then((res) => {
    console.log(res, 999888)
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
