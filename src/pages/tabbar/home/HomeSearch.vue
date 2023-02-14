<template>
  <view class="home-search" @click="onClick">
    <YhIcon name="search" size="26rpx" />
    <div class="placeholder">搜政策</div>
  </view>
</template>

<script setup lang="ts">
  import YhIcon from '@/components/yh/icon/icon.vue'
  import { navigateTo } from '@/utils/uni-api'

  // 路由跳转
  const onClick = () => {
    navigateTo('policy-list', 'packagePolicy', { focus: true })
  }
</script>

<style lang="scss" scoped>
  .home-search {
    width: 100%;
    height: 68rpx;
    background-color: rgba($primary, 0.4);
    border-top-left-radius: 34px;
    border-bottom-left-radius: 34px;
    display: flex;
    align-items: center;
    color: #8ee0ff;
    padding-left: 24rpx;
    padding-right: 32rpx;
    .placeholder {
      font-size: 24rpx;
      color: rgba(#8ee0ff, 0.8);
      padding-left: 12rpx;
    }
  }
</style>
