<template>
  <view class="query-condition">
    <div class="input-wrapper">
      <input
        type="text"
        class="input"
        placeholder="请输入关键字"
        confirm-type="search"
        :value="modelValue"
        @input="onInput"
        @confirm="emit('confirm')" />
      <button class="button">
        <YhIcon name="search" size="36rpx" />
      </button>
    </div>
  </view>
</template>

<script setup lang="ts">
  import YhIcon from '@/components/yh/icon/icon.vue'

  const emit = defineEmits(['update:modelValue', 'confirm'])
  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    }
  })

  const onInput = (event: unknown) => {
    const { detail } = event as WechatMiniprogram.Input
    const { value } = detail
    emit('update:modelValue', value)
  }
</script>

<style lang="scss" scoped>
  .query-condition {
    width: 100%;
    background-color: #fff;
    padding: 24rpx $spacing;
    border: 1rpx solid $color-border;
    .input-wrapper {
      width: 100%;
      position: relative;
      .input {
        display: block;
        width: 100%;
        height: 72rpx;
        background-color: transparent;
        border-radius: 4rpx;
        line-height: 40rpx;
        color: #333333;
        font-size: 28rpx;
        border: solid 1px $color-border;
        padding: 16rpx 82rpx 16rpx 18rpx;
      }
      .button {
        position: absolute;
        top: 50%;
        color: #565f6e;
        width: auto;
        right: 22rpx;
        background-color: transparent;
        transform: translateY(-50%);
      }
    }
  }
</style>
