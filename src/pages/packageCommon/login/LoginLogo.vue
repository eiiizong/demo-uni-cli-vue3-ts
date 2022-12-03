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
  .logo {
    width: 184rpx;
    height: 170rpx;
  }
}
</style>
