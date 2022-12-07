<template>
  <view class="home-header">
    <div class="wrapper">
      <div class="avatar">
        <HomeHeaderAvatar></HomeHeaderAvatar>
      </div>
      <div class="weather">
        <HomeHeaderWeather></HomeHeaderWeather>
      </div>
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
  position: relative;
  padding-bottom: 100px;
  background-color: $color-primary;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .statics {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
