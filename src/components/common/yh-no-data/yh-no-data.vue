<template>
  <div class="ez-no-data-wrapper">
    <image class="img" :src="imageSearchResult" alt="" />
    <span class="tip">{{ tip }}</span>
  </div>
</template>

<script setup>
import imageSearchResult from './images/search-result.png'
import { computed } from 'vue'

const emit = defineEmits(['click'])
const props = defineProps({
  tip: {
    type: [String],
    default: '暂无数据',
  },
})
</script>
<style lang="scss" scoped>
.ez-no-data-wrapper {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding-top: $spacing * 2;
  .img {
    width: 320rpx;
    height: 320rpx;
    margin: auto;
  }
  .tip {
    font-size: 26rpx;
    line-height: 1.5;
    color: $color-placeholder;
    padding-bottom: 30rpx;
  }
}
</style>
