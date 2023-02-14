<template>
  <view class="card-item" @click="emit('clcik')">
    <div class="name">
      <img :src="image01" alt="" class="img" />
      <div class="left">{{ renderData.userName || '1233' }}</div>
      <div class="right">
        <YhIcon name="arrow-right" size="30rpx" />
      </div>
    </div>
    <div class="info">
      <div v-for="(item, index) in renderData.org || ['1', '2', '22']" :key="index" class="item">
        <div class="line" :style="{ width: 24 + index * 8 + 'rpx' }"></div>
        <div class="text">{{ item }}</div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import image01 from './images/01.png'

  import YhIcon from '@/components/yh/icon/icon.vue'

  import type { PropType } from 'vue'
  import type { Store } from '@/stores/types'

  const emit = defineEmits(['clcik'])
  const props = defineProps({
    value: {
      type: String,
      default: ''
    },
    renderData: {
      type: Object as PropType<Store.WorkloadQueryInfo>,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  $border-color: #c4d0dd;
  .card-item {
    width: 100%;
    border-radius: 16rpx;
    border: solid 1rpx $border-color;
    overflow: hidden;
    background-image: linear-gradient(45deg, #e6f2ff 0%, #ffffff 100%);
    .name {
      display: flex;
      align-items: center;
      border-bottom: 1px solid $border-color;
      font-size: 32rpx;
      line-height: 44rpx;
      color: #333;
      padding: 18rpx $spacing;
      .img {
        width: 28rpx;
        height: 28rpx;
        margin-right: 10rpx;
      }
      .left {
        flex: 1;
        overflow: hidden;
      }
      .right {
        color: #b4c2d2;
      }
    }
    .info {
      padding: 24rpx 48rpx;
      .item {
        font-size: 28rpx;
        line-height: 40rpx;
        color: #556373;
        display: flex;
        align-items: center;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          width: 1px;
          height: 100%;
          border-left: 1px dashed $border-color;
        }
        .line {
          height: 1px;
          border-top: 1px dashed $border-color;
          margin-right: 10rpx;
        }
        &:first-child {
          &::before {
            height: 50%;
            bottom: 0;
          }
        }
        &:last-child {
          &::before {
            height: 50%;
            top: 0;
          }
        }
      }
    }
  }
</style>
