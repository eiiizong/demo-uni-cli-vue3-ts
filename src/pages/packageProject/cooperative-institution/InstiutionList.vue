<template>
  <view class="instiution-list">
    <div
      class="list"
      v-for="item in renderList"
      :key="item.id"
      :class="item.id === modelValue ? 'active' : ''"
      @click="emit('update:modelValue', item.id)"
    >
      <div class="toolbar">
        <div class="left">
          <span>{{ item.name }}</span>
          <span>（{{ item.list ? item.list.length : '0' }}）</span>
        </div>
        <YhIcon name="arrow-down" class="icon" size="20rpx"></YhIcon>
      </div>

      <div class="list-content" v-if="item.id === modelValue">
        <div class="list-content-item" v-for="itemList in item.list" :key="itemList.id">
          {{ itemList.name }}
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import YhIcon from '@/components/yh/icon/icon.vue'

import type { Api } from '@/server/types'
import type { PropType } from 'vue'
import { ref } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  renderList: {
    type: Array as PropType<Api.AAA_01_Result[]>,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped>
.instiution-list {
  width: 100%;
  padding-top: 16rpx;
  .list {
    background-color: #ffffff;
    margin-bottom: 16rpx;
    padding: 0 $spacing;
    .toolbar {
      width: 100%;
      height: 110rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #202429;
      font-size: 32rpx;
      line-height: 1.4;
      .icon {
        color: #565f6e;
      }
    }
    .list-content {
      border-top: 1px solid $color-border;
      padding: $spacing 0;
      .list-content-item {
        margin-bottom: $spacing;
        background-color: #e2f2ff;
        border-radius: 8rpx;
        font-size: 32rpx;
        color: #202429;
        padding: 0 $spacing;
        line-height: 88rpx;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    &.active {
      .toolbar {
        color: $primary;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
