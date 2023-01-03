<template>
  <view class="bill-total">
    <div class="item">
      <img class="img" :src="imageBg01" alt="" />
      <div class="content">
        <div class="name">白名单企业</div>
        <div class="value">
          <div class="val">38,534</div>
          <div class="unit">家</div>
        </div>
      </div>
    </div>
    <div class="item">
      <img class="img" :src="imageBg02" alt="" />
      <div class="content">
        <div class="name">白名单获贷率</div>
        <div class="value">
          <div class="val">38%</div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import imageBg01 from './images/bg-01.png'
import imageBg02 from './images/bg-02.png'

import { ref, reactive, onMounted } from 'vue'
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
  .item {
    width: 330rpx;
    height: 164rpx;
    position: relative;
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
