<template>
  <view
    hover-class="yh-cell--hover hover-class"
    hover-stay-time="70"
    :style="customStyle"
    :class="getCellClass"
    @click="onClick"
  >
    <Icon
      v-if="icon"
      :name="icon"
      class="yh-cell__left-icon-wrap"
      custom-class="yh-cell__left-icon"
    />
    <slot v-else name="icon" />

    <view :style="getTitleStyle" class="yh-cell__title title-class">
      <block v-if="title">{{ title }}</block>
      <slot v-else name="title" />

      <view v-if="label || useLabelSlot" class="yh-cell__label label-class">
        <slot v-if="useLabelSlot" name="label" />
        <block v-else-if="label">{{ label }}</block>
      </view>
    </view>

    <view class="yh-cell__value value-class">
      <block v-if="value || value === 0">{{ value }}</block>
      <slot v-else />
    </view>

    <Icon
      v-if="isLink"
      :name="arrowDirection ? 'arrow' + '-' + arrowDirection : 'arrow'"
      class="yh-cell__right-icon-wrap right-icon-class"
      custom-class="yh-cell__right-icon"
    />
    <slot v-else name="right-icon" />

    <slot name="extra" />
  </view>
</template>

<script setup lang="ts">
import Icon from '../icon/icon.vue'
import { computed } from 'vue'
import { bem } from '../common/utils'

const emit = defineEmits(['click'])
const props = defineProps({
  // 左侧图标名称或图片链接，可选值见 Icon 组件
  icon: {
    type: String,
    default: () => '',
  },
  // 左侧标题
  title: {
    type: [String, Number],
    default: () => '',
  },
  // 标题宽度，须包含单位
  titleWidth: {
    type: [String],
    default: () => '',
  },
  // 右侧内容
  value: {
    type: [String, Number],
    default: () => '',
  },
  // 标题下方的描述信息
  label: {
    type: [String],
    default: () => '',
  },
  // 单元格大小，可选值为 large
  size: {
    type: [String],
    default: () => '',
  },
  // 是否显示下边框
  border: {
    type: Boolean,
    default: () => true,
  },
  // 是否使内容垂直居中
  center: {
    type: Boolean,
    default: () => false,
  },
  // 点击后跳转的链接地址
  url: {
    type: [String],
    default: () => '',
  },
  // 链接跳转类型，可选值为 redirectTo switchTab reLaunch
  linkType: {
    type: [String],
    default: () => 'navigateTo',
  },
  // 是否开启点击反馈
  clickable: {
    type: Boolean,
    default: () => false,
  },
  // 是否展示右侧箭头并开启点击反馈
  isLink: {
    type: Boolean,
    default: () => false,
  },
  // 是否显示表单必填星号
  required: {
    type: Boolean,
    default: () => false,
  },
  // 箭头方向，可选值为 left up down
  arrowDirection: {
    type: String,
    default: () => '',
  },
  // 是否使用 label slot
  useLabelSlot: {
    type: Boolean,
    default: () => false,
  },
  // 标题样式
  titleStyle: {
    type: String,
    default: () => '',
  },
  // 自定义样式
  customStyle: {
    type: String,
    default: () => '',
  },
})

const getCellClass = computed(() => {
  let str = ''
  const { size, center, required, border, isLink, clickable } = props
  str = bem('cell', [
    size,
    { center, required, borderless: !border, clickable: isLink || clickable },
  ])
  console.log('getCellClass======> ', str)
  return str
})

const getTitleStyle = computed(() => {
  let str = ''
  const { titleWidth } = props
  if (titleWidth) {
    str += `max-width: ${titleWidth};min-width: ${titleWidth}; `
  }
  return str
})
const onClick = () => {}
</script>

<style lang="scss" scoped>
@use '../common/style/var.scss' as *;
.yh-cell {
  position: relative;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: $yh-cell-vertical-padding $yh-cell-horizontal-padding;
  font-size: $yh-cell-font-size;
  line-height: $yh-cell-line-height;
  color: $yh-cell-text-color;
  background-color: $yh-cell-background-color;
  &::after {
    position: absolute;
    box-sizing: border-box;
    -webkit-transform-origin: center;
    transform-origin: center;
    content: ' ';
    pointer-events: none;
    top: auto;
    right: 0;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  &--borderless:after {
    display: none;
  }
  &-group {
    background-color: $yh-cell-background-color;
  }
  &__label {
    margin-top: $yh-cell-label-margin-top;
    font-size: $yh-cell-label-font-size;
    line-height: $yh-cell-label-line-height;
    color: $yh-cell-label-color;
  }
  &__value {
    overflow: hidden;
    text-align: right;
    vertical-align: middle;
    color: $yh-cell-value-color;
  }
  &__title,
  &__value {
    -webkit-flex: 1;
    flex: 1;
    &:empty {
      display: none;
    }
  }
  &__left-icon-wrap,
  &__right-icon-wrap {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    height: $yh-cell-line-height;
    font-size: $yh-cell-icon-size;
  }
  &__left-icon-wrap {
    margin-right: 10rpx;
  }
  &__right-icon-wrap {
    margin-left: 5px;
    color: $yh-cell-right-icon-color;
  }
  &__left-icon,
  &__right-icon {
    line-height: $yh-cell-line-height;
  }
  &__left-icon {
    vertical-align: middle;
  }
  &--clickable {
    &.yh-cell--hover {
      background-color: $yh-cell-active-color;
    }
  }
  &--required {
    overflow: visible;
    &::before {
      position: absolute;
      content: '*';
      left: $yh--padding-xs;
      font-size: $yh-cell-font-size;
      color: $yh-cell-required-color;
    }
  }
  &--center {
    -webkit-align-items: center;
    align-items: center;
  }
  &--large {
    padding-top: $yh-cell-large-vertical-padding;
    padding-bottom: $yh-cell-large-vertical-padding;
    &.yh-cell__title {
      font-size: $yh-cell-large-title-font-size;
    }
    &.yh-cell__label {
      font-size: $yh-cell-large-label-font-size;
    }
  }
}
</style>
