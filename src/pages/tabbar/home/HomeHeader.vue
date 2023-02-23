<template>
  <view class="home-header">
    <HomeHeaderAvatar />
    <!-- <HomeSearch /> -->
  </view>
</template>

<script setup lang="ts">
  import HomeHeaderAvatar from './HomeHeaderAvatar.vue'
  // import HomeSearch from './HomeSearch.vue'
</script>

<style lang="scss" scoped>
  .home-header {
    width: 100%;
    position: relative;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 36rpx 0;
  }
</style>
