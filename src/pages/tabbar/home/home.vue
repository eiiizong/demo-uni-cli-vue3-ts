<template>
  <HomeBg class="home">
    <YhNavBar :left-arrow="false" :background-color="navBarBackgroundColor" fixed :border="false">
      <template #left>
        <img class="logo" :src="imageLogo" alt="" />
      </template>
    </YhNavBar>
    <HomeHeader />

    <div class="main">
      <HomePopularServices />
      <HomeNews />
      <HomePolicy />
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

  import type { Ref } from 'vue'
  import { ref, computed } from 'vue'
  import { onPageScroll, onHide } from '@dcloudio/uni-app'

  const scrollTimer: Ref<any> = ref(null)
  const navBarBackgroundColor = ref('transparent')

  // 监听页面滚动
  onPageScroll((e) => {
    const { scrollTop } = e
    scrollTimer.value && clearTimeout(scrollTimer.value)
    scrollTimer.value = setTimeout(() => {
      if (scrollTop > 10) {
        navBarBackgroundColor.value = '#2f54d4'
      } else {
        navBarBackgroundColor.value = 'transparent'
      }
    }, 100)
  })

  onHide(() => {
    scrollTimer.value && clearTimeout(scrollTimer.value)
  })
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
