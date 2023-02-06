<template>
  <view class="query-condition">
    <div class="input-wrapper">
      <input type="text" class="input" />
      <button>搜索</button>
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
