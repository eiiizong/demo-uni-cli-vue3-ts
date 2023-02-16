<template>
  <div class="register-logo">
    <img class="logo" :src="imageLogo" alt="" />
  </div>
</template>
<script setup lang="ts">
  import imageLogo from './images/logo.png'
</script>

<style lang="scss" scoped>
  .register-logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 100rpx;
    padding-bottom: 100rpx;
    .logo {
      width: 255rpx;
      height: 240rpx;
    }
  }
</style>
