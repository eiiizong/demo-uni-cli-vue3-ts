<template>
  <view class="org-list" :class="userInfo.userType !== '2' ? 'no-button' : ''">
    <InstiutionList :render-list="orgList" />
    <MyInstiution v-if="userInfo.userType === '2'" />
  </view>
</template>

<script setup lang="ts">
  import MyInstiution from './MyInstiution.vue'
  import InstiutionList from './InstiutionList.vue'

  import { toRefs, computed } from 'vue'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()

  const { userInfo } = toRefs(storeUserInfo)

  interface OrgList {
    id: string
    name: string
    list: any[]
  }
  const orgList = computed<OrgList[]>(() => {
    let arr = []
    for (let i = 0; i < 10; i++) {
      let item: OrgList = {
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
    return []
  })
</script>

<style lang="scss" scoped>
  .org-list {
    width: 100%;
    padding-bottom: 184rpx;
    position: relative;
    &.no-button {
      padding-bottom: $spacing;
    }
  }
</style>
