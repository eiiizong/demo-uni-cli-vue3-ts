<template>
  <view class="card-item" @click="emit('clcik')">
    <div class="name">
      <div class="left">李小兵</div>
      <YhIcon name="arrow-right" size="30rpx" />
    </div>
    <div class="info">
      <div class="key">所属组织</div>
      <div class="value">四川省-成都市融资再担保有限责任公司-创新产品部</div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import YhIcon from '@/components/yh/icon/icon.vue'

  const emit = defineEmits(['clcik'])
  const props = defineProps({
    value: {
      type: String,
      default: ''
    }
  })
</script>

<style lang="scss" scoped>
  .card-item {
    width: 100%;
    background-color: #fff;
    padding: 0 $spacing;
    color: #333333;
    font-size: 32rpx;
    line-height: 86rpx;
    .name {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid $color-border;
    }
    .info {
      display: flex;
      align-items: center;
      line-height: 40rpx;
      min-height: 86rpx;
      padding: 20rpx 0;
      .key {
        color: #999999;
      }
      .value {
        flex: 1;
        overflow: hidden;
        font-size: 28rpx;
        padding-left: 20rpx;
      }
    }
  }
</style>
