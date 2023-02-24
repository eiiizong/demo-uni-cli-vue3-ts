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

  // 格式化金额
  const formatterAmount = (data: W007SuccessResult, key: 'month' | 'quarter' | 'year' | 'total') => {
    const maxNum = 100000
    if (data.beiAn) {
      let { beiAnJinE } = data.beiAn
      // 如果备案金额大于百亿万
      if (beiAnJinE > maxNum) {
        let num = (beiAnJinE / 100).toFixed(2)
        data.beiAn.beiAnJinE = Number(num)
        data.beiAn.beiAnJinEUnit = '百万元'
      } else {
        data.beiAn.beiAnJinEUnit = '万元'
      }
    }

    if (data.buTie) {
      let { butiejine } = data.buTie
      // 如果补贴金额大于百亿
      if (butiejine > maxNum) {
        let num = (butiejine / 10000).toFixed(2)
        data.buTie.butiejine = Number(num)
        data.buTie.butiejineUnit = '万元'
      } else {
        data.buTie.butiejineUnit = '元'
      }
    }

    if (data.buChang) {
      let { buchangjine } = data.buChang
      // 如果补偿金额大于百亿
      if (buchangjine > maxNum) {
        let num = (buchangjine / 10000).toFixed(2)
        data.buChang.buchangjine = Number(num)
        data.buChang.buchangjineUnit = '万元'
      } else {
        data.buChang.buchangjineUnit = '元'
      }
    }

    compareData[key] = { ...data }
  }
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
      const data = res01.value
      formatterAmount(data, 'month')
    }
    if (res02.status === 'fulfilled' && res02.value) {
      const data = res02.value
      formatterAmount(data, 'quarter')
    }
    if (res03.status === 'fulfilled' && res03.value) {
      const data = res03.value
      formatterAmount(data, 'year')
    }
    if (res04.status === 'fulfilled' && res04.value) {
      const data = res04.value
      formatterAmount(data, 'total')
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
