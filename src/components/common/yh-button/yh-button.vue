<template>
  <div class="yh-button-wrapper">
    <button
      class="yh-button"
      :style="buttonStyle"
      :disabled="disabled"
      :open-type="openType"
      :class="buttonClass"
      @click="emit('click', $event)"
      @getuserinfo="emit('getuserinfo', $event)"
      @getphonenumber="emit('getphonenumber', $event)"
    >
      <block>
        <i
          class="iconfont"
          v-if="iconClassName || loading"
          :class="[
            iconClassName ? iconClassName : '',
            iconAlign ? iconAlign : '',
            loading ? 'iconfont-loading' : '',
          ]"
        ></i>
        <span v-if="name">{{ name }}</span>
        <span v-else><slot></slot></span>
      </block>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['click', 'getuserinfo', 'getphonenumber'])
const props = defineProps({
  // 按钮名称
  name: {
    type: [String],
    default: '',
  },
  // 按钮样式反转
  reverse: {
    type: [Boolean],
    default: () => false,
  },
  // disabled 使用中
  disabled: {
    type: [Boolean],
    default: false,
  },
  // 支持类型 primary
  type: {
    type: [String],
    default: '',
  },
  // 微信开放能力 contact share getPhoneNumber getUserInfo launchApp openSetting feedback chooseAvatar
  openType: {
    type: [String],
    default: '',
  },
  // 按钮高度
  height: {
    type: [String],
    default: '',
  },
  // 背景颜色
  backgroundColor: {
    type: [String],
    default: '',
  },
  // 边框
  border: {
    type: [String],
    default: '',
  },
  // 边框颜色
  borderColor: {
    type: [String],
    default: '',
  },
  // 圆角
  borderRadius: {
    type: [String],
    default: '',
  },
  // 阴影
  boxShadow: {
    type: [String],
    default: '',
  },
  // margin
  margin: {
    type: [String],
    default: '',
  },
  // 字体颜色
  color: {
    type: [String],
    default: '',
  },
  // 字体大小
  fontSize: {
    type: [String],
    default: '',
  },
  // 字体
  fontWeight: {
    type: [String, Number],
    default: '',
  },
  // 按钮宽度
  width: {
    type: [String],
    default: '',
  },
})
const buttonStyle = computed(() => {
  let str = ''
  const {
    width,
    height,
    fontSize,
    backgroundColor,
    color,
    borderColor,
    borderRadius,
    fontWeight,
    border,
    margin,
    boxShadow,
  } = props

  if (width) {
    str += `width: ${width};`
  }
  if (height) {
    str += `height: ${height};`
  }
  if (fontSize) {
    str += `font-size: ${fontSize};`
  }
  if (backgroundColor) {
    str += `background-color: ${backgroundColor};`
  }
  if (color) {
    str += `color: ${color};`
  }
  if (borderColor) {
    str += `border-color: ${borderColor};`
  }
  if (borderRadius) {
    str += `border-radius: ${borderRadius};`
  }
  if (fontWeight) {
    str += `font-weight: ${fontWeight};`
  }
  if (border) {
    str += `border: ${border};`
  }
  if (margin) {
    str += `margin: ${margin};`
  }
  if (boxShadow) {
    str += `box-shadow: ${boxShadow};`
  }

  return str
})
const buttonClass = computed(() => {
  let str = ''
  const { type, reverse } = props
  if (type) {
    str += `yh-button-type_${type} `
    if (type == 'primary' && reverse) {
      str += `yh-button-type_primary_reverse `
    }
  }
  return str
})
</script>

<style lang="scss" scoped>
$yh-button-height: 60rpx;
$yh-button-border-radius: 8rpx;
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
view,
button {
  box-sizing: border-box;
}
.yh-button {
  width: 100%;
  height: $yh-button-height;
  font-size: 24rpx;
  font-weight: 400;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: $yh-button-border-radius;
  border: 1px solid $primary;
  margin: auto;
  transition: opacity 0.3s ease-in-out;
  &.yh-button-type_primary {
    color: #fff;
    background-color: $primary;
    border-color: $primary;
    padding: 0 20rpx;
    &.yh-button-type_primary_reverse {
      background-color: #fff;
      color: $primary;
      border-color: $primary;
    }
  }

  &.button-hover,
  &:active {
    opacity: 0.5;
  }
  &[disabled] {
    // background-color: #999;
    // color: #fff;
    opacity: 0.5;
  }

  .iconfont-loading {
    animation: spin 1.2s infinite cubic-bezier(0.5, 0, 0.5, 1);
  }
}
</style>
