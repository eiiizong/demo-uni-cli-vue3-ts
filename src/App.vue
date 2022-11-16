<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch((e) => {
  console.log('App Launch', e)
})

onShow((e) => {
  console.log('App Show', e)
})

onHide(() => {
  console.log('App Hide')
})
</script>
<style></style>
