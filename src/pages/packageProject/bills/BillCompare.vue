<template>
  <view class="bill-compare">
    <BillCompareItem
      label="投放户数"
      echart-id="echart_ljtf"
      unit="户"
      color="#2661ff"
      :now-year-value="renderData.totalnumber || 0"
      :last-year-value="renderData.lastyeartotalnumber || 0"
      :rate-value="0"
      :compare-list="[10, 20, 30, 40]" />
    <BillCompareItem
      label="存量余额"
      echart-id="echart_clye"
      unit="万元"
      color="#eca02d"
      :now-year-value="renderData.leavemoney || 0"
      :last-year-value="renderData.lastyearleavemoney || 0"
      :rate-value="renderData.leavemoneyrate || 0"
      :compare-list="[10, 20, 30, 40]" />
    <BillCompareItem
      label="补贴金额"
      echart-id="echart_btje"
      unit="万元"
      color="#009bc2"
      :now-year-value="renderData.butiejine || 0"
      :last-year-value="renderData.lastyearbutiejine || 0"
      :rate-value="renderData.butiejinerate || 0"
      :compare-list="[10, 20, 30, 40]" />
    <BillCompareItem
      label="补偿金额"
      echart-id="echart_bcje"
      unit="万元"
      color="#f85c5c"
      :now-year-value="renderData.buchangjine || 0"
      :last-year-value="renderData.lastyearbuchangjine || 0"
      :rate-value="renderData.buchangjinerate || 0"
      :compare-list="[10, 20, 30, 40]" />
    <BillCompareItem
      label="投放笔数"
      echart-id="echart_tfbs"
      unit="笔"
      color="#a288ff"
      :now-year-value="renderData.totaltime || 0"
      :last-year-value="renderData.lastyeartotaltime || 0"
      :rate-value="renderData.totaltimerate || 0"
      :compare-list="[10, 20, 30, 40]" />
    <BillCompareItem
      label="户均贷款"
      echart-id="echart_hjdk"
      unit="万元"
      color="#1ed097"
      :now-year-value="renderData.averagemoey || 0"
      :last-year-value="renderData.lastyearaveragemoey || 0"
      :rate-value="renderData.averagemoeyrate || 0"
      :compare-list="[10, 20, 30, 40]" />
  </view>
</template>

<script setup lang="ts">
  import BillCompareItem from './BillCompareItem.vue'

  import type { PropType } from 'vue'
  import type { W006SuccessResult } from '@/server/types/api'

  const props = defineProps({
    /**
     * 渲染数据
     */
    renderData: {
      type: Object as PropType<W006SuccessResult>,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .bill-compare {
    width: 100%;
    padding: 0 $spacing;
    padding-top: 24rpx;
  }
</style>
