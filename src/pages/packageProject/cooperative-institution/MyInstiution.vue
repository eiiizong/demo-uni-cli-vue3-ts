<template>
  <view class="my-instiuition">
    <YhButton
      block
      custom-style="background-color:transparent;"
      type="primary"
      plain
      @click="handleClicck"
      >我的合作机构</YhButton
    >
  </view>
</template>

<script setup lang="ts">
import YhButton from '@/components/yh/button/button.vue'

import { ref } from 'vue'
// const emit = defineEmits([''])
// const props = defineProps({

// })

const handleClicck = () => {}
</script>

<style lang="scss" scoped>
.my-instiuition {
  width: 100%;
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  padding: $spacing 54rpx;
}
</style>
