<template>
  <view class="bill-total">
    <div class="item">
      <img class="img" :src="imageBg01" alt="" />
      <div class="content">
        <div class="name">白名单企业</div>
        <div class="value">
          <div class="val Impact">{{ renderData.whitenum || 0 }}</div>
          <div class="unit">家</div>
        </div>
      </div>
    </div>
    <div class="item">
      <img class="img" :src="imageBg02" alt="" />
      <div class="content">
        <div class="name">白名单获贷户数</div>
        <div class="value">
          <div class="val Impact">{{ renderData.whitegetloannum || 0 }}户</div>
        </div>
      </div>
    </div>
    <div class="item">
      <img class="img" :src="imageBg02" alt="" />
      <div class="content">
        <div class="name">白名单获贷金额</div>
        <div class="value">
          <div class="val Impact">{{ renderData.whitegetloanmoney || 0 }}亿元</div>
        </div>
      </div>
    </div>
    <div class="item">
      <img class="img" :src="imageBg01" alt="" />
      <div class="content">
        <div class="name">白名单获贷率</div>
        <div class="value">
          <div class="val Impact">{{ renderData.whiterate || 0 }}%</div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import imageBg01 from './images/bg-01.png'
  import imageBg02 from './images/bg-02.png'

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
  .bill-total {
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $spacing;
    border-top: 20rpx solid $color-page;
    flex-wrap: wrap;
    .item {
      width: 330rpx;
      height: 164rpx;
      position: relative;
      margin-bottom: 24rpx;
      .img {
        width: 100%;
        height: 100%;
      }
      .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 40rpx 24rpx;
        font-size: 28rpx;
        color: #202429;
        line-height: 40rpx;
        .value {
          display: flex;
          align-items: center;
          padding-top: 6rpx;
          .val {
            font-weight: 700;
            font-size: 50rpx;
            line-height: 58rpx;
            color: #404040;
          }
          .unit {
            font-size: 30rpx;
            line-height: 1;
            padding-left: 14rpx;
          }
        }
      }
    }
  }
</style>
