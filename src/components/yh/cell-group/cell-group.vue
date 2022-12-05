<template>
  <view v-if="title" class="van-cell-group__title">
    {{ title }}
  </view>
  <view class="custom-class van-cell-group {{ border ? 'van-hairline--top-bottom' : '' }}">
    <slot />
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { bem } from '../common/utils'

const emit = defineEmits(['change', 'close', 'open'])

const props = defineProps({
  // 分组标题
  title: {
    type: String,
    default: () => '',
  },
  // 是否展示为圆角卡片风格
  inset: {
    type: Boolean,
    value: true,
  },
  // 是否显示外边框
  border: {
    type: Boolean,
    value: true,
  },
})
</script>

<style lang="scss" scoped>
$color: #ee0a24;
.yh-info {
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  white-space: nowrap;
  text-align: center;
  -webkit-transform: translate(50%, -50%);
  transform: translate(50%, -50%);
  -webkit-transform-origin: 100%;
  transform-origin: 100%;
  min-width: 32rpx;
  padding: 0 6rpx;
  color: #fff;
  font-weight: 500;
  font-size: 24rpx;
  font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
  line-height: 28rpx;
  background-color: $color;
  border: 1px solid #fff;
  border-radius: 32rpx;
  &--dot {
    min-width: 0;
    border-radius: 50%;
    width: 16rpx;
    height: 16rpx;
  }
}
</style>
