<template>
  <div class="yh-title-wrapper" v-if="title">
    <template v-if="type == '01'">
      <div class="yh-title-01 d-f ai-c jc-sb">
        <div class="left">
          <image class="img" :src="imageBg" alt="" />
          <div class="title">{{ title }}</div>
        </div>
        <div class="right d-f ai-c" v-if="seeMoreText" @click="emit('click')">
          <span>{{ seeMoreText }}</span>
          <div class="iconfont iconfont-arrow-right-double"></div>
        </div>
      </div>
    </template>
    <template v-if="type == '02'">
      <div class="yh-title-02 d-f ai-c jc-sb">
        <div class="left">
          {{ title }}
        </div>
        <div class="right d-f ai-c" v-if="seeMoreText" @click="emit('click')">
          <span>{{ seeMoreText }}</span>
          <div class="iconfont iconfont-arrow-right-double"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import imageBg from './images/bg.png'

const emit = defineEmits(['click'])
const props = defineProps({
  title: {
    type: [String],
    default: '',
  },
  // 查看更多文本
  seeMoreText: {
    type: [String],
    default: () => '',
  },
  type: {
    type: [String],
    default: '01', // 01 02
  },
})
</script>
<style lang="scss" scoped>
.yh-title-wrapper {
  width: 100%;
  .yh-title-01 {
    padding: 0 $spacing;
    .left {
      position: relative;
      .img {
        width: 240rpx;
        height: 48rpx;
      }
      .title {
        position: absolute;
        top: 0;
        left: 0;
        padding-left: 34rpx;
        font-size: 32rpx;
        line-height: 48rpx;
        font-weight: 700;
        color: #333333;
      }
    }
  }
  .yh-title-02 {
    padding: 28rpx $spacing;
    font-size: 32rpx;
    font-weight: 500;
    line-height: 44rpx;
    color: #3d424d;
    .left {
      padding-left: 24rpx;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 6rpx;
        height: 30rpx;
        background-color: $primary;
        border-radius: 4rpx;
      }
    }
  }
  .right {
    color: $primary;
    font-size: 26rpx;
    padding: 10rpx 0;
    .iconfont {
      font-size: 20rpx;
      margin-left: 8rpx;
    }
  }
}
</style>
