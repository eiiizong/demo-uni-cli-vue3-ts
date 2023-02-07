<template>
  <view class="search-statistics-object">
    <QueryCondition />
    <QueryResult />

    <div class="button-wrapper">
      <YhButton type="primary" block>确定</YhButton>
    </div>
  </view>
</template>

<script setup lang="ts">
  import YhButton from '@/components/yh/button/button.vue'
  import QueryCondition from './QueryCondition.vue'
  import QueryResult from './QueryResult.vue'
</script>

<style lang="scss" scoped>
  .search-statistics-object {
    width: 100%;
    .button-wrapper {
      padding: $spacing;
    }
  }
</style>
