<template>
  <view class="process-header">
    <img :src="imageBg" alt="" class="img" />
    <div class="con">
      <div>流程一览</div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import imageBg from './images/bg.png'
</script>

<style lang="scss" scoped>
  .process-header {
    width: 100%;
    position: relative;
    .img {
      width: 100%;
      height: 220rpx;
    }
    .con {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 46rpx;
      padding-top: 96rpx;
      padding-left: 42rpx;
      font-weight: 700;
      color: #474c5c;
    }
  }
</style>
