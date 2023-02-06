<template>
  <view class="query-condition">
    <div class="input-wrapper">
      <div class="label">统计对象</div>
      <div class="value">
        <div class="input">哈哈</div>
      </div>
    </div>
    <div class="input-wrapper">
      <div class="label">起止日期</div>
      <div class="value">
        <picker class="picker">
          <view class="picker-content">
            <div class="picker-value"></div>
            <div class="picker-placeholder"></div>
          </view>
        </picker>
        <div>至</div>
        <picker class="picker">
          <view class="picker-content">
            <div class="picker-value"></div>
            <div class="picker-placeholder"></div>
          </view>
        </picker>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  const props = defineProps({
    value: {
      type: String,
      default: ''
    }
  })
</script>

<style lang="scss" scoped>
  .query-condition {
    width: 100%;
  }
</style>
