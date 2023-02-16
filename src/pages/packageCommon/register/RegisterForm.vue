<template>
  <div class="register-form">
    <div class="input-wrapper">
      <img :src="imageIcon01" alt="" class="img" />
      <input class="input" type="text" placeholder="请输入" />
    </div>
    <div class="input-wrapper">
      <img :src="imageIcon02" alt="" class="img" />
      <input class="input" type="text" placeholder="请输入" />
    </div>
    <div class="input-wrapper">
      <img :src="imageIcon03" alt="" class="img" />
      <input class="input" type="text" placeholder="请输入" disabled />
    </div>
  </div>
</template>
<script setup lang="ts">
  import imageIcon01 from './images/icon-01.png'
  import imageIcon02 from './images/icon-02.png'
  import imageIcon03 from './images/icon-03.png'

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
    padding-bottom: 40rpx;
    .input-wrapper {
      position: relative;
      margin-bottom: 20rpx;
      .img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 20rpx;
        width: 40rpx;
        height: 40rpx;
      }
      .input {
        width: 100%;
        height: 84rpx;
        border: 1px solid $color-border;
        padding-left: 80rpx;
        padding-right: 20rpx;
        color: #333;
        font-size: 30rpx;
        line-height: 40rpx;
        border-radius: 8rpx;
        overflow: hidden;
      }
      &:first-child {
        .img {
          width: 44rpx;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
