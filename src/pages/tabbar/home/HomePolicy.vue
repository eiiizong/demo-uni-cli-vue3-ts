<template>
  <view class="home-policy">
    <div class="tabs">
      <div
        v-for="item in tabs"
        :key="item.id"
        class="tab"
        :class="currentTabId === item.id ? 'active' : ''"
        @click="onClickTab(item.id)">
        {{ item.name }}
      </div>
    </div>
    <div class="query-result">
      <div class="items">
        <div v-for="item in renderList" :key="item.code" class="item">
          <ZdbCardPolicy :render-data="item" />
        </div>
      </div>
      <div v-if="renderList.length > 3" class="button-wrapper">
        <YhButton type="primary" block @click="onClickButton">查看更多</YhButton>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import YhButton from '@/components/yh/button/button.vue'
  import ZdbCardPolicy from '@/components/project/zdb-card-policy/zdb-card-policy.vue'

  import type { PropType } from 'vue'
  import { W017SuccessResultListItem } from '@/server/types/api'

  import { ref } from 'vue'
  import { navigateTo } from '@/utils/uni-api'

  const props = defineProps({
    renderList: {
      type: Array as PropType<W017SuccessResultListItem[]>,
      required: true
    }
  })

  const currentTabId = ref('0')
  const tabs = ref([
    {
      id: '0',
      name: '业务进展'
    },
    {
      id: '1',
      name: '机构动态'
    },
    {
      id: '2',
      name: '业务聚焦'
    },
    {
      id: '3',
      name: '政策解读'
    }
  ])

  const onClickTab = (id: string) => {
    currentTabId.value = id
  }

  const onClickButton = () => {
    navigateTo('policy-query', 'packageQuery')
  }
</script>

<style lang="scss" scoped>
  .home-policy {
    width: 100%;
    background-color: $color-page;
    padding-bottom: $spacing;
    padding: 0 $spacing;
    .tabs {
      display: flex;
      align-items: center;

      .tab {
        font-size: 32rpx;
        line-height: 100rpx;
        color: #333;
        margin-right: $spacing;
        transition: all 0.3s;
        &:last-child {
          margin-right: 0;
        }
        &.active {
          color: $color-primary;
          font-weight: 700;
        }
      }
    }
    .query-result {
      .items {
        .item {
          margin-bottom: 14rpx;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .button-wrapper {
        padding: $spacing;
      }
    }
  }
</style>
