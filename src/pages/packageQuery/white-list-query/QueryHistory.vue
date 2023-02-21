<template>
  <view v-if="renderList.length > 0" class="query-history">
    <div class="title">
      <div class="left">历史记录</div>
      <div class="right">
        <YhIcon name="clear" size="32rpx" />
      </div>
    </div>
    <div class="items">
      <div v-for="(item, index) in renderList" :key="index" class="item" @click="emit('click', item)">{{ item }}</div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import YhIcon from '@/components/yh/icon/icon.vue'

  import type { PropType } from 'vue'

  const emit = defineEmits(['click'])

  const props = defineProps({
    renderList: {
      type: Array as PropType<string[]>,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .query-history {
    width: 100%;
    padding: 0 $spacing;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 28rpx;
      line-height: 40rpx;
      color: rgba(0, 0, 0, 0.4);
      padding: 16rpx 0;
    }
    .items {
      padding-top: 4rpx;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .item {
        background-color: #e6e6e6;
        border-radius: 30px;
        font-size: 30rpx;
        font-weight: 400;
        line-height: 58rpx;
        color: #666666;
        padding: 0 20rpx;
        margin-right: 20rpx;
        margin-bottom: 20rpx;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
