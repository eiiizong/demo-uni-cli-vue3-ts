<template>
  <view class="zdb-panel">
    <div class="title">
      <div class="left">{{ title }}</div>
      <div class="right">查看更多</div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </view>
</template>

<script setup lang="ts">
// import type { Ref } from 'vue'
// import { onMounted, ref, computed } from 'vue'

const emit = defineEmits(['click'])
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.zdb-panel {
  padding: 20px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
