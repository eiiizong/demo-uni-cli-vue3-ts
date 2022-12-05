<template>
  <view class="yh-icon" :class="getClass" :style="getStyle" @click="emit('click')">
    <Info v-if="info !== null || dot" :dot="dot" :info="info" customStyle="z-index: 1" />
    <image v-if="isImageName" :src="name" mode="aspectFit" class="yh-icon__image" />
  </view>
</template>

<script setup lang="ts">
import Info from '../info/info.vue'

import { computed } from 'vue'
import { addUnit } from '../common/utils'

const emit = defineEmits(['click'])

const props = defineProps({
  // 图标名称或图片链接
  name: {
    type: String,
    default: () => '',
  },
  // 是否显示图标右上角小红点
  dot: {
    type: Boolean,
    default: () => false,
  },
  // 图标右上角文字提示
  info: {
    type: [String],
    default: () => '',
  },
  // 图标颜色
  color: {
    type: [String],
    default: () => '',
  },
  // 图标大小，如 20px，2em，默认单位为px
  size: {
    type: [String, Number],
    default: () => 'inherit',
  },
  // 自定义样式
  customStyle: {
    type: String,
    default: () => '',
  },
  // 类名前缀
  classPrefix: {
    type: String,
    default: () => 'yh-icon',
  },
})

const isImageName = computed(() => {
  const { name } = props
  let tag = false
  if (name.indexOf('/') > -1) {
    tag = true
  }
  return tag
})

const getClass = computed(() => {
  let str = ''
  const { classPrefix, name } = props
  if (classPrefix) {
    str += classPrefix + ' '
  }
  if (isImageName.value) {
    str += 'yh-icon--image'
  } else {
    str += classPrefix + '-' + name
  }

  return str
})

const getStyle = computed(() => {
  let str = ''
  const { color, size, customStyle } = props
  if (color) {
    str += `color: ${color}; `
  }

  if (size) {
    str += `font-size: ${addUnit(size)}; `
  }

  if (customStyle) {
    str += customStyle
  }

  return str
})
</script>

<style lang="scss" scoped>
@use './iconfont/index.scss';
.yh-icon,
.yh-icon:before {
  display: inline-block;
}

:host {
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.yh-icon--image {
  width: 1em;
  height: 1em;
}
.yh-icon__image {
  width: 100%;
  height: 100%;
}
.yh-icon__info {
  z-index: 1;
}
</style>
