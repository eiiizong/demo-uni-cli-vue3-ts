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
      <HomeNews :render-data="customData.newsData" />
      <HomePolicy
        :render-list="customData.queryResultList"
        :current-tab-id="currentTabId"
        :is-request-over="customData.isRequestOver"
        @change="onChangeTab" />
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

  import { ref, reactive } from 'vue'
  import { onPageScroll, onHide, onLoad } from '@dcloudio/uni-app'
  import { showLoading, hideLoading } from '@/utils/uni-api'
  import { requestW017, requestW018 } from '@/server/api'

  const scrollTimer = ref<any>(null)
  const navBarBackgroundColor = ref('transparent')

  const currentTabId = ref<'0' | '1' | '2' | '3'>('0')

  // 查询条件
  const queryInfo = reactive({
    /**
     * 当前页数
     */
    pageNo: 1,
    /**
     * 每页请求条数
     */
    pageSize: 4
  })

  // 自定义数据
  const customData = reactive<{
    newsData: W017SuccessResultListItem
    /**
     * 查询结果数据
     */
    queryResultList: W017SuccessResultListItem[]
    /**
     * 是否请求完成 控制 no-data 组件在未请求完成时不显示
     */
    isRequestOver: boolean
  }>({
    newsData: { description: '无' },
    queryResultList: [],
    isRequestOver: false
  })

  /**
   * 重新查询数据时重置状态
   */
  const initData = () => {
    queryInfo.pageNo = 1
    queryInfo.pageSize = 4
    customData.queryResultList = []
    customData.isRequestOver = false
  }

  /**
   * 查询数据
   */
  const queryData = async () => {
    showLoading()
    const { pageNo, pageSize } = queryInfo
    const data = await Promise.allSettled([requestW017(pageNo, pageSize, false), requestW018(pageNo, pageSize, false)])

    const [res00, res01] = data

    if (res00.status === 'fulfilled' && res00.value) {
      const data = res00.value
      customData.newsData = data.pageBean.list[0]
    }

    if (res01.status === 'fulfilled' && res01.value) {
      const data = res01.value
      customData.queryResultList = data.pageBean.list
    }
    customData.isRequestOver = true
    hideLoading()
  }

  // tab 改变
  const onChangeTab = (id: '0' | '1' | '2' | '3') => {
    if (id === currentTabId.value) {
      return
    } else {
      currentTabId.value = id
      initData()
    }

    const { pageNo, pageSize } = queryInfo
    // 业务进展
    if (id === '0') {
      requestW018(pageNo, pageSize)
        .then((res) => {
          customData.queryResultList = res.pageBean.list
        })
        .finally(() => {
          customData.isRequestOver = true
        })
    }

    // 机构动态
    if (id === '1') {
      requestW018(pageNo, pageSize)
        .then((res) => {
          customData.queryResultList = res.pageBean.list
        })
        .finally(() => {
          customData.isRequestOver = true
        })
    }

    // 媒体聚焦
    if (id === '2') {
      requestW018(pageNo, pageSize)
        .then((res) => {
          customData.queryResultList = res.pageBean.list
        })
        .finally(() => {
          customData.isRequestOver = true
        })
    }

    // 政策解读
    if (id === '3') {
      requestW018(pageNo, pageSize)
        .then((res) => {
          customData.queryResultList = res.pageBean.list
        })
        .finally(() => {
          customData.isRequestOver = true
        })
    }
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
