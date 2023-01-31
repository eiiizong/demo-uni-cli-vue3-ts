<template>
  <view class="home-header-today-statistics">
    <div class="toolbar">
      <div class="left">
        <div>今日蓉易贷</div>
        <div>2022-10-01</div>
      </div>
      <div class="right">
        <div>信贷规模</div>
        <div>信贷模式</div>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <div class="value">9034.09</div>
        <div class="key">亿元</div>
      </div>
      <div class="right">
        <div class="key">杠杆放大：</div>
        <div class="value">60倍</div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .home-header-today-statistics {
    width: 100%;
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        flex: 1;
        overflow: hidden;
        display: flex;
        align-items: center;
      }
      .right {
        display: flex;
        align-items: center;
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
      }
      .right {
        display: flex;
        align-items: center;
      }
    }
  }
</style>
