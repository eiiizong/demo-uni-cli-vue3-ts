<template>
  <view class="workload">
    <QueryCondition />
    <QueryResult />
  </view>
</template>

<script setup lang="ts">
  import QueryCondition from './QueryCondition.vue'
  import QueryResult from './QueryResult.vue'

  import { toRefs } from 'vue'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()

  const { userInfo } = toRefs(storeUserInfo)

  console.log('us', userInfo.value)
</script>

<style lang="scss" scoped>
  .workload {
    width: 100%;
  }
</style>
