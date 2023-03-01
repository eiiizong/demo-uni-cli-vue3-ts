<template>
  <div class="query-result-wrapper">
    <view class="query-result" :class="renderList.length > 0 ? 'data' : ''">
      <ZdbTitle title="搜索结果" :space="false" />
      <div v-if="renderList.length > 0" class="items">
        <div v-for="(item, index) in renderList" :key="item.userid || index" class="item">
          <CardItem :render-data="item" />
        </div>
      </div>
      <template v-else>
        <ZdbNoData v-if="isRequestOver" tip="暂未搜索到相关数据" />
      </template>
    </view>
  </div>
</template>

<script setup lang="ts">
  import ZdbNoData from '@/components/project/zdb-no-data/zdb-no-data.vue'
  import ZdbTitle from '@/components/project/zdb-title/zdb-title.vue'

  import CardItem from './CardItem.vue'

  import type { PropType } from 'vue'
  import type { W014SuccessResultListItem } from '@/server/types/api'

  const emit = defineEmits(['loadMore'])
  const props = defineProps({
    /**
     * 渲染数据
     */
    renderList: {
      type: Array as PropType<W014SuccessResultListItem[]>,
      default: () => []
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
    padding: $spacing;
    // 有数据才显示背景色
    // &.data {
    //   background-color: #fff;
    //   border-top: 1px solid $color-border;
    // }
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
