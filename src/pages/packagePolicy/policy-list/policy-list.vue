<template>
  <view class="policy-details">123 </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'

  const news = ref('')

  onLoad(() => {
    news.value = '12323'
  })
</script>

<style lang="scss" scoped>
  .policy-details {
    width: 100%;
    padding: $spacing;
    background-color: #fff;
  }
</style>
