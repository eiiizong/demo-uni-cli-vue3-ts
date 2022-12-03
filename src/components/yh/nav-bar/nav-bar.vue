<template>
  <view class="yh-nav-bar">
    <view class="yh-nav-bar__left" @click="emit('click-left')">
      <block v-if="leftArrow || leftText">
        <yh-icon v-if="leftArrow" size="16px" name="arrow-left" custom-class="yh-nav-bar__arrow" />
        <view v-if="leftText" class="yh-nav-bar__text" hover-class="yh-nav-bar__text--hover" hover-stay-time="70">{{
          leftText
        }}</view>
      </block>
      <slot v-else name="left" />
    </view>
    <view class="yh-nav-bar__title title-class yh-ellipsis">
      <view v-if="title">{{ title }}</view>
      <slot v-else name="title" />
    </view>
    <view class="yh-nav-bar__right" @click="emit('click-right')">
      <view v-if="rightText" class="yh-nav-bar__text" hover-class="yh-nav-bar__text--hover" hover-stay-time="70">{{
        rightText
      }}</view>
      <slot v-else name="right" />
    </view>
  </view>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'

const props = defineProps({
  title: String,
  fixed: Boolean,
  // 左边文本
  leftText: String,
  // 右边文本
  rightText: String,
  // 左边返回箭头
  leftArrow: Boolean,
  border: {
    type: Boolean,
    value: true,
  },
  zIndex: {
    type: Number,
    value: 1,
  },
  safeAreaInsetTop: {
    type: Boolean,
    value: true,
  },
})

const emit = defineEmits(['click-left', 'click-right'])
const _statusBarHeight: Ref<number | undefined> = ref(0)

onMounted(() => {
  const { statusBarHeight } = uni.getSystemInfoSync()
  _statusBarHeight.value = statusBarHeight
})
</script>

<style lang="scss" scoped>
.yh-nav-bar {
  width: 100%;
  padding-top: var(--status-bar-height);
  background-color: #f00;
}
</style>
