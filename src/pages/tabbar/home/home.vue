<template>
  <view class="home" :style="domStyle">
    <YhNavBar :left-arrow="false" background-color="transparent" fixed :border="false">
      <template #left>
        <img class="logo" :src="imageLogo" alt="" />
      </template>
    </YhNavBar>
    <HomeHeader></HomeHeader>

    <div class="main">
      <HomePopularServices></HomePopularServices>
      <HomeNews></HomeNews>
      <HomePolicy></HomePolicy>
    </div>
  </view>
</template>

<script setup lang="ts">
import imageLogo from './images/logo.png'
import imageBgHeader from './images/bg-header.png'

import YhNavBar from '@/components/yh/nav-bar/nav-bar.vue'
import HomeHeader from './HomeHeader.vue'
import HomePopularServices from './HomePopularServices.vue'
import HomeNews from './HomeNews.vue'
import HomePolicy from './HomePolicy.vue'

import { ref, computed } from 'vue'

const domStyle = computed(() => {
  let str = ''
  str += `background-image: url(${imageBgHeader}); `
  return str
})
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 428rpx;
  .logo {
    width: 176rpx;
    height: 47rpx;
    margin-left: 4rpx;
  }
  .main {
    flex: 1;
    overflow: hidden;
    background-color: #fff;
    border-top-left-radius: 48rpx;
  }
}
</style>
