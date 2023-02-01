<template>
  <view class="details-info">
    <div class="cell-wrapper">
      <div class="cell">
        <div class="key">法定代表人</div>
        <div class="value">张三</div>
      </div>
      <div class="cell">
        <div class="key">成立日期</div>
        <div class="value">2020-09-09</div>
      </div>
      <div class="cell">
        <div class="key">登记状态</div>
        <div class="value green">存续</div>
      </div>
      <div class="cell">
        <div class="key">注册资本</div>
        <div class="value">148800万人民币</div>
      </div>
      <div class="cell">
        <div class="key">企业类型</div>
        <div class="value">有限责任公司</div>
      </div>
      <div class="cell">
        <div class="key">参保人数</div>
        <div class="value">9087人</div>
      </div>
      <div class="cell">
        <div class="key">所属行业</div>
        <div class="value">互联网</div>
      </div>
      <div class="cell">
        <div class="key">所属地区</div>
        <div class="value">北京市</div>
      </div>
    </div>
    <div class="cell-wrapper">
      <div class="cell">
        <div class="key">统一社会信用编码</div>
        <div class="value">989854654687654</div>
      </div>
      <div class="cell">
        <div class="key">工商注册号</div>
        <div class="value">54654654654</div>
      </div>
    </div>
    <div class="cell-wrapper">
      <div class="cell">
        <div class="key">经营期限</div>
        <div class="value">2012/05/08-2065/05/07</div>
      </div>
      <div class="cell">
        <div class="key">核准日期</div>
        <div class="value">2022-09-09</div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import { onLoad } from '@dcloudio/uni-app'

  onLoad((e) => {
    console.log(e)
  })
</script>

<style lang="scss" scoped>
  .details-info {
    width: 100%;
    .cell-wrapper {
      border-radius: 16rpx;
      background-color: #fff;
      padding: 34rpx 24rpx;
      margin-bottom: $spacing;
      .cell {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #b2bbc7;
        font-size: 28rpx;
        line-height: 40rpx;
        margin-bottom: 24rpx;
        .key {
          padding-right: 20rpx;
        }
        .value {
          color: #000000;
          &.green {
            color: #1bbe9e;
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
