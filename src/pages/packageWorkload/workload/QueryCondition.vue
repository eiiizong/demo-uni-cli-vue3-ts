<template>
  <view class="query-condition">
    <div class="input-wrapper">
      <div class="label">统计对象</div>
      <div class="value">
        <div class="input">哈哈</div>
      </div>
    </div>
    <div class="input-wrapper">
      <div class="label">起止日期</div>
      <div class="value">
        <picker class="picker" mode="date">
          <view class="picker-content">
            <div class="picker-value">12</div>
            <div class="picker-placeholder"></div>
          </view>
        </picker>
        <div class="separate">至</div>
        <picker class="picker" mode="date">
          <view class="picker-content">
            <div class="picker-value"></div>
            <div class="picker-placeholder">请选择</div>
          </view>
        </picker>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  const props = defineProps({
    value: {
      type: String,
      default: ''
    }
  })
</script>

<style lang="scss" scoped>
  .query-condition {
    width: 100%;
    background-color: #fff;
    padding: $spacing;
    .input-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: $spacing;
      font-size: 28rpx;
      color: #404040;
      .label {
        margin-right: 16rpx;
      }
      .value {
        flex: 1;
        overflow: hidden;
        display: flex;
        align-items: center;
        align-items: center;
      }

      .picker,
      .input {
        flex: 1;
        height: 72rpx;
        background-color: #fdfdfd;
        border-radius: 4rpx;
        border: solid 1px #999999;
        font-size: inherit;
        line-height: 68rpx;
        padding: 0 26rpx;
      }

      .separate {
        padding: 0 16rpx;
      }
      .picker-placeholder {
        color: rgba(0, 0, 0, 0.3);
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
