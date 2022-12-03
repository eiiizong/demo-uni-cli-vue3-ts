<template>
  <view class="home">
    <YhNavBar title="首页"></YhNavBar>
  </view>
</template>

<script setup lang="ts">
// import { ref, computed } from 'vue'
import YhNavBar from '@/components/yh/nav-bar/nav-bar.vue'
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
}
</style>
