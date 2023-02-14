<template>
  <view class="card-item" @click="emit('clcik')">
    <div class="name">
      <img :src="image01" alt="" class="img" />
      <div class="left">李小兵</div>
      <div class="right">
        <YhIcon name="arrow-right" size="30rpx" />
      </div>
    </div>
    <div class="info">
      <div v-for="(item, index) in renderData.org" :key="index" class="item">{{ item }}</div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import image01 from './images/01.png'

  import YhIcon from '@/components/yh/icon/icon.vue'

  const emit = defineEmits(['clcik'])
  const props = defineProps({
    value: {
      type: String,
      default: ''
    },
    renderData: {
      type: Object,
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
    }
  }
</style>
