<template>
  <view class="button-wrapper">
    <button @click="emit('click')">{{ name }}</button>
  </view>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { onMounted, ref, computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['click'])

onMounted(() => {})
</script>

<style lang="scss" scoped>
.button-wrapper {
  padding: 20px;
}
</style>
