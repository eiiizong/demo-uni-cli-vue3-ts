<template>
  <view> 123 </view>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { bem } from '../common/utils'

const emit = defineEmits(['change', 'close', 'open'])

const props = defineProps({
  // 唯一标识符，默认为索引值
  title: {
    type: [String, Number],
    default: () => '',
  },
  // 标题栏左侧内容
  name: {
    type: [String, Number],
    default: () => '',
  },
  // 标题栏大小，可选值为 large
  size: {
    type: [String],
    default: () => '',
  },
  // 标题栏左侧图标名称或图片链接，可选值见 Icon 组件
  icon: {
    type: [String],
    default: () => '',
  },
  // 标题栏右侧内容
  value: {
    type: [String, Number],
    default: () => '',
  },
  // 标题栏描述信息
  label: {
    type: [String],
    default: () => '',
  },
  // 是否显示内边框
  border: {
    type: Boolean,
    default: () => true,
  },
  // 是否展示标题栏右侧箭头并开启点击反馈
  isLink: {
    type: Boolean,
    default: () => true,
  },
  // 是否开启点击反馈
  clickable: {
    type: Boolean,
    default: () => false,
  },
  // 是否禁用面板
  disabled: {
    type: Boolean,
    default: () => false,
  },
})

const contentHeight = ref(0)
const expanded = ref(false)
const transition = ref(false)
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
