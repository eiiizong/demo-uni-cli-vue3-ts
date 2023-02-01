<template>
  <view class="org-basic-info">
    <div class="title">详情信息</div>
    <DetailsInfo :render-data="orgInfo" />
    <div class="title">机构组织</div>
    <OrgInfo :render-data="orgInfo" />
  </view>
</template>

<script setup lang="ts">
  import DetailsInfo from './DetailsInfo.vue'
  import OrgInfo from './OrgInfo.vue'

  import { ref } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'

  const orgId = ref('')
  const orgInfo = ref({})

  onLoad((e) => {
    const { id } = e
    if (id) {
      orgId.value = id
    }
  })
</script>

<style lang="scss" scoped>
  .org-basic-info {
    width: 100%;
    padding: $spacing;
    padding-top: 0;
    .title {
      font-size: 32rpx;
      color: #333;
      line-height: 44rpx;
      padding: $spacing 0 14rpx;
    }
  }
</style>
