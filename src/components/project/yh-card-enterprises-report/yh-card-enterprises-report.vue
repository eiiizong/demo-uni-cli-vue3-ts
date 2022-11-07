<template>
  <div class="yh-card-enterprises-report-wrapper">
    <div class="name">{{ renderData.aac003 }}</div>
    <div class="desc">所在区县：{{ renderData.chb015Desc }}</div>
    <div class="time">注册时间：{{ renderData.aae036.substr(0, 10) }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  renderData: {
    type: [Object],
    required: true,
  },
})
</script>
<style lang="scss" scoped>
.yh-card-enterprises-report-wrapper {
  width: 100%;
  font-size: 24rpx;
  line-height: 34rpx;
  color: #999;
  padding-bottom: 24rpx;
  border-bottom: 1px solid #eef5ff;
  .name {
    font-size: 28rpx;
    font-weight: 700;
    line-height: 40rpx;
    color: #333;
    @include textOverflow();
  }
  .desc {
    font-size: 24rpx;
    padding-top: 16rpx;
    @include textOverflow(2);
  }
  .time {
    font-size: 24rpx;
    line-height: 30rpx;
    padding-top: 12rpx;
  }
}
</style>
