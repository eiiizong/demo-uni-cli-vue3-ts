<template>
  <view class="query-condition">
    <div class="input-wrapper">
      <input type="text" class="input" placeholder="请输入关键字" />
      <button class="button">搜索</button>
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
      width: 100%;
      position: relative;
      .input {
        display: block;
        width: 100%;
        height: 72rpx;
        background-color: #fdfdfd;
        border-radius: 4rpx;
        line-height: 1.4;
        color: #333333;
        font-size: 28rpx;
        border: solid 1px #999999;
        padding: 16rpx 18rpx;
        padding-right: 100rpx;
      }
      .button {
        position: absolute;
        top: 50%;
        right: 18rpx;
        font-size: 32rpx;
        color: #0071ff;
        width: auto;
        background-color: transparent;
        line-height: 44rpx;
        transform: translateY(-50%);
      }
    }
  }
</style>
