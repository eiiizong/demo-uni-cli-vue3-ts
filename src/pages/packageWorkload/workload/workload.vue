<template>
  <view class="workload">
    <QueryConditions />
    <Tips />
    <QueryResult :is-request-over="customData.isRequestOver" :render-list="customData.queryResultList" />
  </view>
</template>

<script setup lang="ts">
  import QueryConditions from './QueryConditions.vue'
  import Tips from './Tips.vue'
  import QueryResult from './QueryResult.vue'

  import { W013SuccessResultListItem } from '@/server/types/api'

  import { toRefs, reactive, watch } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { useStoreUserInfo, useStoreWorkloadQueryInfo } from '@/stores/modules'
  import { requestW013 } from '@/server/api'

  const storeUserInfo = useStoreUserInfo()
  const storeWorkloadQueryInfo = useStoreWorkloadQueryInfo()

  const { userInfo } = toRefs(storeUserInfo)
  const { workloadQueryInfo } = toRefs(storeWorkloadQueryInfo)

  // 自定义数据
  const customData = reactive<{
    /**
     * 查询结果数据
     */
    queryResultList: W013SuccessResultListItem[]
    /**
     * 是否请求完成 控制 no-data 组件在未请求完成时不显示
     */
    isRequestOver: boolean
  }>({
    queryResultList: [],
    isRequestOver: false
  })

  /**
   * 查询数据
   */
  const queryData = () => {
    const { tel, userid, startDate, endDate } = workloadQueryInfo.value
    requestW013(userid ? '' : tel || '', userid || '', startDate || '', endDate || '')
      .then((res) => {
        customData.queryResultList = [...res]
      })
      .finally(() => {
        customData.isRequestOver = true
      })
  }

  watch(
    () => workloadQueryInfo.value,
    (val) => {
      if (val.tel || val.userid) {
        queryData()
      }
    },
    { immediate: true }
  )

  onLoad(() => {
    setTimeout(() => {
      const { userName, tel, orgNamePath } = userInfo.value
      storeWorkloadQueryInfo.updateWorkloadQueryInfo({
        name: userName,
        tel,
        orgnampath: orgNamePath
      })
    }, 1000 * 10)
  })
</script>

<style lang="scss" scoped>
  .workload {
    width: 100%;
  }
</style>
