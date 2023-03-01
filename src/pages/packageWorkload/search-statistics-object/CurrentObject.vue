<template>
  <view class="current-object">
    <ZdbTitle title="当前对象" :space="false" />
    <CardItem :render-data="currentObject" show-link @clcik="emit('showPopup')" />
  </view>
</template>

<script setup lang="ts">
  import ZdbTitle from '@/components/project/zdb-title/zdb-title.vue'
  import CardItem from './CardItem.vue'

  import type { PropType } from 'vue'
  import type { W014SuccessResultListItem } from '@/server/types/api'

  const emit = defineEmits(['showPopup'])
  const props = defineProps({
    /**
     * 当前统计对象信息
     */
    currentObject: {
      type: Object as PropType<W014SuccessResultListItem>,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .current-object {
    width: 100%;
    padding: 0 $spacing;
  }
</style>
