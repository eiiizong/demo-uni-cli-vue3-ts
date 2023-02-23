<template>
  <view class="query-result">
    <div v-if="renderList.length > 0" class="items">
      <div v-for="(item, index) in renderList" :key="index" class="item">
        <CardItem :render-data="item" :index="index" />
      </div>
    </div>
    <template v-else>
      <ZdbNoData v-if="isRequestOver" tip="暂未查询到相关数据" />
    </template>
  </view>
</template>

<script setup lang="ts">
  import ZdbNoData from '@/components/project/zdb-no-data/zdb-no-data.vue'

  import CardItem from './CardItem.vue'

  import type { PropType } from 'vue'
  import type { W013SuccessResultListItem } from '@/server/types/api'

  const props = defineProps({
    /**
     * 渲染数据
     */
    renderList: {
      type: Array as PropType<W013SuccessResultListItem[]>,
      required: true
    },
    isRequestOver: {
      type: Boolean,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .query-result {
    width: 100%;
    padding: 24rpx $spacing;
    .items {
      width: 100%;
      .item {
        margin-bottom: 24rpx;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
