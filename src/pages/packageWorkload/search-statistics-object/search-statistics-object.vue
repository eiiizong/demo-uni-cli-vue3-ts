<template>
  <view class="institution-details">
    <QueryCondition />
    <QueryResult />
    <YhButton>确定</YhButton>
  </view>
</template>

<script setup lang="ts">
  import YhButton from '@/components/yh/button/button.vue'
  import QueryCondition from './QueryCondition.vue'
  import QueryResult from './QueryResult.vue'
</script>

<style lang="scss" scoped>
  .institution-details {
    width: 100%;
  }
</style>
