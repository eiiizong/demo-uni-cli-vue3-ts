<template>
  <view class="process-details">
    <ProcessHeader />
    <div class="wrapper">
      <div class="items">
        <div v-for="item in processList" :key="item.id" class="item" :class="[item.id === '0' ? 'ing' : '']">
          <div class="name-wrapper">
            <div class="icon"></div>
            <div class="name">备案申请</div>
            <div class="status">退回</div>
          </div>
          <div class="content-wrapper">
            <div class="cell">
              <div class="key">经办机构：</div>
              <div class="value">成华区金融局</div>
            </div>
            <div class="cell">
              <div class="key">经办人：</div>
              <div class="value">张超</div>
            </div>
            <div class="cell">
              <div class="key">经办时间：</div>
              <div class="value">2022/09/12 13:12</div>
            </div>
            <div class="cell">
              <div class="key">经办状态：</div>
              <div class="value">完结</div>
            </div>
          </div>
        </div>
      </div>
      <div class="process-status">进行中</div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import ProcessHeader from './ProcessHeader.vue'
  import { ref } from 'vue'

  const processList = ref([
    {
      id: '0'
    },
    {
      id: '1'
    },
    {
      id: '2'
    },
    {
      id: '3'
    },
    {
      id: '4'
    },
    {
      id: '5'
    },
    {
      id: '6'
    },
    {
      id: '7'
    }
  ])
</script>

<style lang="scss" scoped>
  $border-color: $color-primary;
  .process-details {
    width: 100%;
    background-color: #fff;
    min-height: 100%;
    min-height: 100vh;
  }
  .wrapper {
    position: relative;
    .process-status {
      position: absolute;
      top: 28rpx;
      right: 32rpx;
      width: 100rpx;
      height: 50rpx;
      background-image: linear-gradient(to right, #ffffff 0%, #c3e1ff 100%);
      font-size: 28rpx;
      line-height: 50rpx;
      color: #0071ff;
      text-align: center;
    }
  }
  .items {
    width: 100%;
    padding: 28rpx 56rpx;
    .item {
      width: 100%;
      padding-left: 52rpx;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 16rpx;
        width: 1px;
        height: 100%;
        border-left: 1px dashed $border-color;
      }
      &:first-child {
        &::before {
          height: calc(100% - 22rpx);
        }
      }
      &:last-child {
        &::before {
          height: 22rpx;
          top: 0;
        }
      }
      // 进行中
      &.ing {
        .name-wrapper {
          .icon {
            background-image: linear-gradient(0deg, #ff8000 0%, #ffe7a6 100%);
          }
        }
      }
    }
    .name-wrapper {
      width: 100%;
      font-size: 32rpx;
      color: #202429;
      line-height: 44rpx;
      position: relative;
      display: flex;
      align-items: center;
      .icon {
        transition: all 0.3s;
        width: 30rpx;
        height: 30rpx;
        position: absolute;
        top: 50%;
        left: -50rpx;
        transform: translateY(-50%) rotate(135deg);
        background-image: linear-gradient(0deg, #0071ff 0%, #a6cdff 100%);
        transition: all 0.3s;
      }
      .status {
        font-size: 22rpx;
        line-height: 1;
        color: #f00;
        background-color: rgba(255, 0, 0, 0.06);
        border-radius: 4rpx;
        border: solid 1rpx rgba(255, 0, 0, 0.23);
        padding: 5rpx 8rpx;
        margin-left: 16rpx;
      }
    }
    .content-wrapper {
      padding: 16rpx 0 32rpx;
      font-size: 30rpx;
      line-height: 50rpx;
      color: #565f6e;
      .cell {
        display: flex;
        align-items: center;
      }
    }
  }
</style>
