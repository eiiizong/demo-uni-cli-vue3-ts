<template>
  <view class="bill-compare">
    <BillCompareItem
      echart-id="echart_ljtf"
      color="#2661ff"
      label="投放金额"
      :label-value="renderData.totalnumber || 0"
      label-value-unit="万元"
      other-label01="投放户数"
      :other-label01-value="renderData.totalnumber || 0"
      other-label01-value-unit="户"
      other-label02="投放笔数"
      :other-label02-value="renderData.totalnumber || 0"
      other-label02-value-unit="笔"
      :rate-value="0"
      :compare-list="renderData.totalnumberValues || []"
      :x-axis="xAxis" />
    <BillCompareItem
      echart-id="echart_clye"
      color="#eca02d"
      label="补贴金额"
      :label-value="renderData.leavemoney || 0"
      label-value-unit="万元"
      other-label01="补贴笔数"
      :other-label01-value="renderData.totalnumber || 0"
      other-label01-value-unit="笔"
      other-label02="补贴机构数"
      :other-label02-value="renderData.totalnumber || 0"
      other-label02-value-unit="家"
      :rate-value="renderData.leavemoneyrate || 0"
      :compare-list="renderData.leavemoneyValues || []"
      :x-axis="xAxis" />
    <BillCompareItem
      echart-id="echart_btje"
      color="#009bc2"
      label="补偿金额"
      :label-value="renderData.butiejine || 0"
      label-value-unit="万元"
      other-label01="补偿笔数"
      :other-label01-value="renderData.totalnumber || 0"
      other-label01-value-unit="笔"
      other-label02="补偿机构数"
      :other-label02-value="renderData.totalnumber || 0"
      other-label02-value-unit="家"
      :rate-value="renderData.butiejinerate || 0"
      :compare-list="renderData.butiejineValues || []"
      :x-axis="xAxis" />
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
    },
    /**
     * x 轴 渲染数据
     */
    xAxis: {
      type: Object as PropType<string[]>,
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
