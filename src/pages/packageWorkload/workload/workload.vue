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

  import { toRefs, onMounted } from 'vue'
  import { useStoreUserInfo, useStoreWorkloadQueryInfo } from '@/stores/modules'
  import { getCurrentDate } from '@/utils/get'

  const storeUserInfo = useStoreUserInfo()
  const storeWorkloadQueryInfo = useStoreWorkloadQueryInfo()

  const { userInfo } = toRefs(storeUserInfo)

  onMounted(() => [
    storeWorkloadQueryInfo.updateWorkloadQueryInfo({
      userName: userInfo.value.userName || '张三',
      org: ['四川省', '成都市融资再担保有限责任公司', '创新产品部'],
      startDate: getCurrentDate(),
      endDate: getCurrentDate()
    })
  ])
</script>

<style lang="scss" scoped>
  .workload {
    width: 100%;
  }
</style>
