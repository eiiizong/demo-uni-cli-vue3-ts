<template>
  <view class="yh-nav-bar" :class="navBarClass" :style="navBarStyle">
    <view class="yh-nav-bar__left" @click="emit('click-left')">
      <block v-if="leftArrow || leftText">
        <yh-icon v-if="leftArrow" size="16px" name="arrow-left" custom-class="yh-nav-bar__arrow" />
        <view v-if="leftText" class="yh-nav-bar__text" hover-class="yh-nav-bar__text--hover" hover-stay-time="70">{{
          leftText
        }}</view>
      </block>
      <slot v-else name="left" />
    </view>
    <view class="yh-nav-bar__title">
      <view v-if="title">{{ title }}</view>
      <slot v-else name="title" />
    </view>
    <view class="yh-nav-bar__right" @click="emit('click-right')">
      <view v-if="rightText" class="yh-nav-bar__text">{{ rightText }}</view>
      <slot v-else name="right" />
    </view>
  </view>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { onMounted, ref, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  fixed: {
    type: Boolean,
    default: true,
  },
  // 左边文本
  leftText: {
    type: String,
    default: '',
  },
  // 右边文本
  rightText: {
    type: String,
    default: '',
  },
  // 左边返回箭头
  leftArrow: {
    type: Boolean,
    default: true,
  },
  border: {
    type: Boolean,
    default: true,
  },
  zIndex: {
    type: Number,
    default: 1,
  },
  safeAreaInsetTop: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['click-left', 'click-right'])

const _statusBarHeight: Ref<number | undefined> = ref(0)

const navBarStyle = computed(() => {
  let str = ''
  const { safeAreaInsetTop } = props
  if (safeAreaInsetTop) {
    str += `padding-top: ${_statusBarHeight.value}px`
  }
  return str
})

const navBarClass = computed(() => {
  let str = ''
  const { border } = props

  if (border) {
    str += `${border} `
  }

  return str
})

onMounted(() => {
  const { statusBarHeight } = uni.getSystemInfoSync()
  _statusBarHeight.value = statusBarHeight
})
</script>

<style lang="scss" scoped>
.yh-nav-bar {
  width: 100%;
  position: relative;
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
  line-height: 88rpx;
  color: #fff;
  background-color: $primary;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  &__title {
    max-width: 50%;
    margin: 0 auto;
    color: inherit;
    font-weight: 500;
    font-size: 16px;
    background-color: #f00;
  }
  &__left,
  &__right {
    position: absolute;
    bottom: 0;
    font-size: 14px;
  }
  &__left {
    left: 16px;
  }
  &__right {
    right: 16px;
  }
  &__text {
    display: inline-block;
    vertical-align: middle;
    margin: 0 -16px;
    padding: 0 16px;
    color: inherit;
    &:hover,
    &--hover {
      background-color: #f2f3f5;
    }
  }
}
</style>
