<template>
  <view class="zdb-card-apply">
    <div class="bg">
      <img :src="imageBg" alt="" class="img" />
    </div>
    <div class="con">
      <div class="title">
        <div class="name">担保费补贴申请</div>
        <div class="status">进行中</div>
      </div>
      <div class="cells">
        <div class="cell">
          <div class="key">申报机构：</div>
          <div class="value">担保融资公司</div>
        </div>
        <div class="cell">
          <div class="key">申报时间：</div>
          <div class="value">担保融资公司</div>
        </div>
      </div>
      <div class="footer">
        <div class="left">如需查看数据详情，登录“蓉易贷”网站端</div>
        <div class="right">
          <span>流程一览</span>
          <YhIcon name="arrow-right" size="20rpx" />
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import imageBg from './images/bg.png'

  import YhIcon from '@/components/yh/icon/icon.vue'

  import type { PropType } from 'vue'

  interface Item {
    id?: string
    key?: string
    value?: string | number
    unit?: string
  }

  const emit = defineEmits(['click'])
  const props = defineProps({
    renderData: {
      type: Object as PropType<Item>,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .zdb-card-apply {
    width: 100%;
    position: relative;
    .bg {
      .img {
        width: 100%;
        height: 286rpx;
      }
    }
    .con {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 32rpx;
    }
    .title {
      color: #202429;
      font-size: 32rpx;
      line-height: 44rpx;
      position: relative;
      padding-right: 100rpx;
      .status {
        position: absolute;
        top: 50%;
        right: -32rpx;
        transform: translateY(-50%);
        line-height: 50rpx;
        background-image: linear-gradient(to right, #ffffff 0%, #c3e1ff 100%);
        color: $color-primary;
        font-size: 28rpx;
        padding: 0 8rpx;
      }
    }
    .cells {
      color: #565f6e;
      font-size: 32rpx;
      padding-top: 24rpx;
      .cell {
        display: flex;
        align-items: center;
        line-height: 56rpx;
      }
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 32rpx;
      padding-top: 18rpx;
      .left {
        flex: 1;
        overflow: hidden;
        font-size: 24rpx;
        color: #f68a61;
      }
      .right {
        font-size: 26rpx;
        color: #748193;
        display: flex;
        align-items: center;
      }
    }
  }
</style>
