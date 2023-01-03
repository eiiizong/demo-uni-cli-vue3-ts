<template>
  <view class="bill-total">
    <div class="total">
      <div class="img-wrapper">
        <img class="icon" :src="imageIcon01" alt="" />
        <div class="text">正常</div>
      </div>
      <div class="info">
        <div class="key">风险资金池</div>
        <div class="value">
          <div class="val">2424</div>
          <div class="unit">万</div>
        </div>
      </div>
    </div>
    <div class="items">
      <div class="item">
        <div class="key">风险资金池</div>
        <div class="value">
          <div class="val">5555.04</div>
          <div class="unit">万</div>
        </div>
      </div>
      <div class="item">
        <div class="key">风险资金池</div>
        <div class="value">
          <div class="val">5555.04</div>
          <div class="unit">万</div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import imageIcon01 from './images/icon-01.png'
import { ref, reactive, onMounted } from 'vue'
</script>

<style lang="scss" scoped>
.bill-total {
  width: 100%;
  background-image: linear-gradient(to bottom, #dfefff 0%, #ffffff 100%);
  margin-top: 20rpx;
  padding-top: 22rpx;
  .total {
    display: flex;
    align-items: center;
    justify-content: center;
    .img-wrapper {
      position: relative;
      .icon {
        width: 184rpx;
        height: 184rpx;
      }
      .text {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: 28rpx;
        line-height: 40rpx;
        color: #ffffff;
        bottom: 48rpx;
      }
    }

    .info {
      padding-left: 28rpx;
      color: rgba(#000000, 0.5);
      font-size: 36rpx;
      line-height: 50rpx;
      .value {
        display: flex;
        align-items: center;
        padding-top: 20rpx;
        color: #3965df;
        .val {
          font-size: 64rpx;
          line-height: 72rpx;
          font-weight: 700;
        }
        .unit {
          font-size: 38rpx;
          padding-left: 10rpx;
        }
      }
    }
  }
  .items {
    display: flex;
    align-items: center;
    .item {
      width: 50%;
    }
  }
}
</style>
