<template>
  <HomeBg class="home">
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
  </HomeBg>
</template>

<script setup lang="ts">
import imageLogo from './images/logo.png'

import YhNavBar from '@/components/yh/nav-bar/nav-bar.vue'
import HomeBg from './HomeBg.vue'
import HomeHeader from './HomeHeader.vue'
import HomePopularServices from './HomePopularServices.vue'
import HomeNews from './HomeNews.vue'
import HomePolicy from './HomePolicy.vue'

import { ref, computed } from 'vue'
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
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
</style>
