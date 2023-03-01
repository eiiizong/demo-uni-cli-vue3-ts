<template>
  <view class="query-conditions">
    <div class="input-wrapper">
      <input
        type="text"
        class="input"
        placeholder="请输入统计对象姓名"
        confirm-type="search"
        :value="modelValue"
        :focus="focus"
        @input="onInput"
        @focus="emit('focus')"
        @confirm="emit('confirm')" />
      <YhIcon name="search" size="32rpx" class="btn" @click="emit('confirm')" />
    </div>
  </view>
</template>

<script setup lang="ts">
  import YhIcon from '@/components/yh/icon/icon.vue'

  const emit = defineEmits(['update:modelValue', 'confirm', 'focus'])

  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    },
    focus: {
      type: Boolean
    }
  })

  // input 输入触发
  const onInput = (e: unknown) => {
    const { detail } = e as WechatMiniprogram.Input
    const { value } = detail
    emit('update:modelValue', value)
  }
</script>

<style lang="scss" scoped>
  .query-conditions {
    width: 100%;
    padding: 24rpx $spacing;
    background-color: #fff;
    .input-wrapper {
      width: 100%;
      position: relative;
      .input {
        height: 84rpx;
        background-color: transparent;
        border-radius: 4rpx;
        font-size: 28rpx;
        line-height: 1.4;
        padding-left: 20rpx;
        padding-right: 20rpx * 2 + 32rpx;
        border: 1px solid $color-border;
      }
      .btn {
        position: absolute;
        top: 50%;
        right: 20rpx;
        transform: translateY(-50%);
        color: #565f6e;
      }
    }
  }
</style>
