<template>
  <view class="home-news">
    <div class="iconimg">
      <img :src="imageBgNews" alt="" class="bg" />
      <div class="content">头条</div>
    </div>
    <div class="text">最新！成都中小担：全力实势产业建圈强链链最新！成都中小担：全力实势产业建圈强链链...</div>
    <YhIcon name="arrow-right" size="24rpx" />
  </view>
</template>

<script setup lang="ts">
  import imageBgNews from './images/bg-news.png'
  import YhIcon from '@/components/yh/icon/icon.vue'

  import { computed } from 'vue'
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
      font-size: 24rpx;
      color: #fff;
      margin-right: 20rpx;
      position: relative;
      .bg {
        width: 100%;
        height: 100%;
      }
      .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .text {
      flex: 1;
      overflow: hidden;
      @include textOverflow();
      margin-right: 10rpx;
    }
  }
</style>
