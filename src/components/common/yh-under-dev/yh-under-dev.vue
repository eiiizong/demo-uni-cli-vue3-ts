<template>
  <view class="yh-under-dev-wrapper">
    <div class="yh-under-dev-bg">
      <image class="img" :src="imageBg" alt="" />
    </div>
    <div class="yh-under-dev-text">
      <image class="img" :src="imageText" alt="" />
    </div>
  </view>
</template>

<script setup>
import imageBg from './images/bg.png'
import imageText from './images/text.png'
</script>

<style lang="scss" scoped>
.yh-under-dev-wrapper {
  width: 100%;
  height: 100%;
  background-color: transparent;
  text-align: center;
}
.yh-under-dev-bg {
  width: 100%;
  .img {
    width: 606rpx;
    height: 564rpx;
    margin: 0 auto;
    margin-top: 200rpx;
  }
}
.yh-under-dev-text {
  width: 100%;
  .img {
    width: 354rpx;
    height: 72rpx;
    margin: 0 auto;
  }
}
</style>
