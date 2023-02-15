<template>
  <view class="institution-details"> institution-details </view>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()

  onLoad((e) => {
    console.log(e)
  })
</script>

<style lang="scss" scoped>
  .institution-details {
    width: 100%;
  }
</style>
