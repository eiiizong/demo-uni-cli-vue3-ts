<template>
  <view class="workload">
    <QueryConditions />
    <Tips />
    <QueryResult />
  </view>
</template>

<script setup lang="ts">
  import QueryConditions from './QueryConditions.vue'
  import Tips from './Tips.vue'
  import QueryResult from './QueryResult.vue'

  import { reactive, toRefs, onMounted } from 'vue'
  import { useStoreUserInfo, useStoreWorkloadQueryInfo } from '@/stores/modules'
  import { getCurrentDate } from '@/utils/get'

  const storeUserInfo = useStoreUserInfo()
  const storeWorkloadQueryInfo = useStoreWorkloadQueryInfo()

  const { userInfo } = toRefs(storeUserInfo)

  const queryInfo = reactive({
    tel: '',
    userid: '',
    startDate: '',
    endDate: ''
  })

  const queryData = () => {
    const { tel, userid, startDate, endDate } = queryData
  }

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
