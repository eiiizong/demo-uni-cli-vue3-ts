<template>
  <div class="compare-item">
    <div class="left">
      <div class="name">累计投放</div>
      <div class="value" :style="{ color: color }">
        <div class="val Impact">{{ nowYearValue }}</div>
        <div class="unit">{{ unit }}</div>
      </div>
      <div class="compare-value">
        <div class="last-year">去年：</div>
        <div class="val Impact">{{ lastYearValue }}</div>
        <div class="unit">{{ unit }}</div>
      </div>
    </div>
    <div class="right">
      <div class="compare-result">
        <img v-if="isAdd" class="img" :src="imageIconUp" alt="" />
        <img v-else class="img" :src="imageIconDown" alt="" />
        <div class="value Impact">{{ rateValue }}%</div>
      </div>
      <div class="echart">
        <EchartLine01 :render-list="compareList" :echart-id="echartId" :color="color" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import imageIconDown from './images/icon-down.png'
  import imageIconUp from './images/icon-up.png'

  import EchartLine01 from './EchartLine01.vue'

  const props = defineProps({
    /**
     * 今年的数值
     */
    nowYearValue: {
      type: Number,
      default: () => 0
    },
    /**
     * 去年的数值
     */
    lastYearValue: {
      type: Number,
      default: () => 0
    },
    /**
     * 统计项的名称
     */
    label: {
      type: String,
      required: true
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
     * 统计项的单位
     */
    unit: {
      type: String,
      default: () => '万元'
    },
    /**
     * 同比结果 是否增加 true 增加 false 减少
     */
    isAdd: {
      type: Boolean,
      default: () => false
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
      type: Array,
      default: () => [0, 0, 0, 0, 0, 0, 0]
    }
  })
</script>

<style lang="scss" scoped>
  .compare-item {
    display: flex;
    align-items: center;
    border-bottom: 5rpx solid #f5f5f5;
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
      .compare-value {
        display: flex;
        align-items: center;
        font-size: 28rpx;
        line-height: 40rpx;
        color: #a7b4d9;
        padding-top: 18rpx;
        .val {
          font-size: 34rpx;
          font-weight: 700;
        }
        .unit {
          font-size: 28rpx;
          padding-left: 8rpx;
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
        height: 120rpx;
      }
    }
  }
</style>
