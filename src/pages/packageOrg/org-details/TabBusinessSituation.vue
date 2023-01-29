<template>
  <view class="tab-business-situation">
    <div class="wrapper">
      <div class="title">73业务</div>
      <div class="tip">发放“蓉易贷”贷款金额的排名在10%-20%</div>
      <div class="table-wrapper">
        <div class="col">
          <div class="key">贷款规模</div>
          <div class="value">185300万元</div>
        </div>
        <div class="col">
          <div class="key">投放户数</div>
          <div class="value">22</div>
        </div>
        <div class="col">
          <div class="key">户均贷款金额</div>
          <div class="value">12</div>
        </div>
        <div class="col">
          <div class="key">贷款利率</div>
          <div class="value">2%</div>
        </div>
      </div>
      <div class="table-wrapper">
        <div class="col">
          <div class="key">“蓉易贷”首贷率</div>
          <div class="value">22%</div>
        </div>
        <div class="col">
          <div class="key">白名单贷款户数</div>
          <div class="value">22</div>
        </div>
        <div class="col">
          <div class="key">白名单贷款比率</div>
          <div class="value">12</div>
        </div>
        <div class="col">
          <div class="key"></div>
          <div class="value"></div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="title">442业务</div>
      <div class="table-wrapper">
        <div class="col">
          <div class="key">担保总金额</div>
          <div class="value">185300万元</div>
        </div>
        <div class="col">
          <div class="key">担保费率</div>
          <div class="value">22</div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>

<style lang="scss" scoped>
.tab-business-situation {
  width: 100%;
  padding: 0 $spacing $spacing;
  .title {
    font-size: 32rpx;
    line-height: 44rpx;
    color: #333333;
    padding-top: $spacing;
  }
  .tip {
    font-size: 28rpx;
    color: #ff8800;
    background-color: rgba(234, 153, 59, 0.14);
    border-radius: 4rpx;
    line-height: 40rpx;
    padding: 8rpx 16rpx;
    margin-top: 16rpx;
  }
  .table-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40rpx;
    border: 1px solid $color-border;
    .col {
      width: 50%;
      font-size: 30rpx;
      line-height: 42rpx;
      .key {
        height: 72rpx;
        color: #999999;
        background-color: #f2f2f2;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid $color-border;
      }
      .value {
        height: 72rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid $color-border;
      }
      &:nth-of-type(2n + 1) {
        border-right: 1px solid $color-border;
      }
      &:nth-last-of-type(1),
      &:nth-last-of-type(2) {
        .value {
          border-bottom: 0;
        }
      }
    }
  }
}
</style>
