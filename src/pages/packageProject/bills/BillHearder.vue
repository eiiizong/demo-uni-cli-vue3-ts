<template>
  <view class="bill-header">
    <YhNavBar title="蓉易贷一本帐" :background-color="backgorundColor" :color="color" left-arrow :border="false" />
    <div class="toolbar">
      <div class="key">当前截至累计:</div>
      <div class="tabs">
        <div
          v-for="item in tabsData"
          :key="item.id"
          class="tab"
          :class="item.id === tabId ? 'active' : ''"
          @click="tabId = item.id">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="tab-content">
      <div v-if="tabId === '01'" class="cell">
        <div class="left">
          <div class="value Impact">{{ renderData.totalmoney }}</div>
          <div class="unit">亿元</div>
        </div>
        <div class="right">
          <div class="key">杠杆放大：</div>
          <div class="value Impact">60</div>
          <div class="unit">倍</div>
        </div>
      </div>
      <div v-if="tabId === '02'" class="cell cell-02">
        <div class="left">
          <div class="value">
            <div class="val Impact">{{ renderData.money73 }}</div>
            <div class="unit">亿元</div>
          </div>
          <div class="desc">73模式</div>
        </div>
        <div class="right">
          <div class="value">
            <div class="val Impact">{{ renderData.money442 }}</div>
            <div class="unit">亿元</div>
          </div>
          <div class="desc">442模式</div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import YhNavBar from '@/components/yh/nav-bar/nav-bar.vue'
  import { ref } from 'vue'

  import type { PropType } from 'vue'
  import type { W006SuccessResult } from '@/server/types/api'

  const props = defineProps({
    /**
     * 渲染数据
     */
    renderData: {
      type: Object as PropType<W006SuccessResult>,
      required: true
    },
    /**
     * 导航栏背景色
     */
    backgorundColor: {
      type: String,
      required: true
    },
    /**
     * 导航栏文本颜色
     */
    color: {
      type: String,
      required: true
    }
  })

  const tabsData = ref([
    {
      id: '01',
      name: '信贷规模'
    },
    {
      id: '02',
      name: '信贷模式'
    }
  ])

  const tabId = ref('01')
</script>

<style lang="scss" scoped>
  .bill-header {
    width: 100%;
    color: #fff;
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 $spacing;
      padding-top: 46rpx;
      font-size: 32rpx;
      color: #fff;
      line-height: 1;
      .tabs {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .tab {
          line-height: 54rpx;
          border: 1px solid #fff;
          border-top-left-radius: 90px;
          border-bottom-left-radius: 90px;
          padding: 0 14rpx;
          font-size: 28rpx;
          background-color: rgba(255, 255, 255, 0.13);
          transition: all 0.3s;
          &:last-child {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: 90px;
            border-bottom-right-radius: 90px;
            border-left: 0;
          }
          &.active {
            background-color: transparent;
            color: #a3e1ff;
            border-color: #a3e1ff;
          }
        }
      }
    }
    .tab-content {
      width: 100%;
      padding: 0 $spacing;
      .cell {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 156rpx;
        .left {
          display: flex;
          align-items: center;
          font-size: 82rpx;
          font-size: 72rpx;
          line-height: 1;
          font-weight: 700;
          .unit {
            font-size: 38rpx;
            font-weight: 400;
          }
        }
        .right {
          display: flex;
          align-items: center;
          font-size: 28rpx;
          line-height: 1;
          color: rgba(255, 255, 255, 0.8);
          .value {
            font-size: 52rpx;
          }
        }
        &.cell-02 {
          .right,
          .left {
            line-height: 1;
            flex-direction: column;
            color: #fff;
            justify-content: flex-start;
            align-items: flex-start;
            .value {
              display: flex;
              align-items: center;
              font-size: 70rpx;
              .val {
                font-weight: 700;
              }
              .unit {
                font-size: 32rpx;
              }
            }
            .desc {
              font-size: 28rpx;
              line-height: 1;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.8);
              padding-top: 8rpx;
            }
          }
        }
      }
    }
  }
</style>
