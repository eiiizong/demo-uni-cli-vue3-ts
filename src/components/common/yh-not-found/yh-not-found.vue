<template>
  <view class="yh-not-found-wrapper">
    <div class="yh-not-found-bg">
      <image class="img" :src="imageBg" alt="" />
    </div>
    <div class="yh-not-found-text">
      <image class="img" :src="imageText" alt="" />
    </div>
  </view>
</template>

<script setup>
import imageBg from './images/bg.png'
import imageText from './images/text.png'
</script>

<style lang="scss" scoped>
.yh-not-found-wrapper {
  width: 100%;
  height: 100%;
  background-color: transparent;
  text-align: center;
}
.yh-not-found-bg {
  width: 100%;
  .img {
    width: 606rpx;
    height: 330rpx;
    margin: 0 auto;
    margin-top: 300rpx;
  }
}
.yh-not-found-text {
  width: 100%;
  .img {
    width: 304rpx;
    height: 66rpx;
    margin: 0 auto;
  }
}
</style>
