<template>
  <view class="yh-collapse-item" :class="getCollapseItemClass">
    <yh-cell
      :title="title"
      title-class="title-class"
      :icon="icon"
      :value="value"
      :label="label"
      :is-link="isLink"
      :clickable="clickable"
      :border="border && expanded"
      class="{{ utils.bem('collapse-item__title', { disabled, expanded }) }}"
      right-icon-class="yh-cell__right-icon"
      custom-class="yh-cell"
      hover-class="yh-cell--hover"
      @click="onClick"
    >
      <template #title>
        <slot name="title" />
      </template>
      <template #icon>
        <slot name="icon" />
      </template>
      <template #rightIcon>
        <slot name="rightIcon" />
      </template>
      <slot name="value" />
    </yh-cell>
    <view
      class="{{ utils.bem('collapse-item__wrapper', { transition }) }}"
      :style="{ height: contentHeight }"
      @transitionend="onTransitionEnd"
    >
      <view class="yh-collapse-item__content content-class">
        <slot />
      </view>
    </view>
  </view>
</template>
<!-- 添加之后 可以样式穿透 目前未找到setup语法如何编写-->
<script lang="ts">
export default {
  options: { styleIsolation: 'shared' },
}
</script>

<script setup lang="ts">
import YhCell from '../cell/cell.vue'

import { computed, ref, onMounted } from 'vue'
import { bem } from '../common/utils'

const emit = defineEmits(['change', 'close', 'open'])

const props = defineProps({
  // 标题栏左侧内容
  title: {
    type: [String, Number],
    default: () => '',
  },
  // 唯一标识符，默认为索引值
  name: {
    type: [String, Number],
    default: () => 'index',
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
  customClass: {
    type: String,
    default: () => '',
  },
})

const contentHeight = ref(0)
const expanded = ref(false)
const transition = ref(false)

const getCollapseItemClass = computed(() => {
  let str = ''
  const { customClass } = props

  // index !== 0 ? 'yh-hairline--top' : ''

  if (customClass) {
    str += ` ${customClass}`
  }
  return str
})

const onClick = () => {}

const onTransitionEnd = () => {}
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
