<template>
  <view class="home-popular-services">
    <QueryCriteria v-model="queryInfo.keyword" @confirm="handleSearch"></QueryCriteria>
    <Tabs v-model="queryInfo.tabId" :renderList="customData.tabsData"></Tabs>
    <QueryResult
      class="query-result-wrapper"
      :renderList="customData.queryResultList"
    ></QueryResult>
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
  queryResultList: [
    {
      chi031: '28',
      chi037: '6',
      chi037_desc: '卫生健康局',
      chi050: '10307',
      chi051:
        '计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助标准的通知标准的通知',
      chi052: '2019-03-06',
      chi053: '115485',
      chi054: '',
      myrownum: '1',
      yab003: '511011',
      yab003_desc: '东兴区',
    },
    {
      chi031: '28',
      chi037: '6',
      chi037_desc: '卫生健康局',
      chi050: '10307',
      chi051: '计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助标准的通知',
      chi052: '2019-03-06 15:23:11.0',
      chi053: '115485',
      chi054: '',
      myrownum: '1',
      yab003: '511011',
      yab003_desc: '东兴区',
    },
    {
      chi031: '28',
      chi037: '6',
      chi037_desc: '卫生健康局',
      chi050: '10307',
      chi051: '计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助标准的通知',
      chi052: '2019-03-06 15:23:11.0',
      chi053: '115485',
      chi054: '',
      myrownum: '1',
      yab003: '511011',
      yab003_desc: '东兴区',
    },
    {
      chi031: '28',
      chi037: '6',
      chi037_desc: '卫生健康局',
      chi050: '10307',
      chi051:
        '计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助标准的通知标准的通知',
      chi052: '2019-03-06',
      chi053: '115485',
      chi054: '',
      myrownum: '1',
      yab003: '511011',
      yab003_desc: '东兴区',
    },
    {
      chi031: '28',
      chi037: '6',
      chi037_desc: '卫生健康局',
      chi050: '10307',
      chi051: '计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助标准的通知',
      chi052: '2019-03-06 15:23:11.0',
      chi053: '115485',
      chi054: '',
      myrownum: '1',
      yab003: '511011',
      yab003_desc: '东兴区',
    },
    {
      chi031: '28',
      chi037: '6',
      chi037_desc: '卫生健康局',
      chi050: '10307',
      chi051: '计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助标准的通知',
      chi052: '2019-03-06 15:23:11.0',
      chi053: '115485',
      chi054: '',
      myrownum: '1',
      yab003: '511011',
      yab003_desc: '东兴区',
    },
    {
      chi031: '28',
      chi037: '6',
      chi037_desc: '卫生健康局',
      chi050: '10307',
      chi051:
        '计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助标准的通知标准的通知',
      chi052: '2019-03-06',
      chi053: '115485',
      chi054: '',
      myrownum: '1',
      yab003: '511011',
      yab003_desc: '东兴区',
    },
    {
      chi031: '28',
      chi037: '6',
      chi037_desc: '卫生健康局',
      chi050: '10307',
      chi051: '计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助标准的通知',
      chi052: '2019-03-06 15:23:11.0',
      chi053: '115485',
      chi054: '',
      myrownum: '1',
      yab003: '511011',
      yab003_desc: '东兴区',
    },
    {
      chi031: '28',
      chi037: '6',
      chi037_desc: '卫生健康局',
      chi050: '10307',
      chi051: '计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助标准的通知',
      chi052: '2019-03-06 15:23:11.0',
      chi053: '115485',
      chi054: '',
      myrownum: '1',
      yab003: '511011',
      yab003_desc: '东兴区',
    },
  ],
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
