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
      <HomeNews :render-data="newsData" />
      <HomePolicy :render-list="otherNewsData" />
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

  import { W017SuccessResultListItem } from '@/server/types/api'

  import { ref } from 'vue'
  import { onPageScroll, onHide, onLoad } from '@dcloudio/uni-app'
  import { showLoading, hideLoading } from '@/utils/uni-api'
  import { requestW017, requestW018 } from '@/server/api'

  const scrollTimer = ref<any>(null)
  const navBarBackgroundColor = ref('transparent')

  const newsData = ref<W017SuccessResultListItem>({})
  const otherNewsData = ref<W017SuccessResultListItem[]>([])

  const queryData = async () => {
    showLoading()

    const data = await Promise.allSettled([requestW017(1, 1, false), requestW018(1, 3, false)])

    const [res00, res01] = data

    if (res00.status === 'fulfilled' && res00.value) {
      const data = res00.value
      newsData.value = data[0]
    }

    if (res01.status === 'fulfilled' && res01.value) {
      const data = res01.value
      otherNewsData.value = data
    }

    hideLoading()
  }

  onLoad(() => {
    queryData()
  })

  onHide(() => {
    scrollTimer.value && clearTimeout(scrollTimer.value)
  })

  // 监听页面滚动
  onPageScroll((e) => {
    const { scrollTop } = e
    scrollTimer.value && clearTimeout(scrollTimer.value)
    scrollTimer.value = setTimeout(() => {
      if (scrollTop > 10) {
        navBarBackgroundColor.value = '#081a4d'
      } else {
        navBarBackgroundColor.value = 'transparent'
      }
    }, 100)
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
    border-top-left-radius: 48rpx;
  }
</style>
