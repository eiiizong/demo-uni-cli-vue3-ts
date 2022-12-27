<template>
  <view class="home-news">
    <div class="iconimg" :style="iconimgStyle">头条</div>
    <div class="text">
      最新！成都中小担：全力实势产业建圈强链链最新！成都中小担：全力实势产业建圈强链链...
    </div>
    <YhIcon name="arrow-right" size="24rpx"></YhIcon>
  </view>
</template>

<script setup lang="ts">
import imageBgNews from './images/bg-news.png'
import YhIcon from '@/components/yh/icon/icon.vue'

import { computed } from 'vue'

const iconimgStyle = computed(() => {
  return `background-image: url(${imageBgNews}); `
})
</script>

<style lang="scss" scoped>
.home-news {
  width: 100%;
  height: 80rpx;
  background-color: #fff4d8;
  margin-top: 4rpx;
  display: flex;
  align-items: center;
  padding: 0 40rpx;
  color: #f68500;
  font-size: 26rpx;
  .iconimg {
    width: 74rpx;
    height: 40rpx;
    display: flex;
    font-size: 24rpx;
    color: #fff;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    margin-right: 20rpx;
  }
  .text {
    flex: 1;
    overflow: hidden;
    @include textOverflow();
    margin-right: 10rpx;
  }
}
</style>
