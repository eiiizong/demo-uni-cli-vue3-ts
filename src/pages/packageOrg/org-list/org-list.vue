<template>
  <view class="org-list" :class="isLeader ? '' : 'no-button'">
    <InstiutionList :render-list="orgList" />
    <MyInstiution v-if="isLeader" />
  </view>
</template>

<script setup lang="ts">
  import MyInstiution from './MyInstiution.vue'
  import InstiutionList from './InstiutionList.vue'

  import type { GetCooperSuccessResultListItem } from '@/server/types/api'
  import { toRefs, ref, computed } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { useStoreUserInfo } from '@/stores/modules'
  import { requestGetCooper } from '@/server/api'

  const storeUserInfo = useStoreUserInfo()

  const { userInfo } = toRefs(storeUserInfo)

  const orgList = ref<GetCooperSuccessResultListItem[]>([])

  // 是否为领导
  const isLeader = computed(() => {
    let result = false
    const { role } = userInfo.value

    if (role === '4') {
      result = true
    }

    return result
  })
  // 查询数据
  const queryData = () => {
    requestGetCooper().then((res) => {
      orgList.value = [...res]
    })
  }

  onLoad(() => {
    queryData()
  })
</script>

<style lang="scss" scoped>
  .org-list {
    width: 100%;
    padding: 16rpx 0;
    padding-bottom: 154rpx + 16rpx;
    position: relative;
    &.no-button {
      padding-bottom: $spacing;
    }
  }
</style>
