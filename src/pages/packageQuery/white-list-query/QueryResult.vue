<template>
  <view class="query-result">
    <div class="items">
      <div v-for="item in renderList" :key="item.id" class="item">
        <CardItem :render-data="item" />
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import CardItem from './CardItem.vue'

  import type { PropType } from 'vue'
  import type { W011SuccessResultListItem } from '@/server/types/api'

  import moment from 'moment'

  const emit = defineEmits([''])
  const props = defineProps({
    renderList: {
      type: Array as PropType<W011SuccessResultListItem[]>,
      default: () => []
    }
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
