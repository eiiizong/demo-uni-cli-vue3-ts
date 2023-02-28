<template>
  <div class="compare-item">
    <div class="left">
      <div class="name">{{ label }}</div>
      <div class="value" :style="{ color: color }">
        <div class="val Impact">{{ labelValue }}</div>
        <div class="unit">{{ labelValueUnit }}</div>
      </div>
      <div class="cell">
        <div class="key">{{ otherLabel01 }}</div>
        <div class="val Impact">{{ otherLabel01Value }}</div>
        <div class="unit">{{ otherLabel01ValueUnit }}</div>
      </div>
      <div class="cell">
        <div class="key">{{ otherLabel02 }}</div>
        <div class="val Impact">{{ otherLabel02Value }}</div>
        <div class="unit">{{ otherLabel02ValueUnit }}</div>
      </div>
    </div>
    <div class="right">
      <div v-if="isShowRate" class="compare-result">
        <img v-if="isAdd" class="img" :src="imageIconUp" alt="" />
        <img v-else class="img" :src="imageIconDown" alt="" />
        <div class="value Impact">{{ _rateValue }}%</div>
      </div>
      <div class="echart">
        <EchartLine01 :render-list="compareList" :echart-id="echartId" :color="color" :x-axis="xAxis" :label="label" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageIconDown from './images/icon-down.png'
  import imageIconUp from './images/icon-up.png'

  import type { PropType } from 'vue'

  import { computed } from 'vue'

  import EchartLine01 from './EchartLine01.vue'

  const props = defineProps({
    /**
     * 统计项的名称
     */
    label: {
      type: String,
      required: true
    },
    /**
     * 统计项的名称的值
     */
    labelValue: {
      type: Number,
      default: () => 0
    },
    /**
     * 统计项的名称的值的单位
     */
    labelValueUnit: {
      type: String,
      default: () => ''
    },
    /**
     * 其他统计项的名称01
     */
    otherLabel01: {
      type: String,
      required: true
    },
    /**
     * 其他统计项的名称的值01
     */
    otherLabel01Value: {
      type: Number,
      default: () => 0
    },
    /**
     * 其他统计项的名称的值的单位01
     */
    otherLabel01ValueUnit: {
      type: String,
      default: () => ''
    },
    /**
     * 其他统计项的名称02
     */
    otherLabel02: {
      type: String,
      required: true
    },
    /**
     * 其他统计项的名称的值02
     */
    otherLabel02Value: {
      type: Number,
      default: () => 0
    },
    /**
     * 其他统计项的名称的值的单位02
     */
    otherLabel02ValueUnit: {
      type: String,
      default: () => ''
    },

    /**
     * x 轴数据
     */
    xAxis: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    /**
     * echart id
     */
    echartId: {
      type: String,
      required: true
    },
    /**
     * 展示颜色
     */
    color: {
      type: String,
      default: () => '#2661ff'
    },

    /**
     * 是否显示比例
     */
    isShowRate: {
      type: Boolean,
      default: () => true
    },
    /**
     * 同比结果
     */
    rateValue: {
      type: Number,
      default: () => 0
    },
    /**
     * 折线图数据
     */
    compareList: {
      type: Array as PropType<number[]>,
      default: () => []
    }
  })

  /**
   * 同比结果 是否增加 true 增加 false 减少
   */
  const isAdd = computed(() => {
    const { rateValue } = props
    return rateValue >= 0
  })

  const _rateValue = computed(() => {
    const { rateValue } = props
    return rateValue >= 0 ? rateValue : -rateValue
  })
</script>

<style lang="scss" scoped>
  .compare-item {
    display: flex;
    align-items: center;
    border-bottom: 2rpx solid $color-border;
    padding-bottom: 40rpx;

    .left {
      flex: 1;
      overflow: hidden;
      .name {
        font-size: 32rpx;
        line-height: 44rpx;
        color: #a7b4d9;
        padding-top: 20rpx;
      }
      .value {
        display: flex;
        align-items: center;
        padding-top: 20rpx;
        .val {
          font-size: 66rpx;
          font-weight: 700;
          line-height: 74rpx;
          color: inherit;
        }
        .unit {
          font-size: 36rpx;
          line-height: 1;
          padding-left: 10rpx;
          color: inherit;
          opacity: 0.66;
        }
      }
      .cell {
        display: flex;
        align-items: center;
        font-size: 28rpx;
        line-height: 40rpx;
        color: #a7b4d9;
        padding-top: 18rpx;
        .val {
          font-size: 34rpx;
          font-weight: 700;
          padding: 0 8rpx;
        }
        .unit {
          font-size: 28rpx;
        }
      }
    }
    .right {
      padding-top: 64rpx;
      .compare-result {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: 8rpx;
        .img {
          width: 22rpx;
          height: 14rpx;
          margin-right: 8rpx;
        }
        .value {
          font-size: 32rpx;
          line-height: 36rpx;
          color: #a7b4d9;
          font-weight: 500;
        }
      }
      .echart {
        width: 236rpx;
        width: 240rpx;
        height: 140rpx;
      }
    }
  }
</style>
