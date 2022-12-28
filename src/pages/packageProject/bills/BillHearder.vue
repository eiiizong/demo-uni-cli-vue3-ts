<template>
  <view class="bill-header">
    <YhNavBar
      title="蓉易贷一本帐"
      background-color="transparent"
      color="#fff"
      left-arrow
      :border="false"
    ></YhNavBar>
    <div class="toolbar">
      <div class="key">当前截至累计:</div>
      <div class="tabs">
        <div
          class="tab"
          v-for="item in tabsData"
          :key="item.id"
          :class="item.id === tabId ? 'active' : ''"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="tab-content">
      <div class="cell" v-if="tabId === '01'">
        <div class="left">
          <div class="value">627.04</div>
          <div class="unit">亿元</div>
        </div>
        <div class="right">
          <div class="key">杠杆放大：</div>
          <div class="value">60</div>
          <div class="unit">倍</div>
        </div>
      </div>
      <div class="cell" v-if="tabId === '02'">
        <div class="left">
          <div class="value">
            <div class="val">627.04</div>
            <div class="unit">亿元</div>
          </div>
          <div class="desc">73模式</div>
        </div>
        <div class="right">
          <div class="value">
            <div class="val">627.04</div>
            <div class="unit">亿</div>
          </div>
          <div class="desc">442模式</div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import YhNavBar from '@/components/yh/nav-bar/nav-bar.vue'
import { ref, reactive, onMounted } from 'vue'

const tabId = ref('01')
const tabsData = ref([
  {
    id: '01',
    name: '信贷规模',
  },
  {
    id: '02',
    name: '信贷模式',
  },
])
</script>

<style lang="scss" scoped>
.bill-header {
  width: 100%;
  color: #fff;
  padding-top: 46rpx;
  .toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
