<template>
  <div class="yh-load-more-wrapper">
    <div class="yh-load-more-tip_over" v-if="isLoadOver">
      <span class="text">没有其他数据了</span>
    </div>
    <div class="yh-load-more-tip" v-else>
      <span class="text">上拉加载更多</span>
    </div>
  </div>
</template>

<script setup>
import imageAvatarDefault from './images/default.png'

import { computed } from 'vue'

const emit = defineEmits(['upload:modelValue'])
const props = defineProps({
  // 是否加载完成
  isLoadOver: {
    type: [Boolean],
    required: true,
  },
  // 是否在加载中
  modelValue: {
    type: [Boolean],
    required: true,
  },
})
</script>
<style lang="scss" scoped>
.yh-load-more-wrapper {
  width: 100%;
  font-size: 24rpx;
  font-weight: 400;
  line-height: 44rpx;
  padding: 0 $spacing;
  text-align: center;
  margin-top: $spacing;
}
.yh-load-more-tip {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20rpx;
  color: $primary;
}
.yh-load-more-tip_over {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #d4d4d4;
  position: relative;

  .text {
    position: relative;
    padding: 0 20rpx;
    background-color: #fff;
    z-index: 1;
  }
  &::after {
    display: none;
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    top: 50%;
    z-index: 0;
    background-color: #d8d8d8;
  }
}
</style>
