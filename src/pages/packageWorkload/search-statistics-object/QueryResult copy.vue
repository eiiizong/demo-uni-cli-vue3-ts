<template>
  <view class="query-result">
    <div v-if="isShowCurrentObject" class="wrapper">
      <ZdbTitle title="搜索结果" :space="false" />
      <div class="items">
        <div v-for="item in renderList" :key="item.userId" class="item">
          <CardItem :render-data="item" />
        </div>
      </div>
    </div>
    <div v-else class="wrapper">
      <ZdbTitle title="当前对象" :space="false" />
      <CardItem :render-data="workloadQueryInfo" show-link @clcik="emit('showPopup')" />
    </div>
  </view>
</template>

<script setup lang="ts">
  import ZdbTitle from '@/components/project/zdb-title/zdb-title.vue'
  import CardItem from './CardItem.vue'

  import type { PropType } from 'vue'
  import type { W014SuccessResultListItem } from '@/server/types/api'

  import { toRefs } from 'vue'
  import { useStoreWorkloadQueryInfo } from '@/stores/modules'

  const emit = defineEmits(['showPopup'])
  const props = defineProps({
    /**
     * 查询结果
     */
    renderList: {
      type: Array as PropType<W014SuccessResultListItem[]>,
      required: true
    }
  })

  const storeWorkloadQueryInfo = useStoreWorkloadQueryInfo()

  const { workloadQueryInfo } = toRefs(storeWorkloadQueryInfo)
</script>

<style lang="scss" scoped>
  .query-result {
    width: 100%;
    padding: 0 $spacing;
    .wrapper {
      .items {
        .item {
          margin-bottom: 20rpx;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
</style>
