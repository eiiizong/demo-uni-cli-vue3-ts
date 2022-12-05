<template>
  <view class="home">
    <HomeHeader></HomeHeader>
    <HomeSearch></HomeSearch>
    <HomePopularServices></HomePopularServices>
    <HomeNews></HomeNews>
    <HomePolicy></HomePolicy>

    <div style="positon: relative">
      123
      <YhInfo info="" dot></YhInfo>
    </div>
  </view>
</template>

<script setup lang="ts">
import HomeHeader from './HomeHeader.vue'
import HomeSearch from './HomeSearch.vue'
import HomePopularServices from './HomePopularServices.vue'
import HomeNews from './HomeNews.vue'
import HomePolicy from './HomePolicy.vue'
import YhInfo from '@/components/yh/info/info.vue'
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
