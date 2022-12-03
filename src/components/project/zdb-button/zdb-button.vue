<template>
  <view class="button-wrapper">
    <button @click="emit('click')" :open-type="openType" @getphonenumber="onGetPhoneNumber">{{ name }}</button>
  </view>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { onMounted, ref, computed } from 'vue'

const emit = defineEmits(['click', 'getphonenumber'])
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  openType: {
    type: String,
    default: '',
  },
})

const onGetPhoneNumber = (event: WechatMiniprogram.ButtonGetPhoneNumber) => {
  emit('getphonenumber', event)
}

onMounted(() => {})
</script>

<style lang="scss" scoped>
.button-wrapper {
  padding: 20px;
}
</style>
