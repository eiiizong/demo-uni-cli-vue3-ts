<template>
  <div class="login-logo">
    <img class="logo" :src="imageLogo" alt="" />
  </div>
</template>
<script setup lang="ts">
  import imageLogo from './images/logo.png'
</script>

<style lang="scss" scoped>
  .login-logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 194rpx;
    padding-bottom: 280rpx;
    .logo {
      width: 255rpx;
      height: 240rpx;
    }
  }
</style>
