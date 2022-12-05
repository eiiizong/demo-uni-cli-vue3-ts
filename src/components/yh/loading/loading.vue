<template>
  <view :class="getClass">
    <view :class="'yh-loading__spinner yh-loading__spinner--' + type" :style="getSpinnerStyle">
      <block v-if="type === 'spinner'">
        <view v-for="(item, index) in array12" :key="index" class="yh-loading__dot" />
      </block>
    </view>
    <view class="yh-loading__text" style="getTextStyle">
      <slot />
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { bem, addUnit } from '../common/utils'

const emit = defineEmits(['click'])

const props = defineProps({
  // 自定义样式
  customStyle: {
    type: String,
    default: () => '',
  },
  // 颜色
  color: {
    type: String,
    default: () => '',
  },
  // 类型，可选值为 spinner circular
  type: {
    type: String,
    default: () => 'circular',
  },
  // 加载图标大小，默认单位为 px
  size: {
    type: [String, Number],
    default: () => '60rpx',
  },
  // 文字大小，默认单位为为 px
  textSize: {
    type: [String, Number],
    default: () => '28rpx',
  },
  // 是否垂直排列图标和文字内容
  vertical: {
    type: [Boolean],
    default: () => false,
  },
})

const array12 = Array.from({ length: 12 })

const getClass = computed(() => {
  let str = ''
  const { vertical } = props
  str = bem('loading', { vertical })
  return str
})

const getSpinnerStyle = computed(() => {
  let str = ''
  const { color, size, customStyle } = props
  if (color) {
    str += `color: ${color}; `
  }
  if (size) {
    str += `width: ${addUnit(size)}; `
    str += `height: ${addUnit(size)}; `
  }
  if (customStyle) {
    str += customStyle
  }
  return str
})

const getTextStyle = computed(() => {
  let str = ''
  const { textSize } = props
  if (textSize) {
    str += `text-size: ${addUnit(textSize)}; `
  }
  return str
})
</script>

<style lang="scss" scoped>
:host {
  font-size: 0;
  line-height: 1;
}
@keyframes yh-rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.yh-loading {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #c8c9cc;
  &__spinner {
    position: relative;
    box-sizing: border-box;
    width: 60rpx;
    // compatible for 0.x, users may set width or height in root element
    max-width: 100%;
    max-height: 100%;
    height: 60rpx;
    animation: yh-rotate 0.8s linear infinite;

    &--spinner {
      animation-timing-function: steps(12);
    }

    &--circular {
      border: 1px solid transparent;
      border-top-color: currentColor;
      border-radius: 100%;
    }
  }

  &__text {
    margin-left: 16rpx;
    color: #969799;
    font-size: 28rpx;
    line-height: 40rpx;

    &:empty {
      display: none;
    }
  }

  &--vertical {
    flex-direction: column;

    .yh-loading__text {
      margin: 16rpx 0 0;
    }
  }

  &__dot {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &::before {
      display: block;
      width: 2px;
      height: 25%;
      margin: 0 auto;
      background-color: currentColor;
      border-radius: 40%;
      content: ' ';
    }
  }
}

@for $i from 1 through 12 {
  .yh-loading__dot:nth-of-type(#{$i}) {
    transform: rotate($i * 30deg);
    opacity: 1 - calc(0.75 / 12) * ($i - 1);
  }
}
</style>
