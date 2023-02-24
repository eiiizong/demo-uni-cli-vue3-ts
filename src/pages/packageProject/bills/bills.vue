<template>
  <BillBg class="bills">
    <BillHearder :backgorund-color="navBarBackgroundColor" :color="color" :render-data="billData" />
    <div class="main">
      <BillCompare :render-data="billData" :x-axis="echartXAxis" />
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

  import type { W006SuccessResult } from '@/server/types/api'

  import { ref } from 'vue'
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

  const echartXAxis = ref<string[]>([])

  // 查询数据
  const queryData = async () => {
    showLoading()

    const data = await Promise.allSettled([
      // 一本账统计
      requestW006(false),
      requestW007(false)
    ])

    const [res00, res01] = data

    if (res00.status === 'fulfilled' && res00.value) {
      billData.value = { ...res00.value }
    }

    if (res01.status === 'fulfilled' && res01.value) {
      let xAxis: string[] = []
      let arr1: number[] = []
      let arr2: number[] = []
      let arr3: number[] = []
      let arr4: number[] = []
      let arr5: number[] = []
      let arr6: number[] = []
      for (let i = 0, len = res01.value.length; i < len; i++) {
        const item = res01.value[i]
        arr1.push(item.totalnumber)
        arr2.push(item.totaltime)
        arr3.push(item.buchangjine)
        arr4.push(item.butiejine)
        arr5.push(item.averagemoney)
        arr6.push(item.leavemoney)
        xAxis.push(item.month)
      }
      billData.value.totalnumberValues = arr1
      billData.value.totaltimeValues = arr2
      billData.value.buchangjineValues = arr3
      billData.value.butiejineValues = arr4
      billData.value.averagemoeyValues = arr5
      billData.value.leavemoneyValues = arr6
      echartXAxis.value = xAxis
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
