<template>
  <YhTransition
    v-if="lockScroll"
    :show="show"
    :customStyle="wrapperStyle"
    :duration="duration"
    @click="emit('click')"
    @touchmove.stop="noop"
  >
    <slot></slot>
  </YhTransition>

  <YhTransition
    v-else
    :show="show"
    :customStyle="wrapperStyle"
    :duration="duration"
    @click="emit('click')"
  >
    <slot></slot>
  </YhTransition>
</template>

<script setup lang="ts">
import YhTransition from '../transition/transition.vue'

import { computed } from 'vue'

const emit = defineEmits(['click'])

const props = defineProps({
  // 自定义样式
  customStyle: {
    type: String,
    default: () => '',
  },
  // 是否展示组件
  show: {
    type: Boolean,
    default: () => false,
  },
  // 动画时长，单位为毫秒
  duration: {
    type: [Number],
    default: () => 300,
  },
  // 层级
  zIndex: {
    type: Number,
    default: () => 1,
  },
  // 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动
  lockScroll: {
    type: Boolean,
    default: () => true,
  },
})

const staticStyle = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); background-color: var(--overlay-background-color, rgba(0, 0, 0, 0.7));`

const wrapperStyle = computed(() => {
  let str = ''
  const { customStyle, zIndex } = props
  if (staticStyle) {
    str += staticStyle
  }
  if (customStyle) {
    str += customStyle
  }
  if (zIndex) {
    str += `z-index:${zIndex}; `
  }

  return str
})

// for prevent touchmove
const noop = () => {}
</script>

<style lang="scss" scoped></style>
