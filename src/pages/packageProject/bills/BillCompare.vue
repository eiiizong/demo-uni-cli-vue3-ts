<template>
  <view class="bill-compare">
    <BillCompareItem
      label="累计投放"
      echart-id="echart_ljtf"
      unit="户"
      color="#2661ff"
      :now-year-value="0"
      :last-year-value="0"
      :rate-value="0"
      :compare-list="[10, 20, 30, 40]" />
    <BillCompareItem
      label="存量余额"
      echart-id="echart_clye"
      unit="万元"
      color="#eca02d"
      :now-year-value="0"
      :last-year-value="0"
      :rate-value="0"
      :compare-list="[10, 20, 30, 40]" />
    <BillCompareItem
      label="补贴金额"
      echart-id="echart_btje"
      unit="万元"
      color="#009bc2"
      :now-year-value="0"
      :last-year-value="0"
      :rate-value="0"
      :compare-list="[10, 20, 30, 40]" />
    <BillCompareItem
      label="补偿金额"
      echart-id="echart_bcje"
      unit="万元"
      color="#f85c5c"
      :now-year-value="0"
      :last-year-value="0"
      :rate-value="0"
      :compare-list="[10, 20, 30, 40]" />
    <BillCompareItem
      label="投放笔数"
      echart-id="echart_tfbs"
      unit="笔"
      color="#ff0000"
      :now-year-value="0"
      :last-year-value="0"
      :rate-value="0"
      :compare-list="[10, 20, 30, 40]" />
    <BillCompareItem
      label="户均贷款"
      echart-id="echart_hjdk"
      unit="万元"
      color="#ff0000"
      :now-year-value="0"
      :last-year-value="0"
      :rate-value="0"
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
