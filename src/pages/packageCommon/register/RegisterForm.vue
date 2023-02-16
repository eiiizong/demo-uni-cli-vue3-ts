<template>
  <div class="register-form">
    <div class="input-wrapper">
      <div class="label">名称</div>
      <input class="input" type="text" placeholder="请输入企业名称或个体工商户名称" />
    </div>
    <div class="input-wrapper">
      <div class="label">用户名</div>
      <input class="input" type="text" placeholder="请输入用户名" />
    </div>
    <div class="input-wrapper">
      <div class="label">手机号</div>
      <input class="input" type="text" placeholder="请输入手机号" disabled />
    </div>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['update:modelValue'])
  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .register-form {
    padding-top: 68rpx;
    padding-bottom: 52rpx;
    .input-wrapper {
      position: relative;
      margin-bottom: 28rpx;
      color: #7b7c7e;
      font-weight: 500;
      .label {
        font-size: 28rpx;
        line-height: 42rpx;
        color: inherit;
        margin-bottom: 8rpx;
      }
      .input {
        width: 100%;
        height: 88rpx;
        background-color: #f5f6f9;
        padding: 0 16rpx;
        color: inherit;
        font-size: 28rpx;
        line-height: 1.4;
        border-radius: 8rpx;
        overflow: hidden;
        font-weight: 500;
        transition: all 0.3s;
        &[disabled] {
          background-color: #f1f1f1;
          opacity: 0.8;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
