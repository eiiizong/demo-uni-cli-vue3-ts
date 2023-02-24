<template>
  <BillBg class="bills">
    <BillHearder :backgorund-color="navBarBackgroundColor" :color="color" :render-data="billData" />
    <div class="main">
      <BillCompare
        :render-data-month="compareData.month"
        :render-data-quarter="compareData.quarter"
        :render-data-total="compareData.total"
        :render-data-year="compareData.year"
        :x-axis="echartXAxis" />
      <!-- <BillTotal :render-data="billData" /> -->
      <BillFooter :render-data="billData" />
    </div>
  </BillBg>
</template>

<script setup lang="ts">
  import BillBg from './BillBg.vue'
  import BillHearder from './BillHearder.vue'
  import BillCompare from './BillCompare.vue'
  // import BillTotal from './BillTotal.vue'
  import BillFooter from './BillFooter.vue'

  import type { W006SuccessResult, W007SuccessResult } from '@/server/types/api'

  import { ref, reactive } from 'vue'
  import { onLoad, onPageScroll, onHide } from '@dcloudio/uni-app'
  import { showLoading, hideLoading } from '@/utils/uni-api'
  import { requestW006, requestW007 } from '@/server/api'

  const navBarBackgroundColor = ref('transparent')
  const color = ref('#ffffff')
  const scrollTimer = ref<any>(null)
  /**
   * 一本帐数据
   */
  const billData = ref<W006SuccessResult>({})
  /**
   * 一本帐对比数据
   */
  const compareData = reactive<{
    month: W007SuccessResult
    quarter: W007SuccessResult
    year: W007SuccessResult
    total: W007SuccessResult
  }>({
    month: {},
    quarter: {},
    year: {},
    total: {}
  })
  const echartXAxis = ref<string[]>([])

  // 查询数据
  const queryData = async () => {
    showLoading()

    const data = await Promise.allSettled([
      // 一本账统计
      requestW006(false),
      // 一本账对比数据
      requestW007('0', false),
      requestW007('1', false),
      requestW007('2', false),
      requestW007('3', false)
    ])

    const [res00, res01, res02, res03, res04] = data

    if (res00.status === 'fulfilled' && res00.value) {
      billData.value = { ...res00.value }
    }

    if (res01.status === 'fulfilled' && res01.value) {
      compareData.month = { ...res01.value }
    }
    if (res02.status === 'fulfilled' && res02.value) {
      compareData.quarter = { ...res02.value }
    }
    if (res03.status === 'fulfilled' && res03.value) {
      compareData.year = { ...res03.value }
    }
    if (res04.status === 'fulfilled' && res04.value) {
      compareData.total = { ...res04.value }
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
