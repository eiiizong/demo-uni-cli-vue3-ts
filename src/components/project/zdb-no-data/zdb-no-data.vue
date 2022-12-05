<template>
  <div class="yh-no-data-wrapper">
    <img class="img" :src="images01" alt="" />
    <div class="tip">{{ tip }}</div>
  </div>
</template>

<script setup lang="ts">
import images01 from './images/02.png'

import { computed } from 'vue'

const emit = defineEmits(['click'])

const props = defineProps({
  tip: {
    type: String,
    default: () => '暂无相关数据',
  },
})
</script>

<style lang="scss" scoped>
.yh-no-data-wrapper {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  .img {
    width: 320rpx;
    height: 320rpx;
    margin: auto;
  }
  .tip {
    font-size: 26rpx;
    line-height: 1.5;
    color: $color-text-placeholder;
    padding-bottom: $spacing-col-base;
  }
}
</style>
