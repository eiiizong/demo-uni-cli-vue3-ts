<template>
  <view class="tabs-wrapper">
    <div class="tabs">
      <div
        v-for="item in tabsData"
        :key="item.id"
        class="tab"
        :class="activeTabId === item.id ? 'active' : ''"
        @click="activeTabId = item.id">
        {{ item.name }}
      </div>
      <div class="mark" :style="markStyle"></div>
    </div>
    <div class="tab-content">
      <TabBusinessSituation v-if="activeTabId === 1" />
      <TabSubsidies v-if="activeTabId === 2" />
      <TabCompensation v-if="activeTabId === 3" />
    </div>
  </view>
</template>

<script setup lang="ts">
  import TabBusinessSituation from './TabBusinessSituation.vue'
  import TabSubsidies from './TabSubsidies.vue'
  import TabCompensation from './TabCompensation.vue'

  import { ref, reactive, computed } from 'vue'

  const tabsData = ref([
    { id: 1, name: '业务情况' },
    { id: 2, name: '补贴情况' },
    { id: 3, name: '补偿情况' }
  ])

  const activeTabId = ref(2)

  const markStyle = computed(() => {
    let str = ''
    str += `left: ${(750 / 3) * (activeTabId.value - 1) + 750 / 3 / 2 - 40}rpx; `
    return str
  })
</script>

<style lang="scss" scoped>
  .tabs-wrapper {
    width: 100%;
    background-color: #fff;
    margin-top: 16rpx;
    padding-top: 14rpx;
    .tabs {
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;
      padding: 20rpx 0;
      border-bottom: 1px solid $color-border;
      .tab {
        width: 33.3333%;
        text-align: center;
        font-size: 32rpx;
        color: #000;
        transition: all 0.3s;
        line-height: 50rpx;
        &.active {
          color: $primary;
        }
      }
      .mark {
        left: 84rpx;
        bottom: -1px;
        position: absolute;
        width: 80rpx;
        height: 6rpx;
        background-color: $primary;
        border-radius: 4px;
        transition: all 0.3s;
      }
    }
  }
</style>
