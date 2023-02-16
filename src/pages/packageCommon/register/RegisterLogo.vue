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
    padding: 52rpx 0;
    .logo {
      width: 256rpx;
      height: 240rpx;
    }
  }
</style>
