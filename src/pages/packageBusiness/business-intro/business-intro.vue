<template>
  <view class="business-intro">
    <div class="tabs-wrapper">
      <div class="tabs">
        <div
          v-for="item in tabs"
          :key="item.id"
          class="tab"
          :class="item.id === activeTabId ? 'active' : ''"
          @click="activeTabId = item.id">
          {{ item.name }}
        </div>
      </div>
    </div>

    <div class="scroll-wrapper">
      <div class="tab-content">
        <img v-show="activeTabId === '1'" class="img" :src="image01" alt="" />
        <img v-show="activeTabId === '2'" class="img img-02" :src="image02" alt="" />
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import image01 from './images/01.png'
  import image02 from './images/02.png'

  import { ref } from 'vue'

  const tabs = [
    {
      id: '1',
      name: '情况介绍'
    },
    {
      id: '2',
      name: '业务特色'
    }
  ]

  const activeTabId = ref('1')
</script>

<style lang="scss" scoped>
  .business-intro {
    width: 100%;
    height: 100%;
    height: 100vh;

    .tabs-wrapper {
      padding: 16rpx $spacing;
      background-color: #fff;
      .tabs {
        display: flex;
        align-items: center;
        border: 1px solid $color-border;
        border-radius: 40px;
        overflow: hidden;
        .tab {
          width: 50%;
          line-height: 64rpx;
          background-color: #fafafa;
          font-size: 30rpx;
          color: #666;
          transition: all 0.3s;
          text-align: center;
          &.active {
            color: #fff;
            background-color: $color-primary;
          }
        }
      }
    }

    .scroll-wrapper {
      flex: 1;
      overflow: hidden;
      margin-top: 16rpx;
    }
    .tab-content {
      height: 100%;
      overflow: auto;
      padding: 20rpx 0;
      background-color: #fff;
      .img {
        width: 100%;
        height: 1474rpx;
        &.img-02 {
          height: 1210rpx;
        }
      }
    }
  }
</style>
