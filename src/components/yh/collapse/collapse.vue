<template>
  <view v-if="isShow" :class="getClass" :style="customStyle" @click="emit('click')">
    {{ dot ? '' : info }}
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { bem } from '../common/utils'

const emit = defineEmits(['click'])

const props = defineProps({
  // 自定义样式
  customStyle: {
    type: String,
    default: () => '',
  },
  // 是否显示图标右上角小红点 优先级大于info参数
  dot: {
    type: Boolean,
    default: () => false,
  },
  // 图标右上角文字提示
  info: {
    type: [String, Number],
    default: () => '',
  },
})

// 是否显示组件
const isShow = computed(() => {
  const { info, dot } = props
  let result = false
  if ((info !== null && info !== '') || dot) {
    result = true
  }
  return result
})

// 组件类名
const getClass = computed(() => {
  let str = ''
  const { dot } = props
  str = bem('info', { dot })
  return str
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
