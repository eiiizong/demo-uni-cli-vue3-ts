<template>
  <view class="org-list" :class="userInfo.role !== '4' ? 'no-button' : ''">
    <InstiutionList :render-list="orgList" />
    <MyInstiution v-if="userInfo.role === '4'" />
  </view>
</template>

<script setup lang="ts">
  import MyInstiution from './MyInstiution.vue'
  import InstiutionList from './InstiutionList.vue'

  import type { Api } from '@/server/types'
  import { toRefs, computed } from 'vue'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()

  const { userInfo } = toRefs(storeUserInfo)

  const orgList = computed<Api.B001_SuccessResultItem[]>(() => {
    let arr = []
    for (let i = 0; i < 10; i++) {
      let item: Api.B001_SuccessResultItem = {
        id: i + 1 + '',
        name: '机构名称' + (i + 1),
        list: []
      }
      for (let j = 0; j < 10; j++) {
        item.list.push({
          id: i + 1 + '_' + j,
          name: '测试银行' + (j + 1)
        })
      }
      arr.push(item)
    }
    return arr
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
