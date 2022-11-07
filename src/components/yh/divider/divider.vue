<template>
  <view :class="getClass" :style="getStyle">
    <slot />
  </view>
</template>

<script setup>
import { computed } from 'vue'
import { bem, addUnit } from '../common/utils'

const emit = defineEmits(['click'])

const props = defineProps({
  // 自定义样式
  customStyle: {
    type: String,
    default: () => '',
  },
  // 虚线
  dashed: {
    type: Boolean,
    default: () => false,
  },
  // 细线
  hairline: {
    type: Boolean,
    default: () => false,
  },
  // 文本位置，left center right
  contentPosition: {
    type: String,
    default: () => 'center',
  },
  //
  borderColor: {
    type: String,
    default: () => '',
  },
  //
  textColor: {
    type: String,
    default: () => '',
  },
  //
  fontSize: {
    type: [String, Number],
    default: () => '',
  },
})

const getClass = computed(() => {
  let str = ''
  const { dashed, hairline, contentPosition } = props
  str = bem('divider', [{ dashed, hairline }, contentPosition])
  return str
})

const getStyle = computed(() => {
  let str = ''
  const { borderColor, textColor, fontSize, customStyle } = props
  if (borderColor) {
    str += `border-color: ${borderColor}; `
  }
  if (textColor) {
    str += `color: ${textColor}; `
  }
  if (fontSize) {
    str += `font-size: ${addUnit(fontSize)}; `
  }
  if (customStyle) {
    str += customStyle
  }

  return str
})
</script>

<style lang="scss" scoped>
.yh-divider {
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: 0;
  margin: var(--divider-margin, $divider-margin);
  color: var(--divider-text-color, $divider-text-color);
  font-size: var(--divider-font-size, $divider-font-size);
  line-height: var(--divider-line-height, $divider-line-height);
  border-color: var(--divider-border-color, $divider-border-color);

  &::before,
  &::after {
    display: block;
    flex: 1;
    box-sizing: border-box;
    height: 1px;
    border-color: inherit;
    border-style: inherit;
    border-width: 1px 0 0;
  }

  &::before {
    content: '';
  }

  &--hairline {
    &::before,
    &::after {
      transform: scaleY(0.5);
    }
  }

  &--dashed {
    border-style: dashed;
  }

  &--center,
  &--left,
  &--right {
    &::before {
      margin-right: var(--divider-content-padding, $divider-content-padding);
    }

    &::after {
      content: '';
      margin-left: var(--divider-content-padding, $divider-content-padding);
    }
  }

  &--left {
    &::before {
      max-width: var(--divider-content-left-width, $divider-content-left-width);
    }
  }

  &--right {
    &::after {
      max-width: var(
        --divider-content-right-width,
        $divider-content-right-width
      );
    }
  }
}
</style>
