<template>
  <view class="home"> home </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStoreSystemInfo } from '@/store/modules/systemInfo'

const storeSystemInfo = useStoreSystemInfo()
const systemInfo = computed(() => storeSystemInfo.systemInfo)

setTimeout(() => {}, 1000)
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
