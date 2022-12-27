<template>
  <view class="query-criteria">
    <div class="input-wrapper">
      <input
        type="text"
        class="input"
        placeholder="请输入关键字"
        :value="modelValue"
        confirm-type="search"
        @input="handleInput"
        @confirm="emit('confirm')"
      />
      <YhIcon name="search" size="32rpx" class="btn"></YhIcon>
    </div>
  </view>
</template>

<script setup lang="ts">
import YhIcon from '@/components/yh/icon/icon.vue'

import { ref } from 'vue'

const emit = defineEmits(['update:modelValue', 'confirm'])

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

// WechatMiniprogram.Input
const handleInput = (e: any) => {
  const { value } = e.detail
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.query-criteria {
  width: 100%;
  padding: 24rpx $spacing;
  .input-wrapper {
    width: 100%;
    position: relative;
    .input {
      height: 72rpx;
      background-color: #f5f5f5;
      border-radius: 36rpx;
      font-size: 28rpx;
      line-height: 1.4;
      padding-left: 34rpx;
      padding-right: 34rpx * 2 + 32rpx;
    }
    .btn {
      position: absolute;
      top: 50%;
      right: 34rpx;
      transform: translateY(-50%);
      color: #565f6e;
    }
  }
}
</style>
