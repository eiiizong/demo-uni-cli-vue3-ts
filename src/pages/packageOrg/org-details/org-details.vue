<template>
  <view class="org-details">
    <BasicInfo></BasicInfo>
    <Tabs></Tabs>
  </view>
</template>

<script setup lang="ts">
import BasicInfo from './BasicInfo.vue'
import Tabs from './Tabs.vue'

import { ref, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useStoreUserInfo } from '@/stores/modules'

const storeUserInfo = useStoreUserInfo()

onLoad((e) => {
  console.log(e)
})
</script>

<style lang="scss" scoped>
.org-details {
  width: 100%;
}
</style>
