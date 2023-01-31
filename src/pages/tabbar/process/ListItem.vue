<template>
  <view class="list-item">
    <div class="title">
      <div class="left">
        <div class="iconimg"></div>
        <div class="text">担保费用补贴申请</div>
        <div class="tag">已完成</div>
      </div>
      <div class="right" @click="handleView">流程一览</div>
    </div>
    <div class="cells">
      <div class="cell">
        <div class="key">申报机构：</div>
        <div class="value">12</div>
      </div>
      <div class="cell">
        <div class="key">申报时间：</div>
        <div class="value">12-12-12</div>
      </div>
    </div>
    <div class="tip">如需查看详情，请登录“蓉易贷”网站查看</div>
  </view>
</template>

<script setup lang="ts">
  // import { ref } from 'vue'

  const props = defineProps({
    renderData: {
      type: Object,
      required: true
    }
  })

  // 查看更多
  const handleView = () => {
    const { renderData } = props
    // eslint-disable-next-line no-console
    console.log(renderData)
  }
</script>

<style lang="scss" scoped>
  .list-item {
    width: 100%;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(72, 143, 231, 0.2);
    padding: 0 $spacing;
    padding-bottom: $spacing;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 90rpx;
      border-bottom: 1px solid $color-border;
      color: $color-text;
      .left {
        display: flex;
        align-items: center;
      }
    }
    .cells {
      width: 100%;
      color: $color-text;
      padding-top: 20rpx;
      .cell {
        display: flex;
        align-items: center;
        .key {
          color: $color-text-placeholder;
        }
        .value {
          flex: 1;
          overflow: hidden;
        }
      }
    }
    .tip {
      color: $color-danger;
    }
  }
</style>
