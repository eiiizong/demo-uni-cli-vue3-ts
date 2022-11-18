<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <van-button type="primary">主要按钮</van-button>
    <view class="text-area">
      <text class="title">{{ systemInfo }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStoreSystemInfo } from '@/store/modules/systemInfo'

const storeSystemInfo = useStoreSystemInfo()
const systemInfo = computed(() => storeSystemInfo.systemInfo)

setTimeout(() => {
  console.log(systemInfo, 987)
}, 1000)
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
