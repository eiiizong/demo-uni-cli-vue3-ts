<template>
  <view class="bill-bg">
    <img :src="imageBgHeader" alt="" class="bg" />
    <div class="content">
      <slot></slot>
    </div>
  </view>
</template>

<script setup lang="ts">
import imageBgHeader from './images/bg-header.png'
</script>

<style lang="scss" scoped>
$image-height: 510rpx;
.bill-bg {
  width: 100%;
  min-height: 100%;
  position: relative;
  .bg {
    width: 100%;
    height: $image-height;
  }
  .content {
    width: 100%;
    min-height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
