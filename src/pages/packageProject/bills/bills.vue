<template>
  <BillBg class="bills">
    <BillHearder :backgorund-color="navBarBackgroundColor" :color="color" />
    <div class="main">
      <BillCompare />
      <BillTotal />
      <BillFooter />
    </div>
  </BillBg>
</template>

<script setup lang="ts">
  import BillBg from './BillBg.vue'
  import BillHearder from './BillHearder.vue'
  import BillCompare from './BillCompare.vue'
  import BillTotal from './BillTotal.vue'
  import BillFooter from './BillFooter.vue'

  import type { W006SuccessResult } from '@/server/types/api'
  import { ref } from 'vue'
  import { onLoad, onPageScroll, onHide } from '@dcloudio/uni-app'
  import { showLoading, hideLoading } from '@/utils/uni-api'
  import { requestW006 } from '@/server/api'

  const navBarBackgroundColor = ref('transparent')
  const color = ref('#ffffff')
  const scrollTimer = ref<any>(null)
  /**
   * 一本帐数据
   */
  const billData = ref<W006SuccessResult>({})

  //查询数据
  const queryData = async () => {
    showLoading()

    const data = await Promise.allSettled([
      // 一本账统计
      requestW006(false)
    ])

    const [res00] = data

    if (res00.status === 'fulfilled' && res00.value) {
      billData.value = { ...res00.value }
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
        navBarBackgroundColor.value = '#395fce'
      } else {
        navBarBackgroundColor.value = 'transparent'
      }
    }, 100)
  })
</script>

<style lang="scss" scoped>
  .bills {
    width: 100%;
    height: 100%;
  }
  .main {
    flex: 1;
    overflow: hidden;
    background-color: #fff;
    border-top-right-radius: 48rpx;
    border-top-left-radius: 48rpx;
  }
</style>
