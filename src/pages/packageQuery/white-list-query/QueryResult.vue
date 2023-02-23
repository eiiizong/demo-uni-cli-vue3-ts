<template>
  <div class="query-result-wrapper">
    <view class="query-result" :class="renderList.length > 0 ? 'data' : ''">
      <div v-if="renderList.length > 0" class="items">
        <div v-for="item in renderList" :key="item.crb110" class="item">
          <CardItem :render-data="item" />
        </div>
      </div>
      <template v-else>
        <ZdbNoData v-if="isRequestOver" tip="暂未搜索到相关数据" />
      </template>
      <div v-if="isMultiplePages" class="load-more-wrapper">
        <ZdbLoadMore :is-load-over="isLoadOver" @load-more="emit('loadMore')" />
      </div>
    </view>
  </div>
</template>

<script setup lang="ts">
  import ZdbNoData from '@/components/project/zdb-no-data/zdb-no-data.vue'
  import ZdbLoadMore from '@/components/project/zdb-load-more/zdb-load-more.vue'

  import CardItem from './CardItem.vue'

  import type { PropType } from 'vue'
  import type { W011SuccessResultListItem } from '@/server/types/api'

  const emit = defineEmits(['loadMore'])
  const props = defineProps({
    /**
     * 渲染数据
     */
    renderList: {
      type: Array as PropType<W011SuccessResultListItem[]>,
      required: true
    },
    isRequestOver: {
      type: Boolean,
      required: true
    },
    isMultiplePages: {
      type: Boolean,
      required: true
    },
    isLoadOver: {
      type: Boolean,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .query-result {
    width: 100%;
    padding: $spacing;
    // 有数据才显示背景色
    &.data {
      background-color: #fff;
      border-top: 1px solid $color-border;
    }
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
