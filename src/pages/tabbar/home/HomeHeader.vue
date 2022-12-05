<template>
  <view class="home-header">
    <div class="avatar">
      <HomeHeaderAvatar></HomeHeaderAvatar>
    </div>
    <div class="weather">
      <HomeHeaderWeather></HomeHeaderWeather>
    </div>
    <div class="statics">
      <HomeHeaderToDayStatistics></HomeHeaderToDayStatistics>
    </div>
  </view>
</template>

<script setup lang="ts">
import HomeHeaderAvatar from './HomeHeaderAvatar.vue'
import HomeHeaderToDayStatistics from './HomeHeaderToDayStatistics.vue'
import HomeHeaderWeather from './HomeHeaderWeather.vue'
</script>

<style lang="scss" scoped>
.home-header {
  width: 100%;
}
</style>
