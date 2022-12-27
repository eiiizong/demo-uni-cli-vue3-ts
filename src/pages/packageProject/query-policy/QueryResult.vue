<template>
  <view class="query-result">
    <template v-for="item in 50">
      <div>1233</div>
    </template>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits([''])
const props = defineProps({
  renderList: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped>
.query-result {
  width: 100%;
  flex: 1;
  overflow: auto;
}
</style>
