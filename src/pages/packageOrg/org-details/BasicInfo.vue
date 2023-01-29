<template>
  <view class="basic-info">
    <div class="title">
      <div class="text">成都农商银行新都支行</div>
      <div class="status">已准入</div>
    </div>
    <div class="tags">
      <div class="tag">合作银行</div>
      <div class="tag">442协议</div>
      <div class="tag">73协议</div>
    </div>
    <div class="card">
      <div class="bg">
        <img class="img" :src="imageBgCard" alt="" />
      </div>
      <div class="con">
        <div class="col">
          <div class="item">
            <div class="key">法定代表人</div>
            <div class="value">王小川</div>
          </div>
          <div class="item">
            <div class="key">注册资本(万元）</div>
            <div class="value">185300</div>
          </div>
          <div class="item">
            <div class="key">成立日期</div>
            <div class="value">2010/10/11</div>
          </div>
        </div>
        <div class="col">
          <div class="item">
            <div class="key">联系人</div>
            <div class="value">王小川</div>
          </div>
          <div class="item">
            <div class="key">联系电话</div>
            <div class="value">13222222222</div>
          </div>
          <div class="item more">更多></div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import imageBgCard from './images/bg-card.png'
import { ref, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useStoreUserInfo } from '@/stores/modules'

const storeUserInfo = useStoreUserInfo()

onLoad((e) => {
  console.log(e)
})
</script>

<style lang="scss" scoped>
.basic-info {
  width: 100%;
  padding: $spacing $spacing 22rpx;
  background-color: #fff;
  .title {
    display: flex;
    align-items: center;
    font-size: 42rpx;
    color: #404040;
    line-height: 60rpx;
    .text {
      font-weight: 700;
      // @include textOverflow();
    }
    .status {
      color: #1bbe9e;
      font-size: 28rpx;
      line-height: 44rpx;
      padding: 0 10rpx;
      background-color: rgba(27, 190, 158, 0.16);
      border-radius: 4rpx;
      margin-left: 14rpx;
      white-space: nowrap;
    }
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-top: 12rpx;
    .tag {
      background-color: rgba(0, 113, 255, 0.15);
      border-radius: 4rpx;
      color: #0071ff;
      font-size: 28rpx;
      line-height: 44rpx;
      padding: 0 10rpx;
      margin-right: 10rpx;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .card {
    color: #fff;
    position: relative;
    margin-top: 32rpx;
    .bg {
      .img {
        width: 100%;
        height: 330rpx;
      }
    }
    .con {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 42rpx;
    }
    .col {
      display: flex;
      margin-bottom: 32rpx;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .item {
      width: 30%;
      .key {
        font-size: 28rpx;
        line-height: 40rpx;
        color: rgba(255, 255, 255, 0.63);
      }

      .value {
        font-size: 36rpx;
        line-height: 50rpx;
        padding-top: 12rpx;
      }
      &:nth-of-type(2) {
        width: 40%;
      }
    }
    .more {
      color: rgba(#fff, 0.76);
      align-self: end;
      line-height: 50rpx;
      align-self: flex-end;
      text-align: right;
    }
  }
}
</style>
