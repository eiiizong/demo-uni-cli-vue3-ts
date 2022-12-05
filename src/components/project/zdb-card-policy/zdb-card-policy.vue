<template>
  <div class="zdb-no-data">
    <img class="img" :src="imagesNoData" alt="" />
    <div class="tip">{{ tip }}</div>
  </div>
</template>

<script setup lang="ts">
import imagesNoData from './images/no-data.png'

defineProps({
  tip: {
    type: String,
    default: () => '暂无相关数据',
  },
})
</script>

<style lang="scss" scoped>
.zdb-no-data {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  .img {
    width: 320rpx;
    height: 320rpx;
    margin: auto;
  }
  .tip {
    font-size: $font-size-base;
    line-height: 1.4;
    color: $color-text-placeholder;
    padding-bottom: $spacing-col-base;
  }
}
</style>
