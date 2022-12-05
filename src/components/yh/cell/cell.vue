<template>
  <view
    class="custom-class {{ utils.bem('cell', [size, { center, required, borderless: !border, clickable: isLink || clickable }]) }}"
    hover-class="van-cell--hover hover-class"
    hover-stay-time="70"
    style="{{ customStyle }}"
    bind:tap="onClick"
  >
    <van-icon
      wx:if="{{ icon }}"
      name="{{ icon }}"
      class="van-cell__left-icon-wrap"
      custom-class="van-cell__left-icon"
    />
    <slot wx:else name="icon" />

    <view
      style="{{ titleWidth ? 'max-width:' + titleWidth + ';min-width:' + titleWidth : '' }}"
      class="van-cell__title title-class"
    >
      <block wx:if="{{ title }}">{{ title }}</block>
      <slot wx:else name="title" />

      <view wx:if="{{ label || useLabelSlot }}" class="van-cell__label label-class">
        <slot wx:if="{{ useLabelSlot }}" name="label" />
        <block wx:elif="{{ label }}">{{ label }}</block>
      </view>
    </view>

    <view class="van-cell__value value-class">
      <block wx:if="{{ value || value === 0 }}">{{ value }}</block>
      <slot wx:else />
    </view>

    <van-icon
      wx:if="{{ isLink }}"
      name="{{ arrowDirection ? 'arrow' + '-' + arrowDirection : 'arrow' }}"
      class="van-cell__right-icon-wrap right-icon-class"
      custom-class="van-cell__right-icon"
    />
    <slot wx:else name="right-icon" />

    <slot name="extra" />
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
  value: null,
  icon: String,
  size: String,
  label: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  clickable: Boolean,
  titleWidth: String,
  customStyle: String,
  arrowDirection: String,
  useLabelSlot: Boolean,
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
