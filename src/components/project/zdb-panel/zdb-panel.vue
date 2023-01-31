<template>
  <view class="zdb-panel">
    <div class="title">
      <div class="left">{{ title }}</div>
      <div v-if="rightText" class="right" @click="emit('click')">
        <span>{{ rightText }}</span>
        <YhIcon name="arrow-right" size="24rpx" />
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </view>
</template>

<script setup lang="ts">
  import YhIcon from '@/components/yh/icon/icon.vue'

  const emit = defineEmits(['click'])
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    rightText: {
      type: String,
      default: () => ''
    }
  })
</script>

<style lang="scss" scoped>
  .zdb-panel {
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 32rpx;
      font-weight: 400;
      line-height: 1;
      color: #333333;
      height: 100rpx;
      padding: 0 40rpx;
      .left {
        font-weight: 700;
      }
      .right {
        font-size: 24rpx;
        font-weight: 400;
        line-height: 1;
        color: #999999;
      }
    }
    .content {
      padding: 0 $spacing;
    }
  }
</style>
