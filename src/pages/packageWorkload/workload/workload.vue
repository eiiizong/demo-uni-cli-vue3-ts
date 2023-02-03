<template>
  <view class="workload"> workload </view>
</template>

<script setup lang="ts">
  import { ref, toRefs } from 'vue'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()

  const { userInfo } = toRefs(storeUserInfo)
</script>

<style lang="scss" scoped>
  .workload {
    width: 100%;
  }
</style>
