<template>
  <view class="white-list-query">
    <QueryConditions v-model:model-value="keyword" />
    <QueryHistory :render-list="['234']" />
    <QueryResult v-model:model-value="keyword" />
  </view>
</template>

<script setup lang="ts">
  import QueryConditions from './QueryConditions.vue'
  import QueryHistory from './QueryHistory.vue'
  import QueryResult from './QueryResult.vue'

  import { reactive, ref } from 'vue'
  import { onLoad, onReachBottom } from '@dcloudio/uni-app'

  const keyword = ref('')

  const queryInfo = reactive({
    keyword: '',
    tabId: '0',
    pageNo: 1,
    pageSize: 10
  })

  const customData = reactive({
    tabsData: [
      {
        id: '0',
        name: '国家政策',
        num: 10
      },
      {
        id: '1',
        name: '省级政策',
        num: 10
      },
      {
        id: '2',
        name: '市级政策',
        num: 10
      }
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
        yab003_desc: '东兴区'
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
        yab003_desc: '东兴区'
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
        yab003_desc: '东兴区'
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
        yab003_desc: '东兴区'
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
        yab003_desc: '东兴区'
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
        yab003_desc: '东兴区'
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
        yab003_desc: '东兴区'
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
        yab003_desc: '东兴区'
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
        yab003_desc: '东兴区'
      }
    ],
    isRequestOver: false, // 是否请求完成 控制no-data组件在未请求完成时显示
    isLoadOver: false, // 是否加载完成
    isMultiplePages: false // 是否多页
  })

  const isFocus = ref(false)

  // 查询数据
  const queryData = () => {
    console.log('queryData')
  }

  // 加载更多数据
  const loadMoreData = () => {
    queryInfo.pageNo++
    queryData()
  }

  onLoad((e) => {
    if (e.focus) {
      isFocus.value = true
    }
  })

  // 页面上拉触底事件的处理函数 上拉加载更多
  onReachBottom(() => {
    const { isLoadOver } = customData
    if (isLoadOver) {
      return
    }
    loadMoreData()
  })
</script>

<style lang="scss" scoped>
  .white-list-query {
    width: 100%;
  }
</style>
