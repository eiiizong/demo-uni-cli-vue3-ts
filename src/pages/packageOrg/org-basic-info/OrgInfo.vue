<template>
  <view class="org-info">
    <div class="cell-wrapper">
      <div class="cell border">
        <div class="key">部门名称</div>
        <div class="value">党群纪检部</div>
      </div>
      <div class="cell">
        <div class="key">在岗人数</div>
        <div class="value">9人</div>
      </div>
      <div class="cell">
        <div class="key">部门职责</div>
        <div class="value">党群建设纪律</div>
      </div>
    </div>
    <div class="cell-wrapper">
      <div class="cell border">
        <div class="key">部门名称</div>
        <div class="value">党群纪检部</div>
      </div>
      <div class="cell">
        <div class="key">在岗人数</div>
        <div class="value">9人</div>
      </div>
      <div class="cell">
        <div class="key">部门职责</div>
        <div class="value">党群建设纪律</div>
      </div>
    </div>
    <div class="cell-wrapper">
      <div class="cell border">
        <div class="key">部门名称</div>
        <div class="value">党群纪检部</div>
      </div>
      <div class="cell">
        <div class="key">在岗人数</div>
        <div class="value">9人</div>
      </div>
      <div class="cell">
        <div class="key">部门职责</div>
        <div class="value">党群建设纪律</div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'

  const props = defineProps({
    renderData: {
      type: Object as PropType<any>,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .org-info {
    width: 100%;
    .cell-wrapper {
      border-radius: 16rpx;
      background-color: #fff;
      padding: 34rpx 24rpx;
      margin-bottom: $spacing;
      .cell {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #b2bbc7;
        font-size: 28rpx;
        line-height: 40rpx;
        margin-bottom: 24rpx;
        .key {
          padding-right: 20rpx;
        }
        .value {
          color: #000000;
        }
        &.border {
          border-bottom: 1px solid $color-border;
          padding-bottom: 18rpx;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
