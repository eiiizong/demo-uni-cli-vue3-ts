<template>
  <view class="bill-total">
    <div class="total">
      <div class="img-wrapper">
        <img v-if="wranType === '1'" class="icon" :src="imageIcon01" alt="" />
        <img v-if="wranType === '2'" class="icon" :src="imageIcon02" alt="" />
        <img v-if="wranType === '3'" class="icon" :src="imageIcon03" alt="" />
        <div class="text">{{ wranType === '1' ? '正常' : wranType === '2' ? '预警' : '叫停' }}</div>
      </div>
      <div class="info">
        <div class="key">风险资金池</div>
        <div class="value">
          <div class="val Impact">2998424.34</div>
          <div class="unit">万</div>
        </div>
      </div>
    </div>
    <div class="items">
      <div class="item">
        <div class="item-main">
          <div class="key">风险资金池</div>
          <div class="value">
            <div class="val Impact">5555.04</div>
            <div class="unit">万</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-main">
          <div class="key">机动资金池</div>
          <div class="value">
            <div class="val Impact">5555.04</div>
            <div class="unit">万</div>
          </div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import imageIcon01 from './images/icon-01.png'
  import imageIcon02 from './images/icon-02.png'
  import imageIcon03 from './images/icon-03.png'

  import { ref } from 'vue'

  // 1 正常 2 预警 3 叫停
  const wranType = ref('1')
</script>

<style lang="scss" scoped>
  .bill-total {
    width: 100%;
    background-image: linear-gradient(to bottom, #dfefff 0%, #ffffff 100%);
    margin-top: 20rpx;
    padding-top: 24rpx;
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
        padding-left: 30rpx;
        color: rgba(#000000, 0.5);
        font-size: 36rpx;
        line-height: 50rpx;
        padding-right: 22rpx;
        .value {
          display: flex;
          align-items: center;
          padding-top: 20rpx;
          color: #3965df;
          .val {
            font-size: 64rpx;
            line-height: 72rpx;
            font-weight: 400;
          }
          .unit {
            font-size: 38rpx;
            padding-left: 10rpx;
            padding-top: 16rpx;
          }
        }
      }
    }
    .items {
      display: flex;
      align-items: center;
      padding: 38rpx 30rpx 60rpx;
      .item {
        width: 50%;
        position: relative;
        padding-right: 60rpx;
        display: flex;
        justify-content: flex-end;
        .key {
          font-size: 28rpx;
          line-height: 38rpx;
          color: #818181;
          position: relative;
          padding-left: 34rpx;
          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 20rpx;
            height: 20rpx;
            background-color: #ff5050;
            transform: translateY(-50%);
            border-radius: 50%;
          }
        }
        .value {
          display: flex;
          align-items: center;
          font-size: 46rpx;
          color: #404040;
          line-height: 53rpx;
          padding-top: 12px;
          padding-left: 34rpx;
          .unit {
            color: #666;
            font-size: 30rpx;
            padding-left: 8rpx;
            padding-top: 8rpx;
            line-height: 1;
          }
        }
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          width: 5rpx;
          height: 102rpx;
          border-radius: 50px;
          transform: translateY(-50%);
          background-color: #f5f5f5;
        }
        &:last-child {
          padding-left: 60rpx;
          padding-right: 0;
          justify-content: flex-start;
          .key {
            &::before {
              background-color: #00c583;
            }
          }
          &::before {
            display: none;
            width: 0;
          }
        }
      }
    }
  }
</style>
