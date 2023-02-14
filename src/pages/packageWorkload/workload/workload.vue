<template>
  <view class="workload">
    <QueryCondition />
    <Tips />
    <QueryResult />
  </view>
</template>

<script setup lang="ts">
  import QueryCondition from './QueryCondition.vue'
  import Tips from './Tips.vue'
  import QueryResult from './QueryResult.vue'

  import { toRefs } from 'vue'
  import { useStoreUserInfo, useStoreWorkloadQueryInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()
  const storeWorkloadQueryInfo = useStoreWorkloadQueryInfo()

  const { userInfo } = toRefs(storeUserInfo)
  const { workloadQueryInfo } = toRefs(storeWorkloadQueryInfo)

  console.log('us', userInfo.value, workloadQueryInfo.value)
</script>

<style lang="scss" scoped>
  .workload {
    width: 100%;
  }
</style>
