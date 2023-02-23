<template>
  <div class="card-item">
    <div class="name-wrapper">
      <img class="img" :src="iamges[index % 7]" alt="" />
      <div class="key">补贴支付申请</div>
      <div class="value">共186笔</div>
    </div>
    <div class="cells">
      <div class="cell">
        <div class="key">
          <div class="point"></div>
          <div class="text">通过(笔)</div>
        </div>
        <div class="value">170</div>
      </div>
      <div class="cell">
        <div class="key">
          <div class="point"></div>
          <div class="text">退回(笔)</div>
        </div>
        <div class="value">170</div>
      </div>
      <div class="cell">
        <div class="key">
          <div class="point"></div>
          <div class="text">作废(笔)</div>
        </div>
        <div class="value">170</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import image01 from './images/01.png'
  import image02 from './images/02.png'
  import image03 from './images/03.png'
  import image04 from './images/04.png'
  import image05 from './images/05.png'
  import image06 from './images/06.png'
  import image07 from './images/07.png'

  import type { PropType } from 'vue'
  import type { W013SuccessResultListItem } from '@/server/types/api'

  const iamges = [image01, image02, image03, image04, image05, image06, image07]

  const props = defineProps({
    // 渲染数据
    renderData: {
      type: Object as PropType<W013SuccessResultListItem>,
      required: true
    },
    /**
     * 序号 决定图片展示 从0开始
     */
    index: {
      type: Number,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  $color1: #0071ff;
  $color2: #ffa000;
  $color3: #bfbfbf;
  .card-item {
    background-color: #ffffff;
    border-radius: 10rpx;
    padding: 0 24rpx;
    margin-bottom: 24rpx;
    .name-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 30rpx;
      line-height: 42rpx;
      padding: 14rpx 0;
      border-bottom: 1rpx solid $color-border;
      position: relative;
      .img {
        width: 20rpx;
        height: 54rpx;
        position: absolute;
        top: 0;
        left: 2rpx;
      }
      .key {
        color: #666666;
        padding-left: 34rpx;
      }
      .value {
        flex: 1;
        overflow: hidden;
        color: #333333;
        text-align: right;
      }
    }
    .cells {
      display: flex;
      align-items: center;
      .cell {
        width: 33.33%;
        color: $color1;
        font-size: 28rpx;
        line-height: 40rpx;
        text-align: center;
        padding: 24rpx 0;
        .key {
          font-size: inherit;
          color: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          .point {
            width: 20rpx;
            height: 20rpx;
            background-color: $color1;
            border-radius: 50%;
            margin-right: 10rpx;
          }
        }
        .value {
          width: 100%;
          font-size: 44rpx;
          line-height: 50rpx;
          color: #475f7e;
          font-weight: 700;
          padding-top: 14rpx;
        }
        &:last-child {
          color: $color3;
          .key {
            .point {
              background-color: $color3;
            }
          }
        }
        &:nth-of-type(2) {
          color: $color2;
          .key {
            .point {
              background-color: $color2;
            }
          }
        }
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
