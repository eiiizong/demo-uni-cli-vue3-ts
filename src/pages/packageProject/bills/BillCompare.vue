<template>
  <view class="bill-compare">
    <BillCompareTabs :current-tab-id="currentTabId" @click="currentTabId = $event" />
    <swiper class="swiper" :current="Number(currentTabId)" @change="onChangeSwiper">
      <swiper-item class="swiper-item">
        <BillCompareItem
          echart-id="echart_tfje_month"
          color="#2661ff"
          label="投放金额"
          :label-value="renderDataMonth.beiAn?.beiAnJinE || 0"
          :label-value-unit="renderDataMonth.beiAn?.beiAnJinEUnit || '万元'"
          other-label01="投放户数"
          :other-label01-value="renderDataMonth.beiAn?.beiAnHuShu || 0"
          other-label01-value-unit="户"
          other-label02="投放笔数"
          :other-label02-value="renderDataMonth.beiAn?.beiAnBiShu || 0"
          other-label02-value-unit="笔"
          :rate-value="renderDataMonth.beiAn?.beianrate"
          :compare-list="renderDataMonth.beiAn?.yAxisData"
          :x-axis="renderDataMonth.beiAn?.xAxisData" />
        <BillCompareItem
          echart-id="echart_btje_month"
          color="#eca02d"
          label="补贴金额"
          :label-value="renderDataMonth.buTie?.butiejine || 0"
          :label-value-unit="renderDataMonth.buTie?.butiejineUnit || '元'"
          other-label01="补贴笔数"
          :other-label01-value="renderDataMonth.buTie?.butiebishu || 0"
          other-label01-value-unit="笔"
          other-label02="补贴机构数"
          :other-label02-value="renderDataMonth.buTie?.butiejigoushu || 0"
          other-label02-value-unit="家"
          :rate-value="renderDataMonth.buTie?.butierate"
          :compare-list="renderDataMonth.buTie?.yAxisData"
          :x-axis="renderDataMonth.buTie?.xAxisData" />
        <BillCompareItem
          echart-id="echart_bcje_month"
          color="#009bc2"
          label="补偿金额"
          :label-value="renderDataMonth.buChang?.buchangjine || 0"
          :label-value-unit="renderDataMonth.buChang?.buchangjineUnit || '元'"
          other-label01="补偿笔数"
          :other-label01-value="renderDataMonth.buChang?.buchangbishu || 0"
          other-label01-value-unit="笔"
          other-label02="补偿机构数"
          :other-label02-value="renderDataMonth.buChang?.buchangjigoushu || 0"
          other-label02-value-unit="家"
          :rate-value="renderDataMonth.buChang?.buchangrate"
          :compare-list="renderDataMonth.buChang?.yAxisData"
          :x-axis="renderDataMonth.buChang?.xAxisData" />
      </swiper-item>
      <swiper-item class="swiper-item">
        <BillCompareItem
          echart-id="echart_tfje_jd"
          color="#2661ff"
          label="投放金额"
          :label-value="renderDataQuarter.beiAn?.beiAnJinE || 0"
          :label-value-unit="renderDataQuarter.beiAn?.beiAnJinEUnit || '万元'"
          other-label01="投放户数"
          :other-label01-value="renderDataQuarter.beiAn?.beiAnHuShu || 0"
          other-label01-value-unit="户"
          other-label02="投放笔数"
          :other-label02-value="renderDataQuarter.beiAn?.beiAnBiShu || 0"
          other-label02-value-unit="笔"
          :rate-value="renderDataQuarter.beiAn?.beianrate"
          :compare-list="renderDataQuarter.beiAn?.yAxisData"
          :x-axis="renderDataQuarter.beiAn?.xAxisData" />
        <BillCompareItem
          echart-id="echart_btje_jd"
          color="#eca02d"
          label="补贴金额"
          :label-value="renderDataQuarter.buTie?.butiejine || 0"
          :label-value-unit="renderDataQuarter.buTie?.butiejineUnit || '元'"
          other-label01="补贴笔数"
          :other-label01-value="renderDataQuarter.buTie?.butiebishu || 0"
          other-label01-value-unit="笔"
          other-label02="补贴机构数"
          :other-label02-value="renderDataQuarter.buTie?.butiejigoushu || 0"
          other-label02-value-unit="家"
          :rate-value="renderDataQuarter.buTie?.butierate"
          :compare-list="renderDataQuarter.buTie?.yAxisData"
          :x-axis="renderDataQuarter.buTie?.xAxisData" />
        <BillCompareItem
          echart-id="echart_bcje_jd"
          color="#009bc2"
          label="补偿金额"
          :label-value="renderDataQuarter.buChang?.buchangjine || 0"
          :label-value-unit="renderDataQuarter.buChang?.buchangjineUnit || '元'"
          other-label01="补偿笔数"
          :other-label01-value="renderDataQuarter.buChang?.buchangbishu || 0"
          other-label01-value-unit="笔"
          other-label02="补偿机构数"
          :other-label02-value="renderDataQuarter.buChang?.buchangjigoushu || 0"
          other-label02-value-unit="家"
          :rate-value="renderDataQuarter.buChang?.buchangrate"
          :compare-list="renderDataQuarter.buChang?.yAxisData"
          :x-axis="renderDataQuarter.buChang?.xAxisData" />
      </swiper-item>
      <swiper-item class="swiper-item">
        <BillCompareItem
          echart-id="echart_tfje_year"
          color="#2661ff"
          label="投放金额"
          :label-value="renderDataYear.beiAn?.beiAnJinE || 0"
          :label-value-unit="renderDataYear.beiAn?.beiAnJinEUnit || '万元'"
          other-label01="投放户数"
          :other-label01-value="renderDataYear.beiAn?.beiAnHuShu || 0"
          other-label01-value-unit="户"
          other-label02="投放笔数"
          :other-label02-value="renderDataYear.beiAn?.beiAnBiShu || 0"
          other-label02-value-unit="笔"
          :rate-value="renderDataYear.beiAn?.beianrate"
          :compare-list="renderDataYear.beiAn?.yAxisData"
          :x-axis="renderDataYear.beiAn?.xAxisData" />
        <BillCompareItem
          echart-id="echart_btje_year"
          color="#eca02d"
          label="补贴金额"
          :label-value="renderDataYear.buTie?.butiejine || 0"
          :label-value-unit="renderDataYear.buTie?.butiejineUnit || '元'"
          other-label01="补贴笔数"
          :other-label01-value="renderDataYear.buTie?.butiebishu || 0"
          other-label01-value-unit="笔"
          other-label02="补贴机构数"
          :other-label02-value="renderDataYear.buTie?.butiejigoushu || 0"
          other-label02-value-unit="家"
          :rate-value="renderDataYear.buTie?.butierate"
          :compare-list="renderDataYear.buTie?.yAxisData"
          :x-axis="renderDataYear.buTie?.xAxisData" />
        <BillCompareItem
          echart-id="echart_bcje_year"
          color="#009bc2"
          label="补偿金额"
          :label-value="renderDataYear.buChang?.buchangjine || 0"
          :label-value-unit="renderDataYear.buChang?.buchangjineUnit || '元'"
          other-label01="补偿笔数"
          :other-label01-value="renderDataYear.buChang?.buchangbishu || 0"
          other-label01-value-unit="笔"
          other-label02="补偿机构数"
          :other-label02-value="renderDataYear.buChang?.buchangjigoushu || 0"
          other-label02-value-unit="家"
          :rate-value="renderDataYear.buChang?.buchangrate"
          :compare-list="renderDataYear.buChang?.yAxisData"
          :x-axis="renderDataYear.buChang?.xAxisData" />
      </swiper-item>
      <swiper-item class="swiper-item">
        <BillCompareItem
          echart-id="echart_tfje_lj"
          color="#2661ff"
          label="投放金额"
          :label-value="renderDataTotal.beiAn?.beiAnJinE || 0"
          :label-value-unit="renderDataTotal.buTie?.butiejineUnit || '元'"
          other-label01="投放户数"
          :other-label01-value="renderDataTotal.beiAn?.beiAnHuShu || 0"
          other-label01-value-unit="户"
          other-label02="投放笔数"
          :other-label02-value="renderDataTotal.beiAn?.beiAnBiShu || 0"
          other-label02-value-unit="笔"
          :is-show-rate="false"
          :compare-list="renderDataTotal.beiAn?.yAxisData"
          :x-axis="renderDataTotal.beiAn?.xAxisData" />
        <BillCompareItem
          echart-id="echart_btje_lj"
          color="#eca02d"
          label="补贴金额"
          :label-value="renderDataTotal.buTie?.butiejine || 0"
          :label-value-unit="renderDataTotal.buTie?.butiejineUnit || '元'"
          other-label01="补贴笔数"
          :other-label01-value="renderDataTotal.buTie?.butiebishu || 0"
          other-label01-value-unit="笔"
          other-label02="补贴机构数"
          :other-label02-value="renderDataTotal.buTie?.butiejigoushu || 0"
          other-label02-value-unit="家"
          :is-show-rate="false"
          :compare-list="renderDataTotal.buTie?.yAxisData"
          :x-axis="renderDataTotal.buTie?.xAxisData" />
        <BillCompareItem
          echart-id="echart_bcje_lj"
          color="#009bc2"
          label="补偿金额"
          :label-value="renderDataTotal.buChang?.buchangjine || 0"
          :label-value-unit="renderDataTotal.buChang?.buchangjineUnit || '元'"
          other-label01="补偿笔数"
          :other-label01-value="renderDataTotal.buChang?.buchangbishu || 0"
          other-label01-value-unit="笔"
          other-label02="补偿机构数"
          :other-label02-value="renderDataTotal.buChang?.buchangjigoushu || 0"
          other-label02-value-unit="家"
          :is-show-rate="false"
          :compare-list="renderDataTotal.buChang?.yAxisData"
          :x-axis="renderDataTotal.buChang?.xAxisData" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
  import BillCompareTabs from './BillCompareTabs.vue'
  import BillCompareItem from './BillCompareItem.vue'

  import type { PropType } from 'vue'
  import type { W007SuccessResult } from '@/server/types/api'
  import { ref } from 'vue'

  const props = defineProps({
    /**
     * 渲染数据 当月
     */
    renderDataMonth: {
      type: Object as PropType<W007SuccessResult>,
      required: true
    },
    /**
     * 渲染数据 当年
     */
    renderDataYear: {
      type: Object as PropType<W007SuccessResult>,
      required: true
    },
    /**
     * 渲染数据 当季度
     */
    renderDataQuarter: {
      type: Object as PropType<W007SuccessResult>,
      required: true
    },
    /**
     * 渲染数据 累计
     */
    renderDataTotal: {
      type: Object as PropType<W007SuccessResult>,
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

  const currentTabId = ref('0')

  const onChangeSwiper = (event: WechatMiniprogram.SwiperChange) => {
    const { current } = event.detail
    currentTabId.value = current + ''
  }
</script>

<style lang="scss" scoped>
  .bill-compare {
    width: 100%;
    .swiper {
      width: 100%;
      height: 316rpx * 3 - 2rpx;
      .swiper-item {
        padding: 0 $spacing;
      }
    }
  }
</style>
