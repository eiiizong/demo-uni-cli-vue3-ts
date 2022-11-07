<template>
  <div class="yh-avatar-wrapper" @click="emit('click')">
    <!-- #ifdef MP-WEIXIN -->
    <div class="yh-avatar-img" :style="avatarImgStyle">
      <image :src="src" class="yh-avatar img" alt="avatar" v-if="src" />
      <open-data
        class="yh-avatar"
        type="userAvatarUrl"
        :default-avatar="imageAvatarDefault"
        v-else
      ></open-data>
    </div>
    <div class="yh-avatar-name" v-if="userName">
      {{ useFormatUserName(userName) }}
    </div>
    <!-- #endif -->
    <!-- #ifdef H5 -->
    <!-- #endif -->
  </div>
</template>

<script setup>
import imageAvatarDefault from './images/default.png'

import { computed } from 'vue'
import { useFormatUserName } from '@/use'

const emit = defineEmits(['click'])
const props = defineProps({
  // 头像url路径
  src: {
    type: [String],
    default: '',
  },
  // 用户名称
  userName: {
    type: [String],
    default: '',
  },
  // 头像尺寸
  size: {
    type: [String, Number],
    default: '118rpx',
  },
})

// 容器样式
const avatarImgStyle = computed(() => {
  let str = ''
  const { size } = props
  if (typeof size === 'string') {
    str += `width: ${size}; `
    str += `height: ${size}; `
  }
  if (typeof size === 'number') {
    str += `width: ${size}rpx; `
    str += `height: ${size}rpx; `
  }
  return str
})
</script>
<style lang="scss" scoped>
.yh-avatar-wrapper {
  display: inline-block;
  width: auto;
  font-size: 26rpx;
  font-weight: 400;
  line-height: 44rpx;
  color: #ffffff;
  text-align: center;
}
.yh-avatar {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
</style>
