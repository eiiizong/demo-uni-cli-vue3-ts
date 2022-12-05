<template>
  <view class="cooperative-institution">
    <MyInstiution></MyInstiution>
    <InstiutionList></InstiutionList>
  </view>
</template>

<script setup lang="ts">
import MyInstiution from './MyInstiution.vue'
import InstiutionList from './InstiutionList.vue'

import { ref, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useStoreUserInfo } from '@/stores/modules'

const storeUserInfo = useStoreUserInfo()

onLoad((e) => {
  console.log(e)
})
</script>

<style lang="scss" scoped>
.cooperative-institution {
  width: 100%;
}
</style>
