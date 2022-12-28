<template>
  <view class="cooperative-institution">
    <InstiutionList :render-list="customData.queryResultList" v-model="tabId"></InstiutionList>
    <MyInstiution></MyInstiution>
  </view>
</template>

<script setup lang="ts">
import MyInstiution from './MyInstiution.vue'
import InstiutionList from './InstiutionList.vue'

import type { Api } from '@/server/types'
import type { Ref } from 'vue'

import { ref, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useStoreUserInfo } from '@/stores/modules'

interface CustomData {
  queryResultList: Api.AAA_01_Result[]
}

const storeUserInfo = useStoreUserInfo()

const tabId = ref('12')

const customData = reactive<CustomData>({
  queryResultList: [
    {
      id: '12',
      name: '担保公司1',
      list: [
        {
          id: '123',
          name: '测试机构',
        },
        {
          id: '1234',
          name: '测试机构',
        },
        {
          id: '1243',
          name: '测试机构',
        },
      ],
    },
    {
      id: '123',
      name: '担保公司2',
      list: [
        {
          id: '12345',
          name: '测试机构22',
        },
      ],
    },
  ],
})

onLoad((e) => {
  console.log(e)
})
</script>

<style lang="scss" scoped>
.cooperative-institution {
  width: 100%;
  padding-bottom: 208rpx;
}
</style>
