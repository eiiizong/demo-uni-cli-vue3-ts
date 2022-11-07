<template>
  <YhCardWrapper>
    <div class="project-name-wrapper">
      <div class="name-wrapper d-f ai-c">
        <div class="name YouSheBiaoTiHei">{{ renderData.title }}</div>
        <div class="time">通知日期：{{ renderData.mgdate.substr(0, 10) }}</div>
        <div class="status" :class="[renderData.issee == '1' ? 'yes' : 'no']">
          {{ renderData.issee == '1' ? '已读' : '未读' }}
        </div>
      </div>
    </div>
    <div class="desc">
      {{ renderData.content }}
    </div>
  </YhCardWrapper>
</template>

<script setup>
import YhCardWrapper from '@/components/common/yh-card-wrapper/yh-card-wrapper.vue'

const props = defineProps({
  renderData: {
    type: [Object],
    required: true,
  },
})
</script>
<style lang="scss" scoped>
.name-wrapper {
  padding-bottom: 26rpx;
  white-space: nowrap;

  .name {
    position: relative;
    font-size: 30rpx;
    font-weight: 700;
    line-height: 1;
    color: $primary;
    z-index: 1;
    padding-top: 2rpx;
    padding-bottom: 8rpx;
    &::after {
      content: '';
      z-index: 0;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 80rpx;
      height: 14rpx;
      background-image: linear-gradient(
        to right,
        rgba($primary, 0.2),
        rgba($primary, 0.05)
      );
      border-radius: 4rpx;
    }
  }
  .time {
    font-size: 24rpx;
    padding-left: 36rpx;
    line-height: 1;
    color: tint($primary, 40%);
  }
  .status {
    font-size: 24rpx;
    line-height: 1;
    padding: 6rpx 12rpx;
    text-align: center;
    color: tint($primary, 40%);
    background-color: tint($primary, 94%);
    border: 1px solid tint($primary, 40%);
    margin-left: 30rpx;
    border-radius: 4rpx;
    transition: all 0.3s;
    &.no {
      $color-no: #ff7100;
      color: $color-no;
      color: tint($color-no, 40%);
      background-color: tint($color-no, 94%);
      border-color: tint($color-no, 40%);
    }
  }
}

.desc {
  font-size: 26rpx;
  line-height: 40rpx;
  color: #082a6b;
}
</style>
