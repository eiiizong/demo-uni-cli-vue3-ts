<template>
  <div
    class="yh-card-wrapper"
    @click.stop="emit('click')"
    :style="wrapperStyle"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['click'])
const props = defineProps({
  padding: {
    type: [String],
    default: '30rpx',
  },
})

// 容器样式
const wrapperStyle = computed(() => {
  let str = ''
  const { padding } = props
  if (padding) {
    str += `padding: ${padding}; `
  }
  return str
})
</script>
<style lang="scss" scoped>
.yh-card-wrapper {
  width: 100%;
  padding: 30rpx $spacing;
  // background-color: #f7faff;
  background-color: tint($primary, 96%);
  border-radius: 8rpx;
  // border: solid 1rpx #deeaff;
  border: solid 1px tint($primary, 83%);
  position: relative;
}
</style>
