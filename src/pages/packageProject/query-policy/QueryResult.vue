<template>
  <view class="query-result">
    <div class="items">
      <div class="item" v-for="item in renderList">
        <ZdbCardPolicy type="02" :render-data="item"></ZdbCardPolicy>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import ZdbCardPolicy from '@/components/project/zdb-card-policy/zdb-card-policy.vue'
import type { PropType } from 'vue'
import { ref } from 'vue'

interface objType {
  id: string
}

const emit = defineEmits([''])
const props = defineProps({
  renderList: {
    type: Array as PropType<objType[]>,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped>
.query-result {
  width: 100%;
  flex: 1;
  overflow: auto;
  padding: 0 $spacing;
}
</style>
