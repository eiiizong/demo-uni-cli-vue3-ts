<template>
  <view class="home-popular-services">
    <QueryCriteria v-model="queryInfo.keyword" @confirm="handleSearch"></QueryCriteria>
    <Tabs v-model="queryInfo.tabId" :renderList="customData.tabsData"></Tabs>
    <QueryResult class="query-result-wrapper"></QueryResult>
  </view>
</template>

<script setup lang="ts">
import QueryCriteria from './QueryCriteria.vue'
import Tabs from './Tabs.vue'
import QueryResult from './QueryResult.vue'

import { reactive } from 'vue'

const queryInfo = reactive({
  keyword: '',
  tabId: '0',
})

const customData = reactive({
  tabsData: [
    {
      id: '0',
      name: '国家政策',
      num: 10,
    },
    {
      id: '1',
      name: '省级政策',
      num: 10,
    },
    {
      id: '2',
      name: '市级政策',
      num: 10,
    },
  ],
  // 查询结果
  queryResultList: [],
})

// 搜索
const handleSearch = () => {
  console.log(queryInfo.keyword, '===keyword===')
}
</script>

<style lang="scss" scoped>
.home-popular-services {
  width: 100%;
  height: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  .query-result-wrapper {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
}
</style>
