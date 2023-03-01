<template>
  <view v-if="isRequestOver" class="query-result">
    <ZdbTitle :title="'搜索结果(' + renderList.length + ')'" :space="false" />
    <div v-if="renderList.length > 0" class="items">
      <div v-for="(item, index) in renderList" :key="item.userid" class="item">
        <CardItem :render-data="item" @clcik="onClickSelectObj(index)" />
      </div>
    </div>
    <template v-else>
      <ZdbNoData tip="暂未搜索到相关数据" />
    </template>
  </view>
</template>

<script setup lang="ts">
  import ZdbNoData from '@/components/project/zdb-no-data/zdb-no-data.vue'
  import ZdbTitle from '@/components/project/zdb-title/zdb-title.vue'

  import CardItem from './CardItem.vue'

  import type { PropType } from 'vue'
  import type { W014SuccessResultListItem } from '@/server/types/api'

  const emit = defineEmits(['select'])
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

  // 选择所属结果中的某个对象
  const onClickSelectObj = (index: number) => {
    const { renderList } = props
    const data = renderList[index]
    emit('select', data)
  }
</script>

<style lang="scss" scoped>
  .query-result {
    width: 100%;
    padding: 0 $spacing $spacing;

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
