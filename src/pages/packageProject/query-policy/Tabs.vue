<template>
  <view class="tabs">
    <div
      class="tab"
      v-for="item in renderList"
      :class="item.id === modelValue ? 'active' : ''"
      @click="emit('update:modelValue', item.id)"
    >
      <div class="name">
        <span>{{ item.name }}</span>
        <span>({{ item.num | 0 }})</span>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  renderList: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 $spacing;
  .tab {
    position: relative;
    font-size: 32rpx;
    font-weight: 400;
    line-height: 88rpx;
    color: #000000;
    transition: all 0.3s;
    &::after {
      content: '';
      position: absolute;
      width: 80rpx;
      height: 6rpx;
      border-radius: 4rpx;
      background-color: transparent;
      left: 50%;
      bottom: -1px;
      transform: translateX(-50%);
      transition: all 0.3s;
    }
    &.active {
      color: $primary;
      font-weight: 500;
      &::after {
        width: 80rpx;
        background-color: $primary;
      }
    }
  }
  .name {
    display: flex;
    align-items: center;
    transition: all 0.3s;
  }
}
</style>
