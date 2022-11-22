<template>
  <div class="login-header">
    <image class="img" :src="imageLogin" />
    <div class="text">请您进行人脸识别身份验证</div>
    <div class="desc">信息将与当前微信绑定（用于身份验证）</div>
  </div>
</template>
<script setup>
import imageLogin from './images/01.png'
</script>

<style lang="scss" scoped>
.login-header {
  padding-top: 26px;
  padding-bottom: 40px;
  text-align: center;
  color: $color;
  font-size: 32rpx;
  line-height: 1;
  font-weight: 700;
  .img {
    width: 190rpx;
    height: 174rpx;
    margin: 0 auto;
  }
  .text {
    padding-top: 22rpx;
  }
  .desc {
    font-size: 26rpx;
    font-weight: 500;
    padding-top: 34rpx;
    color: $color-placeholder;
  }
}
</style>
